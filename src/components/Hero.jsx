import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden">
      
      {/* Background Creative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-ace-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Content Area */}
        <div className="flex-1 text-center lg:text-left">
          
          <span className="inline-block py-2 px-5 rounded-full bg-ace-green/10 text-ace-green font-bold text-sm uppercase tracking-widest mb-6 border border-ace-green/20">
            The Future of Digital Marketing
          </span>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold font-montserrat text-ace-dark leading-tight mb-6">
            Stop Disappearing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ace-green to-emerald-400">
              In The Feed.
            </span>
          </h1>
          
          <p className="text-lg text-ace-text mb-10 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Replace traditional, stressful video production with hyper-realistic AI Avatars and jaw-dropping CGI ads. Clone yourself and scale your business effortlessly 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="bg-ace-green text-ace-dark px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              Build Your Digital Twin
            </button>
            <button className="bg-white text-ace-dark border-2 border-slate-200 px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:border-ace-dark transition-all duration-300">
              View CGI Ads
            </button>
          </div>
          
        </div>

        {/* Right Image / Creative Visual Area */}
        <div className="flex-1 relative w-full">
          {/* Glassmorphism Card behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-white/20 backdrop-blur-xl rounded-[2rem] border border-white shadow-glass transform rotate-3 scale-105 transition-transform hover:rotate-0 duration-500"></div>
          
          {/* Main Hero Image */}
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" 
            alt="AI Digital Twin"
            className="relative rounded-[2rem] shadow-2xl object-cover w-full h-auto z-10 border-4 border-white"
          />
          
          {/* Floating Element (Modern Touch) */}
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-glass border border-slate-100 z-20 animate-bounce">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-ace-green/20 rounded-full flex items-center justify-center text-ace-green text-xl">
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <p className="font-bold text-ace-dark">77k+ Participants</p>
                <p className="text-sm text-ace-text">Globally Reached</p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;