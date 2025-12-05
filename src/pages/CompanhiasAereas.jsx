import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  TrendingDown, 
  Clock, 
  BarChart3, 
  Link2, 
  Brain, 
  Shield,
  Zap,
  Building2,
  AlertTriangle,
  Scale,
  CheckCircle2,
  Users,
  FileText
} from 'lucide-react';

export default function CompanhiasAereas() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Excesso de Litígios',
      description: 'O setor aéreo brasileiro é um dos mais judicializados do mundo, com milhares de ações por atrasos, cancelamentos e extravio de bagagem.'
    },
    {
      icon: TrendingDown,
      title: 'Custos Crescentes',
      description: 'Custos advocatícios, indenizações judiciais e danos à reputação impactam diretamente o resultado operacional.'
    },
    {
      icon: Clock,
      title: 'Processos Longos',
      description: 'A morosidade do judiciário mantém passivos contingentes por anos, dificultando a previsibilidade financeira.'
    }
  ];

  const benefits = [
    { icon: TrendingDown, title: 'Redução de 30-60%', description: 'da judicialização através de acordos pré-processuais' },
    { icon: Zap, title: 'Economia Significativa', description: 'por caso comparado ao custo judicial médio' },
    { icon: Clock, title: 'SLA Acelerado', description: 'resolução em dias, não em anos' },
    { icon: BarChart3, title: 'Dashboard Executivo', description: 'visão completa do passivo regulatório' },
    { icon: Link2, title: 'Integração Total', description: 'com Consumidor.gov, CEJUSC e canais internos' },
    { icon: Brain, title: 'IA Preditiva', description: 'sugestão de faixa de acordo ótima' }
  ];

  const integrations = [
    { name: 'Consumidor.gov.br', description: 'Sincronização automática de reclamações' },
    { name: 'CEJUSC', description: 'Integração com centros judiciários' },
    { name: 'SAC/Ouvidoria', description: 'Conexão com sistemas internos' },
    { name: 'ERP Jurídico', description: 'Export de dados para sistemas de gestão' }
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
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Building2 className="w-4 h-4 text-[#10B981]" />
                <span className="text-white/80 text-sm font-medium">Para Companhias Aéreas</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Reduza litígios.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">
                  Preserve seu resultado.
                </span>
              </h1>

              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
                Uma Sala de Conciliação especializada que transforma reclamações em acordos, 
                reduzindo custos operacionais e preservando a relação com seus passageiros.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Contato')}>
                  <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg rounded-xl group">
                    Solicitar Demonstração Executiva
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Contato')}>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                    Agendar Reunião Técnica
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">O Desafio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Por que o Setor Aéreo Precisa de Conciliação
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <challenge.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2B46] mb-4">{challenge.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">A Solução</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Como a Plataforma Reduz Processos
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Nossa Sala de Conciliação atua em múltiplas frentes para transformar conflitos em acordos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#FAFBFC] rounded-2xl p-8 h-full border border-transparent hover:border-[#10B981]/20 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-[#0F2B46] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#10B981] transition-colors">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2B46] mb-2">{benefit.title}</h3>
                  <p className="text-[#64748B]">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Integrações</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Conectado ao Ecossistema Regulatório
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Nossa plataforma se integra nativamente com canais públicos e privados, 
                centralizando a gestão de conflitos em um único painel.
              </p>

              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center">
                      <Link2 className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{integration.name}</p>
                      <p className="text-sm text-white/60">{integration.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Dashboard Preview */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/60 text-sm">Painel Executivo</p>
                    <p className="text-white text-xl font-bold">Visão Consolidada</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-white/70">Consumidor.gov.br</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="text-[#10B981] font-medium">Sincronizado</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-white/70">CEJUSC</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="text-[#10B981] font-medium">Ativo</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-white/70">SAC Interno</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="text-[#10B981] font-medium">Conectado</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#10B981]/20 rounded-xl border border-[#10B981]/30">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span className="text-white">Todos os canais unificados em um painel</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#FAFBFC] rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F2B46]">Motor de IA</p>
                    <p className="text-sm text-[#64748B]">Análise em tempo real</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-sm text-[#64748B] mb-2">Caso: Atraso de Voo > 4h</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F2B46] font-medium">Faixa Sugerida</span>
                      <span className="text-[#10B981] font-bold">R$ 2.500 - R$ 3.200</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-sm text-[#64748B] mb-2">Baseado em</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F2B46] font-medium">Casos similares</span>
                      <span className="text-[#0F2B46] font-bold">1.247</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-sm text-[#64748B] mb-2">Probabilidade</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0F2B46] font-medium">Aceite de acordo</span>
                      <span className="text-[#10B981] font-bold">89%</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#64748B]">
                  * Valores baseados em análise de jurisprudência e histórico de acordos
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Inteligência Artificial</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
                Cálculo Automático da Oferta de Acordo
              </h2>
              <p className="text-[#64748B] text-lg mb-6">
                Nosso motor de IA analisa milhares de decisões judiciais e acordos anteriores 
                para sugerir a faixa de valor ideal para cada tipo de ocorrência.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-1" />
                  <span className="text-[#64748B]">Análise de jurisprudência atualizada diariamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-1" />
                  <span className="text-[#64748B]">Parametrização por tipo de ocorrência e perfil de passageiro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-1" />
                  <span className="text-[#64748B]">Respeito às regras de negócio definidas pela companhia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-1" />
                  <span className="text-[#64748B]">Transparência na metodologia de cálculo</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Alinhamento Regulatório Total
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'ANAC', description: 'Resolução 400/2016' },
              { name: 'CDC', description: 'Código de Defesa do Consumidor' },
              { name: 'CBA', description: 'Código Brasileiro de Aeronáutica' },
              { name: 'Lei 13.140', description: 'Lei de Mediação' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#0F2B46] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-1">{item.name}</h3>
                <p className="text-sm text-[#64748B]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Reduzir seus Litígios?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Agende uma demonstração executiva e descubra como nossa Sala de Conciliação 
                pode transformar a gestão de conflitos da sua companhia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl('Contato')}>
                  <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg rounded-xl">
                    Agendar Demonstração
                  </Button>
                </Link>
                <Link to={createPageUrl('ComoFunciona')}>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                    Ver Como Funciona
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}