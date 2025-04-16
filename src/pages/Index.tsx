
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import CoursesSection from "../components/sections/CoursesSection";
import SkillsSection from "../components/sections/SkillsSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the slide-in class
    const slideInElements = document.querySelectorAll(".slide-in");
    slideInElements.forEach((el) => observer.observe(el));
    
    return () => {
      slideInElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Simulate downloading resume PDF
  useEffect(() => {
    // Create a blob with some dummy content
    const blob = new Blob(['Hari Krishnan R - Resume'], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    // Create a link element in the document
    const link = document.createElement('a');
    link.href = url;
    link.download = "Hari's RESUME.pdf";
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Clean up
    return () => {
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CoursesSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
