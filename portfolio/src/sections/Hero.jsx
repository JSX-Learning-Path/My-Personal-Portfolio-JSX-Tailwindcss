import hero from "../assets/hero.png";

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
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className=" inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                Front-end Developer | React
              </span>
            </div>
            {/* Heading */}
            <div className="space-y-4 animate-fade-in delay-200">
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-white glow-text">
                Hi, I'm Doncho
              </h1>
              <p className="text-lg text-gray-500">
                I'm a passionate Front-end{" "}
                <span className="text-primary font-semibold glow-text">
                  Developer
                </span>{" "}
                with experience in building modern web applications using{" "}
                <span className="italic text-amber-200">React</span>.
              </p>
            </div>
          </div>
          {/*Right Side */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
