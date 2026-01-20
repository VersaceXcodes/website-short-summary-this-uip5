import React from 'react';
import { Search, FileText, Video, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const steps = [
    {
      title: "Research",
      description: "Finding the highest performing content creators in your niche.",
      icon: Search
    },
    {
      title: "Script",
      description: "Create a full month's worth of scripts using research and business information.",
      icon: FileText
    },
    {
      title: "Film & Edit",
      description: "You film the videos, and we professionally edit them.",
      icon: Video
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
        
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
          <Button 
            onClick={() => navigate('/about')}
            size="lg"
            className="font-smut uppercase tracking-wider bg-cognac-brown text-ivory hover:bg-cognac-brown/90 text-lg px-8 py-6 h-auto w-full md:w-auto"
          >
            Learn more about what we do
          </Button>
          <Button 
            onClick={() => navigate('/pricing')}
            size="lg"
            className="font-smut uppercase tracking-wider bg-cognac-brown text-ivory hover:bg-cognac-brown/90 text-lg px-8 py-6 h-auto w-full md:w-auto"
          >
            Learn more about our pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
