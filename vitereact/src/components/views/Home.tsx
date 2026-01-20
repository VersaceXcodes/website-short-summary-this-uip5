import React from 'react';
import logo from '@/assets/logo.svg';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="relative min-h-screen bg-cognac-brown flex items-center justify-center overflow-hidden pt-20">
        {/* Logo Layer - centered and behind text */}
        <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none opacity-20">
          <img 
              src={logo} 
              alt="Agency Logo" 
              className="w-[80%] md:w-[60%] max-w-3xl h-auto" 
          />
        </div>

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 py-12">
          {/* Left Side - Descriptive Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
            <p className="font-smut-full text-ivory text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-xl">
              We specialize in crafting compelling social media narratives that resonate with your audience. 
              From in-depth market research and creative scripting to professional filming, editing, and strategic distribution, 
              we handle every aspect of your content journey.
            </p>
          </div>

          {/* Right Side - Main Headline */}
          <div className="w-full md:w-1/2 flex flex-col items-end justify-center text-right order-1 md:order-2">
              <h1 className="font-smut text-ivory text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight">
                Taking Your<br />
                Business to<br />
                the Next<br />
                Level
              </h1>
          </div>
        </div>
      </div>
      
      <ServicesSection />
      <FAQSection />
    </div>
  );
};

export default Home;
