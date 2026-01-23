import { useNavigate } from 'react-router-dom';
import Services from '../components/home/Services';
import FAQ from '../components/home/FAQ';
import logo from '../assets/images/logo.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-cognac min-h-[calc(100vh-100px)] text-ivory overflow-hidden relative flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto flex-grow flex flex-col justify-center px-8 py-10 md:py-20 min-h-[90vh]">
        
        {/* Central Logo - Behind text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 z-0">
           <img 
             src={logo} 
             alt="Cinebih Logo" 
             className="w-[500px] h-auto md:w-[600px] object-contain"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="text-left space-y-8 order-2 md:order-1">
            <p className="font-body text-xl md:text-2xl leading-relaxed opacity-90 font-medium">
              We help businesses grow faster by expanding their reach and attracting new clients through powerful social media strategies that connect brands with audiences worldwide. From strategy to execution, everything is handled by our team — so you can focus on scaling your business.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('/about')}
                className="bg-rust text-ivory font-display text-2xl px-8 py-3 rounded shadow-lg hover:bg-red-700 transition-all uppercase tracking-wide transform hover:scale-105"
              >
                Learn more about what we do
              </button>
              <button 
                onClick={() => navigate('/pricing')}
                className="border-2 border-gold text-gold font-display text-2xl px-8 py-3 rounded hover:bg-gold hover:text-forest transition-all uppercase tracking-wide transform hover:scale-105"
              >
                Learn more about our pricing
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-right order-1 md:order-2">
             <h1 className="font-display text-7xl md:text-9xl leading-[0.9] text-gold uppercase drop-shadow-lg">
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
