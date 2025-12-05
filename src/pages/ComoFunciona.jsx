import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Brain, 
  Sliders, 
  MessageSquare, 
  CheckCircle2,
  ArrowRight,
  Database,
  Settings,
  Users,
  FileCheck
} from 'lucide-react';

export default function ComoFunciona() {
  const mainSteps = [
    {
      icon: FileText,
      number: '01',
      title: 'Captura e Classificação do Caso',
      description: 'O caso chega através do Consumidor.gov, canais de SAC, ouvidoria ou registro direto. Nossa IA classifica automaticamente por tipo de ocorrência (atraso, cancelamento, bagagem), urgência e valor estimado.',
      details: [
        'Integração com múltiplos canais de entrada',
        'Classificação automática por machine learning',
        'Atribuição de prioridade baseada em criticidade',
        'Notificação imediata à companhia aérea'
      ]
    },
    {
      icon: Brain,
      number: '02',
      title: 'Análise Automática por IA',
      description: 'Nosso motor de inteligência artificial analisa o caso comparando com milhares de casos similares, jurisprudência recente e normas regulatórias para sugerir a faixa de acordo ideal.',
      details: [
        'Análise de jurisprudência em tempo real',
        'Comparação com base de 50.000+ casos',
        'Cálculo de probabilidade de acordo',
        'Sugestão de valor justo baseada em dados'
      ]
    },
    {
      icon: Sliders,
      number: '03',
      title: 'Parametrização da Companhia Aérea',
      description: 'A companhia define suas regras de negócio: limites de acordo por categoria, fluxos de aprovação, exceções e políticas específicas. O sistema respeita os parâmetros configurados.',
      details: [
        'Políticas customizadas por tipo de caso',
        'Limites de alçada por nível hierárquico',
        'Regras de aprovação automática',
        'Exceções e casos especiais'
      ]
    },
    {
      icon: MessageSquare,
      number: '04',
      title: 'Negociação Assistida',
      description: 'Conciliadores certificados conduzem a negociação entre passageiro e companhia, com suporte da plataforma. Todo o processo é documentado e auditável, garantindo compliance total.',
      details: [
        'Mediadores certificados pela Lei 13.140/2015',
        'Comunicação estruturada e profissional',
        'Histórico completo de interações',
        'Prazos definidos para cada etapa'
      ]
    },
    {
      icon: CheckCircle2,
      number: '05',
      title: 'Acordo e Registro Formal',
      description: 'Quando as partes chegam a um acordo, o termo é gerado automaticamente com validade jurídica. Registro formal em sistema, integração com financeiro para pagamento e encerramento do caso.',
      details: [
        'Termo de acordo com validade legal',
        'Assinatura eletrônica das partes',
        'Integração com sistemas de pagamento',
        'Arquivamento e auditoria permanente'
      ]
    }
  ];

  const integrations = [
    {
      icon: Database,
      title: 'Consumidor.gov',
      description: 'Sincronização automática de reclamações'
    },
    {
      icon: FileCheck,
      title: 'CEJUSC',
      description: 'Integração com centros de conciliação'
    },
    {
      icon: Users,
      title: 'SAC / Ouvidoria',
      description: 'Conexão com canais internos'
    },
    {
      icon: Settings,
      title: 'APIs Customizadas',
      description: 'Integração com sistemas legados'
    }
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Como Funciona a Sala de Conciliação
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Um fluxo estruturado em 5 etapas que garante eficiência, transparência 
                e segurança jurídica do início ao fim
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {mainSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0F2B46] rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{step.number}</span>
                      </div>
                    </div>
                    {index < mainSteps.length - 1 && (
                      <div className="hidden lg:block w-0.5 h-32 bg-gradient-to-b from-[#10B981] to-transparent ml-10 mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-4">{step.title}</h3>
                    <p className="text-[#64748B] text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAFBFC] rounded-xl border border-gray-100">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#64748B]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Integrações Nativas
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Conectamos com os principais canais e sistemas do setor aéreo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#0F2B46] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-2">{integration.title}</h3>
                <p className="text-sm text-[#64748B]">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
                Linha do Tempo Típica
              </h2>
              <p className="text-[#64748B] text-lg">
                Do registro ao acordo fechado em média 4 dias úteis
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#10B981]/30 -translate-x-1/2 hidden md:block" />

              <div className="space-y-8">
                {[
                  { day: 'Dia 0', title: 'Caso Registrado', desc: 'Passageiro registra o problema' },
                  { day: 'Dia 1', title: 'Análise e Classificação', desc: 'IA processa e sugere acordo' },
                  { day: 'Dia 2', title: 'Proposta Enviada', desc: 'Companhia apresenta oferta' },
                  { day: 'Dia 3', title: 'Negociação', desc: 'Ajustes e contrapropostas' },
                  { day: 'Dia 4', title: 'Acordo Fechado', desc: 'Termo assinado e finalizado' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-[#10B981] font-semibold text-sm">{item.day}</span>
                      <h3 className="font-bold text-[#0F2B46] text-lg mt-1">{item.title}</h3>
                      <p className="text-[#64748B] text-sm mt-1">{item.desc}</p>
                    </div>
                    <div className="w-4 h-4 bg-[#10B981] rounded-full border-4 border-white ring-2 ring-[#10B981]/30 flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}