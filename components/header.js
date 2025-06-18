"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Home, User, Briefcase, FileText, Phone, Menu } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

import logo from "@/images/logo.svg"
import search from "@/images/search.svg"
import cart from "@/images/cart.svg"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Products', url: '#', icon: Briefcase },
    { name: 'Categories', url: '#', icon: FileText },
    { name: 'Contact', url: '#', icon: Phone },
  ]

  return (
    <header className="w-full bg-white border-b border-gray-100 py-[20px] items-center top-[0px] sticky z-[11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                alt="VR PUMPS"
                width={150}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavBar items={navItems} />

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer hidden sm:block">
              <Image
                src={cart}
                alt="Cart"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer hidden sm:block">
              <Image
                src={search}
                alt="Search"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>

            {/* Login Button */}
            <div className="relative justify-center hidden sm:block">
              <InteractiveHoverButton text="Login" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <button className="sm:hidden bg-[#377DFF] text-white px-4 py-2 rounded-sm font-medium text-sm transition-colors duration-200 mt-2">
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}