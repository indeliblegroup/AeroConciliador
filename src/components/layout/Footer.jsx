import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Plane, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    solucoes: [
      { name: 'Para Companhias Aéreas', href: 'CompanhiasAereas' },
      { name: 'Para Passageiros', href: 'Passageiros' },
      { name: 'Tecnologia', href: 'Tecnologia' },
      { name: 'Como Funciona', href: 'ComoFunciona' },
    ],
    empresa: [
      { name: 'Sobre Nós', href: 'Sobre' },
      { name: 'Compliance', href: 'Compliance' },
      { name: 'Contato', href: 'Contato' },
    ],
    legal: [
      { name: 'Política de Privacidade', href: 'Home' },
      { name: 'Termos de Uso', href: 'Home' },
    ],
  };

  return (
    <footer className="bg-[#0F2B46] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#10B981] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" style={{ transform: 'rotate(-45deg)' }} />
              </div>
              <span className="text-xl font-bold">AeroConciliador</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A primeira Sala de Conciliação dedicada ao setor aéreo no Brasil. 
              Inteligência, compliance e acordos eficientes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#10B981] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#10B981] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="font-semibold mb-6">Soluções</h3>
            <ul className="space-y-3">
              {links.solucoes.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-white/60 hover:text-[#10B981] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-white/60 hover:text-[#10B981] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4" />
                <span>contato@aeroconciliador.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} AeroConciliador Brasil. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <Link 
                key={link.name}
                to={createPageUrl(link.href)}
                className="text-white/40 hover:text-white/60 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}