import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

// --- Header/Footer Import ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile";
import FooterOne from "../components/Layout/Footer/FooterOne";

export default function SampleConsent() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [isChecked, setIsChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!isChecked) {
      alert("Please agree to the terms by checking the box before submitting.");
      return;
    }

    setStatus("sending");

    // EmailJS Credentials 
    emailjs
      .sendForm(
        "service_pgb2duk",       // Service ID
        "template_udk8kdi",      // আপনার দেওয়া নতুন Template ID
        form.current,
        "WKtRNi6iZ_QylHBgl"      // আপনার দেওয়া Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset();
          setIsChecked(false);
        },
        (error) => {
          setStatus("error");
          alert("Something went wrong! Please try again.");
        }
      );
  };

  return (
    <>
      <DemoHeaderOne />
      <DemoHeaderMobile />

      <section className="w-full pt-[150px] pb-[100px] bg-[#f8f9fc] relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mx-auto theme-container max-w-3xl relative z-10">
          
          {/* Header */}
          <div className="text-center mb-10">
            <span className="px-5 py-1.5 mb-4 text-sm font-semibold text-purple bg-purple/10 border border-purple/20 rounded-full inline-block">
              Free Sample Creation
            </span>
            <h1 className="text-3xl md:text-[42px] font-bold text-main-black mb-3">Digital Consent Form</h1>
            <p className="text-paragraph text-lg">Please review and authorize the use of your assets to begin.</p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#e7e3fa] overflow-hidden">
            
            {/* Legal Text Area */}
            <div className="p-8 md:p-10 bg-main-gray/30 border-b border-[#e7e3fa]">
              <h3 className="font-bold text-main-black text-xl mb-4">Terms of Free Sample Creation</h3>
              <div className="space-y-4 text-paragraph text-[15px] leading-relaxed">
                <p>
                  By completing this form, you grant <strong className="text-main-black">ACE Digital Solutions, LLC</strong> temporary permission to use your publicly available intellectual property (including but not limited to website logos, pictures, images, and photos) strictly for the purpose of creating a free, custom digital sample for your review.
                </p>
                <p>
                  <strong className="text-main-black">Our Guarantee to You:</strong><br/>
                  <span className="text-purple mr-2">✔</span> The created content is completely free and yours to use.<br/>
                  <span className="text-purple mr-2">✔</span> ACE Digital Solutions, LLC will <strong className="underline decoration-red-500">NOT</strong> post or publish this sample to any platforms.<br/>
                  <span className="text-purple mr-2">✔</span> We will only use this content for our own promotional purposes if we obtain a separate, signed approval from you <em>after</em> the delivery of your free content.
                </p>
              </div>
            </div>

            {/* Input Form */}
            <div className="p-8 md:p-10">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-main-black mb-2">Consent Received!</h3>
                  <p className="text-paragraph mb-6">Thank you. We have received your authorization and will begin working on your free sample immediately.</p>
                  <Link to="/" className="text-purple font-bold hover:underline">Return to Homepage</Link>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Your Full Name *</label>
                      <input type="text" name="client_name" required className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Company / Website Name *</label>
                      <input type="text" name="company_name" required className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="Your Brand LLC" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-main-black mb-2">Email Address *</label>
                    <input type="email" name="client_email" required className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="john@company.com" />
                  </div>

                  {/* Digital Signature */}
                  <div className="bg-purple/5 p-6 rounded-xl border border-purple/20 mt-2">
                    <label className="block text-sm font-bold text-main-black mb-2">Digital Signature (Type your full name) *</label>
                    <input type="text" name="digital_signature" required className="w-full h-[55px] px-5 bg-white border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all font-mono text-purple text-lg" placeholder="Type your name to sign" />
                    
                    <div className="flex items-start gap-3 mt-5 cursor-pointer">
                      <input 
                        type="checkbox" 
                        id="agree" 
                        required
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="w-5 h-5 mt-0.5 accent-purple cursor-pointer" 
                      />
                      <label htmlFor="agree" className="text-sm text-paragraph cursor-pointer select-none">
                        I have read and agree to the terms stated above. I authorize ACE Digital Solutions, LLC to use my assets solely for this free sample.
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "sending" || !isChecked}
                    className="w-full mt-4 py-4 bg-purple text-white font-bold text-lg rounded-xl hover:bg-main-black transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Submitting Consent..." : "Authorize & Submit"}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <FooterOne />
    </>
  );
}