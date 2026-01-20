import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a full suite of social media content production services, including market research, creative scripting, professional filming, high-quality editing, and strategic distribution across platforms like Instagram, TikTok, and YouTube."
  },
  {
    question: "How long does the process take?",
    answer: "Our typical turnaround time varies by project scope, but generally, a full content package from research to final delivery takes about 2-3 weeks. We value both quality and efficiency to keep your feed active."
  },
  {
    question: "Do you handle the filming?",
    answer: "Yes! We have a team of professional videographers equipped with high-end gear to ensure your content looks crisp, professional, and visually engaging."
  },
  {
    question: "Can I provide my own script?",
    answer: "Absolutely. If you have a specific message or script in mind, we can work with it. We also offer script polishing services to ensure it resonates perfectly with your target audience."
  },
  {
    question: "What platforms do you distribute to?",
    answer: "We optimize and distribute content for all major social platforms, primarily focusing on vertical video platforms like Instagram Reels, TikTok, and YouTube Shorts to maximize reach."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes, we understand every business is unique. We offer customizable packages tailored to your specific goals, budget, and content frequency requirements."
  },
  {
    question: "What is your pricing structure?",
    answer: "We believe in transparency. Please check our pricing page for our standard packages. For custom needs, reach out to us for a personalized quote."
  },
  {
    question: "How do we get started?",
    answer: "Getting started is easy! Simply click the 'Contact Us' button or book a consultation call. We'll discuss your goals and how we can help take your brand to the next level."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-24 bg-cognac-brown text-ivory">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-smut text-4xl md:text-6xl text-center mb-16 uppercase tracking-tight">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-ivory/20">
              <AccordionTrigger className="font-smut text-xl md:text-2xl uppercase hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-smut-full text-lg leading-relaxed opacity-90 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
