import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  FileText,
  Brain,
  Sliders,
  MessageSquare,
  CheckCircle2,
  Building2,
  User,
  Zap,
  Shield,
  Clock
} from 'lucide-react';

export default function ComoFunciona() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Captura e Classificação do Caso',
      description: 'O caso é registrado através de múltiplos canais (site, Consumidor.gov, SAC) e automaticamente classificado por tipo de ocorrência, urgência e valor estimado.',
      details: [
        'Integração automática com Consumidor.gov.br',
        'Classificação por tipo: atraso, cancelamento, bagagem, overbooking',
        'Priorização inteligente por urgência e complexidade',
        'Extração automática de dados do bilhete'
      ],
      color: '#1E5A8A'
    },
    {
      number: '02',
      icon: Brain,
      title: 'Análise Automática por IA',
      description: 'Nosso motor de inteligência artificial analisa o caso com base em jurisprudência, histórico de acordos e parâmetros da companhia aérea.',
      details: [
        'Análise de milhares de decisões judiciais',
        'Comparação com casos similares resolvidos',
        'Cálculo da probabilidade de acordo',
        'Sugestão de faixa de valor ótima'
      ],
      color: '#10B981'
    },
    {
      number: '03',
      icon: Sliders,
      title: 'Parametrização pela Companhia',
      description: 'A companhia aérea define suas regras de negócio, limites de valor e condições específicas para cada tipo de ocorrência.',
      details: [
        'Configuração de faixas de acordo por categoria',
        'Definição de regras de exceção',
        'Alçadas de aprovação automatizadas',
        'Políticas de compensação personalizadas'
      ],
      color: '#1E5A8A'
    },
    {
      number: '04',
      icon: MessageSquare,
      title: 'Negociação Assistida',
      description: 'Conciliadores certificados conduzem a negociação entre passageiro e companhia, com suporte da plataforma tecnológica.',
      details: [
        'Conciliadores certificados pelo CNJ',
        'Comunicação centralizada e rastreável',
        'Sugestões de acordo em tempo real',
        'Mediação imparcial e profissional'
      ],
      color: '#10B981'
    },
    {
      number: '05',
      icon: CheckCircle2,
      title: 'Registro e Fechamento do Acordo',
      description: 'Uma vez aceito, o acordo é formalizado com validade jurídica, registrado e integrado aos sistemas da companhia.',
      details: [
        'Termo de acordo digital com assinatura eletrônica',
        'Validade jurídica conforme Lei 13.140/2015',
        'Integração com sistemas ERP e jurídico',
        'Relatórios de acompanhamento'
      ],
      color: '#1E5A8A'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] via-[#1E3A5F] to-[#0F2B46] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E5A8A]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Processo</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 mb-6">
              Como Funciona a
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">
                Sala de Conciliação
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Um fluxo estruturado em 5 etapas que garante eficiência, 
              transparência e segurança jurídica em cada acordo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span 
                      className="text-5xl font-bold"
                      style={{ color: step.color, opacity: 0.2 }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-[#0F2B46] mb-4">{step.title}</h2>
                  <p className="text-[#64748B] text-lg mb-8">{step.description}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-[#64748B]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div 
                    className="rounded-3xl p-8 lg:p-12"
                    style={{ backgroundColor: `${step.color}10` }}
                  >
                    <div className="aspect-video bg-white rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                      {/* Illustration placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
                      <div 
                        className="w-24 h-24 rounded-2xl flex items-center justify-center relative z-10"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Tempo Médio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Do Registro ao Acordo em Dias
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Registro', time: '< 5 min' },
                { label: 'Análise IA', time: '< 1h' },
                { label: 'Parametrização', time: 'Pré-configurado' },
                { label: 'Negociação', time: '1-3 dias' },
                { label: 'Acordo', time: '< 1h' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center min-w-[150px]"
                >
                  <div className="w-10 h-10 bg-[#10B981]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <p className="text-sm text-[#64748B] mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-[#0F2B46]">{item.time}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#10B981]/10 rounded-2xl">
                <Zap className="w-6 h-6 text-[#10B981]" />
                <span className="text-lg font-semibold text-[#0F2B46]">
                  Tempo total médio: 4.2 dias
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to={createPageUrl('CompanhiasAereas')} className="block h-full">
                <div className="bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] rounded-3xl p-8 h-full hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Para Companhias Aéreas</h3>
                  <p className="text-white/70 mb-6">
                    Descubra como nossa plataforma pode reduzir seus custos e melhorar a experiência do cliente.
                  </p>
                  <div className="flex items-center text-[#10B981] font-medium">
                    Saiba mais <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to={createPageUrl('Passageiros')} className="block h-full">
                <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-8 h-full hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Para Passageiros</h3>
                  <p className="text-white/90 mb-6">
                    Teve problema com seu voo? Inicie sua conciliação agora e resolva em poucos dias.
                  </p>
                  <div className="flex items-center text-white font-medium">
                    Iniciar conciliação <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}