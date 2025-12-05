import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  Brain,
  Database,
  Shield,
  Zap,
  Link2,
  Lock,
  BarChart3,
  Cpu,
  Globe,
  FileText,
  CheckCircle2,
  Eye
} from 'lucide-react';

export default function Tecnologia() {
  const aiFeatures = [
    {
      title: 'Análise de Jurisprudência',
      description: 'Processamento contínuo de decisões judiciais de tribunais de todo o Brasil para calibrar valores e identificar tendências.'
    },
    {
      title: 'Machine Learning',
      description: 'Modelos que aprendem com cada acordo fechado, melhorando continuamente as sugestões de valores.'
    },
    {
      title: 'NLP Avançado',
      description: 'Processamento de linguagem natural para extrair informações relevantes de documentos e comunicações.'
    },
    {
      title: 'Previsão de Aceite',
      description: 'Cálculo da probabilidade de acordo com base no perfil do caso e histórico de negociações similares.'
    }
  ];

  const integrations = [
    { icon: Globe, name: 'Consumidor.gov.br', description: 'Sincronização automática de reclamações' },
    { icon: FileText, name: 'CEJUSC', description: 'Integração com centros judiciários' },
    { icon: Database, name: 'SAC/Ouvidoria', description: 'Conexão com sistemas internos' },
    { icon: BarChart3, name: 'ERP Jurídico', description: 'Export de dados para gestão' },
    { icon: Zap, name: 'APIs RESTful', description: 'Integrações customizadas' },
    { icon: Link2, name: 'Webhooks', description: 'Notificações em tempo real' }
  ];

  const securityFeatures = [
    { icon: Lock, title: 'Criptografia End-to-End', description: 'Todos os dados são criptografados em trânsito e em repouso' },
    { icon: Eye, title: 'Logs de Auditoria', description: 'Rastreamento completo de todas as ações na plataforma' },
    { icon: Shield, title: 'Conformidade LGPD', description: 'Políticas rigorosas de privacidade e proteção de dados' },
    { icon: Cpu, title: 'Infraestrutura Segura', description: 'Servidores em data centers certificados no Brasil' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] via-[#1E3A5F] to-[#0F2B46] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E5A8A]/20 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <Cpu className="w-4 h-4 text-[#10B981]" />
              <span className="text-white/80 text-sm font-medium">Tecnologia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Inteligência Artificial
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">
                a Serviço da Conciliação
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Uma plataforma robusta que combina IA, automação e segurança 
              para transformar a gestão de conflitos aéreos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Motor de IA</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
                Estimativa de Acordo Baseada em Dados
              </h2>
              <p className="text-[#64748B] text-lg mb-8">
                Nosso algoritmo analisa milhares de variáveis para sugerir a faixa de valor 
                com maior probabilidade de aceite, economizando tempo e recursos.
              </p>

              <div className="space-y-6">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 bg-[#10B981]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F2B46] mb-1">{feature.title}</h3>
                      <p className="text-[#64748B] text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* AI Dashboard Preview */}
              <div className="bg-[#FAFBFC] rounded-3xl p-8 border border-gray-100">
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F2B46]">Análise de Caso</p>
                      <p className="text-xs text-[#64748B]">Atraso de voo • GRU → MIA</p>
                    </div>
                  </div>

                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full" style={{ width: '89%' }} />
                  </div>
                  <p className="text-xs text-[#64748B]">Confiança da análise: 89%</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-xs text-[#64748B] mb-1">Faixa Sugerida</p>
                    <p className="text-lg font-bold text-[#0F2B46]">R$ 2.800 - R$ 3.500</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-xs text-[#64748B] mb-1">Prob. Aceite</p>
                    <p className="text-lg font-bold text-[#10B981]">92%</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-xs text-[#64748B] mb-1">Casos Base</p>
                    <p className="text-lg font-bold text-[#0F2B46]">1.247</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-xs text-[#64748B] mb-1">Tempo Est.</p>
                    <p className="text-lg font-bold text-[#0F2B46]">2.3 dias</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Integrações</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mt-4 mb-6">
              Conectado ao Ecossistema
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Integrações nativas com plataformas públicas e privadas para centralizar a gestão de conflitos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#0F2B46] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#10B981] transition-colors">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-2">{integration.name}</h3>
                <p className="text-sm text-[#64748B]">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold text-sm tracking-wider uppercase">Segurança</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Proteção de Dados em Primeiro Lugar
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Infraestrutura robusta com os mais altos padrões de segurança e conformidade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-14 h-14 bg-[#10B981]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
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
              Quer ver a tecnologia em ação?
            </h2>
            <p className="text-[#64748B] text-lg mb-8">
              Agende uma demonstração técnica e conheça todos os recursos da plataforma.
            </p>
            <Link to={createPageUrl('Contato')}>
              <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg rounded-xl group">
                Agendar Demo Técnica
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}