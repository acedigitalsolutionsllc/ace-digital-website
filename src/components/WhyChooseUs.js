import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-[100px] bg-[#f8f9fc] relative overflow-hidden">
      {/* Background Decorative Elements - Updated to Brand Colors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#094a66]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#6db305]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="mx-auto theme-container relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center mb-16 text-center">
          {/* Changed Tag: Text Brand Green and Border Brand Green */}
          <span className="px-5 py-1.5 mb-4 text-sm font-semibold !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full">
            Our Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-main-black mb-4">
            What Makes ACE Digital Different
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            Here’s an honest breakdown of what you get with us compared to traditional options. We think the choice is obvious.
          </p>
        </div>

        {/* --- Comparison Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* 1. ACE Digital (The Winner Card) */}
          {/* Updated Border Color to Brand Green and added Glow Effect */}
          <div data-aos="fade-up" className="relative bg-white rounded-[30px] p-8 shadow-[0_0_30px_rgba(109,179,5,0.15)] border-2 border-[#6db305] transform lg:-translate-y-4 z-20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(109,179,5,0.25)]">
            
            {/* Top Badge - Updated to Brand Blue Background */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#094a66] text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
              Highly Recommended
            </div>

            {/* Card Header (Logo & Title) */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#e7e3fa]">
              <img src="/assets/images/ace-logo.svg" alt="ACE Digital" className="h-[100px] w-auto object-contain" />
            </div>

            {/* Features List */}
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3">
                {/* Updated Icon Background and Text Color to Brand Green */}
                <span className="w-6 h-6 rounded-full bg-[#6db305]/15 flex items-center justify-center text-[#6db305] shrink-0 mt-0.5">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <div>
                  <p className="text-main-black font-bold text-sm">Complete "Done-For-You" Solution</p>
                  <p className="text-paragraph text-sm mt-1">Strategy, Creation, Posting & Engagement handled by us.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#6db305]/15 flex items-center justify-center text-[#6db305] shrink-0 mt-0.5">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <div>
                  <p className="text-main-black font-bold text-sm">AI Clone Technology</p>
                  <p className="text-paragraph text-sm mt-1">Create unlimited videos without ever filming yourself.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#6db305]/15 flex items-center justify-center text-[#6db305] shrink-0 mt-0.5">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <div>
                  <p className="text-main-black font-bold text-sm">Data-Driven Growth</p>
                  <p className="text-paragraph text-sm mt-1">Decisions based on real analytics and ROI, not guesswork.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#6db305]/15 flex items-center justify-center text-[#6db305] shrink-0 mt-0.5">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <div>
                  <p className="text-main-black font-bold text-sm">24/7 Automation</p>
                  <p className="text-paragraph text-sm mt-1">Your business grows and engages while you sleep.</p>
                </div>
              </li>
            </ul>

            {/* Bonus Section - Updated to Brand Blue transparent background */}
            <div className="bg-[#094a66]/5 rounded-xl p-5 border border-[#094a66]/20">
              <h4 className="text-[#094a66] font-bold mb-3 flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Bonus Benefits
              </h4>
              <ul className="space-y-2 text-sm text-main-black">
                <li className="flex items-center gap-2"><span className="text-[#6db305] font-bold">✔</span> Free Digital Strategy Audit</li>
                <li className="flex items-center gap-2"><span className="text-[#6db305] font-bold">✔</span> Dedicated Account Manager</li>
                <li className="flex items-center gap-2"><span className="text-[#6db305] font-bold">✔</span> No surprise costs</li>
              </ul>
            </div>
          </div>

          {/* 2. Other Agencies Card */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-[30px] p-8 shadow-sm border border-[#e7e3fa] lg:mt-4 z-10 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-main-black mb-8 pb-6 border-b border-[#e7e3fa]">Other Agencies</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">Fragmented services without real strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">High monthly retainers ($2,000+)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">Slow turnaround times & backlogs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">Guesswork & random posting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">Limited support hours (9-to-5 only)</span>
              </li>
            </ul>
          </div>

          {/* 3. Freelancers Card */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-[30px] p-8 shadow-sm border border-[#e7e3fa] lg:mt-4 z-10 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-main-black mb-8 pb-6 border-b border-[#e7e3fa]">Freelancers</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">One person doing everything (burnout risk)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">Inconsistent quality & missed deadlines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">Might ghost you between projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">No backup if they get sick or busy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <span className="text-main-black text-sm">Cheap upfront, but costly delays later</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}