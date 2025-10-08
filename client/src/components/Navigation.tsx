import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, FileText, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import resumePdf from "@assets/Shivasai_Krishna_Resume.pdf";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            data-testid="link-home"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground text-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              SK
            </div>
            <span className="text-xl font-bold tracking-tight hidden md:block">
              Shivasai Krishna
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setResumeOpen(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-resume"
            >
              Resume
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4 pb-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  variant="default"
                  className="w-full mt-2"
                  onClick={() => {
                    setResumeOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  data-testid="button-mobile-resume"
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
          <DialogContent className="max-w-5xl h-[95vh] p-0 bg-card">
            <DialogHeader className="px-6 py-5 bg-primary text-primary-foreground">
              <div className="flex items-center justify-between">
                <DialogTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary-foreground/10 rounded-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  Resume - Shivasai Krishna Goud Bathini
                </DialogTitle>
                <Button
                  variant="secondary"
                  size="sm"
                  asChild
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-0"
                  data-testid="button-download-resume"
                >
                  <a
                    href={resumePdf}
                    download="Shivasai_Krishna_Resume.pdf"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 overflow-auto bg-muted/30">
              <iframe
                src={resumePdf}
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </motion.header>
  );
}
