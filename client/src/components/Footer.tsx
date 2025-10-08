import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Shivasai Krishna Goud Bathini. Built with React & Framer Motion.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild data-testid="button-footer-github">
              <a
                href="https://github.com/Shivasaikrishna-bathini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="button-footer-linkedin">
              <a
                href="https://www.linkedin.com/in/shiva-sai-krishna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="button-footer-email">
              <a href="mailto:shbathin@my.bridgeport.edu">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
