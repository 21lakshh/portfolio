'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  MusicToggle,
} from './ui/resizable-navbar';

export default function ResizablePortfolioNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'proof-of-work', link: '/projects' },
    { name: 'blogs', link: '/blogs' },
    { name: 'ask-me', link: '/ask-me' },
    { name: 'listening', link: '/listening' },
  ];

  const mobileNavItems = [
    { name: 'home', link: '/' },
    { name: 'proof-of-work', link: '/projects' },
    { name: 'blogs', link: '/blogs' },
    { name: 'ask-me', link: '/ask-me' },
    { name: 'listening', link: '/listening' },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={handleItemClick} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-5 w-full">
            {mobileNavItems.map((item, idx) => (
              <div
                key={`mobile-nav-${idx}`}
                className="transform transition-transform duration-400 hover:scale-105 active:scale-95"
              >
                <Link 
                  href={item.link}
                  onClick={handleItemClick}
                  className="text-lg font-[family-name:var(--font-instrument-serif)] hover:opacity-80 hover:underline transition-opacity duration-200 py-1"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-neutral-200 dark:border-neutral-700">
              <div className='flex flex-row gap-2'>
                <MusicToggle/>
                <AnimatedThemeToggler />
              </div>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
