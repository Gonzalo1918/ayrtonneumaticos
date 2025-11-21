import React, { useState } from 'react';
import { Send, Mail, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds if needed, or leave as success
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('submitting');
    setTimeout(() => {
      setNewsletterStatus('success');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red/10 via-black to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Newsletter / Promo */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
              ¿Buscás <span className="text-brand-red">Descuentos?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Suscribite a nuestra lista de difusión para recibir alertas de stock, promociones exclusivas en Pirelli y Fate, y recordatorios de mantenimiento.
            </p>
            
            <div className="bg-brand-gray p-8 border-l-4 border-brand-red transition-all duration-300">
              {newsletterStatus === 'success' ? (
                <div className="flex flex-col items-center text-center py-4 animate-fade-in-up">
                  <CheckCircle size={48} className="text-green-500 mb-3" />
                  <h4 className="text-xl font-bold text-white mb-2">¡Suscripción Exitosa!</h4>
                  <p className="text-gray-400">Gracias por unirte a nuestra comunidad.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-4 text-brand-red">
                    <Mail size={24} />
                    <span className="font-bold uppercase tracking-wider">Newsletter</span>
                  </div>
                  <form className="flex flex-col gap-4" onSubmit={handleNewsletterSubmit}>
                    <input 
                      type="email" 
                      required
                      placeholder="Tu correo electrónico" 
                      className="bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors w-full"
                    />
                    <button 
                      type="submit"
                      disabled={newsletterStatus === 'submitting'}
                      className="bg-white text-black font-bold uppercase py-3 px-6 hover:bg-brand-red hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {newsletterStatus === 'submitting' ? 'Procesando...' : 'Suscribirme'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* General Contact Form */}
          <div className="bg-brand-gray/30 backdrop-blur-sm p-8 md:p-10 border border-white/10 min-h-[500px] flex flex-col justify-center">
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h3 className="font-display text-3xl font-bold uppercase mb-4">¡Mensaje Enviado!</h3>
                <p className="text-gray-300 text-lg max-w-md mx-auto">
                  Gracias por contactarnos. Un asesor de Ayrton Neumáticos se comunicará con vos a la brevedad.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-brand-red font-bold uppercase tracking-wider hover:text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold uppercase mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand-red"></div>
                  Envíanos tu consulta
                </h3>
                
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Nombre</label>
                      <input required type="text" className="w-full bg-black border border-white/10 p-3 focus:border-brand-red focus:outline-none text-white transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Teléfono</label>
                      <input required type="tel" className="w-full bg-black border border-white/10 p-3 focus:border-brand-red focus:outline-none text-white transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Modelo de Vehículo</label>
                    <input type="text" className="w-full bg-black border border-white/10 p-3 focus:border-brand-red focus:outline-none text-white transition-colors" />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Consulta</label>
                    <textarea required rows={4} className="w-full bg-black border border-white/10 p-3 focus:border-brand-red focus:outline-none text-white transition-colors"></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-brand-red hover:bg-red-700 text-white font-bold uppercase py-4 tracking-widest transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : (
                      <>Enviar Mensaje <Send size={18} /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;