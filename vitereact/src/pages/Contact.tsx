const Contact = () => {
  return (
    <main className="gradient-forest min-h-screen text-ivory flex items-center justify-center py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 1) 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }}></div>
      
      <div className="w-full max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold leading-[1.1] tracking-tight">
            Let's Connect
          </h1>
          <p className="font-body text-lg md:text-xl text-ivory/60 font-light max-w-2xl mx-auto">
            Ready to elevate your brand? Reach out and let's discuss your vision.
          </p>
        </div>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 shadow-luxury rounded-2xl overflow-hidden">
          
          {/* Contact Info Side */}
          <div className="md:col-span-2 gradient-luxury p-8 md:p-10 lg:p-12 flex flex-col justify-center relative">
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 1) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gold mb-4">
                  Get in Touch
                </h2>
                <p className="font-body text-base text-ivory/80 font-light leading-relaxed">
                  Start a conversation about growing your brand through strategic content.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                    <span className="text-gold">✉</span>
                  </div>
                  <a href="mailto:contact@cinebih.com" className="font-body text-sm md:text-base text-ivory hover:text-gold transition-colors">
                    contact@cinebih.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 bg-gradient-to-br from-ivory to-[#F5F0E1] p-8 md:p-10 lg:p-12 text-forest">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body font-medium text-sm uppercase tracking-wide mb-2 text-forest/70">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/50 border border-forest/10 focus:border-gold rounded-xl outline-none px-4 py-3 text-base font-body transition-premium"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-body font-medium text-sm uppercase tracking-wide mb-2 text-forest/70">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/50 border border-forest/10 focus:border-gold rounded-xl outline-none px-4 py-3 text-base font-body transition-premium"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-body font-medium text-sm uppercase tracking-wide mb-2 text-forest/70">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white/50 border border-forest/10 focus:border-gold rounded-xl outline-none px-4 py-3 text-base font-body transition-premium resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-gradient-to-r from-rust to-red-700 text-ivory font-body font-medium text-base px-8 py-4 rounded-xl shadow-luxury btn-lift"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
