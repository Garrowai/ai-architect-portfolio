import { ExternalLink } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-content"><p>&copy; {new Date().getFullYear()} Alex Garrow<span>Systems, infrastructure &amp; automation</span></p><div><a href="https://www.linkedin.com/in/alex-garrow/" target="_blank" rel="noreferrer"><LinkedInIcon className="social-icon" /> LinkedIn</a><a href="https://github.com/garrowai/ai-architect-portfolio" target="_blank" rel="noreferrer"><ExternalLink size={16} /> Website source</a></div></div></footer>;
}
