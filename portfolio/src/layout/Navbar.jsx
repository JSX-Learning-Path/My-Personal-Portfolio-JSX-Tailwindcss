import { navLinks } from "../data/navLinks";
import Button from "../components/Button.jsx";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent py-5">
      <nav className=" flex container mx-auto px-6 items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          DG<span className="text-primary">.</span>
        </a>
        <ul className="flex items-center gap-4 glass rounded-full px-2 py-1 ">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        {/*
          Call to Actions Button 
        */}
    <Button className="ml-4" size="sm">
      Contact Me
    </Button>
      </nav>
    </header>
  );
}

export default Header;
