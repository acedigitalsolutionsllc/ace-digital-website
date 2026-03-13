import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header এবং Footer এর সঠিক লোকেশন ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne"; 
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile"; 
import FooterOne from "../components/Layout/Footer/FooterOne"; 

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* --- Headers --- */}
      <DemoHeaderOne />
      <DemoHeaderMobile />

      {/* --- Page Header / Breadcrumb --- */}
      <section className="relative w-full pt-[150px] pb-[80px] bg-main-gray overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
          <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" className="w-full object-cover" />
        </div>
        <div className="mx-auto theme-container relative z-10 text-center">
          {/* Tag changed to Brand Green with Glow Border */}
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full shadow-[0_0_10px_rgba(109,179,5,0.15)]">
            Last Updated: January 10, 2026
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold text-main-black mb-4">Privacy Protocol</h1>
          <div className="flex justify-center items-center gap-2 text-paragraph font-medium">
            <Link to="/" className="hover:text-[#6db305] hover:drop-shadow-[0_0_5px_rgba(109,179,5,0.5)] transition-all">Home</Link>
            <span>/</span>
            <span className="text-[#094a66] font-bold">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* --- Privacy Content Section --- */}
      <section className="py-[100px] w-full bg-white">
        <div className="mx-auto theme-container max-w-4xl">
          
          {/* Intro Box */}
          <div data-aos="fade-up" className="bg-main-gray border border-[#e7e3fa] rounded-2xl p-8 mb-12 text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_5px_20px_rgba(9,74,102,0.1)] transition-all duration-300">
            <p className="text-lg text-paragraph leading-relaxed">
              At <strong className="text-[#094a66]">ACE Digital Solutions, LLC</strong>, ensuring the ethical use of AI technology is our absolute priority. This document outlines exactly how we collect, secure, and manage your "Digital Persona" and biometric data.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Section 1 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-6 flex items-center gap-3">
                {/* Icon Background updated to Brand Blue */}
                <span className="w-10 h-10 rounded-lg bg-[#094a66]/10 flex items-center justify-center text-[#094a66] shadow-[0_0_10px_rgba(9,74,102,0.2)]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.335-8 4v2h16v-2c0-2.665-5.33-4-8-4z"></path></svg>
                </span>
                1. AI Clone & Biometric Data Protocol
              </h3>
              <p className="text-paragraph mb-6">This section governs the creation and protection of your "Digital Persona" (AI Avatar).</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cards updated: Border Brand Blue, Hover shadow Brand Green Glow */}
                <div className="bg-main-gray p-6 rounded-xl border-l-4 border-[#094a66] hover:shadow-[0_0_15px_rgba(109,179,5,0.2)] hover:border-[#6db305] transition-all duration-300">
                  <h4 className="font-bold text-main-black mb-2">Biometric Data Collection</h4>
                  <p className="text-sm text-paragraph">We collect high-resolution photos, videos, and voice recordings purely to process your likeness for AI training.</p>
                </div>
                <div className="bg-main-gray p-6 rounded-xl border-l-4 border-[#094a66] hover:shadow-[0_0_15px_rgba(109,179,5,0.2)] hover:border-[#6db305] transition-all duration-300">
                  <h4 className="font-bold text-main-black mb-2">Purpose of Processing</h4>
                  <p className="text-sm text-paragraph">Data is used exclusively to generate digital replicas that speak and move based on your scripts. We never use this data for unauthorized content.</p>
                </div>
                <div className="bg-main-gray p-6 rounded-xl border-l-4 border-[#094a66] hover:shadow-[0_0_15px_rgba(109,179,5,0.2)] hover:border-[#6db305] transition-all duration-300">
                  <h4 className="font-bold text-main-black mb-2">Military-Grade Encryption</h4>
                  <p className="text-sm text-paragraph">All raw media files and trained AI models are stored in secure, encrypted environments accessible only to essential personnel.</p>
                </div>
                <div className="bg-main-gray p-6 rounded-xl border-l-4 border-[#094a66] hover:shadow-[0_0_15px_rgba(109,179,5,0.2)] hover:border-[#6db305] transition-all duration-300">
                  <h4 className="font-bold text-main-black mb-2">Data Deletion Policy</h4>
                  <p className="text-sm text-paragraph">Upon written request or contract termination, we will permanently delete your raw biometric assets and AI models from our servers.</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#094a66]/10 flex items-center justify-center text-[#094a66] shadow-[0_0_10px_rgba(9,74,102,0.2)]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </span>
                2. Legal Protection & Responsibility
              </h3>
              <p className="text-paragraph mb-4">To protect both your brand and our technology, the following disclaimers apply:</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-paragraph">
                  {/* Checkmarks changed to Brand Green */}
                  <span className="text-[#6db305] font-bold mt-1">✔</span>
                  <span><strong className="text-main-black">Consent & Authorization:</strong> You verify that you own the rights to the face/voice provided for cloning. ACE Digital acts solely as a service provider.</span>
                </li>
                <li className="flex items-start gap-3 text-paragraph">
                  <span className="text-[#6db305] font-bold mt-1">✔</span>
                  <span><strong className="text-main-black">Limitation of Liability:</strong> ACE Digital Solutions, LLC is not liable for indirect damages resulting from the misuse of digital assets by the client or third parties.</span>
                </li>
              </ul>

              {/* Warning Box */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                <h4 className="text-red-600 font-bold text-lg mb-2 flex items-center gap-2">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                  Zero Tolerance Policy
                </h4>
                <p className="text-red-800 text-sm">
                  Clients agree NOT to use AI Clones for illegal, defamatory, or harmful purposes (including deepfakes, political misinformation, or fraud). Violation will result in immediate termination.
                </p>
              </div>
            </div>

            {/* Section 3 & 4 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-[#e7e3fa]">
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-main-black mb-4 flex items-center gap-2">
                  <span className="text-[#094a66]"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7v10c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7c0-2-1.5-3-3-3H7C5.5 4 4 5 4 7zm0 0h16"></path></svg></span>
                  3. Information We Collect
                </h3>
                <ul className="space-y-2 text-paragraph text-sm">
                  <li><strong className="text-main-black">Contact Information:</strong> Name, email, and business details provided via forms.</li>
                  <li><strong className="text-main-black">Usage Data:</strong> IP addresses and browser types to improve website performance.</li>
                </ul>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold text-main-black mb-4 flex items-center gap-2">
                  <span className="text-[#094a66]"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></span>
                  4. Third-Party Processing
                </h3>
                <p className="text-paragraph text-sm">
                  We partner with specialized third-party AI processing platforms to render synthetic content. These partners are strictly vetted for security compliance and are legally prohibited from using your data for their own marketing or training purposes.
                </p>
              </div>
            </div>

            {/* Section 5 & 6 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#094a66]/10 flex items-center justify-center text-[#094a66] shadow-[0_0_10px_rgba(9,74,102,0.2)]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </span>
                5. Your Rights (CCPA & GDPR)
              </h3>
              <p className="text-paragraph mb-4">Depending on your jurisdiction, you have the following rights regarding your data:</p>
              <div className="flex flex-wrap gap-4 mb-8">
                {/* Rights badges - Hover Glow Brand Green */}
                <span className="bg-main-gray px-4 py-2 rounded-lg text-sm font-medium text-main-black border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_0_10px_rgba(109,179,5,0.2)] transition-all cursor-default"><strong>Access:</strong> Request a copy of data</span>
                <span className="bg-main-gray px-4 py-2 rounded-lg text-sm font-medium text-main-black border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_0_10px_rgba(109,179,5,0.2)] transition-all cursor-default"><strong>Deletion:</strong> "Right to be Forgotten"</span>
                <span className="bg-main-gray px-4 py-2 rounded-lg text-sm font-medium text-main-black border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_0_10px_rgba(109,179,5,0.2)] transition-all cursor-default"><strong>Correction:</strong> Correct inaccurate info</span>
              </div>

              <h3 className="text-xl font-bold text-main-black mb-3">6. Changes to Policy</h3>
              <p className="text-paragraph text-sm">
                ACE Digital Solutions reserves the right to update this policy to reflect technological advancements. Continued use of our services constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* Contact Section */}
            <div data-aos="fade-up">
              <h3 className="text-2xl font-bold text-main-black mb-4 text-center">Questions about your data privacy?</h3>
              <p className="text-paragraph text-center mb-8">Reach out directly to our team:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Contact links - Hover color changed to Brand Green with Glow icon */}
                <a href="https://www.aceavatars.com" className="bg-main-gray hover:bg-[#6db305]/5 border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.15)] transition-all p-6 rounded-2xl text-center group">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(109,179,5,0.4)] transition-transform">
                    <svg width="24" height="24" fill="none" stroke="#094a66" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:stroke-[#6db305] transition-colors"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  </div>
                  <span className="font-bold text-main-black group-hover:text-[#6db305] transition-colors">www.aceavatars.com</span>
                </a>
                
                <a href="mailto:info@aceavatars.com" className="bg-main-gray hover:bg-[#6db305]/5 border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.15)] transition-all p-6 rounded-2xl text-center group">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(109,179,5,0.4)] transition-transform">
                    <svg width="24" height="24" fill="none" stroke="#094a66" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:stroke-[#6db305] transition-colors"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="font-bold text-main-black group-hover:text-[#6db305] transition-colors">info@aceavatars.com</span>
                </a>
                
                <div className="bg-main-gray border border-[#e7e3fa] p-6 rounded-2xl text-center">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <svg width="24" height="24" fill="none" stroke="#094a66" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <span className="font-bold text-main-black">ACE Digital Solutions, LLC</span>
                </div>
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