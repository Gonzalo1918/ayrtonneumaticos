import React from 'react';

interface BrandData {
  id: string;
  name: string;
  logo: string;
}

const Brands: React.FC = () => {
  const brandsData: BrandData[] = [
    {
      id: 'fate',
      name: 'Fate',
      logo: '/images/logo_fate.png',
    },
    {
      id: 'pirelli',
      name: 'Pirelli',
      logo: '/images/logo_pirelli.png',
    },
    {
      id: 'michelin',
      name: 'Michelin',
      logo: '/images/logo_michelin.png',
    },
    {
      id: 'bfgoodrich',
      name: 'BFGoodrich',
      logo: '/images/logo_michelin.png',
    },
    {
      id: 'windforce',
      name: 'Windforce',
      logo: 'https://www.pneus-online.es/public/static/logos/brands/windforce.png', 
    },
    {
      id: 'westlake',
      name: 'Westlake',
      logo: '/images/logo_westlake.png',
    }
  ];

  return (
    <section id="marcas" className="py-16 bg-brand-gray border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold uppercase mb-2">Nuestras Marcas</h2>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-sm">
            Garantía de Calidad y Performance
          </p>
          <div className="h-1 w-16 bg-brand-red mx-auto mt-4 transform -skew-x-12"></div>
        </div>
        
        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="group relative h-24 w-full flex items-center justify-center bg-white/5 rounded-sm border border-transparent hover:bg-white/10 hover:border-brand-red/30 transition-all duration-500"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                loading="lazy"
                className="max-h-12 w-auto max-w-[80%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
