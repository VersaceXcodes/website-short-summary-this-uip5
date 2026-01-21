const Contact = () => {
  return (
    <main className="bg-forest min-h-screen text-ivory flex items-center justify-center py-20 px-8">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl rounded-lg overflow-hidden border-4 border-gold">
        
        {/* Contact Info / Image Side */}
        <div className="bg-cognac p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-forest/20 pattern-dots"></div> {/* Decorative pattern overlay if possible */}
          <div className="relative z-10">
            <h1 className="text-6xl font-display text-gold mb-6 uppercase">Contact Us</h1>
            <p className="font-body text-lg mb-8 opacity-90">
              Ready to take your business to the next level? Send us a message and let's start the conversation.
            </p>
            <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
            <p className="font-display text-2xl text-ivory">contact@cinebih.com</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-ivory p-10 text-forest">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-display text-xl uppercase mb-2 text-forest">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-transparent border-b-2 border-forest/30 focus:border-gold outline-none py-2 text-lg font-body transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-display text-xl uppercase mb-2 text-forest">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-transparent border-b-2 border-forest/30 focus:border-gold outline-none py-2 text-lg font-body transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-display text-xl uppercase mb-2 text-forest">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-transparent border-b-2 border-forest/30 focus:border-gold outline-none py-2 text-lg font-body transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button 
              type="button" 
              className="w-full bg-rust text-ivory font-display text-2xl py-4 rounded shadow-lg hover:bg-red-700 transition-all uppercase tracking-wide mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;
