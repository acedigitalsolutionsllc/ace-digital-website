import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import ContactMap from "./ContactMap";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Form Submit Handler
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_pgb2duk",     // Your Service ID
        "template_6gwu1kg",    // Your Template ID
        form.current,
        "WKtRNi6iZ_QylHBgl"    // Your Public Key
      )
      .then(
        (result) => {
          setStatus("Success! Your message has been sent to ACE Digital Solutions.");
          setIsSubmitting(false);
          e.target.reset(); // ফর্ম ক্লিয়ার করা
        },
        (error) => {
          setStatus("Oops! Failed to send message. Please try again.");
          setIsSubmitting(false);
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <section className="py-16 md:py-[130px] bg-white">
      <div className="theme-container w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
        
        {/* --- Address & Info Start --- */}
        <div className="lg:col-span-5">
          {/* Tag changed to Brand Green with Glow border styling */}
          <span className="inline-block py-1.5 px-4 rounded-full !bg-[#6db305]/10 !text-[#6db305] font-bold text-xs uppercase tracking-widest mb-5 border !border-[#6db305]/20">
            Contact Us
          </span>
          <h1 className="font-extrabold text-main-black text-4xl md:text-[45px] font-montserrat leading-tight">
            Have a Project? Let's Talk
          </h1>
          <p className="text-paragraph mt-[30px] font-sans text-lg">
            See how AI innovation meets scalable business solutions. We reply fast.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] mt-12">
            <div className="col-span-1">
              <h1 className="flex gap-3 items-center mb-4">
                {/* Icon Background & Text Color changed to Brand Blue */}
                <div className="w-10 h-10 rounded-full bg-[#094a66]/10 flex items-center justify-center text-[#094a66]">
                  {/* Location SVG Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="font-bold font-montserrat text-xl text-main-black">
                  Headquarters
                </span>
              </h1>
              <p className="text-paragraph">
                6628 Sky Pointe Dr Ste 289,<br />
                Las Vegas, NV 89131
              </p>
            </div>
            
            <div className="col-span-1">
              <h1 className="flex gap-3 items-center mb-4">
                {/* Icon Background & Text Color changed to Brand Blue */}
                <div className="w-10 h-10 rounded-full bg-[#094a66]/10 flex items-center justify-center text-[#094a66]">
                  {/* Envelope SVG Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="font-bold font-montserrat text-xl text-main-black">
                  Contact Info
                </span>
              </h1>
              {/* Hover color changed to Brand Green */}
              <p className="mt-1 text-paragraph font-medium hover:text-[#6db305] transition-colors">
                <a href="mailto:joe@aceavatars.com">joe@aceavatars.com</a>
              </p>
              <p className="mt-1 text-paragraph font-medium hover:text-[#6db305] transition-colors">
                <a href="mailto:info@aceavatars.com">info@aceavatars.com</a>
              </p>
              <p className="mt-1 text-paragraph font-medium hover:text-[#6db305] transition-colors">
                <a href="tel:+17252223947">(725) 222-3947</a>
              </p>
            </div>
          </div>
          
          {/* Border line changed to Brand Blue tint */}
          <hr className="border-[#094a66]/10 mt-12 mb-[40px]" />
          
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-lg text-main-black">
              Follow Us
            </h1>
            <div className="flex gap-3">
              {/* Facebook SVG Icon - Brand Colors + Glow */}
              <a href="https://www.facebook.com/ACEDigitalSolutionsLLC" target="_blank" rel="noreferrer" className="w-10 h-10 text-[#094a66] hover:text-white rounded-full flex justify-center items-center border border-[#094a66]/20 hover:border-[#6db305] overflow-hidden relative before:absolute before:z-0 before:w-full before:h-full before:bg-[#6db305] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 hover:shadow-[0_0_15px_rgba(109,179,5,0.5)]">
                <span className="relative z-10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 320 512" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </span>
              </a>
              {/* LinkedIn SVG Icon - Brand Colors + Glow */}
              <a href="https://www.linkedin.com/company/110917083/admin/dashboard/" target="_blank" rel="noreferrer" className="w-10 h-10 text-[#094a66] hover:text-white rounded-full flex justify-center items-center border border-[#094a66]/20 hover:border-[#6db305] overflow-hidden relative before:absolute before:z-0 before:w-full before:h-full before:bg-[#6db305] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 hover:shadow-[0_0_15px_rgba(109,179,5,0.5)]">
                <span className="relative z-10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                  </svg>
                </span>
              </a>
              {/* YouTube SVG Icon - Brand Colors + Glow */}
              <a href="https://www.youtube.com/@ACEDigitalSolutionsLLC" target="_blank" rel="noreferrer" className="w-10 h-10 text-[#094a66] hover:text-white rounded-full flex justify-center items-center border border-[#094a66]/20 hover:border-[#6db305] overflow-hidden relative before:absolute before:z-0 before:w-full before:h-full before:bg-[#6db305] before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 hover:shadow-[0_0_15px_rgba(109,179,5,0.5)]">
                <span className="relative z-10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* --- Address & Info End --- */}

        {/* --- Contact Form Start --- */}
        <div className="lg:col-span-7">
          <div className="border border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-[24px] p-6 md:p-[50px]">
            <h1 className="text-3xl tracking-tight font-extrabold text-main-black pb-4 font-montserrat">
              Send Us Message
            </h1>
            <p className="text-paragraph mb-[40px] text-sm">
              Your email address will not be published. Required fields are marked *
            </p>
            
            {/* Active EmailJS Form */}
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
              
              {/* Input Focus updated to Brand Green with Glow */}
              <input
                type="text"
                name="user_name"
                required
                placeholder="Full Name *"
                className="md:col-span-6 h-[45px] focus:outline-none border-b border-[#094a66]/20 focus:border-[#6db305] focus:shadow-[0_4px_10px_-4px_rgba(109,179,5,0.4)] bg-transparent font-medium transition-all"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Address *"
                className="md:col-span-6 h-[45px] focus:outline-none border-b border-[#094a66]/20 focus:border-[#6db305] focus:shadow-[0_4px_10px_-4px_rgba(109,179,5,0.4)] bg-transparent font-medium transition-all"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="md:col-span-6 h-[45px] focus:outline-none border-b border-[#094a66]/20 focus:border-[#6db305] focus:shadow-[0_4px_10px_-4px_rgba(109,179,5,0.4)] bg-transparent font-medium transition-all"
              />
              
              <select 
                name="interest" 
                required 
                defaultValue=""
                className="md:col-span-6 h-[45px] focus:outline-none border-b border-[#094a66]/20 focus:border-[#6db305] focus:shadow-[0_4px_10px_-4px_rgba(109,179,5,0.4)] bg-transparent font-medium text-paragraph cursor-pointer transition-all"
              >
                <option value="" disabled>Interested In *</option>
                <option value="AI Clone Avatar">AI Clone Avatar</option>
                <option value="CGI Advertising">CGI Advertising</option>
                <option value="Social Media Growth">Social Media Growth</option>
                <option value="Other">Other / Partnership</option>
              </select>

              <textarea
                name="message"
                required
                placeholder="How can we help you? *"
                className="md:col-span-12 focus:outline-none border-b border-[#094a66]/20 focus:border-[#6db305] focus:shadow-[0_4px_10px_-4px_rgba(109,179,5,0.4)] bg-transparent h-[100px] resize-none font-medium pt-2 transition-all"
              ></textarea>

              <div className="md:col-span-12 mt-4 flex flex-col items-start gap-4">
                {/* Submit Button - Brand Blue Default, Brand Green Hover with Glow */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="py-3 px-8 bg-[#094a66] rounded-full cursor-pointer hover:bg-[#6db305] hover:shadow-[0_0_20px_rgba(109,179,5,0.4)] transition-all duration-300 flex items-center gap-2 group w-fit disabled:opacity-70"
                >
                  <span className="text-base font-bold text-white transition-all duration-300 font-inter uppercase tracking-wide text-sm">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting ? (
                    /* Theme Original Arrow SVG */
                    <svg className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform duration-300" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  ) : (
                    /* Loading Spinner SVG */
                    <svg className="animate-spin h-5 w-5 text-white ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                </button>
                
                {/* Status Message */}
                {status && (
                  <p className={`text-sm font-semibold mt-2 ${status.includes("Success") ? "text-green-600" : "text-red-500"}`}>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        {/* --- Contact Form End --- */}

      </div>
    </section>
  );
}