import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Plane,
  Award,
  Scale,
  Zap,
  Globe
} from 'lucide-react';

export default function Sobre() {
  const values = [
    { icon: Scale, title: 'Imparcialidade', description: 'Neutralidade absoluta em cada conciliação' },
    { icon: Eye, title: 'Transparência', description: 'Clareza em todos os processos e acordos' },
    { icon: Zap, title: 'Eficiência', description: 'Resolução rápida sem perder qualidade' },
    { icon: Heart, title: 'Humanização', description: 'Tecnologia a serviço das pessoas' }
  ];

  const team = [
    {
      name: 'Dra. Carolina Mendes',
      role: 'CEO & Co-fundadora',
      description: '15 anos de experiência em resolução de conflitos e mediação empresarial.',
      expertise: ['Mediação', 'Direito do Consumidor', 'Aviação']
    },
    {
      name: 'Ricardo Santos',
      role: 'CTO',
      description: 'Especialista em IA e automação com passagem por grandes fintechs.',
      expertise: ['Machine Learning', 'Sistemas Distribuídos', 'Automação']
    },
    {
      name: 'Dra. Ana Paula Costa',
      role: 'Diretora Jurídica',
      description: 'Ex-assessora da ANAC, especialista em regulação do transporte aéreo.',
      expertise: ['Regulação ANAC', 'Compliance', 'Aviação Civil']
    },
    {
      name: 'Marcos Oliveira',
      role: 'Diretor de Operações',
      description: '20 anos no setor aéreo, ex-diretor de customer experience em companhia aérea.',
      expertise: ['Operações', 'Customer Experience', 'Gestão']
    }
  ];

  const stats = [
    { value: '5.000+', label: 'Casos Resolvidos' },
    { value: '87%', label: 'Taxa de Acordo' },
    { value: '4.2', label: 'Dias Médios' },
    { value: '30+', label: 'Conciliadores' }
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Sobre Nós</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-4 mb-6">
                Transformando conflitos em
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">
                  {' '}acordos
                </span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Somos pioneiros na criação de uma Sala de Conciliação especializada no setor aéreo brasileiro, 
                combinando tecnologia de ponta com expertise jurídica e operacional.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-3xl font-bold text-[#10B981]">{stat.value}</p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center">
                      <Plane className="w-8 h-8 text-white" style={{ transform: 'rotate(-45deg)' }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">AeroConciliador</h3>
                      <p className="text-white/60">Brasil</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    "Nossa missão é reduzir a judicialização no setor aéreo brasileiro, 
                    promovendo acordos justos e eficientes que beneficiam passageiros e 
                    companhias aéreas."
                  </p>
                </div>

                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-[#10B981]" />
                    <div>
                      <p className="font-semibold text-[#0F2B46]">Certificação CNJ</p>
                      <p className="text-xs text-[#64748B]">Conciliadores Certificados</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0F2B46] rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Missão</h3>
              <p className="text-white/70 leading-relaxed">
                Reduzir a judicialização no setor aéreo brasileiro através de uma plataforma 
                de conciliação eficiente, justa e acessível para todas as partes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#10B981] rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visão</h3>
              <p className="text-white/90 leading-relaxed">
                Ser referência nacional e internacional em resolução de conflitos no setor de aviação, 
                exportando nosso modelo para outros mercados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#FAFBFC] rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#0F2B46] rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2B46] mb-4">Propósito</h3>
              <p className="text-[#64748B] leading-relaxed">
                Humanizar a relação entre passageiros e companhias aéreas, transformando conflitos 
                em oportunidades de entendimento.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Valores</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4">
              O que nos guia
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#10B981]" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-2">{value.title}</h3>
                <p className="text-sm text-[#64748B]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Nossa Equipe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Liderança com Experiência
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Uma equipe multidisciplinar com expertise em resolução de conflitos, aviação e tecnologia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F2B46] to-[#1E5A8A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2B46] text-center">{member.name}</h3>
                <p className="text-[#10B981] text-sm text-center mb-4">{member.role}</p>
                <p className="text-sm text-[#64748B] text-center mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="text-xs bg-[#FAFBFC] text-[#64748B] px-2 py-1 rounded">
                      {exp}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Por que existimos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
                O Brasil é um dos países mais litigiosos do mundo no setor aéreo
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  Milhares de processos judiciais são abertos todos os anos por atrasos, cancelamentos e 
                  problemas com bagagem. Isso gera custos enormes para as companhias aéreas e deixa 
                  passageiros esperando anos por uma resolução.
                </p>
                <p>
                  Nós acreditamos que existe um caminho melhor. Um caminho onde o diálogo vem antes do 
                  litígio, onde a tecnologia acelera a resolução e onde todos saem ganhando.
                </p>
                <p>
                  É por isso que criamos o AeroConciliador: uma ponte entre passageiros e companhias 
                  aéreas, construída sobre os pilares da eficiência, transparência e justiça.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] rounded-3xl p-8 lg:p-12">
                <Globe className="w-16 h-16 text-[#10B981] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Impacto Real
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-white/70">Processos evitados</span>
                    <span className="text-2xl font-bold text-[#10B981]">+3.000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-white/70">Economia gerada</span>
                    <span className="text-2xl font-bold text-white">R$ 45M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Satisfação das partes</span>
                    <span className="text-2xl font-bold text-[#10B981]">94%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Quer fazer parte dessa transformação?
            </h2>
            <p className="text-[#64748B] text-lg mb-8">
              Entre em contato para saber como podemos trabalhar juntos na redução de conflitos no setor aéreo.
            </p>
            <Link to={createPageUrl('Contato')}>
              <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg rounded-xl group">
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}