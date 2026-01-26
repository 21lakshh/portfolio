# Portfolio

A modern, feature-rich portfolio website built with Next.js 15, showcasing my work, experience, and technical expertise. Features an AI-powered RAG chatbot, real-time Spotify integration, interactive project showcases, and more.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)

🔗 **Live Demo**: [lakshyaworks.dev](https://www.lakshyaworks.dev)

---

## ✨ Features

### 🤖 RAG-Powered AI Chatbot
- Interactive chat interface to ask questions about my experience, projects, and skills
- Vector embeddings stored in Qdrant for semantic search
- Context-aware responses with streaming support

### 🎵 Spotify Integration
- Real-time display of recently played tracks
- Automated daily updates via GitHub Actions
- Dedicated `/listening` page with sleek album art and playback history
- Direct Spotify links for each track

### 🎬 Dynamic Project Showcase
- Project videos powered by Mux Video API
- Masonry grid layout with hover animations
- Detailed project pages with tech stacks, features, and live demos
- Auto-generated project skeletons during loading

### 📅 Meeting Scheduler
- Integrated Cal.com booking system
- One-click 30-minute meeting scheduling
- Professional call-to-action section

### 📊 GitHub Contributions
- Live GitHub contribution graph
- Activity visualization from @21lakshh
- Displays coding consistency and open-source involvement

### 📝 Blog Section
- Medium integration for blog posts
- Dynamic routing for individual blog pages
- Clean reading experience with responsive design

### 🎨 Design & UX
- Minimalist black/white theme with smooth transitions
- Dark mode support with theme persistence
- Responsive design for all device sizes
- Smooth scroll animations with Framer Motion
- Diagonal pattern decorations for visual interest
- Custom haptic feedback on mobile devices

---

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **UI Components**: Radix UI primitives

### AI & Data
- **LLM**: Google Gemini (via LangChain)
- **Vector DB**: Qdrant Cloud
- **Embeddings**: Google Generative AI Embeddings
- **Document Loading**: LangChain Document Loaders

### Integrations
- **Video**: Mux Video API
- **Calendar**: Cal.com
- **Music**: Spotify Web API
- **Code**: GitHub API (@octokit/rest)
- **Analytics**: Vercel Analytics

### Automation
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Scheduling**: Cron jobs for daily Spotify updates

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Clone the Repository
```bash
git clone https://github.com/21lakshh/portfolio.git
cd portfolio
```

### Install Dependencies
```bash
pnpm install
# or
npm install
```

### Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
# GitHub API
GITHUB_TOKEN=your_github_personal_access_token
NEXT_GITHUB_TOKEN=your_github_personal_access_token

# Google AI (for RAG chatbot)
NEXT_GOOGLE_API_KEY=your_google_gemini_api_key

# Qdrant Vector Database
NEXT_QDRANT_API_KEY=your_qdrant_api_key
NEXT_QDRANT_URL=your_qdrant_cluster_url
NEXT_QDRANT_COLLECTION_NAME=your_collection_name

# Spotify API (optional - for music integration)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

### Run Development Server
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Configuration

### Setting Up the RAG Chatbot

1. **Create a Qdrant Collection**:
   - Sign up at [Qdrant Cloud](https://cloud.qdrant.io/)
   - Create a new collection with vector size 768 (for Google embeddings)
   - Copy your cluster URL and API key

2. **Prepare Your Documents**:
   - Add markdown/text files to `src/data/` or your chosen directory
   - Run the embedding script to populate Qdrant:
   ```bash
   node scripts/embed-documents.js
   ```

3. **Get Google AI API Key**:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key for Gemini
   - Add to `.env` as `NEXT_GOOGLE_API_KEY`

### Setting Up Spotify Integration

1. **Create a Spotify App**:
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app and note your Client ID and Secret
   - Add `http://localhost:3000/callback` as a redirect URI

2. **Get Refresh Token**:
   - Use the Spotify OAuth flow to obtain a refresh token
   - Add credentials to `.env`

3. **Enable GitHub Actions**:
   - Add the same Spotify credentials as repository secrets
   - The workflow will run daily at midnight UTC

### Customizing Content

- **Projects**: Edit `src/data/projects.ts`
- **Blogs**: Edit `src/data/blogs.ts`
- **Experience**: Edit `src/components/ExperienceContent.tsx`
- **Tech Stack**: Edit `src/components/TechStackMarquee.tsx`

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── update-spotify.yml       # Daily Spotify sync
├── public/
│   ├── images/                      # Static images
│   └── tech-icons/                  # Technology icons
├── scripts/
│   └── fetch-spotify.js             # Spotify API script
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/                # RAG chatbot endpoint
│   │   │   └── github-contributions/
│   │   ├── ask-me/                  # Chatbot page
│   │   ├── blogs/                   # Blog pages
│   │   ├── listening/               # Spotify listening page
│   │   ├── projects/                # Project showcase
│   │   ├── layout.tsx
│   │   └── page.tsx                 # Home page
│   ├── components/                  # React components
│   ├── data/
│   │   ├── projects.ts              # Project data
│   │   ├── blogs.ts                 # Blog data
│   │   └── spotify.json             # Recently played tracks
│   ├── hooks/                       # Custom React hooks
│   ├── lib/
│   │   ├── langchain/               # RAG implementation
│   │   └── utils.ts                 # Utility functions
│   └── types/                       # TypeScript types
├── .env                             # Environment variables
├── package.json
└── README.md
```
---

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 👨‍💻 Author

**Lakshya Paliwal**
- Portfolio: [lakshyaworks.dev](https://www.lakshyaworks.dev)
- GitHub: [@21lakshh](https://github.com/21lakshh)
- Twitter: [@lakshh__](https://twitter.com/lakshh__)
- LinkedIn: [lakshya-paliwal](https://www.linkedin.com/in/lakshya-paliwal-67a5222aa/)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Hosting platform
- [LangChain](https://langchain.com/) - LLM orchestration
- [Qdrant](https://qdrant.tech/) - Vector database
- [Mux](https://mux.com/) - Video infrastructure
- [Spotify](https://spotify.com/) - Music API
- [Cal.com](https://cal.com/) - Scheduling

---

⭐ If you found this portfolio inspiring, consider giving it a star!
