import hero from "../assets/hero.png";
import Button from "../components/Button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profileImage from "../assets/profile-picture-1.png";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-screen object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background/100" />
      </div>
      {/* Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animation: `drifting 8s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-10">
            <div className="animate-fade-in animation-delay-500">
              <span className=" inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                Front-end Developer | React
              </span>
            </div>
            {/* Heading */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-white glow-text ">
                Hi, I'm Doncho
              </h1>
              <p className="text-lg text-gray-500 animation-delay-300">
                I'm a passionate Front-end{" "}
                <span className="text-primary font-semibold glow-text">
                  Developer
                </span>{" "}
                with experience in building modern web applications using{" "}
                <span className="italic text-amber-200">React</span>.
              </p>
            </div>
            {/* Call to Action Buttons */}
            <div className="flex items-center gap-6 animate-fade-in">
              <Button size="lg" className="cursor-pointer">
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <button className="items-center gap-2 flex bg-transparent border border-primary text-primary rounded-full px-6 py-3 text-lg hover:bg-primary/10 transition-colors duration-300 cursor-pointer">
                Download CV
                <Download className="w-5 h-5" />
              </button>
            </div>
            {/*Social Links */}
            <div className="flex items-center gap-5 mt-4 ">
              <span className="text-gray-500 text-sm">Follow:</span>
              {[
                { icon: Github, href: "https://github.com/JSX-Learning-Path" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/doncho-ganev-45ba51332/",
                },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/*Right Side */}
        <div className="relative animate-fade-in animation-delay-300 ">
          {/*Profile Image */}
          <div className="relative max-w-md  rounded-3xl mt-5 flex items-center justify-center">
            <div className="glass rounded glow-border p-0.5">
              <img
                src={profileImage}
                alt="Profile Image"
                className="w-100 h-120 m-2 object-cover  rounded animate-fade-in animation-delay-700 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
