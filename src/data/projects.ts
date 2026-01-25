import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'interviewready',
    title: "Interview Ready",
    description: "Internship project: WebRTC-based AI interview platform built on LiveKit with automated uploads and feedback delivery.",
    longDescription: "An AI interview application using WebRTC and the LiveKit framework for case-based interviews across consulting, growth marketing, and product management. I owned the LiveKit integration after we moved away from OpenAI for long-context calls, stabilizing multi-participant sessions and media handling.\n\nI integrated Razorpay for payments and implemented on-frontend recording to S3. Uploads were refactored to a multipart pipeline, cutting upload time by about 90% versus single-file uploads. Post-interview, Gemini evaluates sessions; I added cron-driven background jobs that batch-send feedback emails every ~30 minutes to anyone pending delivery.\n\nLive link: https://interviews.zariya.ai/",
    liveLink: "https://interviews.zariya.ai/",
    video: 'interviewready',
    image: '/images/InterviewReady.png',
    tags: [
      "Next.js",
      "TailwindCSS",
      "Docker",
      "AWS",
      "Prisma",
      "Supabase",
      "S3"
    ],
  },
  {
    id: 'finfluenzz',
    title: "Finfluenzz",
    description: "Retro-gaming-inspired fintech app that gamifies personal finance with AI insights and real-time market data for Gen Z.",
    longDescription: "Finfluenzz is a retro-gaming-inspired fintech platform that makes personal finance engaging for Gen Z by blending AI-driven insights with playful arcade-style UI. It democratizes financial literacy through an AI Finance Advisor powered by Groq AI and live stock/crypto data from Alpha Vantage, Finnhub, and CoinGecko. Users analyze markets with candlesticks, RSI, SMA, and MACD, and receive Gemini-backed portfolio breakdowns, risk checks, diversification guidance, and actionable improvements.\n\nA News Terminal aggregates stock- and crypto-specific updates in real time, while the Budget Tracker manages expenses, categories, and AI-generated summaries. Gamified challenges (goals, badges, XP, leveling) encourage better habits. The retro pixel-art UI is responsive, mobile-ready, and smooth with micro-interactions.\n\nLive link: https://finfluenzz.vercel.app/",
    liveLink: "https://finfluenzz.vercel.app/",
    githubLink: "https://github.com/21lakshh/Finfluenzz",
    video: 'finfluenzz',
    image: '/images/Finfluenzz.png',
    tags: [
      "Honojs",
      "React",
      "Tailwindcss",
      "Cloudflare Workers",
      "Prisma"
    ],
  },
  {
    id: 'snippify',
    title: "Snippify",
    description: "Full-stack snippet platform with an autonomous AI agent to generate, explain, and refactor code, plus a sharable component library.",
    longDescription: "Snippify lets developers discover, create, and share reusable snippets while an autonomous AI agent instantly generates, explains, and refactors code. Users can create, update, delete, copy, and choose between public or private/team storage. A curated component library offers customizable UI pieces to speed up builds.\n\nLive link: https://snippify-zeta.vercel.app/",
    liveLink: "https://snippify-zeta.vercel.app/",
    githubLink: "https://github.com/21lakshh/Snippify",
    video: 'snippify',
    image: '/images/Snippify.png',
    tags: [
      "React",
      "Tailwindcss",
      "Honojs",
      "Cloudflare Workers",
      "Prisma",
    ],
  },
  {
    id: 'realm',
    title: "ReaLM",
    description: "AI-powered Chrome extension that verifies online information and detects misinformation using real-time fact-checking.",
    longDescription: "ReaLM helps verify claims from social media, news, and websites by capturing screenshots and analyzing them with AI. Smart claim extraction pulls the core statement, then real-time web search via Tavily gathers up-to-date sources. Google Gemini compares the claim against credible evidence, delivering clear verified/misinformation verdicts with detailed reasoning and references.\n\nThe extension works everywhere—capture content from any site.",
    liveLink: "https://github.com/21lakshh/ReaLM",
    githubLink: "https://github.com/21lakshh/ReaLM",
    video: 'realm',
    image: '/images/realm.png',
    tweetUrl: "",
    tags: [
      "React",
      "Tavily",
      "Honojs",
      "Cloudflare Workers",
      "Prisma",
      "Chrome Extension API"
    ],
  },
  {
    id: 'impactvolunteer',
    title: "Impact Volunteer",
    description: "Internship project: refactored and redesigned a 1000+ file volunteer-matching platform connecting nonprofits, corporates, academia, and volunteers.",
    longDescription: "ImpactVolunteer connects volunteers with meaningful opportunities and gives organizations powerful management tools across roles (volunteers, nonprofits, corporates for CSR, universities for service-learning). Before I joined, the codebase was a 1000+ file tangle from earlier interns; we refactored it for readability, rebuilt the UI, and stabilized core functionality for performance and maintainability.\n\nLive link: https://impactvolunteer.com/",
    liveLink: "https://impactvolunteer.com/",
    image: '/images/ImpactVolunteer.png',
    tweetUrl: "",
    tags: [
      "Nextjs",
      "Supabase",
      "Redis",
      "Gitlab",
      "S3",
    ],
  },
  {
    id: 'smartvoicenavigator',
    title: "Smart Voice Navigator",
    description: "Real-time visual navigation assistant for visually impaired users, orchestrating multi-agent reasoning with LiveKit and Gemini.",
    longDescription: "This assistant helps visually impaired users locate indoor objects by coordinating a multi-agent state machine inside the LiveKit ecosystem.  Gemini acts as the central reasoning engine, sequencing specialized agents: initial state captures user intent and location; object detection pairs YOLOv11 with SentenceTransformers (MiniLM) for cosine-similarity matching so terms like \"mug\" map to \"cup\". On detection, a depth estimation model adds spatial awareness; if the object is missing from frame, a RAG agent queries a structured household knowledge base for contextual location hints. Voice I/O stays low-latency via OpenAI STT and Sarvam TTS.",
    githubLink: "https://github.com/21lakshh/Smart-Voice-Navigator",
    image: '/images/smartvoicenavigator.png',
    tweetUrl: "",
    tags: [
      "Livekit",
      "YOLO",
      "RAG",
      "Depth Estimation",
    ],
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
