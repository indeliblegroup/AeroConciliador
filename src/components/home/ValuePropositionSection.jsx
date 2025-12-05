import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  User, 
  TrendingDown, 
  Clock, 
  BarChart3, 
  Link2, 
  Brain, 
  Zap,
  FileCheck,
  Eye,
  Shield,
  Heart
} from 'lucide-react';

export default function ValuePropositionSection() {
  const companyBenefits = [
    { icon: TrendingDown, text: 'Redução de 30-60% da judicialização' },
    { icon: Zap, text: 'Economia significativa por caso' },
    { icon: Clock, text: 'SLA de resolução acelerado' },
    { icon: BarChart3, text: 'Dashboard de passivo regulatório' },
    { icon: Link2, text: 'Integração com Consumidor.gov e CEJUSC' },
    { icon: Brain, text: 'IA que sugere faixa de acordo ótima' }
  ];

  const passengerBenefits = [
    { icon: Zap, text: 'Resolução rápida e sem burocracia' },
    { icon: FileCheck, text: 'Acordo claro e transparente' },
    { icon: Shield, text: 'Evita processo judicial' },
    { icon: Eye, text: 'Acompanhamento em tempo real' },
    { icon: Heart, text: 'Atendimento humanizado' },
    { icon: FileCheck, text: 'Registro formal conciliado' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E5A8A]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Proposta de Valor</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Benefícios para Todos os Lados
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Uma solução que equilibra os interesses de companhias aéreas e passageiros
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Company Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[#1E5A8A] rounded-2xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Para Companhias Aéreas</h3>
                <p className="text-white/60">Reduza custos e preserve sua marca</p>
              </div>
            </div>

            <div className="space-y-4">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="text-white/90">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Passenger Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[#10B981] rounded-2xl flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Para Passageiros</h3>
                <p className="text-white/60">Resolva seu problema com agilidade</p>
              </div>
            </div>

            <div className="space-y-4">
              {passengerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="text-white/90">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}