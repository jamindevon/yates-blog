"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading text-xl md:text-2xl font-bold text-yates-evergreen leading-tight">
              Yates Funeral Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-yates-deep-green hover:text-yates-gold transition-colors font-medium">
              Home
            </Link>
            <Link href="/immediate-help" className="text-yates-deep-green hover:text-yates-gold transition-colors font-medium">
              Immediate Help
            </Link>
            <Link href="/planning-guide" className="text-yates-deep-green hover:text-yates-gold transition-colors font-medium">
              Planning Guide
            </Link>
            <Link href="/locations" className="text-yates-deep-green hover:text-yates-gold transition-colors font-medium">
              Locations
            </Link>
            <Link href="/about" className="text-yates-deep-green hover:text-yates-gold transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:7724617000"
              className="bg-yates-gold hover:bg-yates-gold/90 text-white px-6 py-2 rounded-md font-bold transition-all shadow-md"
            >
              Call (772) 461-7000
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:7724617000"
              className="bg-yates-gold text-white px-3 py-2 rounded text-sm font-bold shadow-sm whitespace-nowrap"
            >
              Call Now
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-yates-evergreen hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-3 py-3 text-base font-medium text-yates-deep-green hover:bg-yates-ivory rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/immediate-help"
              className="block px-3 py-3 text-base font-medium text-yates-deep-green hover:bg-yates-ivory rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Immediate Help
            </Link>
            <Link
              href="/planning-guide"
              className="block px-3 py-3 text-base font-medium text-yates-deep-green hover:bg-yates-ivory rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Planning Guide
            </Link>
            <Link
              href="/locations"
              className="block px-3 py-3 text-base font-medium text-yates-deep-green hover:bg-yates-ivory rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="block px-3 py-3 text-base font-medium text-yates-deep-green hover:bg-yates-ivory rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Our Family
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
