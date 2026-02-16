import { useNavigate } from 'react-router-dom';
import Services from '../components/home/Services';
import FAQ from '../components/home/FAQ';
import logo from '../assets/images/logo.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="gradient-luxury min-h-[calc(100vh-100px)] text-ivory overflow-hidden relative flex flex-col">
      {/* Hero Section - Premium 2026 Design */}
      <section className="relative w-full max-w-[1400px] mx-auto flex-grow flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32 min-h-[85vh]">
        
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>

        {/* Soft radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10"></div>
        
        {/* Central Logo - Very subtle, refined */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.08] z-0">
           <img 
             src={logo} 
             alt="Cinebih Logo" 
             className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-auto object-contain"
           />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left Content - Refined messaging */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10 order-2 lg:order-1">
            
            {/* Premium elevated card - minimal and clean */}
            <div className="group relative">
              
              {/* Refined container */}
              <div className="elevated-card-dark p-8 md:p-10 lg:p-12 rounded-2xl shadow-luxury transition-luxury group-hover:shadow-luxury-hover">
                
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
                
                {/* Concise, powerful copy */}
                <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-ivory/90 font-light tracking-tight">
                  Transform your brand's social presence with data-driven content strategies that convert viewers into loyal customers.
                </p>
                
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
              </div>
            </div>
            
            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/about')}
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-rust via-rust to-red-700 text-ivory font-body font-medium text-base tracking-wide rounded-xl shadow-luxury btn-lift overflow-hidden"
              >
                <span className="relative z-10">Our Approach</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button 
                onClick={() => navigate('/pricing')}
                className="group/btn relative px-8 py-4 bg-transparent border-2 border-gold/30 text-gold font-body font-medium text-base tracking-wide rounded-xl hover:border-gold/60 hover:bg-gold/5 transition-premium"
              >
                <span className="relative z-10">View Pricing</span>
              </button>
            </div>
          </div>

          {/* Right Content - Dominant headline */}
          <div className="lg:col-span-7 order-1 lg:order-2">
             <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] text-gradient-gold mb-6">
               Elevate Your Brand
             </h1>
             <p className="text-gold/80 font-display font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight">
               Through Strategic Content
             </p>
          </div>
        </div>
      </section>
      
      <Services />
      <FAQ />
    </main>
  );
};

export default Home;
