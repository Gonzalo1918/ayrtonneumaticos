import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1611566026373-c6c85447dbdc?q=80&w=2670&auto=format&fit=crop"
          alt="Fondo Ayrton Neumáticos"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-block bg-brand-red px-4 py-1 mb-6 transform -skew-x-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="block transform skew-x-12 font-bold uppercase tracking-widest text-sm">
              Neumáticos en Córdoba
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 uppercase opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Con vos en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">cada kilómetro</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Especialistas en asesoramiento y venta de neumáticos de alta performance en Córdoba. 
            Seguridad, tecnología y el mejor agarre para tu vehículo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#categorias" 
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all hover:translate-x-2 flex items-center justify-center gap-2 group"
            >
              Ver Tipos de Usos
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contacto" 
              className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all flex items-center justify-center"
            >
              Consultar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
