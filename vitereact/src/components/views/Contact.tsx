import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan) {
      setSelectedPlan(plan);
    }
  }, [searchParams]);

  return (
    <div className="pt-24 min-h-screen bg-forest-green px-6">
      <div className="container mx-auto">
        <h1 className="font-smut text-5xl md:text-7xl text-ivory uppercase tracking-tight mb-8 text-center">
          Contact Us
        </h1>
        
        {selectedPlan && (
          <div className="bg-ivory/10 border border-ivory/20 rounded-lg p-6 max-w-2xl mx-auto mb-10 text-center">
            <p className="font-smut-full text-xl text-ivory">
              You are interested in the <span className="text-antique-gold font-bold">{selectedPlan}</span> plan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
