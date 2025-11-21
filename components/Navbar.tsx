import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Marcas', href: '#marcas' },
    { name: 'Categorías', href: '#categorias' },
    { name: 'Consejos', href: '#consejos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red transform -skew-x-12"></div>
            <span className="font-display font-bold text-2xl tracking-wider uppercase">
              Ayrton <span className="text-brand-red">Neumáticos</span>
            </span>
          </div>

          {/* Desktop Menu - Visible only on Extra Large screens */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/543517508932"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white px-4 py-2 rounded-none transform -skew-x-12 font-bold uppercase text-sm flex items-center gap-2 transition-transform hover:scale-105"
              >
                <span className="transform skew-x-12 flex items-center gap-2">
                  <Phone size={16} /> 351-750-8932
                </span>
              </a>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button - Visible on screens smaller than XL */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-brand-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-brand-red block px-3 py-2 rounded-md text-base font-medium uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/543517508932"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-white bg-brand-red hover:bg-red-700 block px-3 py-3 mt-4 rounded-md text-base font-bold uppercase flex items-center gap-2"
            >
              <Phone size={18} /> Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;