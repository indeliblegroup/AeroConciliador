import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileText, 
  Upload, 
  MessageSquare, 
  CheckCircle2,
  Clock,
  Shield,
  Heart,
  Zap,
  AlertCircle
} from 'lucide-react';
import { registerPassengerCase, uploadDocument, analyzeCase } from '@/services/api';

export default function Passageiros() {
  const [caseForm, setCaseForm] = useState({
    passengerName: '',
    passengerEmail: '',
    passengerPhone: '',
    airline: '',
    flightNumber: '',
    flightDate: '',
    issueType: 'atraso',
    description: ''
  });

  const [docUploads, setDocUploads] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [caseStatus, setCaseStatus] = useState(null);
  const [caseError, setCaseError] = useState(null);

  const [analysisInput, setAnalysisInput] = useState({
    issueType: 'atraso',
    airline: '',
    description: '',
    flightDelay: '',
    bagageIssue: '',
    cancellation: ''
  });
  const [analysis, setAnalysis] = useState(null);
  const [analysisError, setAnalysisError] = useState(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    setUploadError(null);
    try {
      const uploaded = [];
      for (const file of files) {
        const res = await uploadDocument(file);
        uploaded.push(res.fileUrl);
      }
      setDocUploads((prev) => [...prev, ...uploaded]);
    } catch (err) {
      setUploadError(err.message || 'Falha ao enviar arquivo');
    } finally {
      setUploading(false);
    }
  };

  const handleRegisterCase = async (e) => {
    e.preventDefault();
    setCaseError(null);
    setCaseStatus(null);
    try {
      const payload = { ...caseForm, documentUrls: docUploads };
      const res = await registerPassengerCase(payload);
      setCaseStatus(`Caso registrado com sucesso. Número: ${res.caseNumber}`);
      setCaseForm({
        passengerName: '',
        passengerEmail: '',
        passengerPhone: '',
        airline: '',
        flightNumber: '',
        flightDate: '',
        issueType: 'atraso',
        description: ''
      });
      setDocUploads([]);
    } catch (err) {
      setCaseError(err.message || 'Não foi possível registrar o caso');
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setAnalysisError(null);
    setAnalysis(null);
    setAnalysisLoading(true);
    try {
      const res = await analyzeCase({
        ...analysisInput,
        flightDelay: analysisInput.flightDelay ? Number(analysisInput.flightDelay) : undefined
      });
      setAnalysis(res.analysis);
    } catch (err) {
      setAnalysisError(err.message || 'Falha ao analisar caso');
    } finally {
      setAnalysisLoading(false);
    }
  };

  const steps = [
    {
      icon: FileText,
      title: 'Registre seu Caso',
      description: 'Preencha um formulário simples com os detalhes do seu voo e o problema enfrentado.'
    },
    {
      icon: Upload,
      title: 'Envie Documentos',
      description: 'Faça upload do seu bilhete, comprovantes e qualquer documentação relevante.'
    },
    {
      icon: MessageSquare,
      title: 'Receba Proposta',
      description: 'Nossa equipe analisa seu caso e a companhia apresenta uma proposta de acordo em poucos dias.'
    },
    {
      icon: CheckCircle2,
      title: 'Conclua o Acordo',
      description: 'Se aceitar a proposta, o acordo é formalizado com validade jurídica e você recebe sua compensação.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Resolução Rápida',
      description: 'Média de 4 dias para resolver, sem esperar anos na justiça'
    },
    {
      icon: Shield,
      title: 'Sem Custos',
      description: 'Não há taxas ou custos para o passageiro utilizar a plataforma'
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Conciliadores certificados que entendem sua situação'
    },
    {
      icon: Zap,
      title: 'Processo Digital',
      description: 'Tudo online, sem precisar sair de casa'
    }
  ];

  const eligibleCases = [
    'Atraso de voo superior a 4 horas',
    'Cancelamento de voo',
    'Overbooking (preterição de embarque)',
    'Extravio, dano ou atraso de bagagem',
    'Problemas com reembolso',
    'Downgrade (mudança de classe)'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F2B46] via-[#1E3A5F] to-[#0F2B46] py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E5A8A]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-[#10B981]/20 text-[#10B981] rounded-full text-sm font-semibold mb-6">
                Para Passageiros
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Resolva seu Problema com Voo de Forma Rápida
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Evite a burocracia e o tempo de um processo judicial. Nossa Sala de Conciliação 
                conecta você diretamente com a companhia aérea para um acordo justo e ágil.
              </p>
              <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-6 text-lg rounded-xl">
                Iniciar Conciliação
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Como Funciona para Você
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Um processo simples e transparente do início ao fim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-[#10B981]/30" />
                )}
                <h3 className="font-bold text-[#0F2B46] text-lg mb-3">{step.title}</h3>
                <p className="text-[#64748B] text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Vantagens da Conciliação
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Por que escolher nosso serviço em vez de entrar com um processo judicial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-3">{benefit.title}</h3>
                <p className="text-[#64748B] text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
                Casos que Atendemos
              </h2>
              <p className="text-[#64748B] text-lg">
                Situações comuns que podem ser resolvidas por nossa Sala de Conciliação
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {eligibleCases.map((caseType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#FAFBFC] rounded-xl border border-gray-100"
                >
                  <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="text-[#0F2B46] font-medium">{caseType}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F2B46] mb-2">Importante</h3>
                  <p className="text-[#64748B] text-sm">
                    Não somos um escritório de advocacia. Somos uma plataforma de conciliação que 
                    facilita o diálogo entre passageiros e companhias aéreas. Se não houver acordo, 
                    você continua com o direito de buscar a justiça comum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Resolver seu Problema?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Registre seu caso agora e receba uma resposta em poucos dias
            </p>
            <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-6 text-lg rounded-xl">
              Registrar Meu Caso
            </Button>
          </div>
        </div>
      </section>

      {/* Registro de Caso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#0F2B46]">Registre seu caso</h2>
              <p className="text-[#64748B]">
                Envie os detalhes e documentos do voo. Nossa equipe retorna com uma proposta em poucos dias.
              </p>
              {caseStatus && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm">
                  {caseStatus}
                </div>
              )}
              {caseError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                  {caseError}
                </div>
              )}
              <form onSubmit={handleRegisterCase} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    required
                    placeholder="Nome completo"
                    value={caseForm.passengerName}
                    onChange={(e) => setCaseForm({ ...caseForm, passengerName: e.target.value })}
                  />
                  <Input
                    type="email"
                    required
                    placeholder="E-mail"
                    value={caseForm.passengerEmail}
                    onChange={(e) => setCaseForm({ ...caseForm, passengerEmail: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Telefone"
                    value={caseForm.passengerPhone}
                    onChange={(e) => setCaseForm({ ...caseForm, passengerPhone: e.target.value })}
                  />
                  <Input
                    required
                    placeholder="Companhia aérea"
                    value={caseForm.airline}
                    onChange={(e) => setCaseForm({ ...caseForm, airline: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Número do voo"
                    value={caseForm.flightNumber}
                    onChange={(e) => setCaseForm({ ...caseForm, flightNumber: e.target.value })}
                  />
                  <Input
                    type="date"
                    value={caseForm.flightDate}
                    onChange={(e) => setCaseForm({ ...caseForm, flightDate: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    className="w-full px-3 py-3 rounded-lg border border-gray-200"
                    value={caseForm.issueType}
                    onChange={(e) => setCaseForm({ ...caseForm, issueType: e.target.value })}
                  >
                    <option value="atraso">Atraso</option>
                    <option value="cancelamento">Cancelamento</option>
                    <option value="bagagem">Bagagem</option>
                    <option value="overbooking">Overbooking</option>
                    <option value="downgrade">Downgrade</option>
                  </select>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-[#0F2B46] font-medium">Documentos (PDF/JPG/PNG/DOC)</label>
                    <input
                      type="file"
                      multiple
                      onChange={handleUpload}
                      className="w-full text-sm"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    />
                    {uploading && <span className="text-xs text-[#0F2B46]">Enviando...</span>}
                    {uploadError && <span className="text-xs text-red-600">{uploadError}</span>}
                    {docUploads.length > 0 && (
                      <span className="text-xs text-green-700">{docUploads.length} arquivo(s) anexado(s)</span>
                    )}
                  </div>
                </div>
                <Textarea
                  required
                  rows={4}
                  placeholder="Descreva o ocorrido"
                  value={caseForm.description}
                  onChange={(e) => setCaseForm({ ...caseForm, description: e.target.value })}
                />
                <Button type="submit" className="bg-[#10B981] hover:bg-[#059669] text-white">
                  Registrar caso
                </Button>
              </form>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0F2B46]">Análise rápida</h3>
              <p className="text-[#64748B]">Obtenha uma prévia automática de urgência e valor estimado.</p>
              {analysisError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800">
                  {analysisError}
                </div>
              )}
              {analysis && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm space-y-2">
                  <div><strong>Urgência:</strong> {analysis.urgency}</div>
                  <div><strong>Probabilidade de acordo:</strong> {analysis.settlementProbability}%</div>
                  <div><strong>Valor sugerido:</strong> R$ {analysis.suggestedValue}</div>
                  <div><strong>Fundamento:</strong> {analysis.legalBasis}</div>
                  <div><strong>Prazo estimado:</strong> {analysis.estimatedDays} dias</div>
                  <div><strong>Pontos de negociação:</strong>
                    <ul className="list-disc ml-5">
                      {analysis.negotiationPoints?.map((p, idx) => <li key={idx}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              )}
              <form onSubmit={handleAnalyze} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <select
                    className="w-full px-3 py-3 rounded-lg border border-gray-200"
                    value={analysisInput.issueType}
                    onChange={(e) => setAnalysisInput({ ...analysisInput, issueType: e.target.value })}
                  >
                    <option value="atraso">Atraso</option>
                    <option value="cancelamento">Cancelamento</option>
                    <option value="bagagem">Bagagem</option>
                    <option value="overbooking">Overbooking</option>
                  </select>
                  <Input
                    placeholder="Companhia aérea (opcional)"
                    value={analysisInput.airline}
                    onChange={(e) => setAnalysisInput({ ...analysisInput, airline: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <Input
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="Atraso em horas (opcional)"
                    value={analysisInput.flightDelay}
                    onChange={(e) => setAnalysisInput({ ...analysisInput, flightDelay: e.target.value })}
                  />
                  <Input
                    placeholder="Problema de bagagem (opcional)"
                    value={analysisInput.bagageIssue}
                    onChange={(e) => setAnalysisInput({ ...analysisInput, bagageIssue: e.target.value })}
                  />
                </div>
                <Input
                  placeholder="Cancelamento (motivo, se houver)"
                  value={analysisInput.cancellation}
                  onChange={(e) => setAnalysisInput({ ...analysisInput, cancellation: e.target.value })}
                />
                <Textarea
                  required
                  rows={3}
                  placeholder="Descreva brevemente o caso"
                  value={analysisInput.description}
                  onChange={(e) => setAnalysisInput({ ...analysisInput, description: e.target.value })}
                />
                <Button type="submit" disabled={analysisLoading} className="bg-[#0F2B46] hover:bg-[#0b2036] text-white">
                  {analysisLoading ? 'Analisando...' : 'Analisar caso'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}