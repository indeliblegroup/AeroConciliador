import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(',').map((o) => o.trim()).filter(Boolean) || ['*'];
const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
const DB_CLIENT = (process.env.DB_CLIENT || 'sqlite').toLowerCase();
const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), 'data.db');
const DB_URL = process.env.DB_URL || process.env.MYSQL_URL || process.env.MYSQL_PUBLIC_URL;
const DB_HOST = process.env.DB_HOST || process.env.MYSQLHOST;
const DB_PORT = process.env.DB_PORT || process.env.MYSQLPORT;
const DB_USER = process.env.DB_USER || process.env.MYSQLUSER;
const DB_PASSWORD = process.env.DB_PASSWORD || process.env.MYSQLPASSWORD;
const DB_NAME = process.env.DB_NAME || process.env.MYSQL_DATABASE || process.env.MYSQLDATABASE;
const DB_SSL = process.env.DB_SSL ?? 'true';

// Ensure upload directory exists
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const createSqliteClient = async () => {
  const { default: Database } = await import('better-sqlite3');
  const sqlite = new Database(DB_PATH);
  sqlite.pragma('journal_mode = WAL');
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS demo_requests (
      id TEXT PRIMARY KEY,
      contact_name TEXT NOT NULL,
      contact_email TEXT NOT NULL,
      contact_phone TEXT,
      airline_name TEXT NOT NULL,
      position TEXT NOT NULL,
      company_size TEXT,
      current_case_volume TEXT,
      main_challenges TEXT,
      preferred_date TEXT,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS passenger_cases (
      id TEXT PRIMARY KEY,
      case_number TEXT NOT NULL,
      passenger_name TEXT NOT NULL,
      passenger_email TEXT NOT NULL,
      passenger_phone TEXT,
      airline TEXT NOT NULL,
      flight_number TEXT,
      flight_date TEXT,
      issue_type TEXT NOT NULL,
      description TEXT NOT NULL,
      document_urls TEXT,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);

  const insertContact = sqlite.prepare(`
    INSERT INTO contact_submissions (id, name, email, company, phone, subject, message, created_at)
    VALUES (@id, @name, @email, @company, @phone, @subject, @message, @created_at)
  `);

  const insertDemo = sqlite.prepare(`
    INSERT INTO demo_requests (id, contact_name, contact_email, contact_phone, airline_name, position, company_size, current_case_volume, main_challenges, preferred_date, status, created_at)
    VALUES (@id, @contact_name, @contact_email, @contact_phone, @airline_name, @position, @company_size, @current_case_volume, @main_challenges, @preferred_date, @status, @created_at)
  `);

  const insertPassengerCase = sqlite.prepare(`
    INSERT INTO passenger_cases (id, case_number, passenger_name, passenger_email, passenger_phone, airline, flight_number, flight_date, issue_type, description, document_urls, status, created_at)
    VALUES (@id, @case_number, @passenger_name, @passenger_email, @passenger_phone, @airline, @flight_number, @flight_date, @issue_type, @description, @document_urls, @status, @created_at)
  `);

  return {
    kind: 'sqlite',
    insertContact: (record) => insertContact.run(record),
    insertDemo: (record) => insertDemo.run(record),
    insertPassenger: (record) => insertPassengerCase.run(record),
  };
};

const createMysqlClient = async () => {
  const mysql = await import('mysql2/promise');
  const connectionOptions = DB_URL
    ? DB_URL
    : {
        host: DB_HOST || 'localhost',
        port: Number(DB_PORT || 3306),
        user: DB_USER || 'root',
        password: DB_PASSWORD || '',
        database: DB_NAME || 'test',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        ssl: DB_SSL === 'false' ? undefined : { rejectUnauthorized: false },
      };

  const pool = mysql.createPool(connectionOptions);

  const createTables = [
    `CREATE TABLE IF NOT EXISTS contact_submissions (
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      phone VARCHAR(64),
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS demo_requests (
      id VARCHAR(64) PRIMARY KEY,
      contact_name VARCHAR(255) NOT NULL,
      contact_email VARCHAR(255) NOT NULL,
      contact_phone VARCHAR(64),
      airline_name VARCHAR(255) NOT NULL,
      position VARCHAR(255) NOT NULL,
      company_size VARCHAR(255),
      current_case_volume VARCHAR(255),
      main_challenges TEXT,
      preferred_date VARCHAR(64),
      status VARCHAR(64) NOT NULL,
      created_at DATETIME NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS passenger_cases (
      id VARCHAR(64) PRIMARY KEY,
      case_number VARCHAR(64) NOT NULL,
      passenger_name VARCHAR(255) NOT NULL,
      passenger_email VARCHAR(255) NOT NULL,
      passenger_phone VARCHAR(64),
      airline VARCHAR(255) NOT NULL,
      flight_number VARCHAR(64),
      flight_date VARCHAR(64),
      issue_type VARCHAR(64) NOT NULL,
      description TEXT NOT NULL,
      document_urls TEXT,
      status VARCHAR(64) NOT NULL,
      created_at DATETIME NOT NULL
    )`,
  ];

  for (const statement of createTables) {
    await pool.query(statement);
  }

  return {
    kind: 'mysql',
    pool,
    insertContact: async (record) => {
      await pool.query(
        `INSERT INTO contact_submissions (id, name, email, company, phone, subject, message, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          record.id,
          record.name,
          record.email,
          record.company,
          record.phone,
          record.subject,
          record.message,
          record.created_at,
        ]
      );
    },
    insertDemo: async (record) => {
      await pool.query(
        `INSERT INTO demo_requests (id, contact_name, contact_email, contact_phone, airline_name, position, company_size, current_case_volume, main_challenges, preferred_date, status, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          record.id,
          record.contact_name,
          record.contact_email,
          record.contact_phone,
          record.airline_name,
          record.position,
          record.company_size,
          record.current_case_volume,
          record.main_challenges,
          record.preferred_date,
          record.status,
          record.created_at,
        ]
      );
    },
    insertPassenger: async (record) => {
      await pool.query(
        `INSERT INTO passenger_cases (id, case_number, passenger_name, passenger_email, passenger_phone, airline, flight_number, flight_date, issue_type, description, document_urls, status, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          record.id,
          record.case_number,
          record.passenger_name,
          record.passenger_email,
          record.passenger_phone,
          record.airline,
          record.flight_number,
          record.flight_date,
          record.issue_type,
          record.description,
          record.document_urls,
          record.status,
          record.created_at,
        ]
      );
    },
  };
};

const db = DB_CLIENT === 'mysql'
  ? await createMysqlClient()
  : await createSqliteClient();

const app = express();
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: '5mb' }));
app.use('/uploads', express.static(UPLOAD_DIR));

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const unique = crypto.randomUUID();
    const ext = path.extname(file.originalname) || '';
    cb(null, `${unique}${ext}`);
  },
});

const allowedMime = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/jpg',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!allowedMime.has(file.mimetype)) {
      return cb(new Error('Tipo de arquivo não permitido'));
    }
    cb(null, true);
  },
});

const validateRequired = (payload, required) => {
  const missing = required.filter((field) => !payload[field]);
  if (missing.length) {
    const err = new Error(`Campos obrigatórios faltando: ${missing.join(', ')}`);
    err.status = 400;
    throw err;
  }
};

const nowDateTime = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

app.get('/health', (_req, res) => {
  res.json({ ok: true, db: db.kind, time: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, subject, message } = req.body || {};
    validateRequired({ name, email, subject, message }, ['name', 'email', 'subject', 'message']);

    const record = {
      id: crypto.randomUUID(),
      name,
      email,
      company: company || null,
      phone: phone || null,
      subject,
      message,
      created_at: nowDateTime(),
    };
    await db.insertContact(record);
    res.json({ success: true, message: 'Mensagem enviada com sucesso', id: record.id });
  } catch (error) {
    console.error('contact error', error);
    res.status(error.status || 500).json({ error: error.message || 'Erro interno' });
  }
});

app.post('/api/airline-demo', async (req, res) => {
  try {
    const {
      contactName,
      contactEmail,
      contactPhone,
      airlineName,
      position,
      companySize,
      currentCaseVolume,
      mainChallenges,
      preferredDate,
    } = req.body || {};

    validateRequired({ contactName, contactEmail, airlineName, position }, ['contactName', 'contactEmail', 'airlineName', 'position']);

    const record = {
      id: crypto.randomUUID(),
      contact_name: contactName,
      contact_email: contactEmail,
      contact_phone: contactPhone || null,
      airline_name: airlineName,
      position,
      company_size: companySize || null,
      current_case_volume: currentCaseVolume || null,
      main_challenges: mainChallenges || null,
      preferred_date: preferredDate || null,
      status: 'pendente',
      created_at: nowDateTime(),
    };
    await db.insertDemo(record);
    res.json({ success: true, demoId: record.id, message: 'Solicitação de demonstração enviada com sucesso' });
  } catch (error) {
    console.error('airline demo error', error);
    res.status(error.status || 500).json({ error: error.message || 'Erro interno' });
  }
});

app.post('/api/passenger-case', async (req, res) => {
  try {
    const {
      passengerName,
      passengerEmail,
      passengerPhone,
      airline,
      flightNumber,
      flightDate,
      issueType,
      description,
      documentUrls,
    } = req.body || {};

    validateRequired({ passengerName, passengerEmail, airline, issueType, description }, ['passengerName', 'passengerEmail', 'airline', 'issueType', 'description']);

    const caseNumber = `AERO-${Date.now()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const record = {
      id: crypto.randomUUID(),
      case_number: caseNumber,
      passenger_name: passengerName,
      passenger_email: passengerEmail,
      passenger_phone: passengerPhone || null,
      airline,
      flight_number: flightNumber || null,
      flight_date: flightDate || null,
      issue_type: issueType,
      description,
      document_urls: JSON.stringify(documentUrls || []),
      status: 'registrado',
      created_at: nowDateTime(),
    };
    await db.insertPassenger(record);
    res.json({ success: true, caseNumber });
  } catch (error) {
    console.error('passenger case error', error);
    res.status(error.status || 500).json({ error: error.message || 'Erro interno' });
  }
});

app.post('/api/analyze-case', (req, res) => {
  try {
    const { issueType, airline, description, flightDelay, bagageIssue, cancellation } = req.body || {};
    validateRequired({ issueType, description }, ['issueType', 'description']);

    const urgency = ['cancelamento', 'preterição', 'bagagem'].some((k) => (issueType || '').toLowerCase().includes(k)) ? 'alta' : 'média';
    const settlementProbability = Math.min(95, 60 + Math.floor(Math.random() * 30));
    const suggestedValue = (() => {
      if (flightDelay && Number(flightDelay) >= 4) return 2500 + Math.floor(Math.random() * 800);
      if (cancellation) return 3000 + Math.floor(Math.random() * 1000);
      return 1500 + Math.floor(Math.random() * 500);
    })();

    const response = {
      urgency,
      settlementProbability,
      suggestedValue,
      legalBasis: 'Resolução ANAC 400/2016 e CDC',
      estimatedDays: urgency === 'alta' ? 7 : 15,
      negotiationPoints: [
        'Compensação financeira proporcional ao dano',
        'Reembolso ou reacomodação imediata',
        'Comunicação clara e assistência material',
      ],
    };

    res.json({ success: true, analysis: response, airline: airline || null, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('analyze case error', error);
    res.status(error.status || 500).json({ error: error.message || 'Erro interno' });
  }
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Arquivo não fornecido' });
    }
    const fileUrl = `${process.env.PUBLIC_URL || ''}/uploads/${req.file.filename}`;
    res.json({
      success: true,
      fileUrl,
      fileName: req.file.originalname,
      fileSize: req.file.size,
      fileType: req.file.mimetype,
      caseId: req.body?.caseId || null,
    });
  } catch (error) {
    console.error('upload error', error);
    res.status(error.status || 500).json({ error: error.message || 'Erro interno' });
  }
});

app.use((err, _req, res, _next) => {
  console.error('Unexpected error', err);
  res.status(500).json({ error: 'Erro interno' });
});

console.log(`Inicializando API com DB_CLIENT=${DB_CLIENT}...`);
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});

