import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialOne() {
  const swiperOptions = {
    modules: [EffectFade, Pagination, Autoplay, Navigation],
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
  };

  // Testimonial Data (Dynamic Array for easy editing)
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      role: "CEO, MediCare Pharmacy",
      review: "ACE Digital completely transformed our business. Joseph's strategy helped us increase our online patient reach by 23% in just 4 months. The AI clones are mind-blowing!",
      image: "/assets/images/testimonial-p1.webp",
    },
    {
      id: 2,
      name: "Michael R. Hayes",
      role: "Founder, HealthTech Solutions",
      review: "We were struggling to keep up with content creation. The CGI ads and automated social media management provided by ACE allowed us to scale without the stress.",
      image: "/assets/images/testimonial-p2.webp",
    }
  ];

  return (
    <section id="testimonial" className="relative overflow-hidden bg-white">
      
      {/* Modern Gradient Glow Background Effect - Updated to Brand Colors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#094a66] opacity-[0.05] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#6db305] opacity-[0.05] blur-[150px]"></div>
      </div>

      <div className="testimoial-section-wrapper w-full xl:py-[130px] pt-[60px] pb-[120px] relative z-10 border-t border-slate-100">
        <div className="mx-auto theme-container">
          
          {/* Header Area */}
          <div className="flex flex-col items-center mb-[70px]">
            {/* Added !text-[#6db305] for consistent tag color */}
            <span className="inline-block px-5 py-2 mb-5 font-semibold text-xs tracking-widest uppercase !text-[#6db305] rounded-full !bg-[#6db305]/10 border !border-[#6db305]/20">
              Our Testimonials
            </span>
            <h2 className="md:text-48 text-34 font-bold text-main-black text-center font-montserrat leading-[1.2]">
              Client Success Stories
            </h2>
          </div>
          
          <div className="w-full lg:grid grid-cols-12 items-stretch gap-[40px]">
            
            {/* Left Image Area */}
            <div className="col-span-4">
              <div className="w-full h-[400px] lg:h-[450px] relative rounded-[24px] shadow-2xl border-4 border-white">
                <img
                  src="/assets/images/testimonial-thumb.webp"
                  alt="Happy Client"
                  className="w-full h-full overflow-hidden rounded-[20px] object-cover object-center"
                />
                
                {/* Floating Badge */}
                <div className="absolute -left-5 -bottom-5 sm:left-5 w-[85%] sm:w-auto z-20">
                  <div className="flex justify-between p-2 pl-5 pr-3 bg-white shadow-xl rounded-full items-center border border-slate-100 gap-3 hover:border-[#6db305] transition-colors duration-300">
                    <span className="text-sm font-bold text-main-black whitespace-nowrap">
                      Trusted Clients
                    </span>
                    <img
                      src="/assets/images/home-one-about-group.webp"
                      alt="Client Avatars"
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Slider Area */}
            <div className="relative h-full col-span-8 mt-20 lg:mt-0">
              <div className="relative w-full h-full">
                <Swiper
                  {...swiperOptions}
                  className="w-full h-full testimonial-swiper"
                >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="w-full bg-white h-full rounded-[24px] py-10 md:py-12 px-6 md:px-12 relative shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 group hover:border-[#6db305]/50 transition-colors duration-500">
                        
                        {/* Decorative Quote Icon (Watermark) - Color to Brand Blue */}
                        <div className="absolute right-10 top-10 opacity-5 group-hover:opacity-[0.08] transition-opacity duration-500">
                          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#094a66]">
                            <path d="M14.017 21L16.439 16.09C17.742 13.485 18.069 11.238 17.42 9.345C16.771 7.452 15.342 6.25 13.134 5.74V5H20.613V5.74C19.789 6.223 19.261 6.84 19.03 7.592C18.799 8.344 18.789 9.345 19.001 10.596C19.213 11.847 19.82 13.568 20.82 15.759L17.765 21H14.017ZM3.017 21L5.439 16.09C6.742 13.485 7.069 11.238 6.42 9.345C5.771 7.452 4.342 6.25 2.134 5.74V5H9.613V5.74C8.789 6.223 8.261 6.84 8.03 7.592C7.799 8.344 7.789 9.345 8.001 10.596C8.213 11.847 8.82 13.568 9.82 15.759L6.765 21H3.017Z" />
                          </svg>
                        </div>

                        <div className="relative z-10">
                          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                            
                            {/* Small Quote Icon - Color to Brand Blue */}
                            <div className="w-12 h-12 rounded-full bg-[#094a66]/10 flex items-center justify-center text-[#094a66]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L16.439 13.09C17.742 10.485 18.069 8.238 17.42 6.345C16.771 4.452 15.342 3.25 13.134 2.74V2H20.613V2.74C19.789 3.223 19.261 3.84 19.03 4.592C18.799 5.344 18.789 6.345 19.001 7.596C19.213 8.847 19.82 10.568 20.82 12.759L17.765 18H14.017ZM3.017 18L5.439 13.09C6.742 10.485 7.069 8.238 6.42 6.345C5.771 4.452 4.342 3.25 2.134 2.74V2H9.613V2.74C8.789 3.223 8.261 3.84 8.03 4.592C7.799 5.344 7.789 6.345 8.001 7.596C8.213 8.847 8.82 10.568 9.82 12.759L6.765 18H3.017Z" />
                              </svg>
                            </div>
                            
                            {/* Stars - Kept yellow for ratings */}
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-main-black text-sm uppercase tracking-wide mr-2">Top Rated</span>
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} width="16" height="16" viewBox="0 0 18 18" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"/>
                                </svg>
                              ))}
                            </div>

                          </div>
                          
                          {/* Review Text */}
                          <p className="mb-10 font-medium text-ace-text text-xl md:text-2xl leading-relaxed italic line-clamp-4">
                            "{item.review}"
                          </p>
                          
                          {/* Client Info */}
                          <div className="flex items-center space-x-5">
                            {/* Border color changed to Brand Blue */}
                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#094a66] p-0.5">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-full h-full rounded-full"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-main-black text-lg font-montserrat">
                                {item.name}
                              </p>
                              {/* Role Text Color to Brand Green */}
                              <p className="text-sm font-medium text-[#6db305]">
                                {item.role}
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation & Pagination */}
                <div className="w-full absolute -bottom-[25px] z-20">
                  <div className="flex justify-center w-full">
                    <div className="flex items-center space-x-6 bg-white px-6 py-2 rounded-full shadow-lg border border-slate-100">
                      
                      {/* Prev Button - Hover to Brand Blue with Green Glow */}
                      <button
                        type="button"
                        className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-main-gray hover:bg-[#094a66] text-main-black hover:text-white transition-all duration-300 custom-button-prev hover:shadow-[0_0_15px_rgba(109,179,5,0.4)]"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      </button>

                      {/* Pagination Dots */}
                      <div className="swiper-pagination relative top-0 flex gap-2"></div>
                      
                      {/* Next Button - Hover to Brand Blue with Green Glow */}
                      <button
                        type="button"
                        className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-main-gray hover:bg-[#094a66] text-main-black hover:text-white transition-all duration-300 custom-button-next hover:shadow-[0_0_15px_rgba(109,179,5,0.4)]"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}