import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function FunFactOne() {
  return (
    <section id="fun-fact">
      <div className="fun-fact-wrapper w-full xl:pb-[130px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-[155px]">
            <div className="w-full">
              {/* --- Section Tag: Added !text-[#6db305] as requested --- */}
              <span className="mb-5 section-title-top-tag !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full">
                The ACE Impact
              </span>
              
              <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px]">
                Proven metrics. Unstoppable growth.
              </h2>
              
              {/* Left Border changed from purple to Brand Green (#6db305) */}
              <p className="text-paragraph mb-[40px] pl-5 border-l-[3px] border-[#6db305]">
                From clinical pharmacy turnarounds to generating AI clones that educate globally, our numbers speak for themselves.
              </p>
              
              {/* লিংকটি /about থেকে পরিবর্তন করে /founder করা হয়েছে */}
              <Link to="/founder">
                {/* Button Hover Border and Text changed to Brand Green (#6db305) with Glow */}
                <div className="w-[182px] h-[56px] rounded-full border border-[#e7e3fa] flex justify-center items-center hover:border-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.3)] transition-all duration-300 group">
                  <div className="flex space-x-2.5 items-center text-[#094a66] group-hover:text-[#6db305] transition-colors duration-300">
                    <span className="text-pone font-semibold"> Meet Joseph </span>
                    <span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="relative flex flex-wrap w-full gap-5 mt-10 xl:mt-0 xl:flex-none">
              
              {/* Block 1 */}
              <div className="xl:absolute left-20 top-0 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray hover:border-[#6db305] hover:shadow-[0_0_25px_rgba(109,179,5,0.2)] transition-all duration-500 overflow-hidden group">
                <div className="relative flex items-center justify-center p-8">
                  <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                    <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                      <CountUp start={0} end={77} duration={3} />
                      K+
                    </p>
                    {/* HR border changed to Brand Blue (#094a66) */}
                    <hr className="border-[3px] border-[#094a66] w-[80px]" />
                    <p className="font-semibold text-center text-paragraph text-18">
                      Global Participants
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100">
                    <img
                      src="/assets/images/home-one-ff-item-shape.webp"
                      className="w-full h-full object-cover opacity-30"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              
              {/* Block 2 */}
              <div className="xl:absolute left-0 bottom-5 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray hover:border-[#6db305] hover:shadow-[0_0_25px_rgba(109,179,5,0.2)] transition-all duration-500 overflow-hidden group">
                <div className="relative flex items-center justify-center p-8">
                  <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                    <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                      <CountUp start={0} end={23} duration={3} />
                      %
                    </p>
                    {/* HR border changed to Brand Blue (#094a66) */}
                    <hr className="border-[3px] border-[#094a66] w-[80px]" />
                    <p className="font-semibold text-center text-paragraph text-18">
                      Avg. Turnaround Growth
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100">
                    <img
                      src="/assets/images/home-one-ff-item-shape.webp"
                      className="w-full h-full object-cover opacity-30"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              
              {/* Block 3 */}
              <div className="xl:absolute -right-12 bottom-20 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray hover:border-[#6db305] hover:shadow-[0_0_25px_rgba(109,179,5,0.2)] transition-all duration-500 overflow-hidden group">
                <div className="relative flex items-center justify-center p-8">
                  <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                    <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                      <CountUp start={0} end={10} duration={3} />
                      +
                    </p>
                    {/* HR border changed to Brand Blue (#094a66) */}
                    <hr className="border-[3px] border-[#094a66] w-[80px]" />
                    <p className="font-semibold text-center text-paragraph text-18">
                      Years Experience
                    </p>
                  </div>
                  {/* Background Image Opacity adjusted for better text readability */}
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-100">
                    <img
                      src="/assets/images/home-one-ff-item-shape.webp"
                      className="w-full h-full object-cover opacity-30"
                      alt=""
                    />
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