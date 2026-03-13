import React from "react";

export default function AboutCompany() {
  return (
    <section className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-0 h-fit">
          <div className="col-span-6 lg:pr-[87px] flex h-full items-center">
            <div className="">
              
              {/* Tag / Badge - Updated to Brand Green with Glow */}
              <div className="py-1.5 md:py-3 px-5 rounded-[30px] border-[1.2px] !border-[#6db305]/20 w-fit !bg-[#6db305]/10 shadow-[0_0_15px_rgba(109,179,5,0.1)]">
                <h1 className="text-base font-medium leading-5 tracking-tight !text-[#6db305]">
                  About ACE Digital Solutions
                </h1>
              </div>

              {/* Main Headline */}
              <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5 leading-tight">
                Pioneering the Future of Digital Marketing with AI & CGI.
              </h1>

              {/* Paragraph */}
              <p className="mt-5 md:mt-10 text-paragraph leading-relaxed">
                We are more than a marketing agency; we are architects of digital growth. Combining 10+ years of clinical precision with cutting-edge AI and CGI technology, we craft hyper-realistic digital avatars and high-converting campaigns that work for you 24/7.
              </p>

              {/* Divider - Brand Blue tint */}
              <hr className="mt-10 border-[#094a66]/10" />

              {/* Two Column Features */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-[50px] gap-8 md:gap-[70px]">
                
                {/* Feature 1 */}
                <div data-aos="fade-left" className="grid-cols-1 group cursor-default">
                  {/* Icon updated: Default Brand Blue with blue glow, Hover Brand Green with green glow */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_0_8px_rgba(9,74,102,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(109,179,5,0.6)] transition-all duration-300"
                  >
                    <path
                      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                      className="fill-[#094a66] group-hover:fill-[#6db305] transition-colors duration-300"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                      fill="white"
                    />
                  </svg>
                  <h1 className="mt-4 font-semibold text-18 text-main-black group-hover:text-[#094a66] transition-colors duration-300">
                    AI Clone Avatars
                  </h1>
                  <p className="mt-3 text-paragraph text-sm group-hover:text-main-black transition-colors duration-300">
                    Replicate your likeness and voice to scale your brand presence without the stress of constant filming.
                  </p>
                </div>

                {/* Feature 2 */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="grid-cols-1 group cursor-default"
                >
                  {/* Icon updated: Default Brand Blue with blue glow, Hover Brand Green with green glow */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_0_8px_rgba(9,74,102,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(109,179,5,0.6)] transition-all duration-300"
                  >
                    <path
                      d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                      className="fill-[#094a66] group-hover:fill-[#6db305] transition-colors duration-300"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                      fill="white"
                    />
                  </svg>
                  <h1 className="mt-4 font-semibold text-18 text-main-black group-hover:text-[#094a66] transition-colors duration-300">
                    High-Impact CGI
                  </h1>
                  <p className="mt-3 text-paragraph text-sm group-hover:text-main-black transition-colors duration-300">
                    Stop the scroll with jaw-dropping, viral-worthy 3D visual ads tailored for maximum engagement.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="relative flex flex-col items-center justify-end col-span-6 sm:flex-row">
            
            {/* Trusted Clients Badge */}
            <div className="flex items-center p-[7px] pl-5 bg-white rounded-[30px] sm:absolute left-10 top-[70px] z-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(109,179,5,0.15)] transition-all duration-300">
              <span className="text-sm font-semibold text-black font-inter">
                Trusted Clients
              </span>
              <div className="relative flex cursor-pointer">
                <img src="/assets/images/about/client1.webp" alt="Client 1" className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-4 hover:z-10 border-2 border-white" />
                <img src="/assets/images/about/client2.webp" alt="Client 2" className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-3 hover:z-10 border-2 border-white" />
                <img src="/assets/images/about/client3.webp" alt="Client 3" className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-2 hover:z-10 border-2 border-white" />
                <img src="/assets/images/about/client4.webp" alt="Client 4" className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 -right-1 hover:z-10 border-2 border-white" />
                <img src="/assets/images/about/client5.webp" alt="Client 5" className="relative object-cover w-8 h-8 overflow-hidden transition-all duration-300 rounded-full sm:w-9 sm:h-9 hover:z-10 border-2 border-white" />
              </div>
            </div>
            
            {/* Main Image */}
            <div>
              <img
                src="/assets/images/joe-About.png"
                alt="Joseph Montemorano"
                className="rounded-[20px] shadow-xl"
              />
            </div>

            {/* Floating Experience Card - Updated to Brand Blue with Green Glow on Hover */}
            <div className="bg-[#094a66] p-[30px] rounded-2xl sm:absolute z-20 bottom-8 w-[295px] left-8 mt-5 sm:mt-0 max-w-full shadow-[0_15px_30px_rgba(9,74,102,0.3)] hover:shadow-[0_15px_40px_rgba(109,179,5,0.25)] transition-all duration-500 group overflow-hidden">
              <img
                src="/assets/images/home-five/hero/about-card-shape.webp"
                alt=""
                className="absolute right-2 top-bottom-moving opacity-50"
              />
              <div className="flex items-center gap-2.5 relative z-10">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm leading-8 text-white">We bring</span>
              </div>
              {/* Text receives a subtle green glow on hover */}
              <h1
                className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[200px] relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(109,179,5,0.8)]"
                data-scroll-qs="scroll"
                data-count-qs="10"
                data-type-qs="+ Years of Precision"
                data-speed-qs="1000"
              >
                10+ Years of Precision
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}