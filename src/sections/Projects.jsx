import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Glow Beauty Hub",
    description: "A modern beauty and skincare product showcase website built with React. Features a clean UI, product insights pages, reusable components, and smooth navigation for an engaging shopping-style experience. Designed with responsive layout and optimized for performance.",
    image: "/projects/project4.png",
    tags: ["React", "JavaScript", "Vite", "Tailwind CSS", "Responsive Design"],
    link: "https://glow-beauty-hub.vercel.app/",
    github: "#",
  },
  {
    title: "Expense Tracker - Full Stack Finance App",
    description:
    "A responsive expense tracking web application with secure authentication, allowing users to manage daily income and expenses efficiently. Features login/signup system, protected routes, expense categorization, and a clean dashboard UI for financial overview.",
    image: "/projects/project5.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "FocusFuel - Smart Hydration Tracker",
    description:
      "A productivity-focused Chrome Extension that reminds users to drink water at customizable intervals. Tracks daily progress, streaks, and weekly analytics with visual charts. Includes goal tracking, strict mode for discipline, and persistent storage using Chrome APIs.",
    image: "/projects/project5.png",
    tags: ["Chrome Extension", "JavaScript", "Chrome Storage API", "Chart.js", "UI/UX"],
    link: "#",
    github: "https://github.com/Himayzy/FocusFuel-Extension",
  },
  {
  title: "UI Time Machine – Interactive Design Evolution Platform",
  description:
    "An interactive scroll-driven web experience showcasing the evolution of user interface design from 2010 to 2030. As users scroll, the UI dynamically transforms across different design eras, demonstrating modern frontend architecture, smooth state transitions, and responsive component systems.",
    image: "/projects/project-7.png",
  tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Scroll Animations", "Component Architecture"],
  link: "https://ui-time-machine-nine.vercel.app/",
  github: "https://github.com/Himayzy/ui-time-machine",
},
  {
    title: "Analytics Dashboard",
    description:
      "Developed a dynamic analytics dashboard displaying revenue trends, user activity, and engagement metrics. Connected the system with n8n to automate data updates and simulate real-time financial changes. Focused on intuitive data visualization, responsive design, and scalable backend architecture.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwindcss"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Quiz Platform",
    description:
      "Built a full-stack AI-powered quiz application that generates quizzes dynamically and tracks user performance in real time.",
    image: "/projects/project3.png",
    tags: ["Next.js (App Router)", "React", "Drizzle ORM", "Tailwind CSS", "PostgreSQL", "AI API integration"],
    link: "#",
    github: "#",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
