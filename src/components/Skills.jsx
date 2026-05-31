import { useState, useEffect, useRef } from 'react'

const skillGroups = [
  {
    title: 'Data Science & ML',
    skills: [
      { name: 'Python, NumPy, Pandas' },
      { name: 'Scikit-learn' },
      { name: 'TensorFlow / PyTorch' },
      { name: 'Feature Engineering' },
      { name: 'Model Evaluation' },
      { name: 'Time Series Analysis' },
      { name: 'Statistics & Probability' },
    ],
  },
  {
    title: 'AI / ML Engineering',
    skills: [
      { name: 'Model Training & Validation' },
      { name: 'APIs for ML models' },
      { name: 'Model Deployment (FastAPI / Flask)' },
      { name: 'ML Pipelines' },
      { name: 'Data Preprocessing' },
      { name: 'Version Control for Models' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'SQL (PostgreSQL / MySQL)' },
      { name: 'FastAPI / Flask / Django' },
      { name: 'Java' },
      { name: 'REST APIs' },
      { name: 'Authentication & Authorization' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Linux' },
      { name: 'Jupyter Notebook' },
      { name: 'Google Colab' },
      { name: 'Docker' },
      { name: 'VS Code' },
    ],
  },
]

const certifications = [
  { emoji: '🧠', title: 'Neural Networks & Deep Learning', provider: 'Coursera' },
  { emoji: '🖼️', title: 'Convolutional Neural Networks', provider: 'Coursera' },
  { emoji: '🔁', title: 'Sequence Models', provider: 'Coursera' },
  {
    emoji: '🏅',
    title: 'Deep Learning Specialization (5 + 1 Courses)',
    provider: 'Coursera · Neural Networks, CNNs, RNNs, Sequence Models',
    fullWidth: true,
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={sectionRef}>
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about staying current with the latest technologies and continuously
            expanding my skill set to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="portfolio-card"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="text-sm font-medium text-foreground text-center">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Heading */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Certifications</h3>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 ${
                cert.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="text-4xl mb-4">{cert.emoji}</div>
              <h4 className="font-bold text-foreground mb-2">{cert.title}</h4>
              <p className="text-muted-foreground">{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
