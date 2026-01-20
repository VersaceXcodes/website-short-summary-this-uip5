import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry about ${plan} plan`
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In development, assume backend is on port 3000 if not specified
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-forest-green px-6 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-smut text-5xl md:text-7xl text-ivory uppercase tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="font-smut-full text-xl text-ivory/80 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with us to discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="flex flex-col gap-10">
            <div className="bg-ivory/5 border border-ivory/10 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="font-smut text-3xl text-ivory mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-antique-gold/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-antique-gold" />
                  </div>
                  <div>
                    <h3 className="font-smut-full text-lg text-ivory font-bold mb-1">Email</h3>
                    <p className="font-smut-full text-ivory/80">hello@cinebih.com</p>
                    <p className="font-smut-full text-ivory/80">support@cinebih.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-antique-gold/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-antique-gold" />
                  </div>
                  <div>
                    <h3 className="font-smut-full text-lg text-ivory font-bold mb-1">Phone</h3>
                    <p className="font-smut-full text-ivory/80">+1 (555) 123-4567</p>
                    <p className="font-smut-full text-ivory/80">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-antique-gold/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-antique-gold" />
                  </div>
                  <div>
                    <h3 className="font-smut-full text-lg text-ivory font-bold mb-1">Office</h3>
                    <p className="font-smut-full text-ivory/80">
                      123 Creative Studio Blvd<br />
                      Los Angeles, CA 90012
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-ivory text-forest-green p-8 md:p-10 rounded-lg shadow-xl">
            <h2 className="font-smut text-3xl mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-forest-green font-bold">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-forest-green/20 focus-visible:ring-forest-green"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-forest-green font-bold">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-forest-green/20 focus-visible:ring-forest-green"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-forest-green font-bold">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="How can we help?" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white border-forest-green/20 focus-visible:ring-forest-green"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-forest-green font-bold">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white border-forest-green/20 focus-visible:ring-forest-green resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-forest-green hover:bg-forest-green/90 text-ivory py-6 text-lg font-smut tracking-wide"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
