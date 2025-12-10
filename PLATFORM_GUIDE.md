# AeroConciliador Brasil – Platform Guide (Atualizado)

## Visão Geral
Plataforma especializada de conciliação aéreo-consumerista no Brasil, conectando companhias aéreas e passageiros para reduzir litígios, acelerar acordos e preservar relacionamentos. Frontend em React/Vite/Tailwind (Vercel) e backend próprio em Node/Express com MySQL (Railway) e uploads em volume.

---

## Missão, Visão e Valores
- **Missão**: Tornar a conciliação aérea rápida, justa e eficiente, transformando conflito em vantagem competitiva.
- **Visão**: Liderar resolução de conflitos aéreos no Brasil, reduzindo custos e prazos (dias em vez de anos).
- **Valores**: Neutralidade, transparência, eficiência, compliance regulatório, inovação.

---

## Públicos
1) **Companhias Aéreas (receita)**  
   - Dores: volume crescente de processos, custos jurídicos, lentidão judicial, risco reputacional.  
   - Benefícios: redução de litígios, resolução média em dias, integrações (SAC/Consumidor.gov/CEJUSC), dashboard executivo (futuro), compliance ANAC/CDC/CBA.

2) **Passageiros (gratuito)**  
   - Dores: burocracia, custo jurídico, desconhecimento de direitos, falta de resposta.  
   - Benefícios: serviço sem custo, fluxo simples online, resposta rápida, atendimento humanizado, transparência de status.

---

## Funcionalidades Atuais
- Formulário de contato → `/api/contact`.
- Solicitação de demonstração (companhias) → `/api/airline-demo`.
- Registro de caso de passageiro (com upload) → `/api/passenger-case` + `/api/upload`.
- Análise rápida heurística → `/api/analyze-case`.
- Uploads: limite 10 MB, tipos PDF/JPG/PNG/DOC, armazenados em volume Railway (`/data/uploads`).
- Healthcheck: `/health`.

### Casos atendidos
Atraso 4h+, cancelamento, overbooking, bagagem (extravio/dano/atraso), reembolso, downgrade, outros.

### Fluxo Passageiro
1) Registrar caso.  
2) Enviar documentos.  
3) Receber proposta.  
4) Concluir acordo.

### Fluxo Companhia
1) Parametrização (regras, limites) — futuro.  
2) Integração SAC/ombudsman/Consumidor.gov — futuro.  
3) Treinamento — futuro.  
4) Gestão contínua — futuro.

---

## Arquitetura Técnica
### Frontend
- React 18, Vite, Tailwind, Framer Motion, React Router.
- Hospedagem: Vercel.
- Rewrites SPA via `vercel.json`.

### Backend
- Node.js/Express.  
- Banco: MySQL (Railway) em produção e QA; SQLite local para dev.  
- Uploads: volume Railway montado em `/data/uploads`.  
- CORS configurado por ambiente.  
- Endpoints principais: `/api/contact`, `/api/airline-demo`, `/api/passenger-case`, `/api/upload`, `/api/analyze-case`, `/health`.  
- Config via env: `PORT`, `DB_CLIENT`, `DB_URL`, `CORS_ORIGIN`, `PUBLIC_URL`, `UPLOAD_DIR`.

### AI/Análise
- Atual: heurística simples no backend (sem Base44/LLM).  
- Futuro: plugar LLM (OpenAI ou similar) com schema de resposta estruturada.

### Infra
- Backend: Railway (Dockerfile).  
- Frontend: Vercel (build `npm run build`, output `dist`).  
- Volume: recomendado 5–10 GB por ambiente (`/data`).

---

## Modelo de Dados (MySQL)
Tabelas criadas automaticamente:
- `contact_submissions` (name, email, company, phone, subject, message, created_at).
- `demo_requests` (contact_name, contact_email, contact_phone, airline_name, position, company_size, current_case_volume, main_challenges, preferred_date, status, created_at).
- `passenger_cases` (case_number, passenger_name, passenger_email, passenger_phone, airline, flight_number, flight_date, issue_type, description, document_urls JSON string, status, created_at).

---

## Segurança e Compliance
- LGPD: coletar mínimo, permitir exclusão, trafegar via HTTPS.  
- CORS restrito por ambiente (domínio Vercel correspondente).  
- DB interno Railway: `DB_SSL=false` com host interno; se usar URL pública proxy, `DB_SSL=true`.  
- Validação de entradas em todos os endpoints; limites de tamanho de upload; checagem de MIME.

---

## Roadmap (pós Base44)
### Concluído
- Backend próprio (Express + MySQL/SQLite) com uploads, health, heurística de análise.  
- Frontend integrado aos endpoints novos (contato, demo, casos, upload, análise).  
- Deploys: Railway (backend) + Vercel (frontend) + smoke tests.

### Em progresso / Próximo
- Painel/dashboards (companhias e passageiros).  
- Notificações (email/SMS) e webhook de status.  
- LLM para análise detalhada (substituir heurística).  
- Integrações externas (Consumidor.gov/CEJUSC) e BI.  
- Storage externo (S3/GCS) se escalar horizontalmente.

---

## Diferenciais
- Especialização em aviação, foco em conciliação.  
- Tempo de resolução alvo: dias (vs. anos na via judicial).  
- Custos mais baixos para companhias; gratuito para passageiros.  
- Arquitetura simples e independente (sem vendor lock-in).

---

## Operação e Contato
- Suporte comercial (demos): fluxo `/api/airline-demo`.  
- Suporte geral: `/api/contact`.  
- Horário sugerido: 09h–18h BRT (seg–sex), sáb 09h–13h.

---

## Filosofia Central
Fazer a resolução de conflitos aéreos ser rápida, justa e eficiente para todos os envolvidos, com transparência, conformidade regulatória e experiência simples.***

