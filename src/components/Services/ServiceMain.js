import React from "react";
import { Link } from "react-router-dom";

export default function ServiceMain() {
  // Array of 12 Services for ACE Digital Solutions
  const servicesData = [
    {
      title: "AI Clone Avatars",
      desc: "Hyper-realistic AI avatars that create continuous content for your brand 24/7.",
      icon: <path d="M12 8V4H8 M4 8h16v12H4z M2 14h2 M20 14h2 M15 13v2 M9 13v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "CGI Advertising",
      desc: "Jaw-dropping Computer-Generated Imagery to make your products go viral.",
      icon: <path d="M23 7l-7 5 7 5V7z M1 5h15v14H1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Pro Video Editing",
      desc: "Cinematic edits, fast cuts, and engaging visuals designed for maximum retention.",
      icon: <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Website Development",
      desc: "Fast, responsive, and high-converting websites optimized for user engagement.",
      icon: <path d="M2 3h20v14H2z M8 21h8 M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Social Media Growth",
      desc: "End-to-end content strategies and daily management to grow your digital footprint.",
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Graphics & Branding",
      desc: "Striking visual identities, viral thumbnails, and custom ad creatives.",
      icon: <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Reels & Ads Boosting",
      desc: "Data-driven paid ad campaigns and short-form video boosting to maximize ROI.",
      icon: <path d="M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google and YouTube with our targeted SEO growth strategies.",
      icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z M10 7v3m0 0v3m0-3h3m-3 0H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Pharmacy Marketing",
      desc: "Specialized clinical marketing to turn struggling pharmacies into thriving businesses.",
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Content Strategy",
      desc: "Comprehensive roadmaps for content creation that convert viewers into loyal clients.",
      icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Copywriting Services",
      desc: "Persuasive sales copy, video scripts, and email newsletters that drive massive action.",
      icon: <path d="M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    },
    {
      title: "Business Consulting",
      desc: "1-on-1 strategic consulting with Joseph to architect your digital success roadmap.",
      icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    }
  ];

  return (
    <section id="service" className="w-full">
      <div className="mx-auto max-w-[1600px] w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-0 bg-main-gray rounded-[10px] border border-[#e7e3fa]">
        <div className="relative w-full service-section-wrapper">
          <div className="relative z-10 mx-auto theme-container">
            
            {/* Header Section */}
            <div className="flex flex-col items-center">
              {/* FIXED: Added !text-[#6db305] and !border-[#6db305] as requested for consistency */}
              <span className="!text-[#6db305] font-medium px-5 py-3 border !border-[#6db305]/20 leading-none rounded-full inline-block mb-5 bg-[#6db305]/10 shadow-sm">
                Explore Services
              </span>
              <h2 className="sm:text-48 text-32 font-semibold text-main-black mb-[60px] text-center lg:w-[800px] w-full leading-tight">
                High Impact Marketing Services to Scale Your Business
              </h2>
            </div>
            
            {/* 12 Services Grid */}
            <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-6">
              
              {servicesData.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-out"
                  data-aos-delay={(index % 4) * 150}
                  // Border animations changed to Brand Green (#6db305) with Glow shadow on hover
                  className="col-span-1 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-[#6db305] before:absolute before:bottom-0 before:right-0 hover:before:shadow-[0_0_20px_rgba(109,179,5,0.3)] before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-[#6db305] after:absolute after:top-0 after:left-0 hover:after:shadow-[0_0_20px_rgba(109,179,5,0.3)] after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear cursor-pointer"
                >
                  <div className="flex flex-col relative px-6 py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10 h-full text-center group-hover:shadow-2xl transition-all duration-300">
                    
                    {/* SVG Icon Area - Updated to Brand Blue (#094a66) with Glow */}
                    <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-[#094a66]/10 group-hover:bg-[#094a66] group-hover:shadow-[0_0_15px_rgba(9,74,102,0.4)] transition-all duration-300 text-[#094a66] group-hover:text-white shadow-inner mb-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {item.icon}
                      </svg>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-grow flex flex-col items-center">
                      <p className="mb-3 font-semibold text-xl text-main-black font-montserrat group-hover:text-[#094a66] transition-colors">
                        {item.title}
                      </p>
                      <p className="text-paragraph text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Read More Button - Updated to Brand Green (#6db305) with Glow hover */}
                    <Link to="/contact" className="mt-auto">
                      <div className="flex items-center gap-2 group/btn text-paragraph hover:text-[#6db305] transition-all duration-300">
                        <span className="relative font-semibold text-sm leading-5 border-b border-transparent font-inter before:inline-block before:border-[#6db305] before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 group-hover/btn:before:w-full before:overflow-hidden before:h-5 group-hover/btn:drop-shadow-[0_0_5px_rgba(109,179,5,0.4)]">
                          Read More
                        </span>
                        <svg
                          className="transform group-hover/btn:translate-x-1 transition-transform duration-300"
                          width="6"
                          height="10"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                    
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}