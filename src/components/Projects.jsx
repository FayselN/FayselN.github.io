import { useState } from 'react'
import { Github } from 'lucide-react'
import projects from '../data/projects.json'

const filters = ['All', 'Machine Learning', 'Time Series', 'NLP', 'Backend Systems', 'Data Science']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (p) => p.category === activeFilter || p.technologies.includes(activeFilter)
        )

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      </div>

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

      <div className="section-container relative z-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of machine learning, data science, and backend engineering projects focused
            on real-world problem solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                activeFilter === f
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                  : 'bg-secondary text-secondary-foreground border-border hover:bg-accent hover:shadow-md'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="portfolio-card group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.githubUrl}
                    className="flex-1 btn-ghost text-center border border-border inline-flex items-center justify-center"
                  >
                    <Github className="h-4 w-4 mr-2" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All GitHub Button */}
        <div className="text-center mt-16">
          <a href="#" className="btn-primary inline-flex items-center">
            <Github className="h-5 w-5 mr-2" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
