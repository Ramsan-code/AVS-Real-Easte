"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Featured Properties', href: '#featured' },
  { label: 'Property Portfolio', href: '#properties' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-brand-forest' : 'text-white drop-shadow-md'}`}>
            AVS RealEstate<span className="text-brand-lime">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-brand-lime ${
                  scrolled ? 'text-brand-forest/80' : 'text-white/90 drop-shadow-sm'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-brand-lime text-brand-forest px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-lime/90 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-lime min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-brand-forest' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-brand-forest' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-brand-forest font-medium text-lg py-2 min-h-[44px] flex items-center border-b border-gray-50 last:border-none"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={closeMenu}
                className="bg-brand-forest text-white px-6 py-3 rounded-xl font-semibold text-center mt-4 min-h-[44px] flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
