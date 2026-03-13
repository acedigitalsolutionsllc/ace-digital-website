import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header এবং Footer এর সঠিক লোকেশন ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne"; 
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile"; 
import FooterOne from "../components/Layout/Footer/FooterOne"; 

export default function RefundPolicy() {
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
            Transparency & Fairness Protocol
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold text-main-black mb-4">Refund Policy</h1>
          {/* Company Name colored with Brand Green & subtle text glow */}
          <p className="text-[#6db305] font-bold text-lg mb-4 drop-shadow-[0_0_5px_rgba(109,179,5,0.4)]">ACE Digital Solutions, LLC</p>
          <div className="flex justify-center items-center gap-2 text-paragraph font-medium">
            <Link to="/" className="hover:text-[#6db305] hover:drop-shadow-[0_0_5px_rgba(109,179,5,0.5)] transition-all">Home</Link>
            <span>/</span>
            <span className="text-[#094a66] font-bold">Refund Policy</span>
          </div>
        </div>
      </section>

      {/* --- Refund Policy Content Section --- */}
      <section className="py-[100px] w-full bg-white">
        <div className="mx-auto theme-container max-w-4xl">
          
          {/* Intro Box - Added subtle border glow */}
          <div data-aos="fade-up" className="bg-main-gray border border-[#e7e3fa] rounded-2xl p-8 mb-12 text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_5px_20px_rgba(9,74,102,0.1)] transition-all duration-300">
            <p className="text-lg text-paragraph leading-relaxed">
              At <strong className="text-[#094a66]">ACE Digital Solutions, LLC</strong>, we strive to provide high-quality AI-driven digital content, including AI Clone Avatar Videos, CGI Advertising, and Social Media Management. Due to the digital and highly customized nature of our services, we have established the following Refund Policy to ensure clarity and fairness for both parties.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Section 1 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-4">
                {/* Number circles updated to Brand Blue with Green Glow */}
                <span className="w-10 h-10 rounded-full bg-[#094a66] text-white flex items-center justify-center text-lg shadow-[0_0_15px_rgba(109,179,5,0.5)]">1</span>
                General Policy
              </h3>
              <p className="text-paragraph ml-14">
                Because our services involve significant labor, computational power for AI processing, and creative custom work, <strong className="text-[#094a66] bg-[#094a66]/10 px-2 py-0.5 rounded">all sales are generally final</strong>. Once the production or rendering process has begun for a specific project, we cannot offer a full refund.
              </p>
            </div>

            {/* Section 2 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#094a66] text-white flex items-center justify-center text-lg shadow-[0_0_15px_rgba(109,179,5,0.5)]">2</span>
                Custom Digital Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-14">
                {/* Inner Cards - Hover effect changed to Brand Green with Glow */}
                <div className="bg-main-gray p-6 rounded-xl border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.2)] transition-all duration-300 group">
                  {/* Icon updated to Brand Blue */}
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#094a66] shadow-sm mb-4 group-hover:bg-[#094a66] group-hover:text-white transition-colors duration-300">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.335-8 4v2h16v-2c0-2.665-5.33-4-8-4z"></path></svg>
                  </div>
                  <h4 className="font-bold text-main-black mb-2 group-hover:text-[#094a66] transition-colors">AI Clones & Video</h4>
                  <p className="text-sm text-paragraph">These are custom-built for your brand. Refunds are not provided once the AI training or video rendering process has started.</p>
                </div>
                
                <div className="bg-main-gray p-6 rounded-xl border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.2)] transition-all duration-300 group">
                  {/* Icon updated to Brand Blue */}
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#094a66] shadow-sm mb-4 group-hover:bg-[#094a66] group-hover:text-white transition-colors duration-300">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  </div>
                  <h4 className="font-bold text-main-black mb-2 group-hover:text-[#094a66] transition-colors">Revision Policy</h4>
                  <p className="text-sm text-paragraph">Instead of a refund, we offer a specific number of revisions (as stated in your agreement) to ensure the output meets your expectations.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#094a66] text-white flex items-center justify-center text-lg shadow-[0_0_15px_rgba(109,179,5,0.5)]">3</span>
                Subscriptions & Retainers
              </h3>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-3 text-paragraph">
                  {/* Checkmarks changed to Brand Green */}
                  <span className="text-[#6db305] font-bold mt-1">✔</span>
                  <span><strong className="text-main-black">Monthly Retainers:</strong> If you are on a monthly Social Media Management or recurring plan, you may cancel at any time.</span>
                </li>
                <li className="flex items-start gap-3 text-paragraph">
                  <span className="text-[#6db305] font-bold mt-1">✔</span>
                  <span><strong className="text-main-black">Cancellations:</strong> Cancellation requests must be submitted at least <strong>7 days</strong> before the next billing cycle. We do not provide prorated refunds for the remaining days of a current billing month.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 - Exceptions */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#094a66] text-white flex items-center justify-center text-lg shadow-[0_0_15px_rgba(109,179,5,0.5)]">4</span>
                Exceptions & Cancellations
              </h3>
              
              {/* Box styling kept similar but with Brand Blue border mapping */}
              <div className="ml-14 bg-[#094a66]/5 border border-[#094a66]/20 rounded-xl p-6">
                <ul className="space-y-4">
                  <li className="text-[#094a66]">
                    <strong className="block text-lg mb-1 flex items-center gap-2">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Pre-Production
                    </strong>
                    If a client requests a refund <strong>before</strong> any work, research, or AI processing has commenced, a refund of up to <strong>50% to 75%</strong> may be issued (minus processing fees and administrative costs).
                  </li>
                  <li className="border-t border-[#094a66]/20 pt-4 text-[#094a66]">
                    <strong className="block text-lg mb-1 flex items-center gap-2">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      Technical Errors
                    </strong>
                    In the rare event of a major technical failure on our part that prevents us from delivering the service at all, a full or partial refund will be discussed on a case-by-case basis.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#094a66] text-white flex items-center justify-center text-lg shadow-[0_0_15px_rgba(109,179,5,0.5)]">5</span>
                Satisfaction Guarantee
              </h3>
              <p className="text-paragraph ml-14">
                Your satisfaction is our priority. If you are unhappy with a delivery, we encourage you to contact us immediately at <a href="mailto:info@aceavatars.com" className="text-[#094a66] hover:text-[#6db305] font-bold hover:underline transition-colors">info@aceavatars.com</a>. We will work closely with you to fix any issues, adjust the "Digital Persona," or provide an alternative solution that aligns with your vision.
              </p>
            </div>

            {/* Section 6 - Contact */}
            <div data-aos="fade-up" className="ml-14">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-4">
                {/* Fixed the negative margin so it aligns correctly with the other numbers */}
                <span className="w-10 h-10 rounded-full bg-[#094a66] text-white flex items-center justify-center text-lg shadow-[0_0_15px_rgba(109,179,5,0.5)] absolute -translate-x-[72px]">6</span>
                Contact Us
              </h3>
              <p className="text-paragraph mb-6">If you have any questions regarding this policy, please reach out to us:</p>
              
              <div className="bg-main-gray border border-[#e7e3fa] rounded-xl p-6 flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center">
                {/* Contact links - Hover color changed to Brand Green with text glow */}
                <a href="mailto:info@aceavatars.com" className="flex items-center gap-3 text-main-black hover:text-[#6db305] hover:drop-shadow-[0_0_5px_rgba(109,179,5,0.4)] font-medium transition-all group">
                  {/* Icon changed to Brand Blue */}
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(9,74,102,0.15)] text-[#094a66] group-hover:text-[#6db305] transition-colors">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </span>
                  info@aceavatars.com
                </a>
                <a href="https://www.aceavatars.com" className="flex items-center gap-3 text-main-black hover:text-[#6db305] hover:drop-shadow-[0_0_5px_rgba(109,179,5,0.4)] font-medium transition-all group">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(9,74,102,0.15)] text-[#094a66] group-hover:text-[#6db305] transition-colors">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  </span>
                  www.aceavatars.com
                </a>
                <div className="flex items-center gap-3 text-main-black font-medium">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(9,74,102,0.15)] text-[#094a66]">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </span>
                  ACE Digital Solutions, LLC
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