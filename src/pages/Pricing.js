import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header এবং Footer ইমপোর্ট ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne"; 
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile"; 
import FooterOne from "../components/Layout/Footer/FooterOne"; 

// --- Pricing Data ---
const pricingPlans = [
  {
    id: 1,
    name: "GROWTH",
    subtitle: "Power up with AI & Video.",
    price: "299",
    isPopular: false,
    features: [
      "2 Custom AI Clone Videos",
      "2 Studio Spokesperson Videos",
      "Social Media Mgmt (4 Platforms)",
      "4 Short Form Videos (Reels)",
      "1 Promotional Video Banner",
      "10 Digital Banner Ads"
    ],
    btnText: "GET STARTED"
  },
  {
    id: 2,
    name: "ENTERPRISE",
    subtitle: "Dominate with CGI & Innovation.",
    price: "499",
    isPopular: true,
    features: [
      "3 Custom AI Clone Videos",
      "4 Studio Spokesperson Videos",
      "SEO-Optimized Video Posting",
      "8 Short Form Videos",
      "Premium CGI Ad Campaign",
      "15 Digital Banner Ads",
      "Full Platform Management",
      "Priority 24/7 Support"
    ],
    btnText: "START DOMINATING"
  },
  {
    id: 3,
    name: "AUTHORITY",
    subtitle: "Total Brand Management.",
    price: "999",
    isPopular: false,
    features: [
      "Everything in Enterprise",
      "Dedicated Human Social Strategist",
      "Advanced SEO & Viral Distribution",
      "Full Management (All Channels)",
      "Community Management (Reply & Engage)",
      "Priority 1-on-1 Strategy Calls",
      "Monthly ROI & Ranking Report"
    ],
    btnText: "GET AUTHORITY"
  }
];

export default function Pricing() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <DemoHeaderOne />
      <DemoHeaderMobile />

      {/* --- Page Header / Breadcrumb --- */}
      <section className="relative w-full pt-[150px] pb-[80px] bg-main-gray overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
          <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" className="w-full object-cover" />
        </div>
        <div className="mx-auto theme-container relative z-10 text-center">
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold text-purple bg-purple/10 border border-purple/20 rounded-full">
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold text-main-black mb-4">Choose Your Scale Plan</h1>
          <p className="text-paragraph font-medium text-lg mb-4 max-w-2xl mx-auto">
            Flexible packages designed to automate your business with AI, CGI, and strategic digital marketing.
          </p>
          <div className="flex justify-center items-center gap-2 text-paragraph font-medium mt-6">
            <Link to="/" className="hover:text-purple transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple">Pricing</span>
          </div>
        </div>
      </section>

      {/* --- Main Pricing Cards Section (Light Theme matching your website) --- */}
      <section className="w-full py-[100px] bg-[#f8f9fc] relative overflow-hidden">
        
        {/* Decorative Background Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto theme-container max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
            
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={plan.id * 100}
                className={`relative flex flex-col p-8 lg:p-10 rounded-[30px] transition-all duration-500 ${
                  plan.isPopular 
                    ? "bg-white border-2 border-purple transform md:-translate-y-6 shadow-[0_20px_60px_rgba(121,74,255,0.15)] z-20" 
                    : "bg-white border border-[#e7e3fa] hover:border-purple/50 hover:shadow-xl z-10 mt-4 md:mt-0"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <div className="text-center mb-8 border-b border-[#e7e3fa] pb-8">
                  <h3 className={`text-2xl font-black uppercase tracking-wide mb-2 ${plan.isPopular ? "text-purple" : "text-main-black"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-paragraph text-sm mb-6 h-10 flex items-center justify-center">{plan.subtitle}</p>
                  <div className="flex items-end justify-center gap-1 text-main-black">
                    <span className="text-3xl font-bold text-purple mb-1">$</span>
                    <span className="text-6xl font-black leading-none">{plan.price}</span>
                    <span className="text-paragraph text-base font-medium mb-1">/ Month</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-grow">
                  <ul className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-main-black text-[15px] font-medium">
                        <span className="w-6 h-6 rounded-full bg-purple/10 flex items-center justify-center text-purple shrink-0 mt-0.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                        </span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Link to="/contact" className="w-full mt-auto">
                  <button className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 flex justify-center items-center gap-2 group ${
                    plan.isPopular 
                      ? "bg-purple text-white shadow-md hover:bg-main-black hover:-translate-y-1" 
                      : "bg-purple/10 text-purple hover:bg-purple hover:text-white"
                  }`}>
                    {plan.btnText}
                    <svg className={`transition-transform duration-300 group-hover:translate-x-1 ${plan.isPopular ? "text-white" : "text-purple group-hover:text-white"}`} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                  </button>
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- Single / Custom Project CTA Section --- */}
      <section className="w-full py-[100px] bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto theme-container max-w-5xl relative z-10">
          <div data-aos="zoom-in" className="bg-white border border-[#e7e3fa] rounded-[40px] p-10 md:p-16 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden">
            
            {/* Inner subtle glow */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[300px] h-[300px] bg-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="w-20 h-20 mx-auto bg-purple/10 border border-purple/20 rounded-full flex items-center justify-center text-purple mb-6 relative z-10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-main-black mb-4 relative z-10">
              Need a <span className="text-purple relative inline-block">
                Single Project
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
              </span> or Custom Plan?
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
              Not ready for a monthly commitment? No problem. Whether you need a single highly-converting CGI Ad, one custom AI Spokesperson video, or a complete brand overhaul, we can create a custom package tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link to="/contact">
                <button className="px-10 py-4 bg-purple text-white font-bold text-lg rounded-full shadow-lg hover:bg-main-black hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                  Get a Custom Quote
                  <svg className="transition-transform duration-300 group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </button>
              </Link>
              
              <a href="tel:+17252223947" className="px-10 py-4 bg-white text-main-black font-bold text-lg rounded-full border-2 border-[#e7e3fa] hover:border-purple hover:text-purple transition-all duration-300 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Talk to Sales
              </a>
            </div>

          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
}