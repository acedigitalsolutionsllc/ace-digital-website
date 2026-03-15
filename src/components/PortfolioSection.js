import React, { useState, useEffect } from "react";

// Portfolio Data: Assembled with specific Reels, Banner Ads, and Thumbnails
const portfolioData = [
  // --- NEW SHORTS / REELS ---
  { 
    id: 1, 
    title: "The Gold Standard of Pizza | Stanislaus Promo Video", 
    category: "Shorts/Reels", 
    img: "/assets/images/Reels_Thumbnail_1.jpg",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/8SA2bfFV_TE?autoplay=1",
    desc: "\"Packed fresh with real basil and a melt-in-your-mouth texture!\" 🍕 This short commercial promo video was crafted to highlight the authentic, premium taste of Stanislaus. By combining mouth-watering food visuals with dynamic pacing, this video captures the true \"gold standard\" of real Italian pizza. It is perfectly optimized for social media marketing campaigns for restaurants and pizzerias.",
    role: "Video Editing & Motion Graphics",
    client: "Stanislaus (Concept/Portfolio Sample)"
  },
  { 
    id: 2, 
    title: "Busting the Red Car Myth | Auto Insurance Promo", 
    category: "Shorts/Reels", 
    img: "/assets/images/Reels_Thumbnail_2.jpg",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/W9LEzSotb3A?autoplay=1", 
    desc: "\"Think insuring a red car costs more? That's a total myth!\" 🚗💨 This promotional video was crafted for insurance agent Andrea Krohn to debunk a classic auto insurance misconception. The goal was to deliver a clear, reassuring message using crisp visuals and smooth pacing, encouraging viewers to buy their dream car without worrying about fictional premium hikes.",
    role: "Video Editing & Motion Graphics",
    agency: "ACE Digital Solutions",
    client: "Andrea Krohn (Insurance Agent)",
    purpose: "Brand Awareness & Lead Generation"
  },
  { 
    id: 3, 
    title: "The Cost of Coffee vs. Renters Insurance", 
    category: "Shorts/Reels", 
    img: "/assets/images/Reels_Thumbnail_3.jpg",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/j-AXIB4Pb-s?autoplay=1",
    desc: "\"What costs less than a few cups of fancy coffee, but protects everything you own?\" ☕🛡️ This promotional video was designed to tackle a common misconception about renters insurance. Engaging motion graphics and an upbeat pace help simplify liability concepts.",
    role: "Video Editing & Motion Graphics",
    agency: "ACE Digital Solutions",
    purpose: "Educational Marketing & Conversion"
  },
  { 
    id: 4, 
    title: "Restaurant-Style at Home | Twist Foods", 
    category: "Shorts/Reels", 
    img: "/assets/images/Reels_Thumbnail_4.jpg",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/vZalk4bxViY?autoplay=1",
    desc: "\"Craving restaurant-style creamy butter chicken at home?\" 🍛✨ Crafted to highlight the rich, authentic appeal of Twist Foods' Butter Masala. The edit focuses on mouth-watering culinary visuals showcasing ripe tomatoes, heavy cream, and real butter.",
    role: "Video Editing & Motion Graphics",
    agency: "ACE Digital Solutions",
    client: "Twist Foods",
    purpose: "Culinary Marketing & Brand Awareness"
  },
  { 
    id: 5, 
    title: "Rich & Nutty: Twist Foods Korma", 
    category: "Shorts/Reels", 
    img: "/assets/images/Reels_Thumbnail_5.jpg",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/p9QKc14uSCI?autoplay=1",
    desc: "\"Looking for something rich, mild, and nutty?\" 🥥🍲 This promotional video showcases the luxurious, creamy appeal of Twist Foods' Korma. The edit emphasizes clean ingredients like coconut milk and cashew butter with appetizing visuals and dynamic pacing.",
    role: "Video Editing & Motion Graphics",
    agency: "ACE Digital Solutions",
    client: "Twist Foods",
    purpose: "Culinary Marketing & Brand Awareness"
  },
  { 
    id: 6, 
    title: "The Perfect Ride: Giant Las Vegas", 
    category: "Shorts/Reels", 
    img: "/assets/images/Reels_Thumbnail_6.jpg",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/WUgEQBC-jBQ?autoplay=1", 
    desc: "\"Looking for the perfect ride in Las Vegas? Welcome to Giant Las Vegas!\" 🚴‍♂️🏜️ Edited to capture the adventurous spirit and community focus of Giant Las Vegas. The pacing matches the high energy of mountain and e-biking.",
    role: "Video Editing & Motion Graphics",
    agency: "ACE Digital Solutions",
    client: "Giant Las Vegas",
    purpose: "Local Retail Marketing & Community Building"
  },
  { 
    id: 7, 
    title: "Professional Marketing Video | Dr. Arsy", 
    category: "Shorts/Reels", 
    img: "/assets/images/Reels_Thumbnail_7.jpg",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/6inih3syyR8?autoplay=1",
    desc: "This promotional video was crafted to highlight the expertise, dedication, and professional care of Dr. Arsy. The edit focuses on building trust and establishing authority in the medical field, using smooth transitions, clean visuals, and a reassuring tone.",
    role: "Video Editing & Motion Graphics",
    agency: "ACE Digital Solutions",
    client: "Dr. Arsy",
    purpose: "Brand Awareness & Healthcare Marketing"
  },

  // --- Other Sample Videos ---
  { 
    id: 8, 
    title: "AI Spokesperson Demo", 
    category: "AI Digital Twins & Spokespersons", 
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: 9, 
    title: "Futuristic CGI Product", 
    category: "CGI Advertising", 
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },

  // --- Thumbnail Images ---
  { id: 10, title: "Health & Fitness Thumbnail", category: "Thumbnail", img: "/assets/images/Thumbnail.jpg", mediaType: "image", mediaUrl: "/assets/images/Thumbnail.jpg" },
  { id: 11, title: "Digital Tech Thumbnail", category: "Thumbnail", img: "/assets/images/Thumbnail1.jpg", mediaType: "image", mediaUrl: "/assets/images/Thumbnail1.jpg" },
  { id: 12, title: "Health Tips Thumbnail", category: "Thumbnail", img: "/assets/images/Thumbnail2.jpg", mediaType: "image", mediaUrl: "/assets/images/Thumbnail2.jpg" },
  { id: 13, title: "Wellness & Mind Thumbnail", category: "Thumbnail", img: "/assets/images/Thumbnail3.jpg", mediaType: "image", mediaUrl: "/assets/images/Thumbnail3.jpg" },
  { id: 14, title: "Make Money Online Thumbnail", category: "Thumbnail", img: "/assets/images/Thumbnail4.jpg", mediaType: "image", mediaUrl: "/assets/images/Thumbnail4.jpg" },

  // --- Banner Ads Images (10 Banners) ---
  { id: 15, title: "Banner Ad 1", category: "Banner Ads", img: "/assets/images/Banner_Ads.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads.jpg" },
  { id: 16, title: "Banner Ad 2", category: "Banner Ads", img: "/assets/images/Banner_Ads_2.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_2.jpg" },
  { id: 17, title: "Banner Ad 3", category: "Banner Ads", img: "/assets/images/Banner_Ads_3.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_3.jpg" },
  { id: 18, title: "Banner Ad 4", category: "Banner Ads", img: "/assets/images/Banner_Ads_4.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_4.jpg" },
  { id: 19, title: "Banner Ad 5", category: "Banner Ads", img: "/assets/images/Banner_Ads_5.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_5.jpg" },
  { id: 20, title: "Banner Ad 6", category: "Banner Ads", img: "/assets/images/Banner_Ads_6.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_6.jpg" },
  { id: 21, title: "Banner Ad 7", category: "Banner Ads", img: "/assets/images/Banner_Ads_7.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_7.jpg" },
  { id: 22, title: "Banner Ad 8", category: "Banner Ads", img: "/assets/images/Banner_Ads_8.jpg", mediaType: "image", mediaUrl: "/assets/images//Banner_Ads_8.jpg" },
  { id: 23, title: "Banner Ad 9", category: "Banner Ads", img: "/assets/images/Banner_Ads_9.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_9.jpg" },
  { id: 24, title: "Banner Ad 10", category: "Banner Ads", img: "/assets/images/Banner_Ads_1.jpg", mediaType: "image", mediaUrl: "/assets/images/Banner_Ads_1.jpg" },
];

const categories = [
  "All", 
  "AI Digital Twins & Spokespersons", 
  "Shorts/Reels", 
  "Promo Video", 
  "Banner Ads", 
  "CGI Advertising", 
  "Thumbnail"
];

export default function PortfolioSection({ activeCategory, onCategoryChange }) {
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(item => item.category === activeCategory));
    }
    setVisibleCount(12);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const openMediaModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMediaModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const hasInfo = selectedProject?.desc || selectedProject?.role || selectedProject?.client || selectedProject?.agency || selectedProject?.purpose;

  return (
    <section id="portfolio-section" className="w-full py-[100px] bg-white relative overflow-hidden">
      
      {/* Background Glow Effects - Brand Colors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#094a66]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#6db305]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="mx-auto theme-container relative z-10">
        
        {/* --- Header Area --- */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-5 py-1.5 mb-4 text-sm font-semibold !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full shadow-[0_0_10px_rgba(109,179,5,0.15)]">
            Our Works
          </span>
          <h2 className="text-3xl md:text-[45px] font-bold text-main-black mb-4">
            Our Featured Projects
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            ACE Digital is an Advertising and Digital Agency specializing in AI-driven Marketing. Click on any project to preview.
          </p>
        </div>

        {/* --- Filter Buttons --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 bg-main-gray p-2 rounded-2xl border border-[#e7e3fa] w-fit mx-auto shadow-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#094a66] text-white shadow-[0_0_15px_rgba(109,179,5,0.4)] transform scale-105"
                  : "bg-transparent text-main-black hover:bg-[#6db305]/10 hover:text-[#6db305]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Projects Masonry Grid --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <div 
              key={project.id} 
              data-aos="zoom-in" 
              onClick={() => openMediaModal(project)}
              className="break-inside-avoid group relative rounded-[20px] overflow-hidden cursor-pointer shadow-sm border border-[#e7e3fa] bg-main-gray mb-6 block"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-[#6db305]/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(109,179,5,0.5)] transform group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(109,179,5,0.8)] transition-all duration-300">
                  {project.mediaType === "video" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"></path></svg>
                  ) : (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-3 py-1 bg-[#094a66] text-white text-xs font-bold rounded-md mb-2 inline-block shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight drop-shadow-md">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* --- SEE MORE Button --- */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-12" data-aos="fade-up">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 bg-[#094a66] text-white font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_5px_15px_rgba(9,74,102,0.3)] hover:bg-[#6db305] hover:shadow-[0_0_20px_rgba(109,179,5,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
            >
              See More
              <svg 
                className="transform group-hover:translate-y-1 transition-transform duration-300" 
                width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-10 text-paragraph font-medium">
            No projects found in this category yet.
          </div>
        )}

      </div>

      {/* --- Dynamic Media Modal (Popup) --- */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 transition-opacity duration-300">
          
          {/* Close Button */}
          <button 
            onClick={closeMediaModal}
            className="absolute top-4 right-4 md:top-10 md:right-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.5)] border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-[10000]"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className={`relative w-full ${hasInfo ? "max-w-6xl bg-white shadow-2xl" : "max-w-4xl bg-transparent"} flex flex-col md:flex-row rounded-2xl overflow-hidden z-50 justify-center items-center`}>
            
            {/* Left Side: Media Player */}
            <div className={`w-full ${selectedProject.category === "Shorts/Reels" ? "max-w-[450px] mx-auto h-[85vh] md:h-auto md:w-[400px]" : (hasInfo ? "md:w-2/3" : "w-full flex justify-center items-center")} ${selectedProject.mediaType === "video" && hasInfo ? "bg-black" : "bg-transparent"} flex-shrink-0 relative ${hasInfo ? "rounded-l-2xl" : ""}`}>
              
              {selectedProject.mediaType === "video" ? (
                // Aspect ratio wrapper for video
                <div className={`relative w-full h-full ${selectedProject.category === "Shorts/Reels" ? "md:pt-[177.77%]" : "pt-[56.25%]"}`}>
                  <iframe 
                    src={selectedProject.mediaUrl} 
                    title={selectedProject.title}
                    className={`absolute inset-0 w-full h-full ${hasInfo ? "rounded-l-2xl" : "rounded-2xl"}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                // Clean layout for Images (Banners) - No background box
                <img 
                  src={selectedProject.mediaUrl} 
                  alt={selectedProject.title} 
                  className={`max-w-full max-h-[85vh] object-contain ${hasInfo ? "rounded-l-2xl w-full" : "rounded-xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"}`}
                />
              )}
            </div>

            {/* Right Side: Information Panel (Only shows if description or data exists) */}
            {hasInfo && (
              <div className="hidden md:flex w-full p-8 md:p-12 flex-col justify-center bg-[#f8f9fc]">
                <span className="px-4 py-1.5 bg-[#094a66]/10 text-[#094a66] text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-main-black mb-6 leading-tight">
                  {selectedProject.title}
                </h2>
                
                {selectedProject.desc && (
                  <p className="text-paragraph text-[15px] leading-relaxed mb-8">
                    {selectedProject.desc}
                  </p>
                )}

                <div className="space-y-4 border-t border-[#e7e3fa] pt-6">
                  {selectedProject.role && (
                    <div>
                      <span className="block text-xs font-bold text-[#6db305] uppercase tracking-wider mb-1">Role</span>
                      <p className="text-main-black font-semibold">{selectedProject.role}</p>
                    </div>
                  )}
                  {selectedProject.agency && (
                    <div>
                      <span className="block text-xs font-bold text-[#6db305] uppercase tracking-wider mb-1">Agency</span>
                      <p className="text-main-black font-semibold">{selectedProject.agency}</p>
                    </div>
                  )}
                  {selectedProject.client && (
                    <div>
                      <span className="block text-xs font-bold text-[#6db305] uppercase tracking-wider mb-1">Client / Brand</span>
                      <p className="text-main-black font-semibold">{selectedProject.client}</p>
                    </div>
                  )}
                  {selectedProject.purpose && (
                    <div>
                      <span className="block text-xs font-bold text-[#6db305] uppercase tracking-wider mb-1">Purpose</span>
                      <p className="text-main-black font-semibold">{selectedProject.purpose}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Background click to close */}
          <div className="absolute inset-0 z-10" onClick={closeMediaModal}></div>
        </div>
      )}

    </section>
  );
}