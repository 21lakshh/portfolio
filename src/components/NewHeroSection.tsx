'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'
import { MasonryProjectCard } from './MasonryProjectCard'
import { projects } from '@/data/projects'
import { FileText } from 'lucide-react'
import { handleSmoothScroll } from './ui/ScrollAnimations'
import { SparklesText } from './ui/sparkles-text'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 font-['Inter'] relative">
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl">
          {/* Banner Section */}
          <Reveal delay={0.1} duration={0.8} amount={0.2}>
            <BannerSection
              bannerImage="/kanyemountain.jpeg"
              quote="Everything I'm not makes me everything I am."
            />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2} duration={0.7} amount={0.3}>
            <ProfileHeader
              name="Lakshya Paliwal"
              age="20"
              title="dev • ai • systems"
              profileImage="/newlaksh.jpeg"
              socialLinks={{
                twitter: "https://x.com/lakshh__",
                github: "https://github.com/21lakshh",
                linkedin: "https://www.linkedin.com/in/lakshya-paliwal-67a5222aa/",
              }}
            />
          </Reveal>

          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={20} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <ContentSection className="pb-8 pt-6">
                  <ContentParagraph className="mt-6 mb-6">
                    I’m a 3rd year CS undergrad and a <span className='font-medium dark:text-white text-black'>product-focused</span> engineer from Delhi, India. I have worked in 2x fast-paced startup environments where I have been shipping in <span className='font-medium dark:text-white text-black'>light years</span>. I take ownership in <span className='font-medium dark:text-white text-black'>0-1 </span>products and love working with systems, AI and automation.
                  </ContentParagraph>
                  
                  <ContentParagraph className="mb-6">
                    When not coding, I go for a walk, listen to songs and chill with my friends. I also like to speak about my mind through{' '}
                    <Link 
                      href="https://medium.com/@21lakshh" 
                      target="_blank"
                      className="inline-flex items-center gap-0.5 font-medium text-neutral-800 dark:text-white hover:text-black dark:hover:text-white underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors"
                    >
                      blogs
                    </Link>{' '}
                    and{' '}
                    <Link 
                      href="https://x.com/lakshh__" 
                      target="_blank"
                      className="inline-flex items-center gap-0.5 font-medium text-neutral-800 dark:text-white hover:text-black dark:hover:text-white underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors"
                    >
                      X
                    </Link>.
                  </ContentParagraph>

                  <ContentParagraph className="mb-6">
                    <span className="font-medium dark:text-white text-black">I&apos;m open to work, freelance, or collaborate.</span>{' '}
                    <Link 
                      href="#contact"
                      className="font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4 transition-colors cursor-pointer"
                      onClick={(e) => handleSmoothScroll(e, '#contact')}
                    >
                      Contact Me.
                    </Link>
                  </ContentParagraph>

                  {/* Simple Resume Button */}
                  <div className="flex items-center mt-2">
                    <a 
                      href="https://drive.google.com/file/d/1L7NBW5xQke9v_LI10I84k0KnxR8qtLZJ/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md transition-all duration-200"
                    >
                      <FileText size={14} />
                      <span>Resume</span>
                    </a>
                  </div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 opacity-40 mt-8">Professional Experience</h2>
                  <ExperienceContent />
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Proof of Work */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <h2 className="text-base sm:text-xl opacity-20 font-[family-name:var(--font-instrument-serif)]">Proof of Work</h2>
                  </div>
                  <div className="px-4">
                    <div className="grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2 group">
                      {projects.slice(0, 4).map((project) => (
                        <MasonryProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                  <div className="px-4 flex justify-end mt-6 sm:mt-8 mb-4 sm:mb-6">
                    <Link 
                      href="/projects"
                      className="text-xs sm:text-sm text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors inline-flex items-center gap-1"
                    >
                      View All
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* GitHub Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-lg sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4">
                    GitHub Contributions <span className="opacity-20">●</span> @21lakshh
                  </h2>
                  <div className="mb-6">
                    <ContributionsDisplay
                      username="21lakshh"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Tech Stack Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 mt-6 mb-6">
                  <TechStackMarquee className="w-full" />
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <CallToAction />
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Reachout Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div id="contact" className="mt-6 scroll-mt-24">
                  <Reachout
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}