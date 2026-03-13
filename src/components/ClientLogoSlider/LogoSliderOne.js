import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Updated Logo Data from your previous section
const logoData = [
  {
    logoUrl: "/assets/images/RX-healthy-habits.svg",
    href: "#",
  },
  {
    logoUrl: "/assets/images/Dr_Arsy.svg",
    href: "#",
  },
  {
    logoUrl: "/assets/images/Twist_foods.svg",
    href: "#",
  },
  {
    logoUrl: "/assets/images/VDOLogy.svg",
    href: "#",
  },
  {
    logoUrl: "/assets/images/Andrea_Khorhon_agency.svg",
    href: "#",
  },
  {
    logoUrl: "/assets/images/Florajen.svg",
    href: "#",
  },
  {
    logoUrl: "/assets/images/Nesco.svg",
    href: "#",
  },
  {
    logoUrl: "/assets/images/Mavoge.svg",
    href: "#",
  },
];

export default function LogoSliderOne() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: false,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  };

  return (
    <section id="home-one-client" className="relative bg-[#f8f9fc] overflow-hidden">
      
      {/* Background Soft Glow - Brand Blue */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#094a66]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="2xl:px-[152px] md:px-10 xl:py-[100px] md:py-[80px] px-5 py-12 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center mb-[50px]">
          {/* Brand Green Tag with Glow */}
          <span className="inline-block py-1.5 px-5 rounded-[30px] border !border-[#6db305]/20 !bg-[#6db305]/10 !text-[#6db305] font-semibold text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(109,179,5,0.15)]">
            Our Global Network
          </span>
          <p className="text-xl md:text-[28px] text-main-black font-bold text-center">
            We’ve partnered with more than <span className="text-[#094a66] drop-shadow-[0_0_8px_rgba(9,74,102,0.3)]">500+</span> amazing brands
          </p>
        </div>

        {/* Fading Edges Wrapper for Premium Look */}
        <div 
          className="w-full h1-partner_slider relative"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
          }}
        >
          <Swiper {...swiperOptions} className="py-5">
            {logoData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center client-item px-2 py-1">
                  {/* Card with Brand Green Hover & Glow */}
                  <Link 
                    to={item.href} 
                    aria-label="partner" 
                    className="w-full h-[100px] md:h-[120px] flex justify-center items-center bg-white rounded-2xl border border-[#e7e3fa] shadow-sm hover:shadow-[0_0_20px_rgba(109,179,5,0.2)] hover:border-[#6db305] transition-all duration-300 group px-4"
                  >
                    <img 
                      src={item.logoUrl} 
                      alt="Client Logo" 
                      className="max-h-[50px] md:max-h-[60px] object-contain opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}