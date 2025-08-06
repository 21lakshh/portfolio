import React from "react";
import { LinkPreview } from "./link-preview";
import { TimelineDot } from "./timeline-dot";

interface PreviewLink {
  url: string;
  text: string;
}

interface PreviewLinksProps {
  links: PreviewLink[];
  className?: string;
}

export const PreviewLinks: React.FC<PreviewLinksProps> = ({ links, className }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className={className}>
      <ul className="space-y-3 text-gray-300">
        {links.map((link, i) => (
          <li key={i}>
            <div className="flex items-center gap-2">
              <TimelineDot />
              <span className="text-base leading-relaxed">
                <LinkPreview 
                  url={link.url} 
                  className="text-base text-blue-300 font-medium hover:text-blue-200"
                >
                  {link.text}
                </LinkPreview>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};