"use client";

import React, { useState } from "react";
import { SpotlightCard } from "./ui/spotlight-card";
import { Calendar, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { LinkPreview } from "./ui/link-preview";

type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  link?: string;
  previewLinks?: {
    url: string;
    text: string;
  }[];
};

const experiences: Experience[] = [
  {
    company: "Oddmind Innovations",

    position: "Full Stack AI Intern",
    duration: "July 2025 - Present",
    description: [
      "Building an AI-powered mock interview platform to help students gain practical interview experience and improve job readiness.",
      "Building Call AI Agents focused on bridging employment gaps in rural communities through conversational AI solutions",
      "Integrating Livekit WebRTC framework for seamless real-time communication",
    ],
    technologies: ["Livekit", "Next.js", "AWS S3", "Express.js",],
    previewLinks: [
      // {
      //   url: "https://arxiv.org/abs/2505.07637",
      //   text: "Learn more about Chronocept's research",
      // },
    ],
  },
  {
    company: "Chronocept",
    position: "Research Intern",
    duration: "June 2025 - July 2025",
    description: [
      "Annotated 250+ text samples to train NLP systems on temporal reasoning through segmentation, axis classification, and temporal validity modeling.",
      "Supported the creation of the Chronocept Dataset, improving AI's understanding of event timelines.",
    ],
    technologies: ["NLP", "Temporal Reasoning", "Python", "Hugging Face"],
    previewLinks: [
      {
        url: "https://arxiv.org/abs/2505.07637",
        text: "Link to Chronocept's research paper",
      }
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <SpotlightCard
              key={index}
              className={cn(
                "p-8 cursor-pointer transition-all duration-300 group rounded-xl border border-blue-500/20 bg-black-to-br from-slate-800/50 via-slate-900/50 to-blue-950/50 backdrop-blur-sm",
                "hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/20",
                "hover:scale-[1.02] transform-gpu",
                expandedIndex === index ? "border-blue-400/60 shadow-lg shadow-blue-500/25" : ""
              )}
              gradientColor="rgba(59, 130, 246, 0.1)"
              lightGradientColor="rgba(59, 130, 246, 0.05)"
              onClick={() => toggleExpand(index)}
              disableScale={true}
            >
              <div className="space-y-4">
                <div className="flex xs:flex-row flex-col items-start justify-between gap-4">
                  
                  <section className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-white">
                        {experience.position}
                      </h3>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 text-blue-400 transition-all duration-500",
                          "transform-gpu opacity-0 scale-95 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100",
                          "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          expandedIndex === index ? "rotate-90" : "rotate-0",
                          expandedIndex === index
                            ? "opacity-100 translate-x-0 scale-100"
                            : ""
                        )}
                      />
                    </div>
                    <span className="flex items-center z-50 gap-2 text-blue-300 text-lg font-medium">
                      {experience.company}
                    </span>
                  </section>
                  <section className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium">
                    <Calendar className="w-4 h-4 text-blue-300" />
                    <span>{experience.duration}</span>
                  </section>
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100 translate-y-0"
                      : "grid-rows-[0fr] opacity-0 -translate-y-4"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 space-y-6">
                      <ul className="space-y-3 text-gray-300">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            className={cn(
                              "flex items-start gap-3 transition-all duration-500",
                              "transform-gpu",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                            <span className="text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="space-y-3 text-gray-300">
                        {experience.previewLinks?.map((item, i) => (
                          <li
                            key={i}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            className={cn(
                              "flex items-start gap-3 transition-all duration-500",
                              "transform-gpu",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                            <span className="text-base leading-relaxed">
                              <LinkPreview url={item.url} className="text-base text-blue-300 font-medium hover:text-blue-200">
                                {item.text}
                              </LinkPreview>
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              transitionDelay:
                                expandedIndex === index
                                  ? `${i * 100 + 300}ms`
                                  : "0ms",
                            }}
                            className={cn(
                              "px-3 py-2 text-sm rounded-lg font-medium bg-blue-500/20 border border-blue-400/30 text-blue-100 hover:bg-blue-500/30 hover:border-blue-300/50 transition-all duration-300",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}