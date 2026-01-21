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
    <section className="py-20 px-8 bg-ivory text-forest relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-display text-forest mb-16 text-center uppercase">
          How our services work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-24 h-24 rounded-full border-4 border-gold flex items-center justify-center bg-forest text-gold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-display text-gold uppercase tracking-wide">
                {index + 1}. {service.title}
              </h3>
              
              <p className="font-body text-lg leading-relaxed text-forest/90 font-medium">
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
