import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Briefcase, GraduationCap, Scale } from 'lucide-react';

export default function Sobre() {
  const values = [
    {
      icon: Scale,
      title: 'Imparcialidade',
      description: 'Mediação neutra que busca o equilíbrio entre passageiros e companhias'
    },
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicação total à resolução eficiente e justa de cada conflito'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Padrão superior de qualidade em tecnologia e atendimento'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com companhias aéreas e stakeholders'
    }
  ];

  const team = [
    {
      icon: Scale,
      title: 'Especialistas em Mediação',
      description: 'Conciliadores certificados com expertise em resolução de conflitos e direito aeronáutico'
    },
    {
      icon: Briefcase,
      title: 'Profissionais de Aviação',
      description: 'Time com profunda experiência no setor aéreo e suas particularidades operacionais'
    },
    {
      icon: GraduationCap,
      title: 'Engenheiros de Software',
      description: 'Desenvolvedores especializados em IA, machine learning e sistemas de alta disponibilidade'
    },
    {
      icon: Users,
      title: 'Consultores de Compliance',
      description: 'Especialistas em regulação, LGPD e normas do setor de aviação civil'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Fundação',
      description: 'Criação da AeroConciliador com missão de transformar a gestão de conflitos aéreos'
    },
    {
      year: '2024',
      title: 'Primeira Companhia',
      description: 'Parceria com primeira companhia aérea e desenvolvimento do motor de IA'
    },
    {
      year: '2024',
      title: 'Expansão',
      description: 'Mais de 5.000 casos resolvidos e taxa de sucesso de 87%'
    },
    {
      year: '2025',
      title: 'Consolidação',
      description: 'Referência nacional em conciliação aéreo-consumerista'
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
                Sobre a AeroConciliador
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Pioneiros na resolução inteligente de conflitos aéreo-consumeristas no Brasil
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 rounded-3xl p-10 border border-[#10B981]/20"
            >
              <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F2B46] mb-6">Nossa Missão</h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                Transformar a gestão de conflitos aéreo-consumeristas através da tecnologia, 
                mediação profissional e compliance regulatório, criando valor para companhias 
                aéreas e passageiros ao reduzir custos, prazos e complexidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1E5A8A]/10 to-[#0F2B46]/10 rounded-3xl p-10 border border-[#1E5A8A]/20"
            >
              <div className="w-16 h-16 bg-[#1E5A8A] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F2B46] mb-6">Nossa Visão</h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                Ser a principal plataforma de conciliação do setor aéreo brasileiro, 
                reconhecida pela excelência técnica, imparcialidade e capacidade de prevenir 
                litígios através de acordos justos e eficientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Nossos Valores
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Princípios que guiam cada decisão e ação da nossa empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0F2B46] text-lg mb-3">{value.title}</h3>
                <p className="text-[#64748B] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Nosso Time
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Equipe multidisciplinar com expertise em mediação, tecnologia e aviação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAFBFC] rounded-2xl p-8 border border-gray-100 hover:border-[#10B981] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#0F2B46] rounded-xl flex items-center justify-center flex-shrink-0">
                    <member.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F2B46] text-lg mb-2">{member.title}</h3>
                    <p className="text-[#64748B]">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa Trajetória
            </h2>
            <p className="text-white/70 text-lg">
              Construindo o futuro da conciliação aéreo-consumerista
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#10B981]/30 -translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <span className="text-[#10B981] font-bold text-2xl">{milestone.year}</span>
                        <h3 className="text-white font-bold text-xl mt-2 mb-2">{milestone.title}</h3>
                        <p className="text-white/70">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-[#10B981] rounded-full border-4 border-white/10 flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: '5.000+', label: 'Casos Resolvidos' },
              { value: '87%', label: 'Taxa de Sucesso' },
              { value: '4 dias', label: 'Tempo Médio' },
              { value: '10+', label: 'Parceiros' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#10B981] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#64748B] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}