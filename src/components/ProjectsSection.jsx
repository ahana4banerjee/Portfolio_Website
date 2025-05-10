import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Quiz App",
    description: "Created an interactive quiz platform with timed questions, scoring, and dynamic feedback",
    tags: ["HTML", "CSS", "JavaScript", "APIs"],
    demoUrl: "https://quiz-app-l0gi.onrender.com",
    githubUrl: "https://github.com/ahana4banerjee/quiz-app",
  },
  {
    id: 2,
    title: "To-Do List App ",
    description:
      "Designed a minimalist task management app with functionality to add, delete, and update tasks in real time.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://todo-list-app-ithg.onrender.com",
    githubUrl: "https://github.com/ahana4banerjee/todo-list-app",
  },
  {
    id: 3,
    title: "Pomodoro Timer App",
    description:
      "A productivity timer web app based on the Pomodoro technique.Features include animations, sound notifications, custom durations, dark/light mode, task inputs, and pomodoro streak tracking.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://pomodoro-timer-8fog.onrender.com",
    githubUrl: "https://github.com/ahana4banerjee/pomodoro-timer",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project depicts my knowledge and skills gathered during my learning phase
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ahana4banerjee"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};