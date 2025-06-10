import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "formsAI",
    description: "Built a form builder which builds your survey,job,Questionare forms with just a single prompt.This makes teams more productive",
    image: "https://res.cloudinary.com/dza3vsyso/image/upload/v1749550856/Screenshot_2025-06-10_150039_eyuoz0.png",
    tags: ["Nextjs", "TailwindCSS", "convex","gemini llm","Typescript","shadcn"],
    demoUrl: "https://form-ai-chi.vercel.app",
    githubUrl: "https://github.com/Sreeman45/formAI",
  },
  {
    id: 2,
    title: "image2code",
    description:
      "A web app which converts any image,screenshots and wireframe into the code by harnessing the power of the llms",
    image: "https://res.cloudinary.com/dza3vsyso/image/upload/v1749550916/Screenshot_2025-06-10_150312_i1mtby.png",
    tags: ["TypeScript", "Next.js","Tailwindcss","shadcn","Drizzle","Postgressql","llms"],
    demoUrl: "https://imagetocod.netlify.app/",
    githubUrl: "https://github.com/Sreeman45/image2code",
  },
  {
    id: 3,
    title: "Quicknote",
    description:
      "Designed a simple yet efficient notes app where users can store there notes and retrieve according their need",
    image: "https://res.cloudinary.com/dza3vsyso/image/upload/v1749550928/Screenshot_2025-06-10_153844_fi6sph.png",
    tags: ["MERN stack", "Tailwindcss","gemini llm"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sreeman45/QuickNote",
  },
      {
    id: 4,
    title: "commitChecker",
    description:
      "check the repos of github,daily commits  with charts",
    image: "https://res.cloudinary.com/dza3vsyso/image/upload/v1749550961/Screenshot_2025-06-10_154913_bdscky.png",
    tags: ["React","Typescript", "Tailwindcss","recharts","shadcn"],
    demoUrl: "https://commitchecker.vercel.app/",
    githubUrl: "https://github.com/Sreeman45/commit_Checker",
  },
    {
    id: 5,
    title: "Text Editor",
    description:
      "A simple text editor designed for ease of using and simplicity",
    image: "https://res.cloudinary.com/dza3vsyso/image/upload/v1749550940/Screenshot_2025-06-10_154719_v44joa.png",
    tags: ["React","google Oauth"],
    demoUrl: "https://warrante-me.vercel.app/",
    githubUrl: "https://github.com/Sreeman45/Text-editor",
  },
      {
    id: 6,
    title: "URL-Shortener",
    description:
      "Enter the URL click on submit,done!your url is ready",
    image: "https://res.cloudinary.com/dza3vsyso/image/upload/v1749550950/Screenshot_2025-06-10_154755_twy7o0.png",
    tags: ["nodejs","Express","MongoDB"],
    demoUrl: "https://url-shortener-omega-gray.vercel.app/",
    githubUrl: "https://github.com/Sreeman45/url-shortener",
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
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

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
            href="https://github.com/Sreeman45"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
