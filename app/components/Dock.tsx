import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFile,
  IconHome,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "#",
    },

    {
      title: "Resume",
      icon: <IconFile className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />,
      href: "https://drive.google.com/file/d/1fbY-dw37k2LJnr64Okzbiyc0lf6hVdj2/view?usp=sharing",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "https://www.linkedin.com/in/lakshya-paliwal-67a5222aa/",
    },

    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "https://x.com/lakshh__",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "https://github.com/21lakshh",
    },
  ];
  return (
    <FloatingDock
      items={links}
    />
  );
}