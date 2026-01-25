'use client';
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { useHapticFeedback } from '@/hooks/useHapticFeedback';

interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export default function ProfileHeader({
  name = "Lakshya Paliwal",
  age = "20",
  title = "engineer • developer • builder",
  profileImage = "/laksh.jpg",
  socialLinks = {
    twitter: "https://x.com/lakshh__",
    github: "https://github.com/21lakshh",
    linkedin: "https://www.linkedin.com/in/lakshya-paliwal-67a5222aa/",
  }
}: ProfileHeaderProps) {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleLinkClick = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  return (
    <div className="flex-col -mt-10">
      <div
        className="w-28 h-28 mb-4 sm:ml-8 ml-4 relative z-10 rounded-full overflow-hidden bg-cover bg-center"
        role="img"
        aria-label={name}
        style={{ backgroundImage: `url("${profileImage}")` }}
      />
      <div className="text-left sm:flex sm:justify-between sm:items-center w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <p className="opacity-40 text-[14px]">
            {age} • {title}
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-3 sm:mt-0">
          {socialLinks.twitter && (
            <a
              className="hover:opacity-80"
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <FaXTwitter size={18} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              className="hover:opacity-80"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <FaLinkedin size={18} />
            </a>
          )}
          {socialLinks.github && (
            <a
              className="hover:opacity-80"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
