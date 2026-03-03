import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroOne from "../components/Hero/HeroOne";
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import LogoSliderOne from "../components/ClientLogoSlider/LogoSliderOne";
import AboutOne from "../components/About/AboutOne";
import FunFactOne from "../components/FunFact/FunFactOne";
import ServiceOne from "../components/Services/ServiceOne";
import PortfolioSection from "../components/PortfolioSection"; // নতুন সেকশন ইমপোর্ট
import WhyChooseUs from "../components/WhyChooseUs";
import WorkProcessOne from "../components/WorkProcess/WorkProcessOne";
import TestimonialOne from "../components/Testimonials/TestimonialOne";
import LatestBlogOne from "../components/LatestBlog/LatestBlogOne";
import CtaOne from "../components/Cta/CtaOne";
import FooterOne from "../components/Layout/Footer/FooterOne";
import MobileHeader from "../components/Layout/Header/DemoHeader/DemoHeaderMobile";
import PageLayout from "../components/Layout/PageLayout";
import ContactSection from "../components/ContactSection";

export default function HomeOne() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");

  // হেডার/ফুটার থেকে লিংক ক্লিক করে আসলে স্ক্রল ও ফিল্টার করার লজিক
  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category);
      
      // একটু সময় নিয়ে স্ক্রল করানো যাতে পেজ লোড হতে পারে
      setTimeout(() => {
        const section = document.getElementById("portfolio-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [location]);

  return (
    <PageLayout>
      <DemoHeaderOne />
      <MobileHeader />
      <HeroOne />
      <LogoSliderOne />
      <AboutOne />
      
      {/* About এর পরেই Portfolio সেকশন দেওয়া হলো */}
      <PortfolioSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <FunFactOne />
      <ServiceOne />
      <WhyChooseUs />
      <WorkProcessOne />
      <TestimonialOne />
      <LatestBlogOne />
      <CtaOne />
      <ContactSection />
      <FooterOne />
    </PageLayout>
  );
}