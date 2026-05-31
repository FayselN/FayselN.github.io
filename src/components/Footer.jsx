import { Github, Linkedin, Mail, CodeXml, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/FayselN', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/faysel-nessro-204058319', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fayselakiezedin@gmail.com', label: 'Email' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Data Science & Analytics',
  'Machine Learning & Deep Learning',
  'AI Model Development & Deployment',
  'Backend Systems & APIs',
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand + Social */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Faysel Nessro</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Backend developer and data scientist, creating beautiful, functional, and
              user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>fayselakiezedin@gmail.com</p>
              <p>+251 942130767</p>
              <p>Addis Ababa, ETH</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>&copy; 2024 Faysel Nessro. Made with</span>
            <CodeXml className="h-4 w-4 text-blue-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}
