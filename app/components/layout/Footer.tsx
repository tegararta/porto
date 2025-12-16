// src/components/layout/Footer.tsx
'use client'

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/tegararta',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/tegar-trybd/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      url: 'mailto:tegararta585@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Tegar<span className="text-green-400">.</span>
            </h3>
            {/* <p className="text-gray-400 mb-4">
              Junior Web Developer passionate about creating amazing web experiences
              with modern technologies.
            </p> */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-gray-900 hover:bg-green-400 hover:text-gray-900 rounded-lg transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: 'smooth',
                      })
                    }}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:tegararta585@gmail.com"
                  className="hover:text-green-400 transition-colors"
                >
                  tegararta585@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6283844710339"
                  className="hover:text-green-400 transition-colors"
                >
                  +62 838 4471 0339
                </a>
              </li>
              <li>Surabaya, Jawa Timur</li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Tegar Try Buana Danuarta.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-green-400 hover:bg-green-500 text-gray-900 rounded-lg transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}