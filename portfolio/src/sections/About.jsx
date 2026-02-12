import highlights from "../data/highlights";
function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Side */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className=" text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              I'm a Front-end Developer
              <span className="font-extralight text-white">
                {" "}
                with a passion for creating beautiful and functional user
                interfaces.
              </span>
            </h2>
            <div className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a dedicated Junior Front-End Developer with hands-on
                experience gained through building personal projects and
                continuous self-learning. I work with HTML, CSS, JavaScript,
                Tailwind CSS, and React to create responsive, modern, and
                user-focused web applications.
              </p>
              <br />
              <p>
                Through my projects, I have developed a strong understanding of
                component-based architecture, reusable UI components, state
                management in React, and responsive design principles. I pay
                close attention to writing clean, maintainable code and creating
                intuitive user experiences.
              </p>
              <br />
              <p>
                I am highly motivated to start my professional career in a team
                environment where I can contribute, learn from experienced
                developers, and continue improving my technical and
                problem-solving skills.
              </p>
            </div>
            <div className="glass rounded p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium  text-white/60 italic">
                "My mission is to deliver the best of my abilities and
                continuously improve my skills.""
              </p>
            </div>
          </div>
          {/*  Right Side*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded p-6 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className=" w-6 h-6 text-primary" />
                </div>
                <h3 className=" text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
