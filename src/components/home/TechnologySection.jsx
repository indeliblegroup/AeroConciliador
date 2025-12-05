import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Shield, Zap, Link2, Lock } from 'lucide-react';

export default function TechnologySection() {
  const features = [
    {
      icon: Brain,
      title: 'Motor de IA Preditivo',
      description: 'Algoritmos treinados com milhares de casos reais para sugerir a faixa de acordo com maior probabilidade de aceite.'
    },
    {
      icon: Database,
      title: 'Base Jurisprudencial',
      description: 'Análise contínua de decisões judiciais para calibrar valores e argumentos de negociação.'
    },
    {
      icon: Link2,
      title: 'Integrações Nativas',
      description: 'Conectado ao Consumidor.gov, CEJUSC, sistemas SAC e plataformas de ouvidoria das companhias.'
    },
    {
      icon: Lock,
      title: 'Segurança & Auditoria',
      description: 'Criptografia end-to-end, logs de auditoria completos e conformidade com LGPD.'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Workflows automatizados para triagem, notificações e geração de documentos.'
    },
    {
      icon: Shield,
      title: 'Compliance Regulatório',
      description: 'Alinhamento total com ANAC, CDC, CBA e Lei de Mediação (13.140/2015).'
    }
  ];

  return (
    <section className="py-24 bg-[#FAFBFC] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Tecnologia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Inteligência Artificial a Serviço da Conciliação
            </h2>
            <p className="text-[#64748B] text-lg mb-8">
              Nossa plataforma combina o melhor da tecnologia com a expertise humana em mediação, 
              criando um ecossistema eficiente e confiável para resolução de conflitos.
            </p>

            {/* AI Preview Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F2B46]">Análise de Caso #4521</p>
                  <p className="text-sm text-[#64748B]">Atraso de voo • São Paulo → Miami</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-[#FAFBFC] rounded-lg">
                  <span className="text-sm text-[#64748B]">Probabilidade de Acordo</span>
                  <span className="font-bold text-[#10B981]">92%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#FAFBFC] rounded-lg">
                  <span className="text-sm text-[#64748B]">Faixa Sugerida</span>
                  <span className="font-bold text-[#0F2B46]">R$ 2.800 - R$ 3.500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#FAFBFC] rounded-lg">
                  <span className="text-sm text-[#64748B]">Casos Similares Analisados</span>
                  <span className="font-bold text-[#0F2B46]">847</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-[#0F2B46] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#10B981] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}