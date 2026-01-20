import React from 'react';
import { Search, FileText, Video, Upload } from 'lucide-react';

const DetailedServicesSection: React.FC = () => {
  const services = [
    {
      title: "Research",
      description: "Finding the highest performing content creators in your niche.",
      detail: "We dive deep into your industry, committing 10-15 hours of brand research to identify trends. We analyze 3-4 second user attention spans and perform pattern analysis to pinpoint what resonates. Our process includes 2-4 week research update cycles to uncover key elements that drive engagement, ensuring every piece of content has a strategic foundation.",
      icon: Search
    },
    {
      title: "Script",
      description: "Create a full month's worth of scripts using research and business information.",
      detail: "Armed with our research, we craft compelling scripts tailored to your business. We develop a full month's worth of content that educates, entertains, and converts. We emphasize consistency, ensuring each script hooks viewers and delivers value, seamlessly integrating your business objectives with storytelling.",
      icon: FileText
    },
    {
      title: "Film & Edit",
      description: "You film the videos, and we professionally edit them.",
      detail: "Production is a collaborative effort. We guide you on cost-effective phone filming (targeting 1080p 30fps for social media). Once you send us the clips, our professional editors take over. We provide comprehensive services including subtitles, sound design, and color grading to transform your footage into polished videos.",
      icon: Video
    },
    {
      title: "Upload",
      description: "Optimized content uploading across multiple social media platforms.",
      detail: "Consistency is key. We optimize content for platform-specific algorithms including TikTok, Instagram, YouTube Shorts, and LinkedIn. We manage the scheduling, write engaging captions, and use relevant hashtags to maximize reach, ensuring your brand stays visible and active without you lifting a finger.",
      icon: Upload
    }
  ];

  return (
    <section className="py-20 border-t border-ivory/20" id="detailed-services">
      <div className="container mx-auto px-6">
        <h2 className="font-smut text-4xl md:text-6xl text-center mb-16 uppercase text-antique-gold">
          Our Process
        </h2>
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
              <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 rounded-full bg-cognac-brown/20 border-2 border-antique-gold text-antique-gold shadow-lg">
                <service.icon size={56} strokeWidth={1.2} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-smut text-3xl md:text-5xl mb-4 text-ivory uppercase">
                  {service.title}
                </h3>
                <h4 className="font-smut-full text-xl md:text-2xl text-antique-gold mb-6">
                  {service.description}
                </h4>
                <p className="font-smut-full text-lg md:text-xl leading-relaxed text-ivory/80 max-w-3xl">
                  {service.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
