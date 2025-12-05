import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  User,
  FileText,
  Search,
  MessageSquare,
  CheckCircle2,
  Clock,
  Shield,
  Eye,
  Plane,
  Luggage,
  CalendarX,
  AlertCircle
} from 'lucide-react';

export default function Passageiros() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Registre seu Caso',
      description: 'Preencha um formulário simples com os dados do seu voo e o problema que enfrentou.'
    },
    {
      number: '02',
      icon: Search,
      title: 'Verificação de Documentos',
      description: 'Nossa equipe analisa as informações e documentos para validar seu caso.'
    },
    {
      number: '03',
      icon: MessageSquare,
      title: 'Receba Proposta de Acordo',
      description: 'A companhia aérea apresenta uma proposta de acordo para resolver a situação.'
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Conclusão da Conciliação',
      description: 'Caso aceite, o acordo é formalizado e você recebe sua compensação.'
    }
  ];

  const problemTypes = [
    { icon: Clock, title: 'Atraso de Voo', description: 'Voos que atrasaram mais de 4 horas' },
    { icon: CalendarX, title: 'Cancelamento', description: 'Voos cancelados sem aviso prévio' },
    { icon: Luggage, title: 'Extravio de Bagagem', description: 'Malas perdidas ou danificadas' },
    { icon: AlertCircle, title: 'Overbooking', description: 'Impedimento de embarque por excesso' }
  ];

  const benefits = [
    { icon: Clock, text: 'Resolução rápida, em dias e não anos' },
    { icon: Shield, text: 'Acordo formal com validade jurídica' },
    { icon: Eye, text: 'Acompanhamento em tempo real do seu caso' },
    { icon: CheckCircle2, text: 'Sem custos advocatícios' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#047857]/50 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 mb-8">
                <User className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Para Passageiros</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Teve problema com
                <br />
                seu voo?
              </h1>

              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Resolva de forma rápida, transparente e sem processo judicial. 
                Nossa Sala de Conciliação conecta você diretamente à companhia aérea.
              </p>

              <Link to={createPageUrl('Contato')}>
                <Button size="lg" className="bg-white text-[#059669] hover:bg-white/90 px-8 py-6 text-lg rounded-xl group">
                  Iniciar Conciliação
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Tipos de Problema</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              O que podemos ajudar a resolver
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemTypes.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAFBFC] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#10B981] transition-colors">
                  <problem.icon className="w-8 h-8 text-[#10B981] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2B46] mb-2">{problem.title}</h3>
                <p className="text-[#64748B]">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Passo a Passo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Como Funciona para Você
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Um processo simples e transparente, sem burocracia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#10B981] to-[#10B981]/30" />
                )}

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative z-10">
                  <div className="w-14 h-14 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[#10B981] font-bold text-sm">{step.number}</span>
                  <h3 className="text-xl font-bold text-[#0F2B46] mt-2 mb-3">{step.title}</h3>
                  <p className="text-[#64748B] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Vantagens</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
                Por que escolher a conciliação?
              </h2>
              <p className="text-[#64748B] text-lg mb-8">
                A conciliação é uma forma rápida, segura e eficiente de resolver seu problema, 
                sem precisar entrar com processo judicial.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-[#FAFBFC] rounded-xl"
                  >
                    <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <span className="text-[#0F2B46] font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Illustration Card */}
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8">
                    <Plane className="w-10 h-10 text-[#10B981]" style={{ transform: 'rotate(-45deg)' }} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Mais de 5.000 casos
                    <br />resolvidos
                  </h3>

                  <p className="text-white/80 mb-8">
                    Passageiros que confiaram na conciliação e resolveram 
                    seus problemas de forma rápida e eficiente.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 bg-white/30 rounded-full border-2 border-white" />
                      ))}
                    </div>
                    <span className="text-white font-medium">+2.500 este ano</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-100 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1E5A8A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#1E5A8A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F2B46] mb-2">Importante saber</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Somos uma plataforma de conciliação, não um escritório de advocacia. 
                  Nosso papel é facilitar o diálogo entre você e a companhia aérea para 
                  chegar a um acordo justo. Você sempre terá a liberdade de aceitar ou 
                  recusar qualquer proposta.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para resolver seu problema?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Inicie sua conciliação agora e resolva seu caso em poucos dias, 
                sem burocracia e sem custos.
              </p>
              <Link to={createPageUrl('Contato')}>
                <Button size="lg" className="bg-white text-[#059669] hover:bg-white/90 px-8 py-6 text-lg rounded-xl group">
                  Iniciar Minha Conciliação
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}