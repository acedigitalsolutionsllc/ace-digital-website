import { Link } from "react-router-dom";
import React from "react";

export default function LatestBlogOne() {
  return (
    <section id="blogs">
      <div className="blogs-section-wrapper w-full xl:pt-[130px] xl:pb-[100px] py-[60px] overflow-hidden">
        <div className="mx-auto theme-container">
          <div className="w-full">
            <div className="flex flex-col items-center">
              {/* Changed Tag: Text Brand Green and Border Brand Green */}
              <span className="mb-5 section-title-top-tag !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full">
                News & Blog
              </span>
              <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[60px] text-center">
                Read and explore Our latest news
              </h2>
            </div>
          </div>
          <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            
            {/* Blog Post 1 */}
            <div data-aos="fade-left" className="item group">
              <div
                style={{ background: "url(/assets/images/blogs-1.webp)" }}
                className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
              >
                <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                  <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                    {/* Category color changed to Brand Blue */}
                    <span className="font-semibold text-[#094a66]">Marketing</span>
                    {/* Dot color changed to Brand Green */}
                    <div className="w-[5px] h-[5px] rounded-full bg-[#6db305]"></div>
                    <span className="text-paragraph">December 25, 2023</span>
                  </div>
                </div>
              </div>
              <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black group-hover:text-[#6db305] transition-colors duration-300">
                People The Office Analyzing and Checking Finance Graphs
              </h2>
              <Link to="/blog-details">
                {/* Border and Text Hover changed to Brand Green with Glow effect */}
                <div className="py-5 border-t border-[#e7e3fa] group-hover:border-[#6db305] w-full flex justify-center common-transition group-hover:shadow-[0_10px_20px_rgba(109,179,5,0.15)] rounded-b-[15px]">
                  <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-[#6db305] group-hover:drop-shadow-[0_0_8px_rgba(109,179,5,0.5)] common-transition">
                    <span className="font-medium">Read More</span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
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

            {/* Blog Post 2 */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="item group"
            >
              <div
                style={{ background: "url(/assets/images/blogs-2.webp)" }}
                className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
              >
                <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                  <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                    {/* Category color changed to Brand Blue */}
                    <span className="font-semibold text-[#094a66]">Research</span>
                    {/* Dot color changed to Brand Green */}
                    <div className="w-[5px] h-[5px] rounded-full bg-[#6db305]"></div>
                    <span className="text-paragraph">December 25, 2023</span>
                  </div>
                </div>
              </div>
              <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black group-hover:text-[#6db305] transition-colors duration-300">
                People The Office Analyzing and Checking Finance Graphs
              </h2>
              <Link to="/blog-details">
                {/* Border and Text Hover changed to Brand Green with Glow effect */}
                <div className="py-5 border-t border-[#e7e3fa] group-hover:border-[#6db305] w-full flex justify-center common-transition group-hover:shadow-[0_10px_20px_rgba(109,179,5,0.15)] rounded-b-[15px]">
                  <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-[#6db305] group-hover:drop-shadow-[0_0_8px_rgba(109,179,5,0.5)] common-transition">
                    <span className="font-medium">Read More</span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
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

            {/* Blog Post 3 */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="item group last:hidden xl:last:block"
            >
              <div
                style={{ background: "url(/assets/images/blogs-3.webp)" }}
                className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
              >
                <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                  <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                    {/* Category color changed to Brand Blue */}
                    <span className="font-semibold text-[#094a66]">SEO</span>
                    {/* Dot color changed to Brand Green */}
                    <div className="w-[5px] h-[5px] rounded-full bg-[#6db305]"></div>
                    <span className="text-paragraph">December 25, 2023</span>
                  </div>
                </div>
              </div>
              <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black group-hover:text-[#6db305] transition-colors duration-300">
                People The Office Analyzing and Checking Finance Graphs
              </h2>
              <Link to="/blog-details">
                {/* Border and Text Hover changed to Brand Green with Glow effect */}
                <div className="py-5 border-t border-[#e7e3fa] group-hover:border-[#6db305] w-full flex justify-center common-transition group-hover:shadow-[0_10px_20px_rgba(109,179,5,0.15)] rounded-b-[15px]">
                  <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-[#6db305] group-hover:drop-shadow-[0_0_8px_rgba(109,179,5,0.5)] common-transition">
                    <span className="font-medium">Read More</span>
                    <span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
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
            
          </div>
        </div>
      </div>
    </section>
  );
}