import React, { useRef } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectSlider() {
  const swiperRef = useRef(null);

  const swiperOptions = {
    modules: [Pagination, Autoplay, Navigation, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".h10-service-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".h10-service-next",
      prevEl: ".h10-service-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 130,
        autoplay: false,
        centeredSlides: true,
      },
    },
  };

  const changeHandler = (e) => {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.src = iframe.src; // Reset the iframe source to stop playback
    });
  };
  return (
    <section
      id="Recent Projects"
      className="py-[70px] md:py-[116px] project-client-v-testimonial"
    >
      <div className="mx-auto 2xl:w-[1600px] w-full md:px-5">
        <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit mx-auto">
          Recent Projects
        </h1>
        <div className="w-full flex justify-center items-center">
          <p class="xl:w-[916px] w-full font-inter text-24 font-medium text-center text-white mt-6 mb-[50px]">
            {" "}
            We align with business goals to deliver premier services in video
            and audio editing, 2D/3D animation, graphic design, digital
            marketing, web development, and podcasting.{" "}
          </p>
        </div>
        <div className="w-full relative">
          <div className="h10-service-slider pt-8 md:pt-14 overflow-hidden">
            <Swiper
              onSlideChange={(e) => changeHandler(e)}
              {...swiperOptions}
              ref={swiperRef}
            >
              <SwiperSlide>
                <div className="w-full aspect-[16/9] bg-[#1d1d1d] relative rounded-[12px] overflow-hidden">
                  <div className="absolute left-0 top-0 w-full h-full   ">
                    <div className="w-full h-full">
                      <iframe
                        frameborder="0"
                        allowfullscreen
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/P_ffUuuID1Q?si=Rrx9Kzz-wBtR0Vqc"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full aspect-[16/9] bg-[#1d1d1d] relative rounded-[12px] overflow-hidden">
                  <div className="absolute left-0 top-0 w-full h-full  ">
                    <div className="w-full h-full">
                      <iframe
                        frameborder="0"
                        allowfullscreen
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/ZRx3h4s-DU4?si=LvZqAzFMzJVXE6nz"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full aspect-[16/9] bg-[#1d1d1d] relative rounded-[12px] overflow-hidden">
                  <div className="absolute left-0 top-0 w-full h-full  ">
                    <div className="w-full h-full">
                      <iframe
                        frameborder="0"
                        allowfullscreen
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/DLwC8bRPSzM?si=HM_KF0ZIII9bQL49"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full aspect-[16/9] bg-[#1d1d1d] relative rounded-[12px] overflow-hidden">
                  <div className="absolute left-0 top-0 w-full h-full  ">
                    <div className="w-full h-full">
                      <iframe
                        frameborder="0"
                        allowfullscreen
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/xTM-D71TU9U?si=sRJ5--WE5wJMnbNF"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full aspect-[16/9] bg-[#1d1d1d] relative rounded-[12px] overflow-hidden">
                  <div className="absolute left-0 top-0 w-full h-full  ">
                    <div className="w-full h-full">
                      <iframe
                        frameborder="0"
                        allowfullscreen
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/jrIS_RQJmCU?si=DmgdibyhJNg9VeDh"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative rounded-[21px] w-[260px] h-[452px] ms-4 overflow-hidden flex justify-center mx-auto transition-opacity duration-500 ">       
                  <div className="absolute left-0 top-0 w-full h-full width: 100%; height: 100%;">
                    <div className="">
                      <iframe
                        frameborder="0"
                        allowfullscreen
                        className="rounded-[22px] w-[260px] h-[452px] overflow-hidden"
                        src="https://www.youtube.com/embed/60L8JtGAO7o?si=mpOSnzCtsYnzX20i"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative rounded-[21px] w-[260px] h-[452px] ms-4 overflow-hidden flex justify-center mx-auto transition-opacity duration-500 ">       
                  <div className="absolute left-0 top-0 w-full h-full  ">
                    <div className="w-full h-full">
                      <iframe
                        frameborder="0"
                        allowfullscreen
                        className="rounded-[22px] w-[260px] h-[452px] overflow-hidden"
                        src="https://www.youtube.com/embed/60L8JtGAO7o?si=mpOSnzCtsYnzX20i"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="absolute lg:flex hidden items-center px-2  w-full top-1/2 z-10 transform -translate-y-1/2">
            <div className="flex justify-between w-full">
              <button className="h10-service-next w-[54px] h-[54px] rounded-full bg-caribbean-green flex justify-center items-center">
                <svg
                  className="transform rotate-180"
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 15.2L20 8.45001M20 8.45001L13.25 1.70001M20 8.45001L2 8.45001"
                    stroke="#101828"
                    stroke-width="2.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button className=" h10-service-next w-[54px] h-[54px] rounded-full bg-caribbean-green flex justify-center items-center">
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 15.2L20 8.45001M20 8.45001L13.25 1.70001M20 8.45001L2 8.45001"
                    stroke="#101828"
                    stroke-width="2.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
