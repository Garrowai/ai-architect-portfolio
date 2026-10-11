import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="container navigation" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          Alex Garrow<span>Systems &amp; automation</span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div id="navigation-links" className={`navigation-links ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <Link to="/#about">About</Link>
          <Link to="/#learning">Learning path</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
