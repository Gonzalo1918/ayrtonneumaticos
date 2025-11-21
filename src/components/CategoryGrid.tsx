import React from 'react';

interface GridItemProps {
  title: string;
  image: string;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, image, className }) => (
  <div className={`relative group overflow-hidden border border-white/10 ${className}`}>
    <img 
      src={image}
      alt={title}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="font-display text-2xl md:text-3xl font-bold italic uppercase text-white group-hover:text-brand-red transition-colors relative z-10 inline-block">
        {title}
        <div className="h-1 w-1/2 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></div>
      </h3>
    </div>
  </div>
);

const CategoryGrid: React.FC = () => {
  return (
    <section id="categorias" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">
            Un neumático para <span className="text-brand-red">cada destino</span>
          </h2>
          <div className="h-1 w-24 bg-brand-red mx-auto transform -skew-x-12"></div>
        </div>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          
          {/* Offroad - Top Left (Spans 2 cols) */}
          <GridItem 
            title="Offroad" 
            image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2670&auto=format&fit=crop" 
            className="md:col-span-2"
          />

          {/* Deportivos - Top Right */}
          <GridItem 
            title="Deportivos" 
            image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop" 
            className="md:col-span-1"
          />

          {/* Utilitarios - Bottom Left */}
          <GridItem 
            title="Utilitarios" 
            image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2675&auto=format&fit=crop" 
            className="md:col-span-1"
          />

          {/* SUV - Bottom Center */}
          <GridItem 
            title="SUV" 
            image="https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=2574&auto=format&fit=crop" 
            className="md:col-span-1"
          />

          {/* Ecológicos - Bottom Right */}
          <GridItem 
            title="Ecológicos" 
            image="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop" 
            className="md:col-span-1"
          />

        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
