import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, User } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#0F2B46] via-[#1E3A5F] to-[#0F2B46] rounded-3xl p-12 lg:p-16 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E5A8A]/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Pronto para Transformar a Gestão de Conflitos?
              </h2>
              <p className="text-xl text-white/70">
                Junte-se às companhias aéreas que já reduziram custos e melhoraram a experiência do cliente
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link to={createPageUrl('Contato')} className="block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#10B981] hover:bg-[#059669] rounded-2xl p-6 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Companhia Aérea?</h3>
                      <p className="text-white/70 text-sm">Solicite uma demonstração</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Agendar Reunião</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>

              <Link to={createPageUrl('Passageiros')} className="block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Passageiro?</h3>
                      <p className="text-white/70 text-sm">Resolva seu problema</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Iniciar Conciliação</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}