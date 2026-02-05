import navLink from "../data/navLinks";
import Button from "../components/Button";

function Navbar() {
  return (
    <header className="fixed top-0 left-0  right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          DG<span className="text-primary">.</span>
        </a>
        {/*Desktop Navigation */}
        <div className="flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link) => {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        {/*  CTA*/}
        <div>
          <Button size="sm">Contact Me</Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
