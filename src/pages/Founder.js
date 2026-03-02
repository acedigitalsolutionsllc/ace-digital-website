import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header এবং Footer এর সঠিক লোকেশন ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne"; 
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile"; 

// --- FooterOne এর আপডেট করা লোকেশন ---
import FooterOne from "../components/Layout/Footer/FooterOne"; 

export default function Founder() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* --- Headers --- */}
      <DemoHeaderOne />
      <DemoHeaderMobile />

      {/* --- Breadcrumb / Page Header --- */}
      <section className="relative w-full pt-[150px] pb-[80px] bg-main-gray overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
          <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" className="w-full object-cover" />
        </div>
        <div className="mx-auto theme-container relative z-10 text-center">
          <h1 className="text-4xl md:text-[56px] font-bold text-main-black mb-4">Meet the Founder</h1>
          <div className="flex justify-center items-center gap-2 text-paragraph font-medium">
            <Link to="/" className="hover:text-purple transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple">Founder</span>
          </div>
        </div>
      </section>

      {/* --- Hero Profile Section --- */}
      <section className="py-[100px] w-full bg-white">
        <div className="mx-auto theme-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Area */}
            <div data-aos="fade-right" className="lg:col-span-5 relative">
              <div className="relative rounded-[30px] overflow-hidden border-[8px] border-main-gray shadow-style-one">
                <img 
                  src="/assets/images/joe-hero.png" 
                  alt="Joseph Montemorano" 
                  className="w-full h-auto object-cover bg-[#f4f4f4]"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-purple text-white p-6 rounded-2xl shadow-lg hidden md:block animate-bounce-slow">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm font-medium opacity-90">Years Experience</p>
              </div>
            </div>

            {/* Content Area */}
            <div data-aos="fade-left" className="lg:col-span-7 lg:pl-10">
              <span className="inline-block py-1.5 px-5 rounded-[30px] border-[1.2px] border-purple/30 bg-purple/10 text-purple font-medium text-sm mb-5">
                The Visionary Architect behind ACE Digital
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-main-black mb-2 leading-tight">
                Joseph <span className="text-purple">Montemorano</span>
              </h1>
              <h3 className="text-xl md:text-2xl font-semibold text-paragraph mb-6">
                Pharmacist • Digital Entrepreneur • CEO
              </h3>
              
              <p className="text-lg text-paragraph leading-relaxed mb-8 text-justify">
                An innovative leader bridging 10+ years of clinical excellence with state-of-the-art AI technology. From turning around underperforming pharmacies to pioneering AI-driven digital clones, Joseph specializes in scalable solutions. He leverages hyper-realistic avatar technology for personalized healthcare education and enterprise-grade marketing—reaching over 77,000+ participants globally. He doesn't just manage businesses; <strong>he automates success.</strong>
              </p>

              {/* Contact Info Bar */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-[#e7e3fa]">
                <a href="mailto:joseph@aceavatars.com" className="flex items-center gap-2 text-main-black hover:text-purple font-medium transition-colors bg-main-gray px-4 py-2 rounded-full text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  joseph@aceavatars.com
                </a>
                <a href="tel:+17252223947" className="flex items-center gap-2 text-main-black hover:text-purple font-medium transition-colors bg-main-gray px-4 py-2 rounded-full text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  (725) 222-3947
                </a>
                <div className="flex items-center gap-2 text-main-black font-medium bg-main-gray px-4 py-2 rounded-full text-sm">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Las Vegas, Nevada
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Key Stats Section --- */}
      <section className="py-12 bg-purple">
        <div className="mx-auto theme-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/20">
            <div data-aos="fade-up" data-aos-delay="0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">10+</h2>
              <p className="text-white/80 font-medium text-sm uppercase tracking-wider">Years Clinical Excellence</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">77K+</h2>
              <p className="text-white/80 font-medium text-sm uppercase tracking-wider">Participants Reached</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">23%</h2>
              <p className="text-white/80 font-medium text-sm uppercase tracking-wider">Pharmacy SATR Growth</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h2>
              <p className="text-white/80 font-medium text-sm uppercase tracking-wider">AI Clone Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Experience & Expertise Grid --- */}
      <section className="py-[100px] bg-main-gray">
        <div className="mx-auto theme-container">
          <div className="text-center mb-[60px]">
            <h2 className="text-3xl md:text-[42px] font-bold text-main-black mb-4">
              The Expertise <span className="text-purple">Architecture</span>
            </h2>
            <p className="text-paragraph max-w-2xl mx-auto">A proven track record of clinical leadership and digital innovation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
            
            {/* Left Col: Timeline (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-[20px] shadow-sm p-8 md:p-10 border border-[#e7e3fa]">
              <div className="relative border-l-2 border-purple/20 pl-8 space-y-12">
                
                {/* Timeline Item 1 */}
                <div className="relative" data-aos="fade-up">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-purple rounded-full ring-4 ring-white"></span>
                  <h3 className="text-2xl font-bold text-main-black">Founder & CEO</h3>
                  <p className="text-purple font-semibold text-lg mb-4">ACE DIGITAL SOLUTIONS, LLC</p>
                  <ul className="space-y-3 text-paragraph">
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-1">✔</span>
                      Pioneered AI avatar technology for 24/7 personalized healthcare education.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-1">✔</span>
                      Created scalable content reaching up to 77,000+ participants globally.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-1">✔</span>
                      Provides strategic consulting for medical content, insurance, and food industries.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-1">✔</span>
                      Lead multi-platform production for high-fidelity digital persona clones.
                    </li>
                  </ul>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative" data-aos="fade-up">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-purple/50 rounded-full ring-4 ring-white"></span>
                  <h3 className="text-xl font-bold text-main-black">Thought Leadership</h3>
                  <p className="text-purple font-semibold mb-4">Speaker & Presenter</p>
                  <ul className="space-y-3 text-paragraph">
                    <li className="flex items-start gap-3"><span className="text-purple mt-1">✔</span>Creator of the highly acclaimed "RxHealthyHabits" presentation series.</li>
                    <li className="flex items-start gap-3"><span className="text-purple mt-1">✔</span>Presented: "Using AI to Leverage Info Access for Seniors".</li>
                    <li className="flex items-start gap-3"><span className="text-purple mt-1">✔</span>Presented: "Immunization Update 2025" (Sun City Summerlin Series).</li>
                  </ul>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative" data-aos="fade-up">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-[#FF8C05] rounded-full ring-4 ring-white"></span>
                  <h3 className="text-xl font-bold text-main-black">Pharmacy Manager</h3>
                  <p className="text-purple font-semibold mb-4">Walgreens #6425, Las Vegas, NV</p>
                  <ul className="space-y-3 text-paragraph">
                    <li className="flex items-start gap-3"><span className="text-purple mt-1">✔</span>Turned around "red status" pharmacy (1,500 Rx/wk) to district-leading 23% SATR.</li>
                    <li className="flex items-start gap-3"><span className="text-purple mt-1">✔</span>Boosted 90-day refill enrollment from 31% to 69% in Q1.</li>
                    <li className="flex items-start gap-3"><span className="text-purple mt-1">✔</span>Improved VBPT metrics from 31% to 72% through advanced workflow optimization.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Right Col: Skills & Edu (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-[30px]">
              
              {/* Skills Card */}
              <div className="bg-white rounded-[20px] shadow-sm p-8 border border-[#e7e3fa]" data-aos="fade-left">
                <h3 className="text-xl font-bold text-main-black mb-6 flex items-center gap-2">
                  <svg width="24" height="24" fill="none" stroke="#794AFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  Core Competencies
                </h3>
                
                <p className="text-sm font-semibold text-paragraph uppercase tracking-wider mb-3">Digital & AI Tools</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Argil AI", "11 Labs", "Claude AI", "VidIQ", "YouTube Studio", "Adobe Express", "AI Avatars", "SEO"].map((skill, i) => (
                    <span key={i} className="bg-purple/10 text-purple border border-purple/20 px-3 py-1.5 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-paragraph uppercase tracking-wider mb-3">Leadership</p>
                <div className="flex flex-wrap gap-2">
                  {["Team Management", "Workflow Optimization", "Metrics-Driven", "Immunizations", "DEA Compliance"].map((skill, i) => (
                    <span key={i} className="bg-main-gray text-main-black border border-[#e7e3fa] px-3 py-1.5 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-main-black rounded-[20px] shadow-sm p-8 border border-main-black relative overflow-hidden" data-aos="fade-left" data-aos-delay="100">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple/20 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg width="24" height="24" fill="none" stroke="#794AFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                  Education & Licenses
                </h3>
                <ul className="space-y-4">
                  <li className="border-b border-white/10 pb-4">
                    <strong className="text-white block text-lg">B.S. Pharmacy</strong>
                    <span className="text-[#B0B3C6] text-sm">Albany College of Pharmacy & Health Sciences</span>
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium text-sm">
                    <span className="text-purple">✔</span> NV & NY Pharmacist License
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium text-sm">
                    <span className="text-purple">✔</span> Certified Immunizer
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium text-sm">
                    <span className="text-purple">✔</span> Accredited Preceptor
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <FooterOne />
    </>
  );
}