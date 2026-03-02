import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // ⚠️ আপনার দেওয়া পুরোনো কোড থেকে নেওয়া EmailJS এর তথ্য
    emailjs
      .sendForm(
        "service_pgb2duk",   // Service ID
        "template_6gwu1kg",  // Template ID
        form.current,
        "WKtRNi6iZ_QylHBgl"    // Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset(); // ফর্ম রিসেট করা
          setTimeout(() => setStatus(null), 5000); // ৫ সেকেন্ড পর মেসেজ হাইড হবে
        },
        (error) => {
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section className="w-full py-[100px] bg-[#f8f9fc]">
      <div className="mx-auto theme-container">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-5 py-1.5 mb-4 text-sm font-medium text-purple bg-purple/10 border border-purple/20 rounded-full">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-main-black mb-4">
            Have a Project? Let’s Talk
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            See how AI avatars and CGI can scale your business. Real results, seamless automation, and 24/7 engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- Left Side: Contact Info Cards --- */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Email Card */}
            <div data-aos="fade-up" className="bg-white p-6 rounded-[24px] flex items-center justify-between shadow-sm border border-[#e7e3fa] hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-main-black mb-1">Email Us</h3>
                <p className="text-paragraph">joseph@aceavatars.com</p>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-purple/10 flex items-center justify-center text-purple">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
            </div>

            {/* Phone Card */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 rounded-[24px] flex items-center justify-between shadow-sm border border-[#e7e3fa] hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-main-black mb-1">Call Us</h3>
                <p className="text-paragraph">(725) 222-3947</p>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#128C7E]/10 flex items-center justify-center text-[#128C7E]">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
            </div>

            {/* Services Card */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-[24px] flex items-center justify-between shadow-sm border border-[#e7e3fa] hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-main-black mb-1">Our Services</h3>
                <p className="text-paragraph">AI Clones & CGI Advertising</p>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
            </div>

            {/* Location Card */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-6 rounded-[24px] flex items-center justify-between shadow-sm border border-[#e7e3fa] hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-main-black mb-1">Visit Us</h3>
                <p className="text-paragraph">Las Vegas, Nevada</p>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
            </div>
          </div>

          {/* --- Right Side: Contact Form --- */}
          <div data-aos="fade-left" className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[30px] shadow-sm border border-[#e7e3fa]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-main-black mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="user_name" // EmailJS Template এর ভ্যালুর সাথে মিল থাকতে হবে
                  placeholder="John Doe" 
                  required
                  className="w-full h-[55px] px-5 bg-main-gray border border-transparent focus:border-purple rounded-xl outline-none transition-all placeholder:text-gray-400 text-main-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-main-black mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="user_email" // EmailJS Template এর ভ্যালুর সাথে মিল থাকতে হবে
                  placeholder="john48@gmail.com" 
                  required
                  className="w-full h-[55px] px-5 bg-main-gray border border-transparent focus:border-purple rounded-xl outline-none transition-all placeholder:text-gray-400 text-main-black"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold text-main-black mb-2">Interested In</label>
                <select 
                  name="interest" // আপনার আগের কোড অনুযায়ী এটি 'interest'
                  className="w-full h-[55px] px-5 bg-main-gray border border-transparent focus:border-purple rounded-xl outline-none transition-all text-main-black appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled selected>Select a service...</option>
                  <option value="AI Clone Avatars">AI Clone Avatars</option>
                  <option value="CGI Advertising">CGI Advertising</option>
                  <option value="Social Media Growth">Social Media Growth</option>
                  <option value="Other / Partnership">Other / Partnership</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-main-black mb-2">Your Message</label>
                <textarea 
                  name="message" // EmailJS Template এর ভ্যালুর সাথে মিল থাকতে হবে
                  placeholder="I would like to know more about..." 
                  required
                  className="w-full p-5 bg-main-gray border border-transparent focus:border-purple rounded-xl outline-none transition-all placeholder:text-gray-400 text-main-black resize-none min-h-[140px]"
                ></textarea>
              </div>

              {/* Submit Button & Status Messages */}
              <div className="mt-2">
                <button 
                  type="submit" 
                  disabled={status === "sending"}
                  className="w-full py-4 bg-purple text-white font-bold text-lg rounded-xl hover:bg-main-black transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      Sending... 
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <p className="text-green-600 text-center font-medium mt-4">
                    ✅ Success! Your message has been sent to ACE Digital Solutions.
                  </p>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <p className="text-red-600 text-center font-medium mt-4">
                    ❌ Oops! Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}