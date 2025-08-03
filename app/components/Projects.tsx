"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

interface Project {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  status: 'live' | 'working';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="group relative overflow-hidden h-48 sm:h-64 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl mx-2 sm:mx-4"
      style={{
        animationDelay: `${0.2 * index}s`,
        animationFillMode: 'forwards',
      }}
      onClick={() => setIsActive(!isActive)}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Status Tag - appears on hover */}
      <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md z-20 
        transition-all duration-300 transform
        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}
        ${project.status === 'live'
          ? 'bg-green-500/90 text-white shadow-lg shadow-green-500/25'
          : 'bg-yellow-500/90 text-white shadow-lg shadow-yellow-500/25'}`}
      >
        {project.status === 'live' ? '● Live' : '● Working'}
      </div>

      {/* Info overlay - visible on hover (desktop) or tap (mobile) */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-4 sm:p-6 backdrop-blur-sm transition-all duration-500 z-10
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          <div className="flex gap-3">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-lg sm:text-xl text-white" />
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <FaLink className="text-lg sm:text-xl text-white" />
            </Link>
          </div>
        </div>
        <p className="mb-4 text-sm sm:text-base text-gray-200 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-3">
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black font-medium text-sm rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Site
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-transparent border-2 border-white text-white font-medium text-sm rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            View Code
          </Link>
        </div>
      </div>

      {/* Mobile indicator that hints at the card being interactive */}
      <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center sm:hidden z-20
        transition-all duration-300 ${isActive ? 'bg-white/20' : 'bg-black/30'}`}>
        <span className={`text-sm font-bold text-white transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
          +
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      image: "/Finfluenzz.png",
      title: "Finfluenzz",
      description: "To democratize financial literacy and empower the next generation with smart money management tools wrapped in an engaging, game-like experience..",
      githubLink: "https://github.com/21lakshh/finfluenzz",
      liveLink: "https://finfluenzz.vercel.app/",
      status: "live"
    },
    {
      image: "/Finfluenzz.png",
      title: "Portfolio Website",
      description: "Modern portfolio showcasing full-stack development skills with interactive animations and responsive design.",
      githubLink: "https://github.com/project2",
      liveLink: "https://project2.com",
      status: "working"
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
      </div>
      <div className="w-full px-4 sm:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}