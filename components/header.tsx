"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "होम" },
  { href: "#services", label: "सेवाएं" },
  { href: "#about", label: "परिचय" },
  { href: "#testimonials", label: "समीक्षा" },
  { href: "#contact", label: "संपर्क" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xl lg:text-2xl">ॐ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg lg:text-xl font-semibold text-foreground leading-tight">
                आचार्य आकाश शास्त्री
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                वैदिक ज्योतिष विशेषज्ञ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+918958892468" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 89588 92468</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">अभी संपर्क करें</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+918958892468" className="flex items-center gap-2 text-primary py-2">
                <Phone className="h-4 w-4" />
                <span>+91 89588 92468</span>
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                <Link href="#contact">अभी संपर्क करें</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
