import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CareerLyze - AI Career Coach",
    description: "CareerLyze is a smart and intuitive AI Career Coach that helps you navigate your professional journey with ease.",
    tags: ["NextJS", "ShadcnUI", "NeonDB"],
    demoUrl: "https://career-lyze.vercel.app/",
    githubUrl: "https://github.com/ahana4banerjee/CareerLyze",
  },
  {
    id: 2,
    title: "FinLens - AI Finance Tracker",
    description:
      "FinLens is a modern finance tracker that helps you track expenses/income, scan receipts, import transactions in bulk, and get AI-driven financial guidance along with monthly scheduled reports and insights.",
    tags: ["MERN", "TypeScript", "GeminiAI"],
    demoUrl: "https://fin-lens-sooty.vercel.app/",
    githubUrl: "https://github.com/ahana4banerjee/FinLens",
  },
  {
    id: 3,
    title: "Job Portal",
    description:
      "Allows users to register as Job Seekers or Recruiters, post and apply for jobs, upload resumes and profile photos using Cloudinary, and manage their job applications through an intuitive dashboard.",
    tags: ["MERN", "Cloudinary", "Multer"],
    demoUrl: "https://job-portal-sable-eight.vercel.app/",
    githubUrl: "https://github.com/ahana4banerjee/JobPortal",
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