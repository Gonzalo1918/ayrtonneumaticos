import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Si el enlace es '#' o inicio, vamos arriba
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100; // Mismo offset que en Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-brand-red transform -skew-x-12"></div>
              <span className="font-display font-bold text-xl tracking-wider uppercase">
                Ayrton <span className="text-brand-red">Neumáticos</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Líderes en venta y distribución de neumáticos en Córdoba Capital. 
              Compromiso con la seguridad y el rendimiento de tu vehículo.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ayrton_neumaticos/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red mt-1 flex-shrink-0" />
                <span>Av. Colón 4500, Córdoba Capital,<br />Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-red flex-shrink-0" />
                <span>+54 351 750-8932</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-brand-red mt-1 flex-shrink-0" />
                <span>Lun - Vie: 8:30 - 18:30<br />Sáb: 9:00 - 13:00</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-brand-red transition-colors">Inicio</a></li>
              <li><a href="#categorias" onClick={(e) => handleNavClick(e, '#categorias')} className="hover:text-brand-red transition-colors">Catálogo</a></li>
              <li><a href="#marcas" onClick={(e) => handleNavClick(e, '#marcas')} className="hover:text-brand-red transition-colors">Marcas</a></li>
              <li><a href="#consejos" onClick={(e) => handleNavClick(e, '#consejos')} className="hover:text-brand-red transition-colors">Tips de Mantenimiento</a></li>
              <li><a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="hover:text-brand-red transition-colors">Solicitar Presupuesto</a></li>
            </ul>
          </div>

          {/* Legal / Small Map Placeholder */}
          <div>
            <h4 className="font-display font-bold uppercase text-lg mb-6">Ubicación</h4>
            <div className="w-full h-40 bg-gray-800 rounded-sm overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108984.41435231935!2d-64.188776!3d-31.420083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a51810163!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Ayrton Neumáticos. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado para Córdoba</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;