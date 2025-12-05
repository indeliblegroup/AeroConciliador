import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, FileText, Users, AlertCircle, CheckCircle2, BookOpen, Gavel } from 'lucide-react';

export default function Compliance() {
  const principles = [
    {
      icon: Scale,
      title: 'Neutralidade',
      description: 'Não advogamos para nenhuma das partes. Atuamos como mediadores imparciais certificados.'
    },
    {
      icon: Shield,
      title: 'Transparência',
      description: 'Todos os processos são documentados e auditáveis, com visibilidade total para as partes.'
    },
    {
      icon: Users,
      title: 'Equilíbrio',
      description: 'Buscamos acordos justos que respeitem os direitos de passageiros e companhias.'
    },
    {
      icon: FileText,
      title: 'Segurança Jurídica',
      description: 'Termos de acordo com validade legal plena, respeitando todas as normas vigentes.'
    }
  ];

  const regulations = [
    {
      title: 'Lei de Mediação (13.140/2015)',
      description: 'Base legal para nossa atuação como mediadores e conciliadores certificados.',
      items: [
        'Mediadores certificados por instituição credenciada',
        'Procedimentos estruturados conforme a lei',
        'Confidencialidade garantida por lei',
        'Validade jurídica dos acordos'
      ]
    },
    {
      title: 'Código de Defesa do Consumidor (CDC)',
      description: 'Garantia dos direitos do consumidor em todas as negociações.',
      items: [
        'Respeito aos direitos básicos do consumidor',
        'Informação clara e transparente',
        'Vedação de práticas abusivas',
        'Facilitação da defesa de direitos'
      ]
    },
    {
      title: 'Código Brasileiro de Aeronáutica (CBA)',
      description: 'Conformidade com normas específicas do setor aéreo.',
      items: [
        'Regras de transporte aéreo',
        'Responsabilidades das companhias',
        'Direitos dos passageiros',
        'Prazos e procedimentos'
      ]
    },
    {
      title: 'Normas ANAC',
      description: 'Alinhamento com as resoluções da Agência Nacional de Aviação Civil.',
      items: [
        'Resolução 400/2016 (direitos dos passageiros)',
        'Procedimentos de reembolso',
        'Compensações por atraso e cancelamento',
        'Atendimento e assistência material'
      ]
    }
  ];

  const boundaries = [
    {
      icon: AlertCircle,
      title: 'O que NÃO somos',
      items: [
        'Não somos um escritório de advocacia',
        'Não captamos clientes para litigar',
        'Não substituímos o departamento jurídico da companhia',
        'Não estimulamos conflitos ou judicialização'
      ]
    },
    {
      icon: CheckCircle2,
      title: 'O que Somos',
      items: [
        'Hub privado de prevenção de litígios',
        'Parceiros das companhias aéreas',
        'Mediadores certificados e imparciais',
        'Facilitadores de acordos pré-processuais'
      ]
    }
  ];

  const ethicalCommitments = [
    'Imparcialidade absoluta nas negociações',
    'Confidencialidade de informações sensíveis',
    'Transparência em critérios e processos',
    'Respeito aos prazos e compromissos',
    'Atualização contínua sobre legislação',
    'Prestação de contas periódica aos clientes'
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
              <div className="w-20 h-20 bg-[#10B981] rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Gavel className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Compliance e Ética
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Nossa atuação é fundamentada em rigoroso cumprimento legal, 
                ética profissional e transparência absoluta
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Princípios Fundamentais
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Os pilares que norteiam toda nossa operação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-[#0F2B46] text-lg mb-3">{principle.title}</h3>
                <p className="text-[#64748B] text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Base Legal e Regulatória
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Conformidade total com a legislação brasileira e normas do setor aéreo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {regulations.map((reg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#0F2B46] rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F2B46] text-xl mb-2">{reg.title}</h3>
                    <p className="text-[#64748B] text-sm">{reg.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {reg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64748B] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Boundaries */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Fronteiras Claras
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Definimos com transparência nosso escopo e limites de atuação
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {boundaries.map((boundary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 border-2 ${
                  index === 0 
                    ? 'bg-red-50 border-red-200' 
                    : 'bg-green-50 border-green-200'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    <boundary.icon className={`w-7 h-7 ${
                      index === 0 ? 'text-red-600' : 'text-green-600'
                    }`} />
                  </div>
                  <h3 className="font-bold text-[#0F2B46] text-xl">{boundary.title}</h3>
                </div>

                <ul className="space-y-3">
                  {boundary.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        index === 0 ? 'bg-red-400' : 'bg-green-400'
                      }`} />
                      <span className="text-[#64748B]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Commitments */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compromissos Éticos
              </h2>
              <p className="text-white/70 text-lg">
                Garantias que oferecemos a todos os nossos stakeholders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ethicalCommitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{commitment}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}