import React, { useState, useEffect } from "react";

// ডেমো ডাটা: ভিডিওর জন্য youtubeUrl এবং ছবির জন্য mediaUrl ব্যবহার করা হয়েছে
const portfolioData = [
  { 
    id: 1, 
    title: "AI Spokesperson Demo", 
    category: "AI Digital Twins & Spokespersons", 
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: 2, 
    title: "Viral Health Tips", 
    category: "Shorts/Reels", 
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&h=1000&q=80",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1"
  },
  { 
    id: 3, 
    title: "Summer Sale Campaign", 
    category: "Promo Video", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: 5, 
    title: "Futuristic CGI Product", 
    category: "CGI Advertising", 
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: 6, 
    title: "Motivational Reel", 
    category: "Shorts/Reels", 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=1000&q=80",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  // --- Thumbnail Images ---
  { 
    id: 7, 
    title: "Health & Fitness Thumbnail", 
    category: "Thumbnail", 
    img: "/assets/images/Thumbnail.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Thumbnail.jpg"
  },
  { 
    id: 8, 
    title: "Digital Tech Thumbnail", 
    category: "Thumbnail", 
    img: "/assets/images/Thumbnail1.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Thumbnail1.jpg"
  },
  { 
    id: 9, 
    title: "Health Tips Thumbnail", 
    category: "Thumbnail", 
    img: "/assets/images/Thumbnail2.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Thumbnail2.jpg"
  },
  { 
    id: 10, 
    title: "Wellness & Mind Thumbnail", 
    category: "Thumbnail", 
    img: "/assets/images/Thumbnail3.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Thumbnail3.jpg"
  },
  { 
    id: 11, 
    title: "Make Money Online Thumbnail", 
    category: "Thumbnail", 
    img: "/assets/images/Thumbnail4.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Thumbnail4.jpg"
  },

  // --- Banner Ads Images ---
  { 
    id: 12, 
    title: "Website Banner Ad 1", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads.jpg"
  },
  { 
    id: 13, 
    title: "Creative Banner Ad 2", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads1.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads1.jpg"
  },
  { 
    id: 15, 
    title: "Social Banner Ad 4", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads3.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads3.jpg"
  },
  { 
    id: 16, 
    title: "Campaign Banner 5", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads4.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads4.jpg"
  },
  { 
    id: 17, 
    title: "Product Banner 6", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads5.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads5.jpg"
  },
  { 
    id: 18, 
    title: "Service Banner 7", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads6.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads6.jpg"
  },
  { 
    id: 19, 
    title: "Ad Banner 8", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads7.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads7.jpg"
  },
  { 
    id: 20, 
    title: "Digital Banner 9", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads8.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads8.jpg"
  },
  { 
    id: 21, 
    title: "Agency Banner 10", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads9.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads9.jpg"
  },
  { 
    id: 22, 
    title: "Portfolio Banner 11", 
    category: "Banner Ads", 
    img: "/assets/images/Banner Ads10.jpg",
    mediaType: "image",
    mediaUrl: "/assets/images/Banner Ads10.jpg"
  },
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
  
  // Pagination State for "SEE MORE"
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Dynamic Modal State (To handle both Video and Image)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Filter projects based on category
    if (activeCategory === "All") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(item => item.category === activeCategory));
    }
    // Reset visible count to 6 whenever category changes
    setVisibleCount(6);
  }, [activeCategory]);

  // Load More Function
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  // Handle Media Open & Close
  const openMediaModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeMediaModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Re-enable body scroll
    document.body.style.overflow = "auto";
  };

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
          <span className="px-5 py-1.5 mb-4 text-sm font-semibold !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full">
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

        {/* --- Projects Masonry Grid (Sliced to visibleCount) --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <div 
              key={project.id} 
              data-aos="zoom-in" 
              onClick={() => openMediaModal(project)}
              className="break-inside-avoid group relative rounded-[20px] overflow-hidden cursor-pointer shadow-sm border border-[#e7e3fa] bg-main-gray mb-6 block"
            >
              {/* Project Custom Thumbnail */}
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Play or View Button Center (Brand Green with Glow) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-[#6db305]/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(109,179,5,0.5)] transform group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(109,179,5,0.8)] transition-all duration-300">
                  {/* Dynamic Icon based on media type */}
                  {project.mediaType === "video" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"></path></svg>
                  ) : (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  )}
                </div>
              </div>

              {/* Text Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-3 py-1 bg-[#094a66] text-white text-xs font-bold rounded-md mb-2 inline-block shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight">
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

        {/* No Projects Found Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10 text-paragraph font-medium">
            No projects found in this category yet.
          </div>
        )}

      </div>

      {/* --- Dynamic Media Modal (Popup) --- */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 transition-opacity duration-300">
          
          {/* Close Button - Hover color changed to Brand Green with Glow */}
          <button 
            onClick={closeMediaModal}
            className="absolute top-5 right-5 md:top-10 md:right-10 w-12 h-12 bg-white/10 hover:bg-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.5)] border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-50"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          {/* Media Container (Responsive) */}
          <div className={`relative w-full max-w-6xl ${selectedProject.mediaType === 'video' ? 'aspect-video' : 'h-auto max-h-[90vh] flex justify-center'} rounded-2xl overflow-hidden bg-transparent shadow-2xl border border-white/10`}>
            
            {/* Render Iframe for Video */}
            {selectedProject.mediaType === "video" && (
              <iframe 
                src={selectedProject.mediaUrl} 
                title={selectedProject.title}
                className="w-full h-full object-cover bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}

            {/* Render Image Tag for Image/Thumbnail/Banner */}
            {selectedProject.mediaType === "image" && (
              <img 
                src={selectedProject.mediaUrl} 
                alt={selectedProject.title} 
                className="max-w-full max-h-[90vh] object-contain rounded-2xl"
              />
            )}
            
          </div>
          
          {/* Background click to close */}
          <div className="absolute inset-0 z-[-1]" onClick={closeMediaModal}></div>
        </div>
      )}

    </section>
  );
}