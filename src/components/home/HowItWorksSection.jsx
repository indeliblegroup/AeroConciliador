import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, Sliders, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Captura e Classificação',
      description: 'O caso é registrado e automaticamente classificado por tipo de ocorrência, urgência e valor estimado.',
      color: '#1E5A8A'
    },
    {
      icon: Brain,
      number: '02',
      title: 'Análise por IA',
      description: 'Nosso motor de inteligência artificial analisa jurisprudência e sugere a faixa de acordo ideal.',
      color: '#10B981'
    },
    {
      icon: Sliders,
      number: '03',
      title: 'Parametrização',
      description: 'A companhia aérea define suas regras de negócio e limites de acordo para cada categoria.',
      color: '#1E5A8A'
    },
    {
      icon: MessageSquare,
      number: '04',
      title: 'Negociação Assistida',
      description: 'Conciliadores certificados conduzem a negociação com suporte tecnológico e compliance.',
      color: '#10B981'
    },
    {
      icon: CheckCircle2,
      number: '05',
      title: 'Acordo e Registro',
      description: 'Termo de acordo com validade jurídica, registro formal e integração com sistemas da companhia.',
      color: '#1E5A8A'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Processo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
            Como Funciona a Sala de Conciliação
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Um fluxo estruturado que garante eficiência, transparência e segurança jurídica em cada etapa
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1E5A8A] via-[#10B981] to-[#1E5A8A]" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Number Badge */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Connection Dot for Desktop */}
                <div 
                  className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-20"
                  style={{ backgroundColor: step.color }}
                />

                <div className="text-center">
                  <span className="text-[#10B981] font-bold text-sm">{step.number}</span>
                  <h3 className="text-lg font-bold text-[#0F2B46] mt-2 mb-3">{step.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}