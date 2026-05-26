import { Link, useLocation } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `text-sm transition-colors duration-150 ${
      pathname === path
        ? "text-[#f5f0e8]"
        : "text-[#a8a29e] hover:text-[#f5f0e8]"
    }`;

  const pillClass =
    "inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[#f5f0e8] transition-all hover:bg-white/10 hover:border-white/20";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-[#f5f0e8] transition-opacity hover:opacity-80"
        >
          Alex Garrow
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className={`hidden sm:block ${linkClass("/")}`}>
            Home
          </Link>
          <Link to="/portfolio" className={linkClass("/portfolio")}>
            Portfolio
          </Link>

          {/* External links — icon + label (label hidden on xs) */}
          <a
            href="https://github.com/garrowai/ai-architect-portfolio"
            target="_blank"
            rel="noreferrer"
            className={pillClass}
            aria-label="GitHub"
          >
            <ExternalLink className="h-3 w-3" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alex-garrow/"
            target="_blank"
            rel="noreferrer"
            className={pillClass}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-3 w-3" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
