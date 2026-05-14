"use client";

import Link from 'next/link';

export function PKNavbar() {
  return (
    <div className="w-full bg-brand-forest pt-6 px-4 flex justify-center">
      <nav className="w-full max-w-6xl bg-[#E8EAE6] rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 shrink-0">
            {/* Simple logo placeholder to match the colorful people icon */}
            <div className="relative w-full h-full">
               <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Simplistic representation of the logo */}
                  <circle cx="50" cy="30" r="10" fill="#FDB813" />
                  <circle cx="30" cy="65" r="10" fill="#E84D8A" />
                  <circle cx="70" cy="65" r="10" fill="#00B2E3" />
                  <path d="M 50 45 C 40 45, 30 55, 30 65 L 70 65 C 70 55, 60 45, 50 45" fill="#4CAF50" opacity="0.8" />
               </svg>
            </div>
          </div>
          <span className="text-xl font-medium text-gray-800 tracking-tight">
            PK Synergy Solutions
          </span>
        </div>

        {/* Links & CTA */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Services</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Values</Link>
          <Link 
            href="#connect" 
            className="bg-brand-forest text-white px-6 py-2 rounded-full hover:bg-brand-forest/90 transition-colors ml-2"
          >
            Connect
          </Link>
        </div>
      </nav>
    </div>
  );
}
