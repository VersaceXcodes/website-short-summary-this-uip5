const About = () => {
  return (
    <main className="gradient-forest min-h-screen text-ivory relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display text-gold mb-8 sm:mb-10 md:mb-12 uppercase text-shadow-luxury">
          Our Story
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div className="space-y-4 sm:space-y-6 font-body text-base sm:text-lg leading-relaxed text-ivory/90">
            <p className="text-xl sm:text-2xl font-display text-gold mb-3 sm:mb-4 text-shadow-gold">
              We started this agency with one key principle: There's a story worth telling for every business — it just needs the right content to be told.
            </p>
            <p>
              We identified a gap. So many great businesses — from gyms and restaurants to online coaches and e-commerce businesses — were struggling, not growing online. We realized social media was where to get seen, but creating content that actually works was scary:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gold">
              <li><span className="text-ivory">What do we share?</span></li>
              <li><span className="text-ivory">How do we make it stand out?</span></li>
              <li><span className="text-ivory">How do we find the time?</span></li>
            </ul>
            <p className="text-lg sm:text-xl font-bold text-gold uppercase tracking-wide py-2">
              That's where we stepped in.
            </p>
            <p>
              We founded Cinebih to take the guesswork out of content creation. By discovering what performs best in every industry, we script a month, guide you through simple filming, then handle the editing, optimizing, and posting on TikTok, Instagram, YouTube Shorts, Facebook, and LinkedIn.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6 font-body text-base sm:text-lg leading-relaxed text-ivory/90 glass-effect-dark p-6 sm:p-8 border-2 border-gold/40 rounded-2xl shadow-luxury hover:border-gold/60 transition-luxury group relative overflow-hidden">
            {/* Subtle shine on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shine-effect pointer-events-none"></div>
            
            <p className="relative z-10">
              Our strategy rests upon one simple fact: each industry has differences.
            </p>
            <ul className="space-y-3 sm:space-y-4 relative z-10">
              <li className="flex flex-col sm:flex-row sm:gap-4 group/item">
                <span className="text-gold font-display text-lg sm:text-xl mb-1 sm:mb-0 sm:whitespace-nowrap group-hover/item:text-rust transition-colors">Restaurants</span>
                <span>need content that brings local consumers to their front door.</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4 group/item">
                <span className="text-gold font-display text-lg sm:text-xl mb-1 sm:mb-0 sm:whitespace-nowrap group-hover/item:text-rust transition-colors">E-commerce</span>
                <span>businesses need global exposure to be seen above the crowd.</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4 group/item">
                <span className="text-gold font-display text-lg sm:text-xl mb-1 sm:mb-0 sm:whitespace-nowrap group-hover/item:text-rust transition-colors">Coaches</span>
                <span>and educators need personal branding in order to build trust.</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4 group/item">
                <span className="text-gold font-display text-lg sm:text-xl mb-1 sm:mb-0 sm:whitespace-nowrap group-hover/item:text-rust transition-colors">Service Pros</span>
                <span>need credibility and consistency to gain clients.</span>
              </li>
            </ul>
            <p className="pt-3 sm:pt-4 italic text-gold/80 relative z-10">
              We don't believe in generic thought. We believe in tailored content to suit your industry and goals.
            </p>
            <p className="relative z-10">
              What started as an idea to help a few local businesses has grown into an arena where brands from everywhere can leverage social media into their biggest growth engine.
            </p>
            <p className="text-xl sm:text-2xl font-display text-gold pt-3 sm:pt-4 text-shadow-gold relative z-10">
              Because at the end of the day, content isn't about views. It's about creating relationships, fostering trust, and building your business.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-ivory via-[#F5F0E1] to-[#EFE9D6] text-forest relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(1, 68, 33, 0.1) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24 relative z-10">
          
          {/* Research */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
             <div className="group">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-forest mb-4 sm:mb-6 uppercase text-shadow-luxury">Research</h2>
                <h3 className="text-xl sm:text-2xl font-display text-gold mb-3 sm:mb-4 text-shadow-gold">Why & What do we research?</h3>
                <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
                   <p className="font-bold">On average social media users watch for 3-4 seconds before scrolling away.</p>
                   <p>We look for patterns and what keeps viewers engaged.</p>
                   <p>We ensure to spend 10-15 hours for your brand in research. Patterns constantly change so we ensure to stay up to date by researching roughly every 2-4 weeks to keep your business up to date with all other social media users.</p>
                   <p className="italic border-l-4 border-gold pl-4 py-2 bg-gold/5">What we look for are hooks that are used and created results for multiple businesses or niches similar to your business model.</p>
                </div>
             </div>
             <div className="gradient-forest p-8 sm:p-10 md:p-12 rounded-2xl transform rotate-2 shadow-luxury border-4 border-gold group hover:rotate-0 transition-luxury hover:shadow-gold">
                <div className="text-7xl sm:text-8xl md:text-9xl text-gold/30 font-display text-center group-hover:text-gold/50 transition-colors">01</div>
             </div>
          </div>

          {/* Script */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
             <div className="order-2 md:order-1 gradient-forest p-8 sm:p-10 md:p-12 rounded-2xl transform -rotate-2 shadow-luxury border-4 border-gold group hover:rotate-0 transition-luxury hover:shadow-gold">
                <div className="text-7xl sm:text-8xl md:text-9xl text-gold/30 font-display text-center group-hover:text-gold/50 transition-colors">02</div>
             </div>
             <div className="order-1 md:order-2 group">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-forest mb-4 sm:mb-6 uppercase text-shadow-luxury">Script</h2>
                <h3 className="text-xl sm:text-2xl font-display text-gold mb-3 sm:mb-4 text-shadow-gold">Why & What is that we script?</h3>
                <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
                   <p>We script a whole month of videos because consistency is the best method for social media growth. It does not build momentum if you post here and there, but frequent appearances keep you in front of your audience and signal sites that your content is valuable.</p>
                   <p className="italic border-l-4 border-gold pl-4 py-2 bg-gold/5">Planning 30 days' content in advance, we remove the stress of "what do I post today?" and give you a definite roadmap. Each script is tailored to your business, written to capture attention quickly, and designed to engage — turning views into followers and followers into customers.</p>
                </div>
             </div>
          </div>

          {/* Film & Edit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
             <div className="group">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-forest mb-4 sm:mb-6 uppercase text-shadow-luxury">Film & Edit</h2>
                <h3 className="text-xl sm:text-2xl font-display text-gold mb-3 sm:mb-4 text-shadow-gold">What & Why do you film & we Edit?</h3>
                <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
                   <p>Hiring a filmmaking team can cost a lot and not all business can afford it.</p>
                   <p>Most phones can film good enough footage since social media only supports 1080p at 30fps.</p>
                   <p>We also can help you learn how to use your own cameras for the best results and videos don't need to be cinematic as all they need is to be high quality and tell a story or relay a message.</p>
                   <p className="italic border-l-4 border-gold pl-4 py-2 bg-gold/5">We do the editing from, subtitle, colour-grading to putting all the videos together to ensure a quality video as result, also editing is the hardest part of filming as its the most time consuming, that way we save you time to focus on your business.</p>
                </div>
             </div>
             <div className="gradient-forest p-8 sm:p-10 md:p-12 rounded-2xl transform rotate-2 shadow-luxury border-4 border-gold group hover:rotate-0 transition-luxury hover:shadow-gold">
                <div className="text-7xl sm:text-8xl md:text-9xl text-gold/30 font-display text-center group-hover:text-gold/50 transition-colors">03</div>
             </div>
          </div>

          {/* Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
             <div className="order-2 md:order-1 gradient-forest p-8 sm:p-10 md:p-12 rounded-2xl transform -rotate-2 shadow-luxury border-4 border-gold group hover:rotate-0 transition-luxury hover:shadow-gold">
                <div className="text-7xl sm:text-8xl md:text-9xl text-gold/30 font-display text-center group-hover:text-gold/50 transition-colors">04</div>
             </div>
             <div className="order-1 md:order-2 group">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-forest mb-4 sm:mb-6 uppercase text-shadow-luxury">Upload</h2>
                <h3 className="text-xl sm:text-2xl font-display text-gold mb-3 sm:mb-4 text-shadow-gold">Why do we Upload?</h3>
                <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg">
                   <p>Each platform (TikTok, Instagram, yt shorts, etc) has they're own algorithm (how social media understands who to show your content too).</p>
                   <p className="italic border-l-4 border-gold pl-4 py-2 bg-gold/5">That is why we ensure to post each content based off each platform from TikTok, Instagram, yt shorts & LinkedIn. Too ensure best results from each and every platform.</p>
                </div>
                <div className="mt-6 sm:mt-8">
                  <a 
                    href="https://calendly.com/cinebih/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-rust to-red-700 text-ivory font-display text-xl sm:text-2xl px-8 sm:px-12 py-3 sm:py-4 rounded-lg shadow-luxury hover:shadow-gold transition-luxury uppercase tracking-wide transform hover:scale-105 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Book Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold to-rust opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default About;
