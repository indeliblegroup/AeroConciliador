# AeroConciliador

App React/Vite com backend próprio em Node/Express + SQLite para contato, demonstração, registro de casos e upload de documentos.

## Requisitos
- Node 18+ (recomendado)

## Variáveis de ambiente (crie `.env.local`)
```
PORT=4000
DB_PATH=./data.db
UPLOAD_DIR=./uploads
CORS_ORIGIN=http://localhost:5173
PUBLIC_URL=http://localhost:4000
VITE_API_BASE=http://localhost:4000
# DB: mysql (default) ou sqlite
DB_CLIENT=mysql
# Para MySQL (exemplo Railway)
DB_URL=mysql://user:pass@host:port/dbname
# ou definir manualmente:
# DB_HOST=
# DB_PORT=3306
# DB_USER=
# DB_PASSWORD=
# DB_NAME=
# DB_SSL=true
# Email (opcional)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_SECURE=true
SMTP_FROM=info@indelible-group.com
NOTIFY_EMAIL=info@indelible-group.com
```

## Rodar local
```bash
npm install
npm run start:server   # inicia backend (porta 4000)
npm run dev            # inicia frontend (porta 5173)
```

## Endpoints
- `POST /api/contact` — formulário de contato
- `POST /api/airline-demo` — pedido de demo para companhias
- `POST /api/passenger-case` — registro de caso de passageiro
- `POST /api/analyze-case` — análise rápida (heurística)
- `POST /api/upload` — upload de arquivos (até 10MB, PDF/JPG/PNG/DOC)

Uploads ficam em `UPLOAD_DIR` e são servidos em `/uploads/...`. O SQLite é criado em `DB_PATH`.

## Branches sugeridos
- `dev`: local; `.env.local` com URLs localhost.
- `qa`: staging (Vercel + Railway) com `VITE_API_BASE` apontando para backend de staging.
- `main`: produção (Vercel + Railway prod) com secrets próprios.

## Deploy Railway (backend)
- Command: `node server/index.js`
- Vars:
  - `PORT=8080` (padrão Railway)
  - `DB_CLIENT=mysql`
  - `DB_URL` (string da instância MySQL do Railway)
  - `CORS_ORIGIN` (origens permitidas, ex.: `https://staging-front.vercel.app`)
  - `PUBLIC_URL` (URL pública do backend, ex.: `https://<railway-app>.up.railway.app`)
  - `UPLOAD_DIR=/data/uploads` (volume montado)
- Montar volume: `/data` (ex.: 5–10GB). O app cria `UPLOAD_DIR` se não existir.
- Testar após deploy:
  - `POST /api/contact`
  - `POST /api/airline-demo`
  - `POST /api/passenger-case`
  - `POST /api/analyze-case`
  - `POST /api/upload` (PDF/JPG/PNG/DOC ≤ 10MB)

## Frontend (Vercel)
- `VITE_API_BASE=https://<backend-staging-ou-prod>`
- Demais builds: `npm run build` (Vite).
- `vercel.json` inclui rewrite SPA; se 404 em rotas diretas, redeploy.
 - Se for usar SMTP, configure as variáveis acima (emails enviados para `NOTIFY_EMAIL`).

## Docker local (equivalente Railway)
```bash
docker build -t aeroconciliador .
docker run --rm -p 8080:8080 \
  -e DB_CLIENT=sqlite \
  -e UPLOAD_DIR=/data/uploads \
  -v $(pwd)/uploads:/data/uploads \
  aeroconciliador
```

## Smoke test (pós-deploy ou local)
```bash
API_BASE=http://localhost:8080 ./scripts/smoke.sh
```

## Uploads em Railway
- Volume recomendado (single replica): monte em `/data` e use `UPLOAD_DIR=/data/uploads`.
- Escala/horizontal: considerar storage externo (S3/GCS) para persistência entre réplicas e rollbacks.
