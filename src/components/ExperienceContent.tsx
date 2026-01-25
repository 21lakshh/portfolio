'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { LinkPreview } from './ui/link-preview'

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements?: string[];
  href?: string;
  logoUrl?: string;
  previewLinks?: { url: string; text: string }[];
}

export default function ExperienceContent() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const experiences: ExperienceItem[] = [
    {
      company: "Responenet",
      position: "Full Stack & AI Intern",
      duration: "December 2025 - Present",
      description: "Developed and deployed cutting-edge solutions, including multi-select preferences, browser-based video recording, and API integrations like WhatsApp/email reminders. Optimized workflows with autosave features and real-time scraping, leveraging Next.js, Supabase, and Cloudflare workers.",
      achievements: [
        "Refactored a vibe-coded legacy codebase into a clean, modular, and production-grade architecture, improving performance, maintainability, and developer experience.",
      ],
      href: "https://impactvolunteer.com/",
      logoUrl: "/images/realresponsenet.jpeg",
    },
    {
      company: "Oddmind Innovations",
      position: "Full Stack AI Engineering Intern",
      duration: "June 2025 - November 2025",
      description: "AI Interview Platform for Consulting case-based interviews with AI",
      achievements: [
        "Designed and implemented a multipart upload pipeline for S3 video recordings, reducing upload time by 90% compared to single-file uploads.",
        "Integrated Razorpay Payment Gateway to enable secure and seamless payment processing.",
        "Implemented a Docker-based CI/CD pipeline on AWS, every new commit triggers an automated image build, deployment, and EC2 instance update with the latest version.",
        "Scaled the platform to support 100+ concurrent real-time AI-driven interviews, ensuring high performance, reliability, and low latency.",
      ],
      href: "https://interviews.zariya.ai/",
      logoUrl: "/images/oddmindinnovations.jpeg",
    },

    {
      company: "Chronocept",
      position: "Dataset Annotator",
      duration: "February 2025 - March 2025",
      description: "AI research initiative focused on enhancing machine temporal reasoning by integrating temporal validity into natural language processing (NLP) systems. This enables AI models to reason about time, track event timelines, and distinguish between past, present, and future occurrences with greater accuracy.",
      achievements: [
        "Annotated 250+ text samples to train NLP systems on temporal reasoning through segmentation, axis classification, and temporal validity modeling",
        "Supported the creation of the Chronocept Dataset, improving AI's understanding of event timelines."
      ],
      href: "https://huggingface.co/datasets/krishgoel/chronocept",
      logoUrl: "/images/arxiv.jpg",
      previewLinks: [
        {
          url: "https://arxiv.org/abs/2505.07637",
          text: "Link to Chronocept's research paper",
        }
      ],
    },

  ]

  const toggleExpanded = (company: string) => {
    setExpanded(prev => ({
      ...prev,
      [company]: !prev[company]
    }))
  }

  return (
    <div className="space-y-4 dark:text-white/70 text-black/70 pb-4">
      {experiences.map((exp) => {
        const isExpanded = expanded[exp.company]

        return (
          <div key={exp.company} className="rounded-lg p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden shrink-0">
                  {exp.logoUrl ? (
                    <Image
                      src={exp.logoUrl}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                      {exp.company.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium dark:text-white text-black text-sm sm:text-lg">
                    {exp.href ? (
                      <Link
                        href={exp.href}
                        target="_blank"
                        className="hover:text-[#006FEE] transition-colors"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="text-[10px] sm:text-sm opacity-70">
                    {exp.position}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="pl-13 sm:pl-0 sm:text-right shrink-0">
                  <p className="text-[10px] sm:text-sm opacity-50">
                    {exp.duration}
                  </p>
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => toggleExpanded(exp.company)}
                        className="shrink-0 p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isExpanded ? 'Collapse details' : 'Expand details'}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>

            {exp.achievements && exp.achievements.length > 0 && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <ul className="space-y-2.5 text-xs sm:text-sm opacity-80">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2.5">
                        <span className="text-[#006FEE] shrink-0 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="space-y-3 text-gray-300">
              {exp.previewLinks?.map((item, i) => (
                <div
                  key={i}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className={cn(
                    "flex items-start gap-3 transition-all duration-500",
                    "transform-gpu opacity-100 translate-y-0",
                    `${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`
                  )}
                >
                  <span className="text-[#006FEE] shrink-0 mt-1.5">•</span>
                  <span className="leading-relaxed">
                    <LinkPreview url={item.url} className="space-y-2.5 text-xs sm:text-sm opacity-80">
                      {item.text}
                    </LinkPreview>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}