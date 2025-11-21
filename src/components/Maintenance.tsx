import React from 'react';

const Maintenance: React.FC = () => {
  const tips = [
    {
      title: "Presión de Inflado",
      desc: "Revisá la presión cada 15 días. Una presión correcta reduce el desgaste y ahorra combustible.",
      image: "https://images.unsplash.com/photo-1624520393838-90749e6b64f6?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Rotación",
      desc: "Rotá tus neumáticos cada 10.000 km para asegurar un desgaste parejo y extender su vida útil.",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Alineación",
      desc: "Si el auto tira hacia un lado, necesitás alinear. Evita el desgaste irregular de la banda de rodamiento.",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Balanceo",
      desc: "Evitá vibraciones en el volante a altas velocidades realizando un balanceo preciso de las 4 ruedas.",
      image: "https://images.unsplash.com/photo-1574079689778-bfa27b383c00?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="consejos" className="py-20 bg-brand-gray relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase">
              Cuidado del <span className="text-brand-red">Neumático</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg">
              Maximizá la vida útil de tus cubiertas y garantizá tu seguridad con estos consejos esenciales de mantenimiento.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index} 
              className="bg-black border border-white/10 group overflow-hidden hover:border-brand-red/50 transition-colors duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase mb-3 group-hover:text-brand-red transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
