import React from 'react';
import { Search, FileText, Clapperboard, Upload } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const steps = [
    {
      title: "Research",
      description: "We dive deep into your industry to find what resonates.",
      icon: Search
    },
    {
      title: "Script",
      description: "Compelling narratives tailored to your brand voice.",
      icon: FileText
    },
    {
      title: "Film & Edit",
      description: "High-quality production and professional editing.",
      icon: Clapperboard
    },
    {
      title: "Upload",
      description: "Strategic distribution to maximize reach.",
      icon: Upload
    }
  ];

  return (
    <section className="py-24 bg-ivory text-cognac-brown">
      <div className="container mx-auto px-6">
        <h2 className="font-smut text-4xl md:text-6xl text-center mb-16 uppercase tracking-tight">
          How our services work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-cognac-brown text-ivory rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 shadow-lg">
                <step.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-smut text-2xl mb-4 uppercase">{step.title}</h3>
              <p className="font-smut-full text-lg leading-relaxed opacity-90 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
