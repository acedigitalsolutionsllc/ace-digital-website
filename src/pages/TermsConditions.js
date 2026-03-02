import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header এবং Footer এর সঠিক লোকেশন ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne"; 
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile"; 
import FooterOne from "../components/Layout/Footer/FooterOne"; 

export default function TermsConditions() {
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
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold text-purple bg-purple/10 border border-purple/20 rounded-full">
            Effective Date: January 5, 2026
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold text-main-black mb-4">Terms of Service</h1>
          <p className="text-purple font-bold text-lg mb-4">ACE Digital Solutions, LLC</p>
          <div className="flex justify-center items-center gap-2 text-paragraph font-medium">
            <Link to="/" className="hover:text-purple transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple">Terms of Service</span>
          </div>
        </div>
      </section>

      {/* --- Terms Content Section --- */}
      <section className="py-[100px] w-full bg-white">
        <div className="mx-auto theme-container max-w-4xl">
          
          {/* Intro Box */}
          <div data-aos="fade-up" className="bg-main-gray border border-[#e7e3fa] rounded-2xl p-8 mb-12 text-center shadow-sm">
            <p className="text-lg text-paragraph leading-relaxed">
              Welcome to <strong className="text-main-black">ACE Digital Solutions, LLC</strong>. These Terms and Conditions govern your use of our website (<a href="https://www.aceavatars.com" className="text-purple hover:underline">www.aceavatars.com</a>) and the purchase of our specialized services, including AI Clone Avatars, CGI Advertising, and Social Media Management. By engaging our services, you agree to be bound by these terms.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Section 1 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-purple text-white flex items-center justify-center text-lg shadow-sm">1</span>
                Acceptance of Terms
              </h3>
              <p className="text-paragraph ml-14">
                By using our services, you confirm that you are at least <strong className="text-main-black">18 years of age</strong> and possess the legal authority to enter into this agreement. If you are using the services on behalf of a business, that business accepts these terms.
              </p>
            </div>

            {/* Section 2 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-purple text-white flex items-center justify-center text-lg shadow-sm">2</span>
                Services Provided
              </h3>
              <p className="text-paragraph ml-14 mb-4">ACE Digital Solutions provides high-end digital marketing and AI-driven creative services:</p>
              <ul className="space-y-3 ml-14">
                <li className="flex items-start gap-3 text-paragraph">
                  <span className="text-purple mt-1">✔</span>
                  <span><strong className="text-main-black">AI Clone Avatars:</strong> Creation of digital replicas based on user-provided media.</span>
                </li>
                <li className="flex items-start gap-3 text-paragraph">
                  <span className="text-purple mt-1">✔</span>
                  <span><strong className="text-main-black">CGI & Video Production:</strong> High-end visual effects and short-form content creation.</span>
                </li>
                <li className="flex items-start gap-3 text-paragraph">
                  <span className="text-purple mt-1">✔</span>
                  <span><strong className="text-main-black">Management:</strong> Strategic social media oversight and growth services.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-purple text-white flex items-center justify-center text-lg shadow-sm">3</span>
                Intellectual Property & Ownership
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-14">
                <div className="bg-main-gray p-6 rounded-xl border border-[#e7e3fa]">
                  <h4 className="font-bold text-main-black mb-2 text-purple">Your Content</h4>
                  <p className="text-sm text-paragraph">You retain ownership of all original photos/videos. You grant us a license to use these assets solely for fulfilling your project.</p>
                </div>
                <div className="bg-main-gray p-6 rounded-xl border border-[#e7e3fa]">
                  <h4 className="font-bold text-main-black mb-2 text-purple">Final Deliverables</h4>
                  <p className="text-sm text-paragraph">Upon full payment, the client owns the final rendered video or digital asset for their marketing use.</p>
                </div>
                <div className="bg-main-gray p-6 rounded-xl border border-[#e7e3fa]">
                  <h4 className="font-bold text-main-black mb-2 text-purple">Portfolio Right</h4>
                  <p className="text-sm text-paragraph">Unless agreed in writing, ACE Digital Solutions reserves the right to showcase completed projects in our portfolio.</p>
                </div>
              </div>
            </div>

            {/* Section 4 - Ethical Use (Warning Box) */}
            <div data-aos="fade-up" className="pb-10 border-b border-[#e7e3fa]">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-purple text-white flex items-center justify-center text-lg shadow-sm">4</span>
                Ethical Use & Responsibility
              </h3>
              <p className="text-paragraph ml-14 mb-6">This is a critical section for AI services. We uphold strict ethical standards.</p>
              
              <div className="ml-14 bg-[#fff4e5] border border-[#ffb74d] rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#f57c00]"></div>
                <h4 className="text-[#e65100] font-bold text-lg mb-4 flex items-center gap-2">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 12.015L10 1.25l7.834 10.765a2 2 0 01-1.624 3.176H3.79a2 2 0 01-1.624-3.176zM10 5a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 0010 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                  Prohibited Content & Authorization
                </h4>
                <ul className="space-y-3">
                  <li className="text-sm text-[#e65100]"><strong>Authorization:</strong> You represent that you have the full legal right and permission to use the likeness (face and voice) of any individual provided for an AI Clone.</li>
                  <li className="text-sm text-[#e65100]"><strong>Zero Tolerance:</strong> You agree NOT to use our services to create content that is illegal, defamatory, promotes hate speech, or is intended to mislead the public (e.g., non-consensual deepfakes or political misinformation).</li>
                </ul>
              </div>
            </div>

            {/* Section 5, 6, 7, 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-[#e7e3fa] ml-14">
              
              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-main-black mb-4 flex items-center gap-2">
                  <span className="text-purple">5.</span> Payment & Billing
                </h3>
                <ul className="space-y-2 text-paragraph text-sm">
                  <li><strong className="text-main-black">Fees:</strong> Disclosed at purchase or via custom quote.</li>
                  <li><strong className="text-main-black">Terms:</strong> Full/partial deposit required before work commences.</li>
                  <li><strong className="text-main-black">Subscriptions:</strong> Billed in advance. Failure to pay may result in suspension.</li>
                </ul>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold text-main-black mb-4 flex items-center gap-2">
                  <span className="text-purple">6.</span> Limitation of Liability
                </h3>
                <p className="text-paragraph text-sm">
                  To the maximum extent permitted by law, ACE Digital Solutions, LLC shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including loss of profits or brand reputation.
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-xl font-bold text-main-black mb-4 flex items-center gap-2">
                  <span className="text-purple">7.</span> Accuracy of AI
                </h3>
                <p className="text-paragraph text-sm">
                  You acknowledge that AI technology is evolving. While we strive for hyper-realism, slight variations or "artifacts" may occur. We provide revisions as specified in your package.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold text-main-black mb-4 flex items-center gap-2">
                  <span className="text-purple">8.</span> Governing Law
                </h3>
                <p className="text-paragraph text-sm">
                  These Terms shall be governed by and construed in accordance with the laws of the <strong className="text-main-black">State of Arizona</strong>, without regard to its conflict of law provisions.
                </p>
              </div>
            </div>

            {/* Section 9 - Contact */}
            <div data-aos="fade-up" className="ml-14">
              <h3 className="text-2xl font-bold text-main-black mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-purple text-white flex items-center justify-center text-lg shadow-sm">9</span>
                Contact Information
              </h3>
              <p className="text-paragraph mb-6">If you have any questions regarding these Terms, please contact us at:</p>
              
              <div className="bg-main-gray border border-[#e7e3fa] rounded-xl p-6 flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center">
                <a href="mailto:info@aceavatars.com" className="flex items-center gap-3 text-main-black hover:text-purple font-medium transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-purple">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </span>
                  info@aceavatars.com
                </a>
                <a href="https://www.aceavatars.com" className="flex items-center gap-3 text-main-black hover:text-purple font-medium transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-purple">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  </span>
                  www.aceavatars.com
                </a>
                <div className="flex items-center gap-3 text-main-black font-medium">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-purple">
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