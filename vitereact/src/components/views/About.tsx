import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-forest-green text-ivory pt-20">
       <div className="container mx-auto px-6 py-12">
           <h1 className="font-smut text-5xl md:text-7xl mb-8 uppercase tracking-wide">Who We Are</h1>
           <p className="font-smut-full text-xl md:text-2xl leading-relaxed max-w-4xl mb-12 opacity-90">
               We are a creative agency dedicated to storytelling. We believe in the power of visual media to transform businesses and connect with audiences on a deeper level.
           </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div className="bg-cognac-brown p-10 rounded-sm shadow-xl">
                    <h2 className="font-smut text-3xl md:text-4xl mb-6 text-ivory uppercase">Our Mission</h2>
                    <p className="font-smut-full text-lg md:text-xl leading-relaxed">
                        To elevate brands through cinematic storytelling and strategic content distribution. We don't just make videos; we build narratives that drive growth and foster genuine connections.
                    </p>
                </div>
                <div className="bg-ivory text-forest-green p-10 rounded-sm shadow-xl">
                    <h2 className="font-smut text-3xl md:text-4xl mb-6 uppercase">Our Vision</h2>
                    <p className="font-smut-full text-lg md:text-xl leading-relaxed">
                        To be the leading partner for businesses looking to make a lasting impact in the digital landscape through authentic, high-quality, and strategic content creation.
                    </p>
                </div>
            </div>

            <div className="mt-20 border-t border-ivory/20 pt-12" id="our-story">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="font-smut text-4xl md:text-6xl mb-6 uppercase text-antique-gold">Our Story</h2>
                        <h3 className="font-smut text-2xl md:text-3xl mb-6 text-ivory opacity-90">The Principles That Founded Us</h3>
                        <div className="space-y-6 font-smut-full text-lg md:text-xl leading-relaxed opacity-90">
                            <p>
                                Founded on the principle that every brand has a soul, we started with a clear vision: to strip away the noise and reveal the authentic core of businesses. In a digital world cluttered with fleeting trends, we saw businesses struggling to make meaningful connections. They had the product, but lacked the voice.
                            </p>
                            <p>
                                We realized that sustainable growth isn't just about views; it's about resonance. Our agency was born to bridge that gap. We combine cinema-grade production with sharp marketing strategies to help businesses not just be seen, but be understood and remembered.
                            </p>
                            <p>
                                From humble beginnings helping local startups to partnering with industry leaders, our mission remains unchanged: to tell stories that matter and solve the content creation challenges that hold businesses back.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-ivory/20 pt-12">
                <h3 className="font-smut text-3xl md:text-5xl mb-8 uppercase text-center">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="font-smut text-2xl mb-2 text-antique-gold">Expertise</h4>
                        <p className="font-smut-full opacity-80">Years of experience in production and marketing.</p>
                    </div>
                    <div>
                        <h4 className="font-smut text-2xl mb-2 text-antique-gold">Quality</h4>
                        <p className="font-smut-full opacity-80">Cinema-grade equipment and professional editing.</p>
                    </div>
                    <div>
                        <h4 className="font-smut text-2xl mb-2 text-antique-gold">Strategy</h4>
                        <p className="font-smut-full opacity-80">Data-driven approaches to maximize engagement.</p>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
};

export default About;
