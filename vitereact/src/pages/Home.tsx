import { useNavigate } from 'react-router-dom';
import Services from '../components/home/Services';
import FAQ from '../components/home/FAQ';
import logo from '../assets/images/logo.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-cognac min-h-[calc(100vh-100px)] text-ivory overflow-hidden relative flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto flex-grow flex flex-col justify-center px-4 sm:px-6 md:px-8 py-8 md:py-20 min-h-[85vh] md:min-h-[90vh]">
        
        {/* Central Logo - Behind text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 md:opacity-20 z-0">
           <img 
             src={logo} 
             alt="Cinebih Logo" 
             className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="text-left space-y-6 md:space-y-8 order-2 md:order-1">
            {/* Enhanced Text Box with Decorative Border */}
            <div className="relative">
              {/* Decorative corner accents */}
              <div className="absolute -top-1 -left-1 w-6 h-6 md:-top-2 md:-left-2 md:w-8 md:h-8 border-t-2 border-l-2 md:border-t-4 md:border-l-4 border-gold"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 md:-top-2 md:-right-2 md:w-8 md:h-8 border-t-2 border-r-2 md:border-t-4 md:border-r-4 border-gold"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 md:-bottom-2 md:-left-2 md:w-8 md:h-8 border-b-2 border-l-2 md:border-b-4 md:border-l-4 border-gold"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 md:-bottom-2 md:-right-2 md:w-8 md:h-8 border-b-2 border-r-2 md:border-b-4 md:border-r-4 border-gold"></div>
              
              {/* Main content box */}
              <div className="bg-forest bg-opacity-40 backdrop-blur-sm border border-gold md:border-2 p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden">
                {/* Subtle diagonal pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(176, 141, 87, 0.5) 10px, rgba(176, 141, 87, 0.5) 20px)'
                }}></div>
                
                {/* Vertical accent bar on left */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-gold via-rust to-gold"></div>
                
                <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-ivory font-medium relative z-10">
                  We help businesses grow faster by expanding their reach and attracting new clients through powerful social media strategies that connect brands with audiences worldwide. From strategy to execution, everything is handled by our team — so you can focus on scaling your business.
                </p>
              </div>
            </div>
            
            <div className="pt-4 md:pt-8 flex flex-col gap-4 md:gap-6">
              <button 
                onClick={() => navigate('/about')}
                className="bg-rust text-ivory font-display text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-3 rounded shadow-lg hover:bg-red-700 transition-all uppercase tracking-wide transform hover:scale-105 text-center"
              >
                Learn more about what we do
              </button>
              <button 
                onClick={() => navigate('/pricing')}
                className="border-2 border-gold text-gold font-display text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-3 rounded hover:bg-gold hover:text-forest transition-all uppercase tracking-wide transform hover:scale-105 text-center"
              >
                Learn more about our pricing
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center md:text-right order-1 md:order-2">
             <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] text-gold uppercase drop-shadow-lg">
               Taking Your<br />Business to<br />the Next Level
             </h1>
          </div>
        </div>
      </section>
      
      <Services />
      <FAQ />
    </main>
  );
};

export default Home;
