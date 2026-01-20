import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for small businesses just getting started with video content.",
    features: [
      "2 High-Quality Short Form Videos",
      "Professional Editing & Sound Design",
      "Monthly Strategy Call",
      "Basic Analytics Report",
      "1 Revision Round per Video"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "$1,999",
    period: "/month",
    description: "Ideal for growing brands looking to scale their social presence.",
    features: [
      "5 High-Quality Short Form Videos",
      "Professional Editing & Sound Design",
      "Bi-Weekly Strategy Calls",
      "Comprehensive Analytics Report",
      "Cross-Platform Optimization",
      "2 Revision Rounds per Video"
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Dominance",
    price: "$3,499",
    period: "/month",
    description: "For brands that want to dominate their niche with daily content.",
    features: [
      "10 High-Quality Short Form Videos",
      "Professional Editing & Sound Design",
      "Weekly Strategy Calls",
      "Advanced Analytics & Insights",
      "Priority Support",
      "Unlimited Revisions"
    ],
    buttonText: "Contact Us",
    popular: false
  }
];

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-smut text-5xl md:text-7xl text-cognac-brown uppercase tracking-tight mb-6">
            Invest in Your Brand
          </h1>
          <p className="font-smut-full text-xl text-forest-green max-w-2xl mx-auto leading-relaxed">
            Choose the package that fits your goals. Transparent pricing, professional quality, and results-driven content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 flex flex-col ${
                plan.popular 
                  ? 'border-forest-green bg-forest-green text-ivory shadow-xl scale-105 z-10' 
                  : 'border-cognac-brown/20 bg-white text-cognac-brown hover:border-cognac-brown transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-antique-gold text-forest-green font-smut uppercase text-sm px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-smut text-3xl uppercase tracking-wide">
                  {plan.name}
                </CardTitle>
                <CardDescription className={`font-smut-full text-lg mt-2 ${plan.popular ? 'text-ivory/80' : 'text-cognac-brown/70'}`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="font-smut text-5xl">{plan.price}</span>
                  <span className={`font-smut-full text-lg ${plan.popular ? 'text-ivory/80' : 'text-cognac-brown/60'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-1 ${plan.popular ? 'text-antique-gold' : 'text-forest-green'}`} />
                      <span className="font-smut-full text-lg leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => navigate('/contact')} 
                  className={`w-full py-6 text-lg font-smut uppercase tracking-wider ${
                    plan.popular 
                      ? 'bg-antique-gold text-forest-green hover:bg-ivory hover:text-forest-green' 
                      : 'bg-cognac-brown text-ivory hover:bg-forest-green'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-smut-full text-lg text-cognac-brown/80 mb-6">
            Need a custom package? We can tailor a solution to your specific needs.
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            variant="outline"
            className="border-2 border-cognac-brown text-cognac-brown hover:bg-cognac-brown hover:text-ivory font-smut uppercase text-lg px-8 py-6"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
