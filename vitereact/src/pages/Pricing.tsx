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
    <main className="bg-forest min-h-screen text-ivory">
      {/* Why Cost Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-display text-gold mb-12 uppercase drop-shadow-lg">
          Pricing
        </h1>
        
        <div className="max-w-4xl mx-auto bg-cognac/30 p-10 rounded-lg border border-gold/20 mb-20">
          <h2 className="text-3xl font-display text-gold mb-6 uppercase tracking-wide">
            Why does our service cost this much?
          </h2>
          <p className="font-body text-lg leading-relaxed text-ivory/90 mb-6">
            Behind each content we create is an entire team of people ensuring it gets the job done. Our social media researchers dig into your industry, study your competition, and track trends so your strategy remains cutting-edge. Our scriptwriters craft ideas for content that will halt viewers dead in their tracks in seconds. Our editors transform your uncut footage into completed, scroll-stopping videos for TikTok, Instagram, YouTube Shorts, Facebook, and LinkedIn. Finally, our social media managers upload and schedule everything in the correct format, at the right time, to maximize its effect.
          </p>
          <p className="font-body text-lg leading-relaxed text-ivory/90 italic">
            When you invest with us, you're not just investing in video editing — you're investing in a full creative team dedicated to growing your business online. This level of expertise, attention, and detail is what our pricing covers and causes your content not only look great, but actually perform.
          </p>
        </div>

        {/* Pricing Cards */}
        <h2 className="text-5xl font-display text-ivory mb-16 uppercase">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-ivory text-forest rounded-lg overflow-hidden flex flex-col hover:transform hover:scale-105 transition-all duration-300 shadow-xl border-4 border-gold">
              <div className="bg-forest text-gold p-6 text-center border-b-4 border-gold">
                <h3 className="text-4xl font-display uppercase tracking-widest">{tier.name}</h3>
                <p className="font-display text-xl mt-2 text-ivory">{tier.shorts} SHORTS/MONTH</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-left font-medium">
                      <Check size={20} className="text-gold mr-3 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mt-auto">
                  <div className="text-4xl font-display text-rust mb-6">{tier.price}<span className="text-lg text-forest/70">/MONTH</span></div>
                  <button className="w-full bg-rust text-ivory font-display text-2xl px-8 py-3 rounded shadow hover:bg-red-700 transition-all uppercase tracking-wide">
                    Book Now
                  </button>
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
