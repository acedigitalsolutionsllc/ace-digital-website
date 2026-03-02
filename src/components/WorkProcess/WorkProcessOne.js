"use client";
import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";

export default function WorkProcessOne() {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current);
      // Cleanup the parallax instance on component unmount
      return () => {
        parallaxInstance.disable();
      };
    }
  }, []);

  // আপনার সবগুলো সার্ভিসকে ৪টি সুন্দর ক্যাটাগরিতে সাজানো হয়েছে আইকনসহ
  const servicesData = [
    {
      title: "AI Avatars & CGI Advertising",
      desc: "Replace stressful video production with 24/7 hyper-realistic AI clones and jaw-dropping CGI assets.",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"></path>
        </svg>
      ),
      delay: "0"
    },
    {
      title: "Video Editing & Graphics",
      desc: "Cinematic video edits, fast cuts, and striking visual identities designed to boost audience retention.",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
      ),
      delay: "100"
    },
    {
      title: "Website Development",
      desc: "We build fast, responsive, and conversion-optimized websites that serve as your digital storefront.",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      delay: "200"
    },
    {
      title: "Social Media & Reels Boosting",
      desc: "End-to-end management, targeted ad campaigns, and short-form video boosting to maximize ROI.",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      delay: "300"
    }
  ];

  return (
    <section id="working-process">
      <div className="working-process-section-wrapper w-full xl:pb-[130px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid-cols-12 xl:grid">
            
            {/* --- Left Side: Services List --- */}
            <div className="col-span-5">
              <div className="title-area">
                <span className="mb-5 section-title-top-tag">Our Core Services</span>
                
                {/* অরিজিনাল থিমের ফন্ট স্টাইল হুবহু রাখা হয়েছে */}
                <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px]">
                  End-to-End Digital Solutions for Modern Brands
                </h2>
                
                <div
                  id="progress-wrapper"
                  className="grid grid-cols-1 gap-5 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
                >
                  {servicesData.map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                      className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                    >
                      <div className="relative z-10 flex flex-col space-y-5">
                        {/* নাম্বারের বদলে আইকন ব্যবহার করা হয়েছে (অরিজিনাল সার্কেল স্টাইল) */}
                        <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple text-purple">
                          {item.icon}
                        </div>
                        <div>
                          {/* অরিজিনাল টাইটেল এবং টেক্সট স্টাইল */}
                          <p className="mb-4 font-semibold text-20 text-main-black">
                            {item.title}
                          </p>
                          <p className="text-paragraph">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Background Shape (Original Theme Style) */}
                      <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        <img
                          src="./assets/images/home-one-ff-item-shape-2.webp"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- Right Side: Sticky Image & Parallax --- */}
            <div className="col-span-7 mt-10 xl:mt-0">
              <div className="relative flex justify-center w-full h-full xl:justify-end">
                <div className="right-0 h-full xl:absolute">
                  <div className="sticky top-[155px]">
                    <div
                      ref={sceneRef}
                      id="home-working-cursor-anim"
                      className="relative"
                    >
                      {/* Floating Badge 1 */}
                      <div data-depth="0.30" className="z-10 layer h-fit">
                        <span className="px-[30px] py-2.5 bg-purple shadow-small shadow-purple text-pone text-white rounded-br-none rounded-full md:inline-block hidden">
                          AI Powered
                        </span>
                      </div>
                      
                      {/* Target Arrow Icon */}
                      <div data-depth="0.40" className="z-10 layer h-fit">
                        <div className="hidden md:inline-block">
                          <img
                            src="./assets/images/teer.webp"
                            alt=""
                            className="drop-shadow-xl"
                          />
                        </div>
                      </div>
                      
                      {/* Floating Badge 2 */}
                      <div data-depth="0.20" className="layer h-fit">
                        <span className="md:inline-block hidden px-[30px] py-2.5 bg-blue-sass text-pone text-white rounded-br-none rounded-full shadow-small shadow-blue-sass">
                          Scalable Growth
                        </span>
                      </div>
                    </div>
                    
                    {/* Right Side Main Image */}
                    <div id="progressThumbHeight">
                      {/* আপনি চাইলে পরবর্তীতে এই ছবিটি পরিবর্তন করে জোসেফের বা কাজের কোনো ছবি দিতে পারবেন */}
                      <img
                        src="/assets/images/working-process-thumb.webp"
                        alt="Working Process"
                        className="rounded-[20px]"
                      />
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