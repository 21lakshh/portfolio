import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
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
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-blue-300 hover:text-blue-200 transition-colors duration-300" />
      ),
      href: "#",
    },
  ];
  return (
    <FloatingDock
      items={links}
    />
  );
}