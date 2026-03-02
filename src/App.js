import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom"; 
import AOS from "aos";

// --- Main Layout ---
import HomeOne from "./pages/HomeOne";

// --- Inner Pages ---
import About from "./pages/About";
import Services from "./pages/Services";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CourseDetails from "./pages/CourseDetails";
import Faq from "./pages/Faq";
import Teams from "./pages/Teams";
import Blogs from "./pages/Blogs";

// --- Custom Pages ---
import Founder from "./pages/Founder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Notfound from "./pages/Notfound";

// --- Scroll To Top Component ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Scroll To Top */}
      <ScrollToTop />
      
      <Routes>
        {/* Main Home */}
        <Route path="/" element={<HomeOne />} />

        {/* Existing Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        
        {/* Custom New Pages */}
        <Route path="/founder" element={<Founder />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        
        {/* 404 Not Found Page (Must be at the very bottom) */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}