"use client";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  console.log(activeSection);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Contact />
    </>
  );
}
