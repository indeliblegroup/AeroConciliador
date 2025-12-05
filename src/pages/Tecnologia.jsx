import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  Link2, 
  Lock,
  BarChart3,
  FileText,
  CheckCircle2,
  Code,
  Globe,
  Cpu
} from 'lucide-react';

export default function Tecnologia() {
  const features = [
    {
      icon: Brain,
      title: 'Motor de IA Preditivo',
      description: 'Algoritmos de machine learning treinados com dezenas de milhares de casos reais para sugerir a faixa de acordo com maior probabilidade de aceite.',
      tech: ['TensorFlow', 'NLP', 'Análise Preditiva']
    },
    {
      icon: Database,
      title: 'Base Jurisprudencial',
      description: 'Análise contínua de decisões judiciais em tempo real para calibrar valores e argumentos de negociação conforme o cenário legal atual.',
      tech: ['Web Scraping', 'Data Mining', 'Jurimetria']
    },
    {
      icon: Link2,
      title: 'Integrações Nativas',
      description: 'Conectado ao Consumidor.gov, CEJUSC, sistemas SAC e plataformas de ouvidoria das companhias através de APIs robustas.',
      tech: ['REST APIs', 'Webhooks', 'OAuth 2.0']
    },
    {
      icon: Lock,
      title: 'Segurança & Auditoria',
      description: 'Criptografia end-to-end, logs de auditoria completos e conformidade total com LGPD para proteção máxima de dados sensíveis.',
      tech: ['AES-256', 'TLS 1.3', 'ISO 27001']
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Workflows automatizados para triagem, notificações, geração de documentos e integração com sistemas financeiros.',
      tech: ['RPA', 'Smart Contracts', 'Event-Driven']
    },
    {
      icon: Shield,
      title: 'Compliance Regulatório',
      description: 'Alinhamento total com ANAC, CDC, CBA e Lei de Mediação (13.140/2015) com atualizações automáticas de normativas.',
      tech: ['Compliance Engine', 'Audit Trail', 'RegTech']
    }
  ];

  const aiCapabilities = [
    {
      title: 'Análise de Casos',
      description: 'Classificação automática por tipo, urgência e valor estimado',
      accuracy: '94%'
    },
    {
      title: 'Previsão de Acordo',
      description: 'Probabilidade de sucesso baseada em padrões históricos',
      accuracy: '92%'
    },
    {
      title: 'Sugestão de Valor',
      description: 'Faixa ideal de acordo com base em jurisprudência',
      accuracy: '89%'
    },
    {
      title: 'Detecção de Fraudes',
      description: 'Identificação de casos suspeitos ou fraudulentos',
      accuracy: '96%'
    }
  ];

  const techStack = [
    { category: 'Frontend', tech: 'React, TypeScript, TailwindCSS' },
    { category: 'Backend', tech: 'Node.js, Python, FastAPI' },
    { category: 'Database', tech: 'PostgreSQL, MongoDB, Redis' },
    { category: 'AI/ML', tech: 'TensorFlow, scikit-learn, Hugging Face' },
    { category: 'Cloud', tech: 'AWS, Docker, Kubernetes' },
    { category: 'Security', tech: 'Auth0, Vault, CloudFlare' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F2B46] via-[#1E3A5F] to-[#0F2B46] py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E5A8A]/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTIwIDIwbS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Inteligência Artificial a Serviço da Justiça
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Combinamos tecnologia de ponta com expertise jurídica para criar 
                o ecossistema mais eficiente de resolução de conflitos aéreos
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Recursos Tecnológicos
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Uma plataforma completa construída com as melhores práticas de engenharia de software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAFBFC] rounded-2xl p-8 border border-gray-100 hover:border-[#10B981] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2B46] mb-3">{feature.title}</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Capacidades da Inteligência Artificial
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Nosso motor de IA foi treinado com mais de 50.000 casos reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <Brain className="w-8 h-8 text-[#10B981]" />
                  <span className="text-2xl font-bold text-[#10B981]">{capability.accuracy}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-white/60 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
              Stack Tecnológico
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Ferramentas e frameworks enterprise-grade para máxima performance e confiabilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-5 h-5 text-[#10B981]" />
                  <h3 className="font-bold text-[#0F2B46]">{item.category}</h3>
                </div>
                <p className="text-[#64748B] text-sm">{item.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">
                  Segurança e Conformidade
                </h2>
                <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                  Proteção de dados sensíveis com os mais altos padrões de segurança da informação, 
                  garantindo conformidade total com LGPD e regulamentações do setor.
                </p>

                <div className="space-y-4">
                  {[
                    'Criptografia AES-256 para dados em repouso',
                    'TLS 1.3 para dados em trânsito',
                    'Autenticação multi-fator (MFA)',
                    'Logs de auditoria imutáveis',
                    'Backup automático e disaster recovery',
                    'Certificação ISO 27001 em processo'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#10B981]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      </div>
                      <span className="text-[#64748B]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTIwIDIwbS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
                
                <div className="relative z-10">
                  <Lock className="w-16 h-16 text-[#10B981] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Certificações</h3>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'LGPD', desc: 'Lei Geral de Proteção de Dados' },
                      { name: 'ISO 27001', desc: 'Segurança da Informação' },
                      { name: 'SOC 2', desc: 'Service Organization Control' },
                      { name: 'PCI DSS', desc: 'Payment Card Industry' }
                    ].map((cert, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-[#10B981]" />
                          <div>
                            <p className="text-white font-semibold">{cert.name}</p>
                            <p className="text-white/60 text-xs">{cert.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}