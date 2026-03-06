import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

// --- Header/Footer Import ---
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import DemoHeaderMobile from "../components/Layout/Header/DemoHeader/DemoHeaderMobile";
import FooterOne from "../components/Layout/Footer/FooterOne";

// --- সার্ভিসের তালিকা, দাম এবং প্রিভিউ ডাটা ---
const products = [
  { 
    id: "p1", 
    name: "Custom AI Spokesperson Video", 
    price: 50, 
    desc: "Hyper-realistic AI avatar reading your script professionally.",
    mediaType: "video",
    thumb: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80",
    previewUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: "p2", 
    name: "Short-Form Video (Reels/TikTok)", 
    price: 40, 
    desc: "Highly engaging vertical video with captions and effects.",
    mediaType: "video",
    thumb: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80",
    previewUrl: "https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1"
  },
  { 
    id: "p3", 
    name: "Promotional Video (CGI)", 
    price: 70, 
    desc: "Jaw-dropping CGI ad to showcase your product out of the box.",
    mediaType: "video",
    thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    previewUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  { 
    id: "p4", 
    name: "Website Development", 
    price: 250, 
    desc: "Modern, high-converting React or WordPress website.",
    note: "⚠️ Note: Domain & Premium Hosting costs are separate.",
    mediaType: "link",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    previewUrl: "https://www.aceavatars.com"
  },
  { 
    id: "p5", 
    name: "Logo Design", 
    price: 20, 
    desc: "Unique and memorable brand identity design.",
    mediaType: "image",
    thumb: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
    previewUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: "p6", 
    name: "Graphics Design", 
    price: 10, 
    desc: "Eye-catching banners and social media post designs.",
    mediaType: "image",
    thumb: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
    previewUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: "p7", 
    name: "YouTube Thumbnail", 
    price: 10, 
    desc: "High CTR, click-worthy custom thumbnail.",
    mediaType: "image",
    thumb: "https://images.unsplash.com/photo-1588702545939-539215091241?auto=format&fit=crop&w=400&q=80",
    previewUrl: "https://images.unsplash.com/photo-1588702545939-539215091241?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Cart() {
  const [cart, setCart] = useState({});
  const [status, setStatus] = useState(null); 
  const [customerInfo, setCustomerInfo] = useState({ name: "", email: "", notes: "" });
  
  // Preview Modal State
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Update Quantity
  const updateQuantity = (id, amount) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = currentQty + amount;
      if (newQty <= 0) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const totalAmount = products.reduce((total, product) => total + (cart[product.id] || 0) * product.price, 0);

  // Handle Order Submit via EmailJS
  const handleCheckout = (e) => {
    e.preventDefault();
    if (totalAmount === 0) return alert("Please add at least one item to your package.");

    setStatus("sending");

    let orderDetails = "";
    products.forEach((product) => {
      if (cart[product.id]) {
        orderDetails += `- ${cart[product.id]}x ${product.name} ($${product.price * cart[product.id]})\n`;
      }
    });

    const templateParams = {
      title: "New Custom Package Order!",
      user_name: customerInfo.name,
      user_email: customerInfo.email,
      interest: "Custom A la Carte Order",
      message: `🎉 NEW ORDER RECEIVED 🎉\n\n--- CUSTOMER INFO ---\nName: ${customerInfo.name}\nEmail: ${customerInfo.email}\n\n--- ORDER SUMMARY ---\n${orderDetails}-----------------------\nTOTAL DUE: $${totalAmount}\n-----------------------\n\n--- PROJECT NOTES ---\n${customerInfo.notes || "No notes."}\n\nAction Required: Send an invoice to the client to start the project.`
    };

    emailjs
      .send("service_pgb2duk", "template_6gwu1kg", templateParams, "WKtRNi6iZ_QylHBgl")
      .then(
        () => { setStatus("success"); setCart({}); setCustomerInfo({ name: "", email: "", notes: "" }); },
        () => { setStatus("error"); alert("Something went wrong. Please try again."); }
      );
  };

  return (
    <>
      <DemoHeaderOne />
      <DemoHeaderMobile />

      {/* Page Header */}
      <section className="relative w-full pt-[150px] pb-[60px] bg-[#f8f9fc] overflow-hidden">
        {/* Background glow changed to Brand Blue */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#094a66]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="mx-auto theme-container relative z-10 text-center max-w-3xl">
          {/* Tag changed to Brand Green with Glow border */}
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold !text-[#6db305] !bg-[#6db305]/10 !border !border-[#6db305]/20 rounded-full">
            Build Your Own Package
          </div>
          <h1 className="text-4xl md:text-[50px] font-bold text-main-black mb-4">Select A la Carte Services</h1>
          <p className="text-paragraph font-medium text-lg">Choose exactly what you need. Preview our work, add quantities, and request an invoice instantly.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[80px] bg-white relative">
        <div className="theme-container w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Services List */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-5">
            <div className="w-full rounded-2xl bg-main-gray flex justify-between py-4 px-6 md:px-8 border border-[#e7e3fa] font-bold text-main-black uppercase text-sm tracking-wider">
              <span>Service Menu</span>
              <span>Qty</span>
            </div>

            {products.map((product) => (
              // Card hover changed to Brand Green with Glow
              <div key={product.id} className="flex flex-col sm:flex-row gap-5 p-5 bg-white border border-[#e7e3fa] hover:border-[#6db305] hover:shadow-[0_10px_30px_rgba(109,179,5,0.15)] rounded-3xl transition-all duration-300 group">
                
                {/* Visual Thumbnail Area */}
                <div 
                  onClick={() => setPreviewData(product)}
                  className="relative w-full sm:w-[160px] h-[120px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0 border border-[#e7e3fa]"
                >
                  <img src={product.thumb} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Icon Overlay based on Media Type */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Video play icon gets a Green Glow on Hover */}
                    {product.mediaType === "video" && (
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></div>
                    )}
                    {product.mediaType === "image" && (
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 group-hover:border-white transition-all"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div>
                    )}
                    {/* Link Icon changed to Brand Blue */}
                    {product.mediaType === "link" && (
                      <div className="w-10 h-10 bg-[#094a66]/90 rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-[#6db305] transition-all"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></div>
                    )}
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[10px] rounded uppercase font-bold tracking-wider backdrop-blur-sm">Preview</div>
                </div>

                {/* Details Area */}
                <div className="flex-grow flex flex-col justify-center">
                  {/* Title Hover changed to Brand Blue */}
                  <h3 className="font-bold text-xl text-main-black group-hover:text-[#094a66] transition-colors leading-tight">{product.name}</h3>
                  <p className="text-sm text-paragraph mt-1.5 leading-snug">{product.desc}</p>
                  
                  {/* Warning Note */}
                  {product.note && (
                    <p className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100 mt-2 inline-block w-fit">
                      {product.note}
                    </p>
                  )}
                  
                  <div className="font-black text-2xl text-[#8DC63F] mt-2">${product.price} <span className="text-sm text-paragraph font-normal">/each</span></div>
                </div>
                
                {/* Quantity Controls */}
                <div className="flex flex-row sm:flex-col items-center justify-center gap-3 bg-main-gray p-3 rounded-2xl border border-[#e7e3fa] sm:min-w-[70px]">
                  {/* Plus button changed to Brand Blue */}
                  <button onClick={() => updateQuantity(product.id, 1)} className="w-8 h-8 rounded-full bg-[#094a66] text-white font-bold flex items-center justify-center shadow hover:bg-[#6db305] hover:scale-110 transition-all">+</button>
                  <span className="font-bold text-lg text-main-black">{cart[product.id] || 0}</span>
                  <button onClick={() => updateQuantity(product.id, -1)} className="w-8 h-8 rounded-full bg-white text-main-black border border-[#e7e3fa] font-bold flex items-center justify-center shadow-sm hover:text-red-500 hover:scale-110 transition-all">-</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="p-8 border border-[#e7e3fa] bg-[#f8f9fc] rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] sticky top-[120px]">
              <h2 className="font-bold text-2xl text-main-black mb-6 pb-4 border-b border-[#e7e3fa]">Order Summary</h2>

              <div className="flex flex-col gap-3 mb-6 min-h-[100px]">
                {totalAmount === 0 ? (
                  <p className="text-paragraph text-sm italic text-center my-auto">Select services to build your package.</p>
                ) : (
                  products.map((product) => {
                    if (cart[product.id]) {
                      return (
                        <div key={product.id} className="flex justify-between items-center text-sm font-medium text-main-black bg-white p-3 rounded-xl border border-[#e7e3fa]">
                          <span className="truncate pr-2">
                            {/* Qty badge changed to Brand Blue */}
                            <span className="bg-[#094a66]/10 text-[#094a66] px-2 py-0.5 rounded-md mr-2">{cart[product.id]}x</span>
                            {product.name}
                          </span>
                          <span className="text-main-black font-bold">${product.price * cart[product.id]}</span>
                        </div>
                      );
                    }
                    return null;
                  })
                )}
              </div>

              <div className="flex justify-between items-center pt-4 border-t-2 border-main-black mb-8">
                <p className="font-bold text-lg text-main-black">Total Investment:</p>
                {/* Total amount color changed to Brand Green */}
                <p className="font-black text-3xl text-[#6db305] drop-shadow-[0_0_5px_rgba(109,179,5,0.3)]">${totalAmount}</p>
              </div>

              {/* Checkout Form */}
              {status === "success" ? (
                <div className="text-center py-6 bg-green-50 rounded-2xl border border-green-200">
                  <div className="text-green-600 font-bold text-lg mb-2">Request Sent!</div>
                  <p className="text-sm text-paragraph">We'll email your invoice shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleCheckout} className="flex flex-col gap-4">
                  {/* Inputs hover/focus changed to Brand Green Glow */}
                  <input type="text" placeholder="Your Name *" required value={customerInfo.name} onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})} className="w-full h-[50px] px-4 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none transition-all" />
                  <input type="email" placeholder="Email Address *" required value={customerInfo.email} onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})} className="w-full h-[50px] px-4 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none transition-all" />
                  <textarea placeholder="Brief notes about your brand..." rows="3" value={customerInfo.notes} onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})} className="w-full p-4 bg-white border border-[#e7e3fa] focus:border-[#6db305] focus:shadow-[0_0_10px_rgba(109,179,5,0.2)] rounded-xl outline-none resize-none transition-all"></textarea>

                  {/* Submit Button changed to Brand Blue and Green Glow on Hover */}
                  <button type="submit" disabled={totalAmount === 0 || status === "sending"} className="w-full py-4 mt-2 bg-[#094a66] text-white font-bold rounded-xl shadow-lg hover:bg-[#6db305] hover:shadow-[0_0_20px_rgba(109,179,5,0.4)] transition-all duration-300 disabled:bg-gray-400">
                    {status === "sending" ? "Processing..." : "Request Invoice to Start"}
                  </button>
                  <p className="text-[11px] text-center text-paragraph mt-1">No payment required now. Secure invoice sent via email.</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* --- Global Preview Modal --- */}
      {previewData && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 transition-opacity">
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#1a1a1a] p-4 flex justify-between items-center border-b border-white/10">
              <h3 className="text-white font-bold text-lg">{previewData.name}</h3>
              {/* Close Button Hover to Brand Green */}
              <button onClick={() => setPreviewData(null)} className="w-10 h-10 bg-white/10 hover:bg-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.5)] rounded-full flex items-center justify-center text-white transition-all">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center p-2">
              {previewData.mediaType === "video" && (
                <iframe src={previewData.previewUrl} className="w-full h-full rounded-xl" allow="autoplay; fullscreen"></iframe>
              )}
              {previewData.mediaType === "image" && (
                <img src={previewData.previewUrl} alt="Preview" className="max-w-full max-h-full object-contain rounded-xl" />
              )}
              {previewData.mediaType === "link" && (
                <div className="text-center text-white">
                  <p className="mb-4 text-lg text-gray-300">This is a web development service.</p>
                  {/* Link Button changed to Brand Blue/Green */}
                  <a href={previewData.previewUrl} target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-[#094a66] hover:bg-[#6db305] hover:shadow-[0_0_15px_rgba(109,179,5,0.4)] text-white font-bold rounded-full transition-all">Visit Demo Website</a>
                </div>
              )}
            </div>
          </div>
          {/* Click background to close */}
          <div className="absolute inset-0 z-[-1]" onClick={() => setPreviewData(null)}></div>
        </div>
      )}

      <FooterOne />
    </>
  );
}