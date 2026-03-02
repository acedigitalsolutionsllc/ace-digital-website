import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";

// --- Main Layout (Digital Marketing) ---
import HomeOne from "./pages/HomeOne";

// --- Inner Pages (যেগুলো আমরা পরে কাস্টমাইজ করব) ---
import About from "./pages/About";
import Services from "./pages/Services";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import Faq from "./pages/Faq";
import Teams from "./pages/Teams";
import Blogs from "./pages/Blogs";
import Checkout from "./pages/Checkout";
import Notfound from "./pages/Notfound";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        {/* আপনার মূল Digital Marketing হোমপেজ */}
        <Route path="/" element={<HomeOne />} />

        {/* অন্যান্য প্রয়োজনীয় পেজসমূহ */}
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
        
        {/* ভুল লিংকের জন্য 404 পেজ */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}