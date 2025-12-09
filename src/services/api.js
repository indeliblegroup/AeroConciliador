const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

const handleResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.error || 'Erro ao comunicar com o servidor';
    throw new Error(message);
  }
  return data;
};

export const submitContactForm = (payload) =>
  fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleResponse);

export const requestAirlineDemo = (payload) =>
  fetch(`${API_BASE}/api/airline-demo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleResponse);

export const registerPassengerCase = (payload) =>
  fetch(`${API_BASE}/api/passenger-case`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleResponse);

export const analyzeCase = (payload) =>
  fetch(`${API_BASE}/api/analyze-case`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleResponse);

export const uploadDocument = (file, extras = {}) => {
  const formData = new FormData();
  formData.append('file', file);
  if (extras.caseId) formData.append('caseId', extras.caseId);

  return fetch(`${API_BASE}/api/upload`, {
    method: 'POST',
    body: formData,
  }).then(handleResponse);
};

