'use client'
import { FaLinkedin, FaXTwitter, FaGithub, FaSpotify } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import Link from 'next/link';
import Image from 'next/image';

interface RecentTrack {
  title: string;
  artist: string;
  url: string;
  albumArt: string;
}

interface ReachoutProps {
  title?: string
  subtitle?: string
  socialLinks?: {
    twitter?: string
    github?: string
    linkedin?: string
    mail?: string
  }
  recentTrack?: RecentTrack
}

export default function Reachout({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  socialLinks = {
    twitter: "https://x.com/lakshh__",
    github: "https://github.com/21lakshh",
    linkedin: "https://www.linkedin.com/in/lakshya-paliwal-67a5222aa/",
    mail: "mailto:2005lakshyapaliwal@gmail.com",
  },
  recentTrack
}: ReachoutProps) {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleLinkClick = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  return (
    <div className="sm:px-12 px-4 pb-8">
      <div className="text-left w-full">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-lg sm:text-xl mb-2 opacity-20 mt-4 sm:mt-6">
            {title}
          </h2>
          <p className="opacity-20 text-md sm:text-lg mb-3 sm:mb-4">
           {subtitle}
          </p>
        </div>
        
        <div className="flex justify-center sm:justify-start space-x-6 sm:space-x-0 sm:grid sm:grid-cols-2 lg:flex lg:justify-start sm:gap-4 lg:gap-6 lg:space-x-0">
          {socialLinks.github && (
            <a 
              className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <FaGithub size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
              <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                GitHub
              </span>
            </a>
          )}
          
          {socialLinks.twitter && (
            <a 
              className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <FaXTwitter size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
              <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                Twitter
              </span>
            </a>
          )}
          
          {socialLinks.linkedin && (
            <a 
              className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <FaLinkedin size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
              <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                LinkedIn
              </span>
            </a>
          )}

          {socialLinks.mail && (
            <a 
              className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
              href={socialLinks.mail} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <IoMdMail size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 flex-shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
              <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                Mail
              </span>
            </a>
          )}
        
        </div>

        {recentTrack && (
           <div className="mt-8 mb-4">
              <p className="opacity-40 text-sm mb-3">Here's what I've been <Link href="/listening" className="underline">listening to lately</Link></p>
              <Link 
                href="/listening"
                className="group flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-neutral-900/50 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-neutral-800/50 transition-all duration-300 w-full sm:w-auto max-w-sm overflow-hidden"
              >
                 <div className="relative h-12 w-12 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={recentTrack.albumArt}
                      alt={recentTrack.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <div className="flex-grow min-w-0 text-left">
                    <div className="flex items-center gap-2">
                       <FaSpotify size={16} className="text-[#1DB954] flex-shrink-0" />
                       <p className="text-sm font-medium truncate dark:text-gray-200 font-[family-name:var(--font-instrument-serif)]">
                          {recentTrack.title}
                       </p>
                    </div>
                    <p className="text-xs text-gray-500 truncate dark:text-gray-400 pl-[24px]">
                       {recentTrack.artist}
                    </p>
                 </div>
                 <div className="text-xs text-gray-400 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    View all →
                 </div>
              </Link>
           </div>
        )}
        
        {/* Footer Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-2 sm:space-y-3 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 order-2 sm:order-1">
              <div className="text-md dark:text-white/40 text-black/40">
                © {new Date().getFullYear()} Lakshya Paliwal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
