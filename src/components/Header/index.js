"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("work")

  const navItems = [
    { name: "Work", href: "#work", id: "work" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Hire AI Developers", href: "#hire", id: "hire" },
    { name: "Solution", href: "#solution", id: "solution" },
    { name: "Industry", href: "#industry", id: "industry" },
    { name: "About Us", href: "#about", id: "about" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id.replace('#', '')))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-18 w-full">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/03/Logo.webp"
                height={120} // Base height for mobile
                width={120}  // Base width for mobile
                alt="Logo"
                className="object-contain sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 2xl:h-44 2xl:w-44"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:space-x-2 xl:space-x-4 2xl:space-x-6 flex-1 justify-end">
            <nav className="flex items-center lg:space-x-1 xl:space-x-2 2xl:space-x-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`lg:px-3 lg:py-2 xl:px-4 xl:py-2 2xl:px-6 2xl:py-3 rounded-full lg:text-sm xl:text-sm 2xl:text-base font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-gradient-primary text-white shadow-md"
                      : "text-text-secondary hover:text-primary hover:bg-text-disabled"
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="hidden xl:block h-10 w-px bg-text-disabled"></div>

            {/* Desktop Buttons */}
            <div className="flex items-center lg:space-x-2 xl:space-x-3 2xl:space-x-4">
              <Link href="#book-meeting">
                <button className="cursor-pointer text-primary border border-primary hover:bg-text-disabled bg-white font-medium lg:px-3 lg:py-2 xl:px-4 xl:py-2 2xl:px-6 2xl:py-3 rounded-full transition-all duration-200 lg:text-sm xl:text-sm 2xl:text-base">
                  Book a Meeting
                </button>
              </Link>
              <Link href="#contact">
                <button className="bg-primary hover:bg-secondary cursor-pointer text-white font-medium lg:px-3 lg:py-2 xl:px-4 xl:py-2 2xl:px-6 2xl:py-3 rounded-full shadow-md transition-all duration-200 lg:text-sm xl:text-sm 2xl:text-base">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 bg-white">
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                    activeSection === item.id ? "bg-primary text-white" : "text-text-primary hover:text-primary hover:bg-blue-50"
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3 mt-6 px-4">
              <Link href="#book-meeting" className="flex-1">
                <button className="w-full cursor-pointer text-primary border border-primary hover:bg-blue-50 bg-white font-medium px-4 py-3 rounded-full transition-all duration-200 text-sm">
                  Book a Meeting
                </button>
              </Link>
              <Link href="#contact" className="flex-1">
                <button className="w-full bg-primary hover:bg-secondary text-white font-medium px-4 py-3 rounded-full shadow-md transition-all duration-200 text-sm">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}