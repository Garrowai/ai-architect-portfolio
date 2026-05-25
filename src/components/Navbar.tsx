import { Link, useLocation } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `text-sm transition-colors duration-150 ${
      pathname === path
        ? "text-[#f5f0e8]"
        : "text-[#a8a29e] hover:text-[#f5f0e8]"
    }`;

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
        <div className="flex items-center gap-5 md:gap-7">
          <Link to="/" className={`hidden sm:block ${linkClass("/")}`}>
            Home
          </Link>
          <Link to="/portfolio" className={linkClass("/portfolio")}>
            Portfolio
          </Link>
          <a
            href="https://github.com/garrowai/ai-architect-portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-[#f5f0e8] transition-all hover:bg-white/10 hover:border-white/20"
          >
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </nav>
  );
}
