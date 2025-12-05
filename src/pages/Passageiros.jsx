import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Upload, 
  MessageSquare, 
  CheckCircle2,
  Clock,
  Shield,
  Heart,
  Zap,
  AlertCircle
} from 'lucide-react';

export default function Passageiros() {
  const steps = [
    {
      icon: FileText,
      title: 'Registre seu Caso',
      description: 'Preencha um formulário simples com os detalhes do seu voo e o problema enfrentado.'
    },
    {
      icon: Upload,
      title: 'Envie Documentos',
      description: 'Faça upload do seu bilhete, comprovantes e qualquer documentação relevante.'
    },
    {
      icon: MessageSquare,
      title: 'Receba Proposta',
      description: 'Nossa equipe analisa seu caso e a companhia apresenta uma proposta de acordo em poucos dias.'
    },
    {
      icon: CheckCircle2,
      title: 'Conclua o Acordo',
      description: 'Se aceitar a proposta, o acordo é formalizado com validade jurídica e você recebe sua compensação.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Resolução Rápida',
      description: 'Média de 4 dias para resolver, sem esperar anos na justiça'
    },
    {
      icon: Shield,
      title: 'Sem Custos',
      description: 'Não há taxas ou custos para o passageiro utilizar a plataforma'
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Conciliadores certificados que entendem sua situação'
    },
    {
      icon: Zap,
      title: 'Processo Digital',
      description: 'Tudo online, sem precisar sair de casa'
    }
  ];

  const eligibleCases = [
    'Atraso de voo superior a 4 horas',
    'Cancelamento de voo',
    'Overbooking (preterição de embarque)',
    'Extravio, dano ou atraso de bagagem',
    'Problemas com reembolso',
    'Downgrade (mudança de classe)'
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
              <span className="inline-block px-4 py-2 bg-[#10B981]/20 text-[#10B981] rounded-full text-sm font-semibold mb-6">
                Para Passageiros
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Resolva seu Problema com Voo de Forma Rápida
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Evite a burocracia e o tempo de um processo judicial. Nossa Sala de Conciliação 
                conecta você diretamente com a companhia aérea para um acordo justo e ágil.
              </p>
              <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-6 text-lg rounded-xl">
                Iniciar Conciliação
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Como Funciona para Você
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Um processo simples e transparente do início ao fim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-[#10B981]/30" />
                )}
                <h3 className="font-bold text-[#0F2B46] text-lg mb-3">{step.title}</h3>
                <p className="text-[#64748B] text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Vantagens da Conciliação
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Por que escolher nosso serviço em vez de entrar com um processo judicial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-3">{benefit.title}</h3>
                <p className="text-[#64748B] text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
                Casos que Atendemos
              </h2>
              <p className="text-[#64748B] text-lg">
                Situações comuns que podem ser resolvidas por nossa Sala de Conciliação
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {eligibleCases.map((caseType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#FAFBFC] rounded-xl border border-gray-100"
                >
                  <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="text-[#0F2B46] font-medium">{caseType}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F2B46] mb-2">Importante</h3>
                  <p className="text-[#64748B] text-sm">
                    Não somos um escritório de advocacia. Somos uma plataforma de conciliação que 
                    facilita o diálogo entre passageiros e companhias aéreas. Se não houver acordo, 
                    você continua com o direito de buscar a justiça comum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Resolver seu Problema?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Registre seu caso agora e receba uma resposta em poucos dias
            </p>
            <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-6 text-lg rounded-xl">
              Registrar Meu Caso
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}