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
        {[...Array(25)].map((_, i) => (
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
      <div>
        <div>
          {/* Left Side */}
          <div>
            <div>
                
            </div>
          </div>
          {/*Right Side */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
