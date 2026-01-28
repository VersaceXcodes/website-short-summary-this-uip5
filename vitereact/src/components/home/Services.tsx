import { Search, FileText, Film, Upload } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Research',
    description: 'We find the highest performing content creators and content within your niche/business on each social media platforms.'
  },
  {
    icon: FileText,
    title: 'Script',
    description: 'Using the research and information on your business, we create you a full months worth of scripts.'
  },
  {
    icon: Film,
    title: 'Film & Edit',
    description: 'Using the scripts you film the videos. We edit the videos for you. From subtitle, colour-grading to putting all the videos together.'
  },
  {
    icon: Upload,
    title: 'Upload',
    description: 'We upload the content on your chosen social media channels, in a manner that\'s optimized for each platform (Instagram, TikTok, Facebook, YouTube, LinkedIn).'
  }
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-ivory text-forest relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display text-forest mb-10 sm:mb-12 md:mb-16 text-center uppercase">
          How our services work
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 sm:space-y-6 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gold flex items-center justify-center bg-forest text-gold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} strokeWidth={1.5} className="sm:w-10 sm:h-10" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display text-gold uppercase tracking-wide">
                {index + 1}. {service.title}
              </h3>
              
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest/90 font-medium px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
