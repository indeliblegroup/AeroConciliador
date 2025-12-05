import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  User, 
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Linkedin,
  Clock
} from 'lucide-react';

export default function Contato() {
  const [formType, setFormType] = useState('empresa');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    mensagem: '',
    tipoProblema: '',
    numeroVoo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#0F2B46] mb-4">
                Mensagem Enviada!
              </h1>
              <p className="text-[#64748B] text-lg mb-8">
                {formType === 'empresa' 
                  ? 'Nossa equipe comercial entrará em contato em até 24 horas para agendar sua demonstração.'
                  : 'Recebemos seu caso e entraremos em contato em breve para dar andamento à sua conciliação.'
                }
              </p>
              <Button 
                onClick={() => setSubmitted(false)}
                className="bg-[#0F2B46] hover:bg-[#1E3A5F] text-white"
              >
                Enviar outra mensagem
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0F2B46] via-[#1E3A5F] to-[#0F2B46] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-white/70">
              Escolha a opção que melhor se aplica ao seu caso
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Form Type Selector */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setFormType('empresa')}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                  formType === 'empresa'
                    ? 'border-[#0F2B46] bg-[#0F2B46] text-white'
                    : 'border-gray-200 text-[#64748B] hover:border-[#0F2B46]'
                }`}
              >
                <Building2 className="w-5 h-5" />
                <span className="font-medium">Sou Companhia Aérea</span>
              </button>
              <button
                onClick={() => setFormType('passageiro')}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                  formType === 'passageiro'
                    ? 'border-[#10B981] bg-[#10B981] text-white'
                    : 'border-gray-200 text-[#64748B] hover:border-[#10B981]'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Sou Passageiro</span>
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <motion.div
                key={formType}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2"
              >
                <div className="bg-[#FAFBFC] rounded-2xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#0F2B46] mb-6">
                    {formType === 'empresa' ? 'Solicitar Demonstração' : 'Registrar Caso'}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          placeholder="Seu nome"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          required
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input
                          id="telefone"
                          placeholder="(11) 99999-9999"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          required
                          className="bg-white"
                        />
                      </div>
                      
                      {formType === 'empresa' ? (
                        <div className="space-y-2">
                          <Label htmlFor="empresa">Empresa *</Label>
                          <Input
                            id="empresa"
                            placeholder="Nome da companhia aérea"
                            value={formData.empresa}
                            onChange={(e) => handleInputChange('empresa', e.target.value)}
                            required
                            className="bg-white"
                          />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Label htmlFor="tipoProblema">Tipo de Problema *</Label>
                          <Select 
                            value={formData.tipoProblema}
                            onValueChange={(value) => handleInputChange('tipoProblema', value)}
                          >
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="atraso">Atraso de Voo</SelectItem>
                              <SelectItem value="cancelamento">Cancelamento</SelectItem>
                              <SelectItem value="bagagem">Extravio de Bagagem</SelectItem>
                              <SelectItem value="overbooking">Overbooking</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>

                    {formType === 'empresa' && (
                      <div className="space-y-2">
                        <Label htmlFor="cargo">Cargo *</Label>
                        <Input
                          id="cargo"
                          placeholder="Ex: Diretor Jurídico, Gerente de SAC"
                          value={formData.cargo}
                          onChange={(e) => handleInputChange('cargo', e.target.value)}
                          required
                          className="bg-white"
                        />
                      </div>
                    )}

                    {formType === 'passageiro' && (
                      <div className="space-y-2">
                        <Label htmlFor="numeroVoo">Número do Voo (se souber)</Label>
                        <Input
                          id="numeroVoo"
                          placeholder="Ex: LA1234"
                          value={formData.numeroVoo}
                          onChange={(e) => handleInputChange('numeroVoo', e.target.value)}
                          className="bg-white"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">
                        {formType === 'empresa' ? 'Mensagem (opcional)' : 'Descreva seu caso *'}
                      </Label>
                      <Textarea
                        id="mensagem"
                        placeholder={formType === 'empresa' 
                          ? 'Conte-nos mais sobre suas necessidades...'
                          : 'Descreva o que aconteceu com seu voo...'
                        }
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        required={formType === 'passageiro'}
                        className="bg-white min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className={`w-full py-6 text-lg rounded-xl ${
                        formType === 'empresa'
                          ? 'bg-[#0F2B46] hover:bg-[#1E3A5F]'
                          : 'bg-[#10B981] hover:bg-[#059669]'
                      }`}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {formType === 'empresa' ? 'Solicitar Demonstração' : 'Enviar Caso'}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0F2B46] mb-4">Contato Direto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0F2B46] rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#64748B]">E-mail</p>
                        <p className="font-medium text-[#0F2B46]">contato@aeroconciliador.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0F2B46] rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#64748B]">Telefone</p>
                        <p className="font-medium text-[#0F2B46]">+55 (11) 99999-9999</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#64748B]">WhatsApp</p>
                        <p className="font-medium text-[#0F2B46]">+55 (11) 99999-9999</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0F2B46] mb-4">Localização</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#0F2B46] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#64748B]">Endereço</p>
                      <p className="font-medium text-[#0F2B46]">
                        Av. Paulista, 1000<br />
                        São Paulo, SP - Brasil<br />
                        CEP 01310-100
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0F2B46] mb-4">Horário de Atendimento</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#0F2B46] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0F2B46]">
                        Segunda a Sexta<br />
                        09:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0F2B46] to-[#1E3A5F] rounded-2xl p-6">
                  <Calendar className="w-8 h-8 text-[#10B981] mb-4" />
                  <h3 className="font-bold text-white mb-2">Agende uma Reunião</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Prefere agendar diretamente? Use nosso calendário online.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    Abrir Calendly
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}