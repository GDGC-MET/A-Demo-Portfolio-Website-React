import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

export default function Footer() {
  return (
    <footer id='contact' className="bg-black bg-opacity-50 mt-20">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-4">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-slate-300 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-slate-300 text-sm">
            © {new Date().getFullYear()} Robert Butcher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}