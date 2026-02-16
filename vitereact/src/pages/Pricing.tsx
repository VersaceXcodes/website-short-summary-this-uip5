import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: "STARTER",
    shorts: 15,
    price: "€1950",
    features: [
      "Onboarding/Review Calls",
      "Research",
      "Scripting",
      "Editing",
      "Uploading",
      "7 Sales Focused Instagram Stories",
      "24/7 Weekday Email Support",
      "Monthly Reports",
      "BONUS: Optimize Your Profile Checklist"
    ]
  },
  {
    name: "OPTIMISE",
    shorts: 20,
    price: "€2495",
    features: [
      "Onboarding/Review Calls",
      "Research",
      "Scripting",
      "Editing",
      "Uploading",
      "7 Sales Focused Instagram Stories",
      "24/7 Weekday Email Support",
      "Monthly Reports",
      "BONUS: Optimize Your Profile Checklist"
    ]
  },
  {
    name: "DOMINATE",
    shorts: 30,
    price: "€3395",
    features: [
      "Onboarding/Review Calls",
      "Research",
      "Scripting",
      "Editing",
      "Uploading",
      "7 Sales Focused Instagram Stories",
      "24/7 Weekday Email Support",
      "Monthly Reports",
      "BONUS: Optimize Your Profile Checklist"
    ]
  }
];

const Pricing = () => {
  return (
    <main className="gradient-forest min-h-screen text-ivory relative overflow-hidden">
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 1) 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }}></div>
      
      {/* Pricing Section */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        
        {/* Premium section header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold leading-[1.1] tracking-tight">
            Investment
          </h1>
          <p className="font-body text-lg md:text-xl text-ivory/60 font-light max-w-2xl mx-auto">
            Choose the package that scales with your ambition
          </p>
        </div>
        
        {/* Why section - refined */}
        <div className="max-w-3xl mx-auto elevated-card-dark p-8 md:p-10 lg:p-12 rounded-2xl shadow-luxury mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-gold mb-6">
            Full-Service Content Excellence
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-ivory/80 font-light">
            Your investment includes a dedicated team of researchers, strategists, scriptwriters, editors, and social media managers—all working to amplify your brand across every platform.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="group relative">
              
              {/* Card container */}
              <div className="bg-gradient-to-b from-ivory to-[#F5F0E1] text-forest rounded-2xl overflow-hidden flex flex-col shadow-luxury hover:shadow-luxury-hover transition-premium h-full">
                
                {/* Header */}
                <div className="gradient-forest text-gold p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-2">{tier.name}</h3>
                  <p className="font-body text-base text-ivory/80">{tier.shorts} videos monthly</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  
                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-left font-body text-sm font-light">
                        <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-gold" strokeWidth={3} />
                        </div>
                        <span className="text-forest/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price and CTA */}
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display font-bold text-4xl md:text-5xl text-forest">{tier.price}</span>
                      <span className="font-body text-sm text-forest/50">/month</span>
                    </div>
                    
                    <a 
                      href="https://calendly.com/cinebih/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-rust to-red-700 text-ivory font-body font-medium text-base px-8 py-4 rounded-xl shadow-luxury btn-lift text-center"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
