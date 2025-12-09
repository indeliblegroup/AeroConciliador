#!/usr/bin/env bash
set -euo pipefail

API_BASE="${API_BASE:-http://localhost:8080}"

echo "Smoke testing API at ${API_BASE}"

post() {
  local path="$1"; shift
  local payload="$1"; shift
  curl -s -X POST "${API_BASE}${path}" -H 'Content-Type: application/json' -d "${payload}"
}

echo "-> /api/contact"
post "/api/contact" '{"name":"Smoke","email":"s@e.com","subject":"hi","message":"ping"}'
echo

echo "-> /api/airline-demo"
post "/api/airline-demo" '{"contactName":"Smoke","contactEmail":"s@e.com","airlineName":"TestAir","position":"Ops"}'
echo

echo "-> /api/passenger-case"
post "/api/passenger-case" '{"passengerName":"Smoke","passengerEmail":"s@e.com","airline":"TestAir","issueType":"atraso","description":"test"}'
echo

echo "-> /api/analyze-case"
post "/api/analyze-case" '{"issueType":"atraso","description":"atraso 4h","flightDelay":4}'
echo

echo "Smoke tests finished."

