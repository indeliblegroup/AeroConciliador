import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Para Companhias', href: 'CompanhiasAereas' },
    { name: 'Para Passageiros', href: 'Passageiros' },
    { name: 'Como Funciona', href: 'ComoFunciona' },
    { name: 'Tecnologia', href: 'Tecnologia' },
    { name: 'Compliance', href: 'Compliance' },
    { name: 'Sobre Nós', href: 'Sobre' },
  ];

  const isActive = (href) => location.pathname === `/${href}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-[#0F2B46]/85 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-[#0F2B46]' : 'bg-white/10'
            }`}>
              <Plane className="w-5 h-5 text-white" style={{ transform: 'rotate(-45deg)' }} />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-[#0F2B46]' : 'text-white'
            }`}>
              AeroConciliador
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={createPageUrl(link.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? isActive(link.href) ? 'text-[#10B981]' : 'text-[#64748B] hover:text-[#0F2B46]'
                    : isActive(link.href) ? 'text-[#10B981]' : 'text-white hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to={createPageUrl('Contato')}>
              <Button 
                className={`rounded-xl px-6 transition-all ${
                  isScrolled 
                    ? 'bg-[#10B981] hover:bg-[#059669] text-white' 
                    : 'bg-[#10B981] hover:bg-[#059669] text-white'
                }`}
              >
                Fale Conosco
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-[#0F2B46]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-[#0F2B46]' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={createPageUrl(link.href)}
                    className={`block py-2 text-lg font-medium ${
                      isActive(link.href) ? 'text-[#10B981]' : 'text-[#0F2B46]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to={createPageUrl('Contato')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-[#10B981] hover:bg-[#059669] rounded-xl mt-4">
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}