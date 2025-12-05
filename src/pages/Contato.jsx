import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Building2,
  User,
  CheckCircle2
} from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'demonstração',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: 'demonstração',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      details: 'contato@aeroconciliador.com.br',
      subdetails: 'comercial@aeroconciliador.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: '+55 (11) 99999-9999',
      subdetails: 'Seg a Sex, 9h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: 'Av. Paulista, 1000',
      subdetails: 'São Paulo - SP, Brasil'
    },
    {
      icon: Clock,
      title: 'Horário',
      details: 'Segunda a Sexta',
      subdetails: '09:00 - 18:00'
    }
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Vamos Conversar?
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Entre em contato para agendar uma demonstração ou esclarecer dúvidas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto -mt-24 relative z-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#10B981] transition-all"
              >
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="font-bold text-[#0F2B46] mb-2">{info.title}</h3>
                <p className="text-[#64748B] text-sm">{info.details}</p>
                <p className="text-[#64748B] text-xs mt-1">{info.subdetails}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0F2B46] mb-6">
                Envie sua Mensagem
              </h2>
              <p className="text-[#64748B] mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-700">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Seu nome"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="seu@email.com"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Nome da empresa"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(11) 99999-9999"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                    >
                      <option value="demonstração">Solicitar Demonstração</option>
                      <option value="parceria">Proposta de Parceria</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="duvida">Dúvida Geral</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Conte-nos mais sobre sua necessidade..."
                      rows={6}
                      className="rounded-xl"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white rounded-xl py-6 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#0F2B46] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F2B46] text-lg mb-2">
                      Para Companhias Aéreas
                    </h3>
                    <p className="text-[#64748B] text-sm">
                      Agende uma demonstração executiva e conheça como nossa plataforma pode 
                      reduzir custos e melhorar a gestão de conflitos da sua companhia.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Demonstração personalizada',
                    'Análise de casos da sua companhia',
                    'Estimativa de ROI',
                    'Plano de implementação'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-[#64748B]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F2B46] text-lg mb-2">
                      Para Passageiros
                    </h3>
                    <p className="text-[#64748B] text-sm">
                      Tem um problema com voo e quer resolver de forma rápida? 
                      Entre em contato conosco e iniciaremos o processo de conciliação.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Atendimento humanizado',
                    'Sem custos para o passageiro',
                    'Resolução em poucos dias',
                    'Acompanhamento transparente'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-[#64748B]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTIwIDIwbS0xIDBhMSAxIDAgMSAwIDIgMGExIDEgMCAxIDAgLTIgMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
                <div className="relative z-10">
                  <h3 className="font-bold text-white text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Nossa equipe está disponível para atendê-lo:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Segunda a Sexta</span>
                      <span className="text-white font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Sábado</span>
                      <span className="text-white font-medium">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Domingo</span>
                      <span className="text-white font-medium">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}