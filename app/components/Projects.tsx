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
  status: 'live' | 'working' | 'not-deployed';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function StatusBadge({ status, isActive }: { status: Project['status']; isActive: boolean }) {
  const statusConfig = {
    live: {
      bg: 'bg-green-500/90',
      text: 'text-white',
      shadow: 'shadow-green-500/25',
      label: '● Live'
    },
    working: {
      bg: 'bg-yellow-500/90',
      text: 'text-white',
      shadow: 'shadow-yellow-500/25',
      label: '● Working'
    },
    'not-deployed': {
      bg: 'bg-red-500/90',
      text: 'text-white',
      shadow: 'shadow-red-500/25',
      label: '● Not Deployed'
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md z-20 
      transition-all duration-300 transform
      ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'}
      ${config.bg} ${config.text} shadow-lg ${config.shadow}`}
    >
      {config.label}
    </div>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isActive, setIsActive] = useState(false);
  const hasImage = project.image && project.image.trim() !== "";
  
  // Default background image URL
  const defaultBgUrl = "https://images.unsplash.com/photo-1524168644224-a521b6533306?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxnZW9tZXRyaWMlMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBjb2RpbmclMjBwYXR0ZXJufGVufDB8MHx8Ymx1ZXwxNzU1MTUyMDc4fDA&ixlib=rb-4.1.0&q=85";

  return (
    <div
      className="group relative overflow-hidden h-48 sm:h-64 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl mx-2 sm:mx-4"
      style={{
        animationDelay: `${0.2 * index}s`,
        animationFillMode: 'forwards',
      }}
      onClick={() => setIsActive(!isActive)}
    >
      {hasImage ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 font-minecraft"
          style={{
            backgroundImage: `url(${defaultBgUrl})`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Minecraft-style title for projects without images */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h3 className="text-white text-center text-xs sm:text-sm leading-relaxed font-minecraft">
              {project.title}
            </h3>
          </div>
        </div>
      )}

      {/* Status Tag - appears on hover */}
      <StatusBadge status={project.status} isActive={isActive} />

      {/* Info overlay - visible on hover (desktop) or tap (mobile) */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-4 sm:p-6 backdrop-blur-sm transition-all duration-500 z-10
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-xl sm:text-2xl font-bold text-white`}>
            {project.title}
          </h3>
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
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaLink className="text-lg sm:text-xl text-white" />
              </Link>
            )}
          </div>
        </div>
        <div className="min-h-0">
          <p className={`mb-4 text-sm sm:text-base text-gray-200 leading-relaxed text-truncate-2`}>
            {project.description}
          </p>
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
      image: "/VehicleInsuranceAgent.png",
      title: "Vehicle Insurance Agent",
      description: "Voice agent that handles vehicle insurance inquiries, extracts customer information, and stores it in a PostgreSQL database. The agent uses a Neo4j Graph RAG system to retrieve relevant car information scraped from CarDekho.com using Firecrawl API.",
      githubLink: "https://github.com/21lakshh/Vehicle-Insurance-Agent",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "/Tool-Router.png",
      title: "Tool Router",
      description: "This project demonstrates a comprehensive solution to measure the accuracy of correct MCP tool selection when dealing with multilingual inputs (Hindi + English text)",
      githubLink: "https://github.com/21lakshh/Tool-Router",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "/SpeedRAG.png",
      title: "Speed-RAG",
      description: "Using binarized embeddings to speed up vector search and reduce memory footprint",
      githubLink: "https://github.com/21lakshh/Speed-RAG",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "/portfolio.png",
      title: "Portfolio Website",
      description: "A sleek potfolio with RAG where you can ask me anything about my projects and me.",
      githubLink: "https://github.com/21lakshh/portfolio",
      liveLink: "https://project2.com",
      status: "live"
    },
    {
      image: "/CarPrice.png",
      title: "Car Price Prediction",
      description: "End to End data science project pipeline for predicting car prices automated using ZenML",
      githubLink: "https://github.com/21lakshh/Car-Price-Prediction",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "/Healthcare.png",
      title: "Healthcare Hub",
      description: "A comprehensive Streamlit web application integrated with multiple machine learning models to provide solutions for various healthcare-related predictions.",
      githubLink: "https://github.com/21lakshh/HealthCare-Hub",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "/Snippify.png",
      title: "Snippify",
      description: "Re-usable code snippets, curated by developers, powered by an automated AI agent",
      githubLink: "https://github.com/21lakshh/Snippify",
      liveLink: "https://snippify-zeta.vercel.app/",
      status: "live"
    },
    {
      image: "",
      title: "Smart Property Finder",
      description: "Model Context Protocol (MCP) tool built for the Puch AI WhatsApp bot. It helps users discover real-estate listings and get intelligent property insights directly in chat.",
      githubLink: "https://github.com/21lakshh/Smart-Property-Finder",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "/Kisaan.png",
      title: "Kisaan Saathi",
      description: "AI-powered Farmer Dashboard designed to support Indian farmers through real-time data, smart decision-making tools, and access to vital resources.",
      githubLink: "https://github.com/21lakshh/Kisaan-Saathi",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "",
      title: "Multi-threaded Web Server",
      description: "A basic multi-threaded HTTP web server implemented in Python using the socket module and a thread pool via concurrent.futures.ThreadPoolExecutor.",
      githubLink: "https://github.com/21lakshh/Multi-threaded-Web-Server",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "",
      title: "Email Campaign Performance Optimization",
      description: "This project focuses on improving the performance of email-based campaigns using feature engineering, exploratory data analysis, and various machine learning models.",
      githubLink: "https://github.com/21lakshh/Email-Campaign-Performance",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "",
      title: "SignSync",
      description: "AI-powered learning application designed to bridge communication gaps for the Deaf and Mute community.",
      githubLink: "https://github.com/21lakshh/SignSync",
      liveLink: "",
      status: "not-deployed"
    },
    {
      image: "",
      title: "Vib'In",
      description: "Revolutionizing complex process of Hir'In with Vib'In",
      githubLink: "https://github.com/21lakshh/vibin",
      liveLink: "",
      status: "working"
    }
  ];

  return (
    <section>
      <div id="projects" className="text-center mb-16" >
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
    </section>
  );
}