"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Pawan Kumar Sinha",
      jobTitle: "Full Stack Developer",
      description:
        "A 22 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications.",
      url: "https://pawansinha.dev",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
      email: "sinhakrpawan11@gmail.com",
      nationality: "Indian",
      birthDate: "2003",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressRegion: "Delhi",
        addressLocality: "New Delhi",
      },
      sameAs: [
        "https://www.linkedin.com/in/pawan-kumar-sinha-0b789b390/",
        "https://github.com/Pawan11sinha",
        "https://x.com/sinhakrpawan11",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Web Development",
        "Software Engineering",
        "Portfolio Development",
        "Minimalist Design",
        "Modern Web Design",
    
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Maharaja Agrasen Institute of Technology",
          alternateName: "MAIT",
          description: "B.Tech in Computer Science Technology",
          url: "https://mait.ac.in",
        },
      ],
   worksFor: [
  {
    "@type": "Organization",
    name: "ConviSaaS Inc.",
    description: "User Story Engineer",
  },
],
      // award: [
      //   {
      //     "@type": "Award",
      //     name: "Finalist – Call2Code Hackathon, MUJ",
      //     description:
      //       "AI‑powered stock market dashboard with multilingual voice commands, real‑time analytics, and sentiment analysis. Selected as a finalist among 100+ teams.",
      //     dateAwarded: "2025-04",
      //   },
      //   {
      //     "@type": "Award",
      //     name: "Semi‑Finalist – BitBash, NIT Kurukshetra",
      //     description:
      //       "Developed a real‑world solution under 24‑hour constraints; recognized among the top‑performing teams.",
      //     dateAwarded: "2025-03",
      //   },
      // ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        description: "Building efficient, scalable, and intuitive applications",
        skills: [
          "React",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "TailwindCSS",
          "Supabase",
          "Firebase",
        ],
      },
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
