import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  TrendingDown, 
  Clock, 
  Shield, 
  BarChart3, 
  Link2, 
  Brain,
  CheckCircle2,
  Zap,
  FileText,
  AlertCircle,
  Target,
  DollarSign
} from 'lucide-react';

export default function CompanhiasAereas() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Volume Crescente de Processos',
      description: 'Aumento exponencial de ações judiciais relacionadas a voos'
    },
    {
      icon: DollarSign,
      title: 'Custos Elevados',
      description: 'Despesas com advogados, indenizações e tempo de equipe'
    },
    {
      icon: Clock,
      title: 'Processos Demorados',
      description: 'Anos de tramitação judicial para resolver casos simples'
    },
    {
      icon: Target,
      title: 'Risco Reputacional',
      description: 'Conflitos mal gerenciados impactam a imagem da marca'
    }
  ];

  const solutions = [
    {
      icon: TrendingDown,
      title: 'Redução de Judicialização',
      description: 'Resolva conflitos antes que se transformem em processos judiciais. Nossa taxa de sucesso é de 87%.',
      metric: '-58% processos'
    },
    {
      icon: Clock,
      title: 'Resolução Acelerada',
      description: 'Do registro do caso ao acordo fechado em média 4 dias, versus anos na justiça comum.',
      metric: '4 dias média'
    },
    {
      icon: BarChart3,
      title: 'Dashboard Executivo',
      description: 'Acompanhe em tempo real seu passivo regulatório, métricas de acordos e tendências.',
      metric: 'Visibilidade total'
    },
    {
      icon: Link2,
      title: 'Integração Completa',
      description: 'Conectamos com Consumidor.gov, CEJUSC e seus sistemas internos de SAC e ouvidoria.',
      metric: 'APIs nativas'
    },
    {
      icon: Brain,
      title: 'IA Preditiva',
      description: 'Algoritmos treinados sugerem a faixa de acordo ideal baseada em jurisprudência real.',
      metric: '92% precisão'
    },
    {
      icon: Shield,
      title: 'Compliance Garantido',
      description: 'Total alinhamento com ANAC, CDC, CBA e Lei de Mediação 13.140/2015.',
      metric: '100% conformidade'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Parametrização Inicial',
      description: 'Configuramos regras de negócio, limites de acordo e fluxos de aprovação específicos da sua companhia.'
    },
    {
      step: '02',
      title: 'Integração de Sistemas',
      description: 'Conectamos a plataforma aos seus canais de atendimento, SAC, ouvidoria e bases de dados.'
    },
    {
      step: '03',
      title: 'Treinamento de Equipe',
      description: 'Capacitamos seu time jurídico e de atendimento para operar a plataforma de forma eficiente.'
    },
    {
      step: '04',
      title: 'Gestão Contínua',
      description: 'Monitoramento ativo, relatórios periódicos e ajustes de parametrização conforme necessário.'
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
              <span className="inline-block px-4 py-2 bg-[#10B981]/20 text-[#10B981] rounded-full text-sm font-semibold mb-6">
                Para Companhias Aéreas
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Reduza Custos e Previna Litígios com Inteligência
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Uma Sala de Conciliação especializada que transforma a gestão de conflitos 
                aéreo-consumeristas em vantagem competitiva para sua companhia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl('Contato')}>
                  <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg rounded-xl">
                    Solicitar Demonstração
                  </Button>
                </Link>
                <Link to={createPageUrl('ComoFunciona')}>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                    Ver Como Funciona
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Os Desafios do Setor Aéreo
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              O excesso de litígios impacta operação, finanças e reputação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-red-50 border border-red-100 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-2">{problem.title}</h3>
                <p className="text-sm text-[#64748B]">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Nossa Solução Completa
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Plataforma integrada que reduz custos, prazos e complexidade operacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full">
                    {solution.metric}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F2B46] mb-3">{solution.title}</h3>
                <p className="text-[#64748B]">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Processo de Implementação
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Onboarding ágil e suporte contínuo para garantir máximo resultado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-[#0F2B46] rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#0F2B46] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B]">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 bg-[#10B981]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Reduzir Custos e Melhorar a Experiência?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Agende uma demonstração executiva e veja na prática como transformamos a gestão de conflitos
            </p>
            <Link to={createPageUrl('Contato')}>
              <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-6 text-lg rounded-xl">
                Agendar Reunião Técnica
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}