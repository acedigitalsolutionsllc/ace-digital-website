import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
function ClientTab() {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
  const skills = [
    "video editing",
    "Podcast",
    "Audio Editing",
    "2D/3D Animation",
    "Graphic Design",
    "Digital Marketing",
    "Web Development",
  ];

  const handleNext = () => {
    setSelectedSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrev = () => {
    setSelectedSkillIndex(
      (prevIndex) => (prevIndex - 1 + skills.length) % skills.length
    );
  };

  useEffect(() => {
    let lightbox = GLightbox({
      // Optional GLightbox configuration options
      selector: ".video-play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <section id="video editing" className="pt-[70px] md:pt-[116px]">
      <div className="mx-auto theme-container">
        <p class="font-inter text-24 font-medium text-center text-white mt-6 mb-[50px]">
          {" "}
          We align with your business goals to deliver exceptional services in
          video and audio editing, 2D/3D animation, graphic design, digital
          marketing, web development, and podcasting.{" "}
        </p>
        <div className="w-full relative">
          <div className="w-full mb-[30px]">
            <div className="w-full flex justify-center">
              <div className="flex space-x-5 items-center">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="group h5-testimonial-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 border-white/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-caribbean-green before:bg-caribbean-green relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300"
                >
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-caribbean-green group-hover:stroke-main-black"
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="md:w-[390px] md:h-[46px] md:border border-b-0 border-[#2d2d2d] rounded-tl-xl rounded-tr-xl flex justify-center items-center">
                  <span className=" text-caribbean-green font-bold boldText text-[32px] md:eading-[28px] capitalize">
                    {skills[selectedSkillIndex]}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="group rotate-180 h5-testimonial-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 border-white/20 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-caribbean-green before:bg-caribbean-green relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300"
                >
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-caribbean-green group-hover:stroke-main-black"
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#2d2d2d] md:block hidden  mb-5"></div>
            <div className="w-full md:flex justify-between items-center hidden">
              <div className="flex space-x-4 items-center">
                <button
                  type="button"
                  className="px-7 text-base leading-[30px] text-white border rounded-full border-white hover:text-caribbean-green hover:border-caribbean-green transition-all duration-300 ease-in-out"
                >
                  Full-Form
                </button>
                <button
                  type="button"
                  className="px-7 text-base leading-[30px] text-white border rounded-full border-white hover:text-caribbean-green hover:border-caribbean-green transition-all duration-300 ease-in-out"
                >
                  Short-Form
                </button>
              </div>
              <div className="flex space-x-4 items-center">
                <button
                  type="button"
                  className="px-7 text-base leading-[30px] text-white border rounded-full border-white hover:text-caribbean-green hover:border-caribbean-green transition-all duration-300 ease-in-out"
                >
                  All Work
                </button>
                <button
                  type="button"
                  className="px-7 text-base leading-[30px] text-white border rounded-full border-white hover:text-caribbean-green hover:border-caribbean-green transition-all duration-300 ease-in-out"
                >
                  Recent Works
                </button>
              </div>
            </div>
          </div>
          {skills[selectedSkillIndex] === "video editing" && (
            <div
              data-aos="fade-in"
              className="grid md:grid-cols-2 grid-cols-1 xl:gap-[47px] gap-7 "
            >
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-1.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/watch?v=IjylLVD65Ig&t=2s"
                    aria-label="play-video" 
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                  
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                Provide top-quality video editing for YouTube
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                Looking for standout video editing for YouTube and Shorts?
                My service delivers professional edits that boost views and engagement!
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-2.png"
                    alt=""
                  />
                  <a
                    href="https://youtu.be/q7AP_EJJc9E"
                    aria-label="play-video" 
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                  
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>




                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                Make shorts ads shopify, fb and other platform
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                Creating effective Facebook video ads for e-commerce is crucial for success.
                Focus on catchy visuals and clear messaging for Shopify.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-3.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/watch?v=DAoJeEyS0OE"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                   
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/watch?v=DAoJeEyS0OE"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                   
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                Here's a talking head video I've edited
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                Working with doctors was a unique experience that taught me a lot about medicine while
                ensuring engaging and professional videos.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>


              
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/watch?v=DAoJeEyS0OE"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                   
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                Here's a talking head video I've edited
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                Working with doctors was a unique experience that taught me a lot about medicine while
                ensuring engaging and professional videos.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>



            </div>
                      
          )}


          {skills[selectedSkillIndex] === "Podcast" && (
            <div
              data-aos="fade-in"
              className="grid md:grid-cols-2 grid-cols-1 xl:gap-[47px] gap-7"
            >
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-1.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                     
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-2.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                     
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-3.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
            </div>
          )}
          {skills[selectedSkillIndex] === "Audio Editing" && (
            <div
              data-aos="fade-in"
              className="grid md:grid-cols-2 grid-cols-1 xl:gap-[47px] gap-7"
            >
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-1.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-2.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-3.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                     
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
            </div>
          )}
          {skills[selectedSkillIndex] === "2D/3D Animation" && (
            <div
              data-aos="fade-in"
              className="grid md:grid-cols-2 grid-cols-1 xl:gap-[47px] gap-7"
            >
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-1.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-2.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-3.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
            </div>
          )}
          {skills[selectedSkillIndex] === "Graphic Design" && (
            <div
              data-aos="fade-in"
              className="grid md:grid-cols-2 grid-cols-1 xl:gap-[47px] gap-7"
            >
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-1.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-2.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-3.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
            </div>
          )}
          {skills[selectedSkillIndex] === "Digital Marketing" && (
            <div
              data-aos="fade-in"
              className="grid md:grid-cols-2 grid-cols-1 xl:gap-[47px] gap-7"
            >
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-1.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-2.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-3.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                     
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
            </div>
          )}
          {skills[selectedSkillIndex] === "Web Development" && (
            <div
              data-aos="fade-in"
              className="grid md:grid-cols-2 grid-cols-1 xl:gap-[47px] gap-7"
            >
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-1.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-2.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                     
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-3.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                     
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
              <div className="w-full border rounded-[18px] border-[#2B3639] bg-[#091A1F] md:px-[32px] md:py-[30px] p-5">
                <div className="w-full h-[308px] mb-5 relative flex justify-center items-center ">
                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src="/assets/images/custom/client-4.png"
                    alt=""
                  />
                  <a
                    href="https://www.youtube.com/embed/-B88veDceOQ?si=I2EgAJ6ktTsyMqEb"
                    aria-label="play-video"
                    className=" video-play-btn w-[80px] h-[80px] rounded-full flex justify-center items-center relative z-10"                    
                  >
                    <button
                type="button"
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn"
              >
               <span className="size-[56px] rounded-full flex justify-center items-center bg-caribbean-green relative">
                  <span>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line2"></div>
                  <div className="absolute w-full h-full rounded-full play-btn-line3"></div>
                </span>
              </button>
                  </a>
                </div>
                <h3 className="text-white text-[24px] leading-[30px] font-semibold mb-2.5 line-clamp-1 ">
                  High Quality Talking Head Video Editing
                </h3>
                <p className="text-white text-[16px] leading-[24px] line-clamp-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur, nisi vel feugiat malesuada, velit ligula ultricies
                  enim, non luctus lorem eros eu lectus.
                </p>
                <button
                  type="button"
                  className="text-base leading-6 text-caribbean-green underline "
                >
                  Read More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ClientTab;
