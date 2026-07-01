import { useNavigate } from 'react-router-dom';
import { Bot, Globe, TrendingUp, MessageSquare, Zap, Users } from 'lucide-react';

const aiServices = [
  {
    icon: Bot,
    title: "AI Receptionist",
    tagline: "Never Miss a Lead",
    description:
      "An intelligent virtual receptionist that handles enquiries, qualifies leads, and books appointments — 24/7, without a salary. Trained on your business, it responds instantly via your website, Instagram DMs, and WhatsApp.",
    benefits: [
      "Instant response to inbound enquiries",
      "Automatic lead qualification & booking",
      "Seamlessly integrates with your calendar",
      "Trained on your exact products & pricing",
    ],
    accentColor: "from-gold/20 to-gold/5",
    borderColor: "border-gold/25",
  },
  {
    icon: Globe,
    title: "Website Creation",
    tagline: "Premium Digital Presence",
    description:
      "Custom-designed websites that convert visitors into clients. Built with performance, SEO, and brand identity in mind — not templates. From landing pages to full business sites, made to impress and perform.",
    benefits: [
      "Custom-designed to your brand identity",
      "Mobile-first & lightning fast",
      "SEO-optimised from day one",
      "Integrated contact forms & booking flows",
    ],
    accentColor: "from-rust/20 to-rust/5",
    borderColor: "border-rust/25",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    tagline: "Predictable Client Flow",
    description:
      "Data-driven outreach campaigns that fill your pipeline with qualified prospects. Combining targeted research, AI-powered outreach sequences, and follow-up automation to deliver warm leads consistently.",
    benefits: [
      "Targeted outbound outreach campaigns",
      "AI-powered personalised messaging",
      "Automated follow-up sequences",
      "Monthly pipeline & conversion reports",
    ],
    accentColor: "from-gold/20 to-gold/5",
    borderColor: "border-gold/25",
  },
  {
    icon: MessageSquare,
    title: "AI Chat & DM Automation",
    tagline: "Scale Your Conversations",
    description:
      "Automate your social media comments, DMs, and customer support using AI trained on your brand voice. Handle hundreds of conversations at once, filter serious buyers, and hand off only the hottest leads to your team.",
    benefits: [
      "Auto-responds to comments & DMs",
      "Filters and qualifies serious buyers",
      "Maintains your exact brand voice",
      "Available across Instagram, TikTok & Facebook",
    ],
    accentColor: "from-rust/20 to-rust/5",
    borderColor: "border-rust/25",
  },
  {
    icon: Zap,
    title: "Business Automation",
    tagline: "Remove the Bottlenecks",
    description:
      "Identify and eliminate repetitive manual tasks with smart workflow automation. From invoice generation to CRM updates and email sequences — we build systems that run your business while you focus on growth.",
    benefits: [
      "Custom workflow automation builds",
      "CRM & calendar integrations",
      "Automated reporting & invoicing",
      "Onboarding & follow-up sequences",
    ],
    accentColor: "from-gold/20 to-gold/5",
    borderColor: "border-gold/25",
  },
  {
    icon: Users,
    title: "AI Strategy Consultation",
    tagline: "Your AI Roadmap",
    description:
      "Not sure where to start with AI in your business? In a single focused session, we audit your current workflows, identify your highest-leverage AI opportunities, and deliver a clear, prioritised implementation plan.",
    benefits: [
      "Full business workflow audit",
      "Prioritised AI opportunity map",
      "Tool & stack recommendations",
      "Step-by-step implementation roadmap",
    ],
    accentColor: "from-rust/20 to-rust/5",
    borderColor: "border-rust/25",
  },
];

const AIServices = () => {
  const navigate = useNavigate();

  return (
    <main className="gradient-forest min-h-screen text-ivory relative overflow-hidden">

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 1) 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }}></div>

      {/* Hero */}
      <section className="relative z-10 py-20 sm:py-28 md:py-36 lg:py-44 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center">

        {/* Category badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 md:mb-10">
          <Zap size={14} className="text-gold" />
          <span className="font-body text-sm uppercase tracking-[0.15em] text-gold/80 font-medium">AI-Powered Services</span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gradient-gold leading-[1.05] tracking-tight mb-6 md:mb-8">
          The Future of<br />Your Business
        </h1>

        <p className="font-body text-lg md:text-xl lg:text-2xl text-ivory/70 font-light max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16">
          Beyond content creation — we deploy intelligent systems that automate your operations, generate leads, and create a seamless experience for your clients around the clock.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/cinebih/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-rust via-rust to-red-700 text-ivory font-body font-medium text-base tracking-wide rounded-xl shadow-luxury btn-lift"
          >
            Book a Free Consultation
          </a>
          <button
            onClick={() => navigate('/pricing')}
            className="px-8 py-4 bg-transparent border-2 border-gold/30 text-gold font-body font-medium text-base tracking-wide rounded-xl hover:border-gold/60 hover:bg-gold/5 transition-premium"
          >
            View Content Pricing
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
            Our AI Solutions
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                <div className={`elevated-card-dark rounded-2xl p-8 md:p-10 h-full flex flex-col shadow-luxury hover:shadow-luxury-hover transition-premium border ${service.borderColor} hover:border-gold/40`}>

                  {/* Icon and tagline */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center border border-gold/20`}>
                      <Icon size={24} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="font-body text-xs uppercase tracking-[0.12em] text-gold/60 font-medium pt-1">{service.tagline}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-base text-ivory/65 font-light leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2.5">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-body text-sm text-ivory/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why AI section */}
      <section className="relative z-10 py-20 md:py-28 lg:py-36 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto">

        <div className="elevated-card-dark rounded-2xl overflow-hidden shadow-luxury border border-gold/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left - headline */}
            <div className="p-10 md:p-14 lg:p-16 border-b lg:border-b-0 lg:border-r border-gold/15 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/25 bg-gold/5 mb-6 w-fit">
                <Zap size={12} className="text-gold" />
                <span className="font-body text-xs uppercase tracking-[0.12em] text-gold/70 font-medium">Why AI Now</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient-gold leading-[1.1] tracking-tight">
                Your competitors<br />are already using it.
              </h2>
            </div>

            {/* Right - copy */}
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center space-y-6">
              <p className="font-body text-lg text-ivory/80 font-light leading-relaxed">
                AI isn't a gadget — it's becoming the standard operating infrastructure for modern businesses. While your competitors are still doing everything manually, AI-enabled businesses are responding faster, closing more deals, and running leaner operations.
              </p>
              <p className="font-body text-base text-ivory/60 font-light leading-relaxed">
                Whether it's answering enquiries at 2am, following up on every lead automatically, or generating a consistent stream of qualified prospects — the businesses that win in 2025 and beyond are the ones that leverage AI as a team member, not just a tool.
              </p>
              <a
                href="https://calendly.com/cinebih/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rust via-rust to-red-700 text-ivory font-body font-medium text-base tracking-wide rounded-xl shadow-luxury btn-lift w-fit"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="relative z-10 pb-20 md:pb-28 px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
          Combine Content + AI
        </h2>
        <p className="font-body text-base md:text-lg text-ivory/60 font-light max-w-2xl mx-auto mb-10">
          The most powerful combination is a strong social media presence backed by intelligent automation. Attract attention with content, then convert it with AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/about')}
            className="px-8 py-4 bg-transparent border-2 border-gold/30 text-gold font-body font-medium text-base tracking-wide rounded-xl hover:border-gold/60 hover:bg-gold/5 transition-premium"
          >
            See Our Content Services
          </button>
          <a
            href="https://calendly.com/cinebih/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-rust via-rust to-red-700 text-ivory font-body font-medium text-base tracking-wide rounded-xl shadow-luxury btn-lift"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </main>
  );
};

export default AIServices;
