import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { TrendingDown, Clock, Banknote, Scale } from 'lucide-react';

export default function MetricsSection() {
  const metrics = [
    {
      icon: TrendingDown,
      value: 58,
      suffix: '%',
      label: 'Redução de Judicialização',
      description: 'Menos processos para sua companhia',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Clock,
      value: 4,
      suffix: ' dias',
      label: 'Tempo Médio de Resolução',
      description: 'Do registro ao acordo fechado',
      color: 'from-[#1E5A8A] to-[#0F2B46]'
    },
    {
      icon: Banknote,
      value: 12,
      prefix: 'R$ ',
      suffix: 'k',
      label: 'Economia por Caso',
      description: 'Comparado ao custo judicial médio',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: Scale,
      value: 87,
      suffix: '%',
      label: 'Taxa de Acordos',
      description: 'Casos resolvidos com sucesso',
      color: 'from-[#1E5A8A] to-[#0F2B46]'
    }
  ];

  return (
    <section className="py-24 bg-[#FAFBFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTIwIDIwbS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMCIgZmlsbD0icmdiYSgxNSw0Myw3MCwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Resultados Comprovados</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
            Métricas que Transformam o Setor
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Dados reais de companhias aéreas que utilizam nossa Sala de Conciliação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden h-full">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color}`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-[#0F2B46] mb-2">
                  <AnimatedCounter 
                    end={metric.value} 
                    suffix={metric.suffix}
                    prefix={metric.prefix || ''}
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#0F2B46] mb-2">
                  {metric.label}
                </h3>

                <p className="text-[#64748B] text-sm">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}