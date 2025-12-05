import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Shield, Zap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0F2B46] via-[#1E3A5F] to-[#0F2B46]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E5A8A]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Primeira Sala de Conciliação Aérea do Brasil</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Reduza litígios.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">
                Preserve relações.
              </span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              Plataforma de conciliação especializada que conecta companhias aéreas e passageiros 
              com inteligência artificial, compliance regulatório e acordos eficientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to={createPageUrl('CompanhiasAereas')}>
                <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg rounded-xl group w-full sm:w-auto">
                  Solicitar Demonstração
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Passageiros')}>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                  Resolver Problema com Voo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Lei 13.140/2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Powered by AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Compliance ANAC</span>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/60 text-sm">Painel de Conciliação</p>
                    <p className="text-white text-2xl font-bold">Dashboard Executivo</p>
                  </div>
                  <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#10B981]" />
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/50 text-xs mb-1">Taxa de Acordo</p>
                    <p className="text-3xl font-bold text-[#10B981]">87%</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/50 text-xs mb-1">Tempo Médio</p>
                    <p className="text-3xl font-bold text-white">4.2<span className="text-lg">dias</span></p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/50 text-xs mb-1">Economia/Caso</p>
                    <p className="text-3xl font-bold text-white">R$<span className="text-[#10B981]">12k</span></p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/50 text-xs mb-1">Casos Ativos</p>
                    <p className="text-3xl font-bold text-white">1.247</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 bg-gradient-to-r from-[#10B981]/20 via-[#10B981]/30 to-[#10B981]/20 rounded-xl flex items-end justify-around px-4 pb-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-6 bg-[#10B981] rounded-t-lg transition-all duration-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Acordo Fechado</p>
                    <p className="text-xs text-gray-500">Caso #4521 • Agora</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}