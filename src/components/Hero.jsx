import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const profileImage = '/assets/profile-CLF03sl0.jpg'

const socialLinks = [
  { icon: Github, href: 'https://github.com/FayselN', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/faysel-nessro-204058319', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fayselakiezedin@gmail.com', label: 'Email' },
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-accent-foreground/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-primary-glow/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Faysel Nessro"
              className="w-32 h-32 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-800"
            />
          </div>

          {/* Greeting */}
          <p className="text-lg md:text-xl text-foreground mb-4">Hello, I'm</p>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
            Faysel Nessro
          </h1>

          {/* Typing Area */}
          <div className="text-2xl md:text-4xl font-semibold text-foreground mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-primary pr-1">{typedText}</span>
          </div>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">Software Engineer</h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. I
            bring ideas to life by transforming data into solutions and writing clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-border"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary text-foreground hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-border"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Scroll Down */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
