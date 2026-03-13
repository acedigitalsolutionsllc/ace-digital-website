import React from "react";

export default function AboutLogoCloud() {
  return (
    <section id="home-one-client" className="relative py-[50px] overflow-hidden bg-white">
      
      {/* Background Soft Glow - Brand Blue */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#094a66]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto theme-container relative z-10">
        {/* Main Wrapper Box - Shadow and subtle border */}
        <div className="py-[70px] px-6 md:px-12 bg-[#f8f9fc] border border-[#e7e3fa] rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          
          {/* Header Area */}
          <div className="flex flex-col items-center mb-[50px]">
            {/* Brand Green Tag with Glow */}
            <span className="inline-block py-1.5 px-5 rounded-[30px] border !border-[#6db305]/20 !bg-[#6db305]/10 !text-[#6db305] font-semibold text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(109,179,5,0.15)]">
              Trusted Partners
            </span>
            <p className="text-xl md:text-2xl text-main-black font-bold text-center">
              We’ve partnered with more than <span className="text-[#094a66]">500+</span> global clients
            </p>
          </div>

          {/* Logos Grid */}
          <div className="w-full grid grid-cols-6 lg:grid-cols-12 gap-[30px] md:gap-[40px] items-center">
            
            {/* Client 1 */}
            <div data-aos="fade-up" data-aos-delay="0" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/RX-healthy-habits.svg" 
                  alt="RX Healthy Habits" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

            {/* Client 2 */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/Dr_Arsy.svg" 
                  alt="Dr Arsy" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

            {/* Client 3 */}
            <div data-aos="fade-up" data-aos-delay="200" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/Twist_foods.svg" 
                  alt="Twist Foods" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

            {/* Client 4 */}
            <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/VDOLogy.svg" 
                  alt="VDOLogy" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

            {/* Client 5 */}
            <div data-aos="fade-up" data-aos-delay="0" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/Andrea_Khorhon_agency.svg" 
                  alt="Andrea Khorhon Agency" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

            {/* Client 6 */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/Florajen.svg" 
                  alt="Florajen" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

            {/* Client 7 */}
            <div data-aos="fade-up" data-aos-delay="200" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/Nesco.svg" 
                  alt="Nesco" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

            {/* Client 8 */}
            <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center col-span-3 client-item">
              <a href="#" aria-label="partner" className="w-full h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.15)] hover:border-[#6db305] transition-all duration-300 group">
                <img 
                  src="/assets/images/Mavoge.svg" 
                  alt="Mavoge" 
                  className="max-h-[60px] md:max-h-[70px] opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}