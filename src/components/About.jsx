import { Brain, Database, Code, Users } from 'lucide-react'

const aboutCards = [
  {
    icon: Brain,
    title: 'Machine Learning & AI',
    description:
      'Building, training, and evaluating machine learning and deep learning models for real-world problems.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Working with structured and unstructured data, databases, and pipelines to support analytics and ML systems.',
  },
  {
    icon: Code,
    title: 'Backend Development',
    description:
      'Designing scalable backend services, REST APIs, and model-serving systems using clean architecture.',
  },
  {
    icon: Users,
    title: 'Collaboration & Research',
    description:
      'Collaborating in teams, documenting experiments, and translating business problems into technical solutions.',
  },
]

const stats = [
  { number: '5+', label: 'Projects Completed' },
  { number: '1+', label: 'Years Experience' },
  { number: '4+', label: 'ML & AI Courses' },
  { number: '10+', label: 'Tools & Technologies' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a Data Scientist and Machine Learning Engineer with a strong backend development
            background, focused on building intelligent, scalable, and data-driven systems.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                My work centers on transforming data into actionable insights and deploying machine
                learning models into production-ready backend systems. I have hands-on experience
                with data preprocessing, model training, evaluation, and API-based deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have completed the Deep Learning Specialization on Coursera, covering Neural
                Networks, Convolutional Neural Networks, Sequence Models, and advanced deep learning
                techniques. This foundation allows me to approach problems with both theoretical
                understanding and practical implementation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving complex problems, learning new technologies, and working on projects
                that combine machine learning, backend engineering, and real-world impact. I am
                continuously improving my skills in AI system design and scalable data-driven
                applications.
              </p>
            </div>
            <div className="pt-6">
              <button className="btn-primary">Download Resume</button>
            </div>
          </div>

          {/* Right: About Cards */}
          <div className="grid gap-6">
            {aboutCards.map((card, i) => (
              <div
                key={card.title}
                className="portfolio-card group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
