import React, { useState, useEffect } from "react";

// ডেমো ডাটা: এখানে আপনার ইউটিউব ভিডিওর "embed" লিংক এবং থাম্বনেইল ছবির লিংক দেবেন।
// ⚠️ লক্ষ করুন: ইউটিউব লিংকে অবশ্যই /embed/ থাকতে হবে (যেমন: https://www.youtube.com/embed/XXXXX?autoplay=1)
const portfolioData = [
  { 
    id: 1, 
    title: "AI Spokesperson Demo", 
    category: "AI Digital Twins & Spokespersons", 
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: 2, 
    title: "Viral Health Tips", 
    category: "Shorts/Reels", 
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&h=1000&q=80",
    youtubeUrl: "https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1"
  },
  { 
    id: 3, 
    title: "Summer Sale Campaign", 
    category: "Promo Video", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: 4, 
    title: "Website Header Ad", 
    category: "Banner Ads", 
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1"
  },
  { 
    id: 5, 
    title: "Futuristic CGI Product", 
    category: "CGI Advertising", 
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: 6, 
    title: "Podcast Episode 12", 
    category: "Thumbnail", 
    img: "https://images.unsplash.com/photo-1588702545939-539215091241?auto=format&fit=crop&w=800&q=80",
    youtubeUrl: "https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1"
  },
  { 
    id: 7, 
    title: "Motivational Reel", 
    category: "Shorts/Reels", 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=1000&q=80",
    youtubeUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
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
  
  // Video Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Handle Video Open & Close
  const openVideoModal = (youtubeUrl) => {
    setCurrentVideo(youtubeUrl);
    setIsModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
    // Re-enable body scroll
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio-section" className="w-full py-[100px] bg-white relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="mx-auto theme-container relative z-10">
        
        {/* --- Header Area --- */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-5 py-1.5 mb-4 text-sm font-semibold text-purple bg-purple/10 border border-purple/20 rounded-full">
            Our Works
          </span>
          <h2 className="text-3xl md:text-[45px] font-bold text-main-black mb-4">
            Our Featured Projects
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            ACE Digital is an Advertising and Digital Agency specializing in AI-driven Marketing. Click on any project to watch the video.
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
                  ? "bg-purple text-white shadow-md transform scale-105"
                  : "bg-transparent text-main-black hover:bg-purple/10 hover:text-purple"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Projects Masonry Grid --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              data-aos="zoom-in" 
              onClick={() => openVideoModal(project.youtubeUrl)}
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

              {/* YouTube Play Button Center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {/* Play Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"></path></svg>
                </div>
              </div>

              {/* Text Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-3 py-1 bg-purple text-white text-xs font-bold rounded-md mb-2 inline-block shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Found Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10 text-paragraph font-medium">
            No projects found in this category yet.
          </div>
        )}

      </div>

      {/* --- YouTube Video Modal (Popup) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 transition-opacity duration-300">
          
          {/* Close Button */}
          <button 
            onClick={closeVideoModal}
            className="absolute top-5 right-5 md:top-10 md:right-10 w-12 h-12 bg-white/10 hover:bg-red-600 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300 z-50"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          {/* Video Container (Responsive Aspect Ratio) */}
          <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
            {/* If video URL exists, load iframe */}
            {currentVideo ? (
              <iframe 
                src={currentVideo} 
                title="YouTube Video"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">Video not found</div>
            )}
          </div>
          
          {/* Background click to close */}
          <div className="absolute inset-0 z-[-1]" onClick={closeVideoModal}></div>
        </div>
      )}

    </section>
  );
}