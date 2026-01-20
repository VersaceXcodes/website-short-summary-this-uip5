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
    price: "€1,950",
    period: "/month",
    description: "Perfect for businesses just getting started with short-form content.",
    features: [
      "15 Short Form Videos",
      "Onboarding & Review Calls",
      "Topic Research & Concepting",
      "Professional Scriptwriting",
      "Editing & Sound Design",
      "Uploading & Optimization",
      "Instagram Stories",
      "Email Support",
      "Monthly Analytics Report"
    ],
    buttonText: "Book Now",
    popular: false
  },
  {
    name: "Optimise",
    price: "€2,495",
    period: "/month",
    description: "Comprehensive monthly package for consistent high-quality content.",
    features: [
      "20 Short Form Videos",
      "Onboarding & Review Calls",
      "Topic Research & Concepting",
      "Professional Scriptwriting",
      "Editing & Sound Design",
      "Uploading & Optimization",
      "Instagram Stories",
      "Email Support",
      "Monthly Analytics Report",
      "Profile Optimization (Bonus)"
    ],
    buttonText: "Book Now",
    popular: true
  },
  {
    name: "Dominate",
    price: "€3,395",
    period: "/month",
    description: "For brands that want to dominate their niche with daily content.",
    features: [
      "30 Short Form Videos",
      "Onboarding & Review Calls",
      "Topic Research & Concepting",
      "Professional Scriptwriting",
      "Editing & Sound Design",
      "Uploading & Optimization",
      "Instagram Stories",
      "Priority Email Support",
      "Advanced Analytics Report",
      "Profile Optimization (Bonus)"
    ],
    buttonText: "Book Now",
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
