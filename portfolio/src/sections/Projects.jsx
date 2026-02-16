import projects from "../data/projects";
import { Github } from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full"></div>
      <div className="absolute top-1/4 left-0 w-64 h-94 bg-highlight/5 rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header  */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl  md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-primary ">
            Projects that I Made
          </h2>
          <p className="text-muted-foreground">
            Here are some of the projects I've worked on. Each project is a
            <span className="text-primary italic">
              {" "}
              showcase of my skills and creativity.
            </span>
          </p>
        </div>
        {/*  Project Grid*/}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden  animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/*Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to transparent opacity-60"></div>
                {/*Links to Github */}
                <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Projects Description */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 italic">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
