import { Search, FileText, Film, Upload } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Research',
    description: 'Data-driven insights into high-performing content within your niche across all platforms.'
  },
  {
    icon: FileText,
    title: 'Script',
    description: 'Strategic content planning with a full month of scripts tailored to your brand voice.'
  },
  {
    icon: Film,
    title: 'Edit',
    description: 'Professional post-production including subtitles, color grading, and seamless assembly.'
  },
  {
    icon: Upload,
    title: 'Deploy',
    description: 'Platform-optimized distribution across Instagram, TikTok, YouTube, Facebook, and LinkedIn.'
  }
];

const Services = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-ivory via-[#F5F0E1] to-ivory text-forest relative overflow-hidden">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(1, 68, 33, 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Premium section header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24 space-y-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-forest leading-[1.1] tracking-tight">
            Our Process
          </h2>
          <p className="font-body text-lg md:text-xl text-forest/60 font-light max-w-2xl mx-auto">
            A refined approach to content excellence
          </p>
        </div>
        
        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              
              {/* Card container */}
              <div className="elevated-card p-8 rounded-2xl shadow-luxury transition-premium hover:shadow-luxury-hover h-full flex flex-col">
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest to-forest/80 flex items-center justify-center text-gold transition-premium group-hover:scale-110">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-display text-3xl font-bold text-gold/30">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="font-display font-bold text-2xl text-forest">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="font-body text-base leading-relaxed text-forest/70 font-light">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
