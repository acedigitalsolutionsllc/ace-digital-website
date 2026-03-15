import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header এবং Footer এর সঠিক লোকেশন ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne"; 
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile"; 
import FooterOne from "../components/Layout/Footer/FooterOne"; 

// --- Monthly Pricing Data ---
const pricingPlans = [
  {
    id: 1,
    name: "GROWTH",
    subtitle: "Essential tools to scale your brand.",
    price: "299",
    isPopular: false,
    features: [
      "Website Setup (Requires 6-Month Contract)*",
      "Full Social Media Setup & Optimization",
      "TikTok Seller Account Creation",
      "Logo & Custom Banner Design",
      "2 Custom AI Clone Videos /mo",
      "2 Reels & 1 Long Video /mo",
      "10 Digital Ad Banners /mo",
      "Full Social Media Management"
    ],
    btnText: "GET STARTED"
  },
  {
    id: 2,
    name: "PROFESSIONAL",
    subtitle: "Advanced marketing & automation.",
    price: "399",
    isPopular: true,
    features: [
      "Website Setup (Requires 6-Month Contract)*",
      "Full Social Media Setup & Optimization",
      "TikTok Seller Account Creation",
      "Logo & Custom Banner Design",
      "3 Custom AI Clone Videos /mo",
      "4 Reels & 2 Long Videos /mo",
      "15 Digital Ad Banners /mo",
      "Full Social Media Management**"
    ],
    btnText: "START SCALING"
  },
  {
    id: 3,
    name: "AUTHORITY",
    subtitle: "Total digital dominance & sales.",
    price: "999",
    isPopular: false,
    features: [
      "Website Setup (Requires 6-Month Contract)*",
      "Advanced Social Media & TikTok Setup",
      "Logo, Banners & Full Configuration",
      "6 Custom AI Clone Videos /mo",
      "8 Reels & 5 Long Videos /mo",
      "25 Digital Ad Banners /mo",
      "Full Social Media Management",
      "Sales Boosting (Ad spend separate)"
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
          <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" className="w-full object-cover filter hue-rotate-180" />
        </div>
        <div className="mx-auto theme-container relative z-10 text-center">
          {/* Tag changed to Brand Green with Glow Border */}
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full shadow-[0_0_10px_rgba(109,179,5,0.15)]">
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold text-main-black mb-4">Choose Your Scale Plan</h1>
          <p className="text-paragraph font-medium text-lg mb-4 max-w-2xl mx-auto">
            Flexible packages designed to automate your business with AI, CGI, and strategic digital marketing. Every package is fully customizable.
          </p>
          <div className="flex justify-center items-center gap-2 text-paragraph font-medium mt-6">
            <Link to="/" className="hover:text-[#6db305] hover:drop-shadow-[0_0_5px_rgba(109,179,5,0.5)] transition-all">Home</Link>
            <span>/</span>
            <span className="text-[#094a66] font-bold">Pricing</span>
          </div>
        </div>
      </section>

      {/* --- Main Pricing Cards Section --- */}
      <section className="w-full py-[100px] bg-[#f8f9fc] relative overflow-hidden">
        
        {/* Decorative Background Glows - Brand Colors */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#094a66]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#6db305]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto theme-container max-w-7xl relative z-10">
          
          {/* Note: Customization */}
          <div className="text-center mb-12" data-aos="fade-down">
            <p className="text-lg font-bold text-[#094a66] bg-[#094a66]/5 inline-block px-6 py-2 rounded-xl border border-[#094a66]/20">
              💡 Need something specific? <span className="text-[#6db305]">We can fully customize any package for you.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-16">
            
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={plan.id * 100}
                className={`relative flex flex-col p-8 lg:p-10 rounded-[30px] transition-all duration-500 ${
                  plan.isPopular 
                    // Popular Card: Brand Green border and glow
                    ? "bg-white border-2 border-[#6db305] transform md:-translate-y-4 shadow-[0_15px_40px_rgba(109,179,5,0.2)] z-20" 
                    // Normal Card: Brand Blue border on hover with glow
                    : "bg-white border border-[#e7e3fa] hover:border-[#094a66] hover:shadow-[0_10px_30px_rgba(9,74,102,0.15)] z-10 mt-4 md:mt-0"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#094a66] text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-[0_5px_15px_rgba(9,74,102,0.4)] whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <div className="text-center mb-8 border-b border-[#e7e3fa] pb-8">
                  <h3 className={`text-2xl font-black uppercase tracking-wide mb-2 ${plan.isPopular ? "text-[#094a66]" : "text-main-black"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-paragraph text-sm mb-6 h-10 flex items-center justify-center">{plan.subtitle}</p>
                  <div className="flex items-end justify-center gap-1 text-main-black">
                    <span className="text-3xl font-bold text-[#6db305] drop-shadow-[0_0_8px_rgba(109,179,5,0.4)] mb-1">$</span>
                    <span className="text-6xl font-black leading-none">{plan.price}</span>
                    <span className="text-paragraph text-base font-medium mb-1">/ Month</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-grow">
                  <ul className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-main-black text-[14px] font-medium leading-snug">
                        {/* Check Icon with Brand Green Glow */}
                        <span className="w-5 h-5 rounded-full bg-[#6db305]/15 flex items-center justify-center text-[#6db305] shrink-0 mt-0.5 shadow-[0_0_10px_rgba(109,179,5,0.2)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Link to="/contact" className="w-full mt-auto">
                  <button className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 flex justify-center items-center gap-2 group ${
                    plan.isPopular 
                      ? "bg-[#094a66] text-white shadow-[0_5px_15px_rgba(9,74,102,0.3)] hover:bg-[#6db305] hover:shadow-[0_0_20px_rgba(109,179,5,0.5)] hover:-translate-y-1" 
                      : "bg-[#094a66]/10 text-[#094a66] hover:bg-[#094a66] hover:text-white hover:shadow-[0_5px_15px_rgba(9,74,102,0.3)]"
                  }`}>
                    {plan.btnText}
                    <svg className={`transition-transform duration-300 group-hover:translate-x-1 ${plan.isPopular ? "text-white" : "text-[#094a66] group-hover:text-white"}`} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* --- ONE-TIME SETUP SECTION --- */}
          <div data-aos="fade-up" className="w-full bg-main-black rounded-[30px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden flex flex-col md:flex-row items-center gap-10 border border-white/10">
            {/* Inner Background Glow */}
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#6db305]/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="md:w-1/3 text-center md:text-left relative z-10">
              <span className="inline-block px-4 py-1 mb-4 text-xs font-bold text-white bg-white/10 border border-white/20 rounded-full uppercase tracking-widest">
                Setup Package
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">One-Time Setup</h2>
              <div className="flex items-end justify-center md:justify-start gap-1 text-white mb-4">
                <span className="text-2xl font-bold text-[#6db305] drop-shadow-[0_0_8px_rgba(109,179,5,0.8)] mb-1">$</span>
                <span className="text-5xl font-black leading-none">999</span>
                <span className="text-white/70 text-sm font-medium mb-1">/ One Time</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                The ultimate foundational package to get your digital presence and e-commerce ready for scale.
              </p>
            </div>

            <div className="md:w-2/3 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Website Setup (Shopify, WP, or Custom) *Domain & Hosting separate",
                  "Full Social Media Profiles Setup & Optimization",
                  "TikTok Seller Account Creation & Configuration",
                  "Custom Logo & Brand Banners Creation"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-white text-sm font-medium bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#6db305]/50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#6db305] flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(109,179,5,0.6)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                    </span>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-right">
                <Link to="/contact">
                  <button className="px-8 py-3 bg-[#6db305] text-white font-bold rounded-full shadow-[0_0_15px_rgba(109,179,5,0.4)] hover:bg-white hover:text-[#094a66] transition-all duration-300">
                    Get Set Up Today
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* --- IMPORTANT PROJECT DETAILS (Addressing points 5, 6, 7 & Amos) --- */}
          <div data-aos="fade-up" className="mt-16 bg-white border border-[#e7e3fa] rounded-[30px] p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-[#094a66] mb-8 border-b border-[#e7e3fa] pb-4 flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Important Project Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-main-black text-lg flex items-center gap-2">
                  <span className="text-[#6db305]">■</span> Content Posting & Management
                </h4>
                <p className="text-paragraph text-sm leading-relaxed">
                  ** We provide fully optimized video descriptions and exact posting schedules (in PST / Pacific Time) so your team member (e.g., Amos) can flawlessly upload and manage the content we produce.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-main-black text-lg flex items-center gap-2">
                  <span className="text-[#6db305]">■</span> Shopify & Monthly Costs
                </h4>
                <p className="text-paragraph text-sm leading-relaxed">
                  * Domain, Hosting, and platform fees (like Shopify’s basic ~$39/mo plan or premium apps) are billed directly to you by the provider. ACE Digital does <strong>not</strong> take any percentage of your sales or charge hidden platform fees.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-main-black text-lg flex items-center gap-2">
                  <span className="text-[#6db305]">■</span> Delivery Integration (Uber/DoorDash)
                </h4>
                <p className="text-paragraph text-sm leading-relaxed">
                  Yes! During the website setup phase, we can integrate seamless local delivery solutions (like Uber Direct or DoorDash Drive) directly into your Shopify/E-commerce store.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-main-black text-lg flex items-center gap-2">
                  <span className="text-[#6db305]">■</span> Project Timeline
                </h4>
                <p className="text-paragraph text-sm leading-relaxed">
                  A standard Shopify or E-Commerce website takes approximately <strong>2 to 4 weeks</strong> to be fully designed, configured, and launched, depending on the complexity of your products and integrations.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- Single / Custom Project CTA Section --- */}
      <section className="w-full py-[100px] bg-white relative overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-[#094a66]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto theme-container max-w-5xl relative z-10">
          <div data-aos="zoom-in" className="bg-white border border-[#e7e3fa] rounded-[40px] p-10 md:p-16 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden">
            
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[300px] h-[300px] bg-[#6db305]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="w-20 h-20 mx-auto bg-[#094a66]/10 border border-[#094a66]/20 rounded-full flex items-center justify-center text-[#094a66] mb-6 relative z-10 shadow-[0_0_20px_rgba(9,74,102,0.2)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-main-black mb-4 relative z-10">
              Need a <span className="text-[#094a66] relative inline-block">
                Single Project
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#6db305]/60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
              </span> or Custom Plan?
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
              Not ready for a monthly commitment? No problem. Whether you need a single highly-converting CGI Ad, one custom AI Spokesperson video, or a complete brand overhaul, we can create a custom package tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link to="/contact">
                <button className="px-10 py-4 bg-[#094a66] text-white font-bold text-lg rounded-full shadow-[0_5px_15px_rgba(9,74,102,0.3)] hover:bg-[#6db305] hover:shadow-[0_0_20px_rgba(109,179,5,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                  Get a Custom Quote
                  <svg className="transition-transform duration-300 group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </button>
              </Link>
              
              <a href="tel:+17252223947" className="px-10 py-4 bg-white text-main-black font-bold text-lg rounded-full border-2 border-[#e7e3fa] hover:border-[#6db305] hover:text-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.2)] transition-all duration-300 flex items-center gap-2">
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