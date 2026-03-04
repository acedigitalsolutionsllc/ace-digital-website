import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import { Link } from "react-router-dom";

// --- Header & Footer Import ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile";
import FooterOne from "../components/Layout/Footer/FooterOne";

export default function SubmitAssets() {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [isChecked, setIsChecked] = useState(false);

  // ফর্মের ডেটাগুলো স্টেটে রাখা
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    companyName: "",
    assetLink: "",
    websiteLink: "",
    socialLinks: "",
    projectNotes: "",
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
    
    if (!isChecked) {
      alert("Please agree to the Asset Waiver and Disclaimer before submitting.");
      return;
    }

    setStatus("sending");

    // 💡 ম্যাজিক ট্রিক: আপনার Contact Us টেমপ্লেটের ভেতরেই সব ডেটা প্যাক করে পাঠানো হচ্ছে
    const templateParams = {
      title: "New Client Assets Submitted!", // Email Subject-এ বসবে
      user_name: formData.clientName, 
      user_email: formData.clientEmail,
      interest: "Client Onboarding & Asset Submission",
      // ফর্মের সব তথ্য সুন্দর করে সাজিয়ে message বক্সে পাঠানো হচ্ছে
      message: `
🚀 NEW ASSET SUBMISSION RECEIVED 🚀

--- CLIENT INFO ---
Name: ${formData.clientName}
Company/Brand: ${formData.companyName}

--- DIGITAL ASSETS & LINKS ---
📁 File Link (Drive/Dropbox/WeTransfer): 
${formData.assetLink}

🌐 Website URL: 
${formData.websiteLink || "Not provided"}

📱 Social Media Links: 
${formData.socialLinks || "Not provided"}

--- PROJECT NOTES & INSTRUCTIONS ---
${formData.projectNotes || "No additional notes provided."}

--- LEGAL AGREEMENT ---
[✓] The client has checked the box and agreed to the ACE Digital Solutions Asset Submission Waiver. They have confirmed ownership of these assets.
      `
    };

    emailjs
      .send(
        "service_pgb2duk",       // Service ID
        "template_6gwu1kg",      // ⚠️ আপনার Contact Us Template ID
        templateParams,
        "WKtRNi6iZ_QylHBgl"      // Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          setFormData({
            clientName: "", clientEmail: "", companyName: "", 
            assetLink: "", websiteLink: "", socialLinks: "", projectNotes: ""
          });
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

      {/* --- Page Header --- */}
      <section className="relative w-full pt-[150px] pb-[80px] bg-main-gray overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
          <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" className="w-full object-cover" />
        </div>
        <div className="mx-auto theme-container relative z-10 text-center max-w-4xl">
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold text-purple bg-purple/10 border border-purple/20 rounded-full">
            Client Onboarding
          </div>
          <h1 className="text-4xl md:text-[56px] font-bold text-main-black mb-4">Submit Your Assets</h1>
          <p className="text-paragraph font-medium text-lg max-w-2xl mx-auto">
            Welcome aboard! Please provide your project files, links, and branding materials below so our team can start crafting your digital persona.
          </p>
        </div>
      </section>

      {/* --- Form Section --- */}
      <section className="w-full py-[100px] bg-white relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto theme-container max-w-4xl relative z-10">
          <div data-aos="fade-up" className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#e7e3fa] p-8 md:p-14">
            
            {status === "success" ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-main-black mb-3">Assets Received Successfully!</h3>
                <p className="text-paragraph text-lg mb-8 max-w-lg mx-auto">
                  Thank you for submitting your materials. Our creative team will review your files and begin working on your project immediately.
                </p>
                <Link to="/">
                  <button className="px-8 py-3 bg-purple text-white font-bold rounded-full hover:bg-main-black transition-colors">Return to Home</button>
                </Link>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="flex flex-col gap-10">
                
                {/* 1. Basic Info */}
                <div>
                  <h4 className="font-bold text-xl text-main-black mb-6 flex items-center gap-2 border-b border-[#e7e3fa] pb-3">
                    <span className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center text-purple text-sm">1</span>
                    Your Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Full Name *</label>
                      <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} required className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-main-black mb-2">Email Address *</label>
                      <input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} required className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-main-black mb-2">Company / Brand Name *</label>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="Your Business LLC" />
                    </div>
                  </div>
                </div>

                {/* 2. File Links & URLs */}
                <div>
                  <h4 className="font-bold text-xl text-main-black mb-6 flex items-center gap-2 border-b border-[#e7e3fa] pb-3">
                    <span className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center text-purple text-sm">2</span>
                    Digital Assets & Links
                  </h4>
                  <div className="flex flex-col gap-6">
                    
                    {/* Cloud Drive Link */}
                    <div className="bg-purple/5 p-6 rounded-2xl border border-purple/20">
                      <label className="block text-sm font-bold text-main-black mb-2">Project Files Link (Google Drive, Dropbox, WeTransfer) *</label>
                      <p className="text-xs text-paragraph mb-3">Please upload your high-quality videos, logos, and raw photos to a cloud drive and paste the "Shareable Link" here. (Ensure access is set to "Anyone with the link").</p>
                      <input type="url" name="assetLink" value={formData.assetLink} onChange={handleChange} required className="w-full h-[55px] px-5 bg-white border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="https://drive.google.com/drive/folders/..." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-main-black mb-2">Website URL</label>
                        <input type="url" name="websiteLink" value={formData.websiteLink} onChange={handleChange} className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="https://www.yourwebsite.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-main-black mb-2">Social Media Handles</label>
                        <input type="text" name="socialLinks" value={formData.socialLinks} onChange={handleChange} className="w-full h-[55px] px-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all" placeholder="@yourbrand (IG, TikTok, FB)" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* 3. Instructions */}
                <div>
                  <h4 className="font-bold text-xl text-main-black mb-6 flex items-center gap-2 border-b border-[#e7e3fa] pb-3">
                    <span className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center text-purple text-sm">3</span>
                    Project Notes
                  </h4>
                  <div>
                    <label className="block text-sm font-bold text-main-black mb-2">Additional Instructions or Ideas</label>
                    <textarea name="projectNotes" value={formData.projectNotes} onChange={handleChange} rows="4" className="w-full p-5 bg-main-gray border border-[#e7e3fa] focus:border-purple rounded-xl outline-none transition-all resize-none" placeholder="Tell us about the vibe, specific colors, or anything we should focus on..."></textarea>
                  </div>
                </div>

                {/* 4. Waiver & Disclaimer */}
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    Asset Submission Waiver & Disclaimer
                  </h4>
                  <div className="flex items-start gap-4 cursor-pointer mt-4">
                    <input 
                      type="checkbox" 
                      id="waiver" 
                      required
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="w-6 h-6 mt-1 accent-purple cursor-pointer flex-shrink-0" 
                    />
                    <label htmlFor="waiver" className="text-sm text-orange-900 cursor-pointer select-none leading-relaxed">
                      <strong>I agree and confirm:</strong> I am the rightful owner (or authorized representative) of the logos, images, videos, and intellectual property submitted through this link. I grant ACE Digital Solutions, LLC the right to use these assets exclusively for fulfilling my project. ACE Digital Solutions is not liable for any copyright infringement claims arising from the assets I provide.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status === "sending" || !isChecked}
                  className="w-full py-5 bg-purple text-white font-bold text-lg rounded-xl shadow-lg hover:bg-main-black hover:shadow-xl transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? "Submitting Assets..." : "Securely Submit Assets"}
                  {!status && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
                </button>

              </form>
            )}

          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
}