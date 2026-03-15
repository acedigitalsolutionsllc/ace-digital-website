import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header & Footer Import ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile";
import FooterOne from "../components/Layout/Footer/FooterOne";

export default function ReferralProgram() {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  
  // ফর্মের ডেটাগুলো একটি স্টেটে রাখার ব্যবস্থা
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referralName: "",
    referralContact: "",
    notes: ""
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // 💡 ম্যাজিক ট্রিক: আমরা Contact Us টেমপ্লেটের (template_6gwu1kg) ভ্যারিয়েবলগুলোতেই ডাটা পাঠাচ্ছি
    const templateParams = {
      title: "New Client Referral!", // এটি Contact টেমপ্লেটের Subject এর {{title}} এ বসবে
      user_name: formData.referrerName, // এটি {{user_name}} এ বসবে
      user_email: formData.referrerEmail, // এটি {{user_email}} এ বসবে
      interest: "Partner/Referral Program", // এটি {{interest}} এ বসবে
      // রেফারেলের বাকি সব তথ্য আমরা সুন্দর করে সাজিয়ে {{message}} এর ভেতরে পাঠিয়ে দিচ্ছি
      message: `
GREAT NEWS! You have received a new Client Referral.

--- PROSPECT (REFERRAL) DETAILS ---
Name: ${formData.referralName}
Contact Info: ${formData.referralContact}

--- ADDITIONAL NOTES ---
${formData.notes || "No additional notes provided."}

Please reach out to the prospect ASAP!
      `
    };

    // sendForm এর বদলে send ব্যবহার করছি, কারণ আমরা কাস্টম ডাটা পাঠাচ্ছি
    emailjs
      .send(
        "service_pgb2duk",       // আপনার Service ID
        "template_6gwu1kg",      // ⚠️ আপনার Contact Us টেমপ্লেটের ID
        templateParams,
        "WKtRNi6iZ_QylHBgl"      // আপনার Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          setFormData({
            referrerName: "",
            referrerEmail: "",
            referralName: "",
            referralContact: "",
            notes: ""
          });
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

      {/* --- Hero Section --- */}
      <section className="relative w-full pt-[150px] pb-[80px] bg-main-gray overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
          <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" className="w-full object-cover" />
        </div>
        <div className="mx-auto theme-container relative z-10 text-center max-w-4xl">
          {/* Changed Tag: Text Brand Green and Border Brand Green with Glow format */}
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full shadow-[0_0_10px_rgba(109,179,5,0.15)]">
            ACE Partner Program
          </div>
          <h1 className="text-4xl md:text-[60px] font-bold text-main-black mb-6 leading-tight">
            Share the Innovation. <br />
            {/* Gradient changed to Brand Blue and Brand Green */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a66] to-[#6db305]">Earn the Reward.</span>
          </h1>
          <p className="text-paragraph font-medium text-lg mb-4">
            Refer a business owner to ACE Digital Solutions and enjoy exclusive savings on your contract or earn cash rewards. Win-win for everyone!
          </p>
        </div>
      </section>

      {/* --- Reward Cards & How it Works --- */}
      <section className="w-full py-[80px] bg-white relative">
        {/* Background glow changed to Brand Blue */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#094a66]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mx-auto theme-container max-w-6xl relative z-10">
          
          {/* 4 Rewards Grid Updated based on Joe's Draft */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[80px]">
            
            {/* Reward 1 */}
            <div data-aos="fade-up" data-aos-delay="0" className="bg-white border-2 border-[#e7e3fa] hover:border-[#6db305] rounded-[30px] p-8 text-center shadow-sm hover:shadow-[0_10px_30px_rgba(109,179,5,0.15)] transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-black text-main-black mb-2">15% <span className="text-xl text-[#6db305]">OFF</span></div>
              <h3 className="text-lg font-bold text-[#094a66] mb-2">Your Own Bill</h3>
              <p className="text-paragraph text-sm font-medium">For bringing a client with a <strong>$500+</strong> monthly contract.</p>
            </div>
            
            {/* Reward 2 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white border-2 border-[#e7e3fa] hover:border-[#6db305] rounded-[30px] p-8 text-center shadow-sm hover:shadow-[0_10px_30px_rgba(109,179,5,0.15)] transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-black text-main-black mb-2">10% <span className="text-xl text-[#6db305]">OFF</span></div>
              <h3 className="text-lg font-bold text-[#094a66] mb-2">Your Own Bill</h3>
              <p className="text-paragraph text-sm font-medium">For bringing a client with a <strong>$299-$499</strong> monthly contract.</p>
            </div>

            {/* Reward 3 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white border-2 border-[#e7e3fa] hover:border-[#6db305] rounded-[30px] p-8 text-center shadow-sm hover:shadow-[0_10px_30px_rgba(109,179,5,0.15)] transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-black text-main-black mb-2">15% <span className="text-xl text-[#6db305]">REWARD</span></div>
              <h3 className="text-lg font-bold text-[#094a66] mb-2">Cash or Discount</h3>
              <p className="text-paragraph text-sm font-medium">For bringing a one-time setup fee between <strong>$500-$999</strong>.</p>
            </div>
            
            {/* Reward 4 - VIP Background changed to Brand Blue */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-[#094a66] rounded-[30px] p-8 text-center shadow-[0_10px_30px_rgba(9,74,102,0.3)] transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none"></div>
              {/* OFF Text changed to Brand Green with inner text glow on hover */}
              <div className="text-4xl font-black text-white mb-2 relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(109,179,5,0.8)] transition-all duration-300">20% <span className="text-xl text-[#6db305]">OFF</span></div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">VIP Reward</h3>
              <p className="text-white/80 text-sm font-medium relative z-10">If you bring <strong>more than 3</strong> successful clients.</p>
            </div>

          </div>

          {/* How It Works */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-main-black mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div data-aos="zoom-in" className="flex flex-col items-center">
                {/* Numbers styled with Brand Colors */}
                <div className="w-16 h-16 bg-[#094a66]/10 text-[#094a66] rounded-full flex items-center justify-center text-2xl font-black mb-4 border border-[#094a66]/20">1</div>
                <h4 className="text-lg font-bold text-main-black mb-2">Refer a Peer</h4>
                <p className="text-paragraph text-sm">Fill out the quick secure form below with their details.</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col items-center relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-8 -left-1/4 w-1/2 h-[2px] bg-dashed border-t-2 border-[#094a66]/20"></div>
                <div className="w-16 h-16 bg-[#094a66]/10 text-[#094a66] rounded-full flex items-center justify-center text-2xl font-black mb-4 border border-[#094a66]/20 relative z-10">2</div>
                <h4 className="text-lg font-bold text-main-black mb-2">We Connect</h4>
                <p className="text-paragraph text-sm">We'll reach out to them and handle the entire presentation.</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col items-center relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-8 -left-1/4 w-1/2 h-[2px] bg-dashed border-t-2 border-[#094a66]/20"></div>
                {/* Step 3 Glows with Brand Green */}
                <div className="w-16 h-16 bg-[#6db305] text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-[0_0_15px_rgba(109,179,5,0.5)] relative z-10">3</div>
                <h4 className="text-lg font-bold text-main-black mb-2">You Earn</h4>
                <p className="text-paragraph text-sm">Once they sign a contract, your discount or cash is applied instantly!</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Referral Form Section --- */}
      <section className="w-full py-[100px] bg-[#f8f9fc] relative">
        <div className="mx-auto theme-container max-w-4xl relative z-10">
          
          <div data-aos="fade-up" className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#e7e3fa] p-8 md:p-14">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-main-black mb-2">Make a Referral</h2>
              <p className="text-paragraph">Please enter the details below securely.</p>
            </div>

            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-[#6db305]/10 text-[#6db305] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(109,179,5,0.2)]">
                  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-main-black mb-2">Referral Submitted!</h3>
                <p className="text-paragraph mb-6">Thank you for sharing the innovation. We will contact them shortly.</p>
                <button onClick={() => setStatus(null)} className="text-[#094a66] hover:text-[#6db305] font-bold hover:underline transition-colors">Submit Another Referral</button>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="flex flex-col gap-6">
                
                {/* Your Details */}
                <div className="bg-main-gray/30 p-6 rounded-2xl border border-[#e7e3fa]">
                  <h4 className="font-bold text-main-black mb-4 flex items-center gap-2">
                    <span className="text-[#094a66]"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                    Your Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Your Full Name *</label>
                      {/* Added Brand Green Glow on Focus */}
                      <input type="text" name="referrerName" value={formData.referrerName} onChange={handleChange} required className="w-full h-[55px] px-5 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Your Email *</label>
                      <input type="email" name="referrerEmail" value={formData.referrerEmail} onChange={handleChange} required className="w-full h-[55px] px-5 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none transition-all" placeholder="john@yourcompany.com" />
                    </div>
                  </div>
                </div>

                {/* Referral Details */}
                {/* Background changed to Brand Blue tint */}
                <div className="bg-[#094a66]/5 p-6 rounded-2xl border border-[#094a66]/20">
                  <h4 className="font-bold text-main-black mb-4 flex items-center gap-2">
                    <span className="text-[#094a66]"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                    Referral's Information
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Referral's Full Name *</label>
                      <input type="text" name="referralName" value={formData.referralName} onChange={handleChange} required className="w-full h-[55px] px-5 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none transition-all" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Referral's Email or Phone *</label>
                      <input type="text" name="referralContact" value={formData.referralContact} onChange={handleChange} required className="w-full h-[55px] px-5 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none transition-all" placeholder="jane@example.com OR (123) 456-7890" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Additional Notes (Optional)</label>
                      <textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" className="w-full p-5 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none transition-all resize-none" placeholder="Tell us a bit about their business or how you know them..."></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button changed to Brand Blue and Green Glow on Hover */}
                <button 
                  type="submit" 
                  disabled={status === "sending"}
                  className="w-full mt-4 py-4 bg-[#094a66] text-white font-bold text-lg rounded-xl hover:bg-[#6db305] hover:shadow-[0_0_20px_rgba(109,179,5,0.4)] transition-all duration-300 disabled:bg-gray-400"
                >
                  {status === "sending" ? "Submitting..." : "Submit Referral"}
                </button>

                {/* Updated Terms and Conditions Note to match the new rewards */}
                <p className="text-xs text-paragraph text-center mt-4 px-4">
                  *Terms & Conditions: Referral discounts or cash rewards apply once the referred client successfully signs their contract and completes their initial payment. Discounts will be formally documented in a written agreement between ACE Digital Solutions, LLC and you.
                </p>

              </form>
            )}
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
}