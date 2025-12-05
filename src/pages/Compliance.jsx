import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  Scale,
  Shield,
  FileText,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BookOpen,
  Award,
  Users
} from 'lucide-react';

export default function Compliance() {
  const regulations = [
    {
      icon: Scale,
      title: 'Lei de Mediação (13.140/2015)',
      description: 'Todos os acordos são conduzidos em conformidade com a Lei de Mediação, garantindo validade jurídica e segurança para ambas as partes.',
      items: ['Conciliadores certificados', 'Termos com validade legal', 'Confidencialidade assegurada']
    },
    {
      icon: FileText,
      title: 'Normas ANAC',
      description: 'Alinhamento total com a Resolução 400/2016 da ANAC e demais normativas do setor aéreo.',
      items: ['Resolução 400/2016', 'Direitos do passageiro', 'Deveres das companhias']
    },
    {
      icon: BookOpen,
      title: 'Código de Defesa do Consumidor',
      description: 'Respeito integral aos direitos do consumidor, equilibrado com a sustentabilidade das operações aéreas.',
      items: ['Direito à informação', 'Transparência', 'Proteção do consumidor']
    },
    {
      icon: Award,
      title: 'Código Brasileiro de Aeronáutica',
      description: 'Conformidade com o CBA nas questões específicas de transporte aéreo e responsabilidades.',
      items: ['Lei 7.565/1986', 'Transporte de passageiros', 'Responsabilidade civil']
    }
  ];

  const whatWeDo = [
    'Facilitamos o diálogo entre passageiros e companhias aéreas',
    'Conduzimos conciliações com conciliadores certificados pelo CNJ',
    'Propomos soluções baseadas em dados e jurisprudência',
    'Formalizamos acordos com validade jurídica',
    'Garantimos confidencialidade e imparcialidade',
    'Integramos com plataformas públicas de resolução de conflitos'
  ];

  const whatWeDontDo = [
    'Não advogamos para passageiros ou companhias',
    'Não substituímos o departamento jurídico das empresas',
    'Não estimulamos litígios ou processos judiciais',
    'Não captamos clientes para escritórios de advocacia',
    'Não realizamos propaganda de "indenização garantida"',
    'Não cobramos valores do passageiro'
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <Shield className="w-4 h-4 text-[#10B981]" />
              <span className="text-white/80 text-sm font-medium">Compliance & Ética</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transparência e
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">
                Conformidade Total
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Atuamos como facilitadores neutros, com total alinhamento regulatório 
              e fronteiras éticas bem definidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Marco Regulatório</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Alinhamento com a Legislação
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Nossa atuação está fundamentada nas principais normas que regem o setor aéreo e a resolução de conflitos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {regulations.map((reg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAFBFC] rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0F2B46] rounded-xl flex items-center justify-center flex-shrink-0">
                    <reg.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2B46] mb-2">{reg.title}</h3>
                    <p className="text-[#64748B]">{reg.description}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-18">
                  {reg.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span className="text-sm text-[#64748B]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do vs Don't Do */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Fronteiras Éticas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              O Que Fazemos e O Que Não Fazemos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-[#10B981]/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2B46]">O Que Fazemos</h3>
              </div>
              <div className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-[#64748B]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-red-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2B46]">O Que Não Fazemos</h3>
              </div>
              <div className="space-y-4">
                {whatWeDontDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#64748B]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1E5A8A]/5 to-[#10B981]/5 rounded-3xl p-8 lg:p-12 border border-[#1E5A8A]/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#1E5A8A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F2B46] mb-2">Importante</h3>
                  <p className="text-[#64748B]">
                    Somos uma plataforma de conciliação, não um escritório de advocacia.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[#64748B]">
                <p>
                  O AeroConciliador atua como um <strong className="text-[#0F2B46]">facilitador neutro</strong> na 
                  resolução de conflitos entre passageiros e companhias aéreas. Nossa missão é promover 
                  acordos justos e eficientes, sem representar legalmente qualquer das partes.
                </p>
                <p>
                  Os conciliadores que atuam em nossa plataforma são <strong className="text-[#0F2B46]">certificados 
                  pelo Conselho Nacional de Justiça (CNJ)</strong> e seguem rigorosos padrões éticos de 
                  imparcialidade e confidencialidade.
                </p>
                <p>
                  Caso o passageiro deseje representação legal, recomendamos a consulta a um advogado 
                  de sua confiança. A conciliação é sempre <strong className="text-[#0F2B46]">voluntária</strong> e 
                  qualquer parte pode optar por não participar ou desistir a qualquer momento.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Credenciais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Certificações e Parcerias
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Award, title: 'Conciliadores CNJ', description: 'Profissionais certificados pelo Conselho Nacional de Justiça' },
              { icon: Shield, title: 'LGPD Compliance', description: 'Conformidade com a Lei Geral de Proteção de Dados' },
              { icon: Users, title: 'Parceria CEJUSC', description: 'Integração com Centros Judiciários de Solução de Conflitos' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#0F2B46] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2B46] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Dúvidas sobre nossa atuação?
            </h2>
            <p className="text-[#64748B] text-lg mb-8">
              Entre em contato para esclarecer qualquer questão sobre compliance, ética ou nosso modelo de operação.
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