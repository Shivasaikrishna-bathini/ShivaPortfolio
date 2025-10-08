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
            <Button
              variant="default"
              size="sm"
              onClick={() => setResumeOpen(true)}
              data-testid="button-resume"
            >
              Resume
            </Button>
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
          <DialogContent className="max-w-4xl h-[90vh] p-0">
            <DialogHeader className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <DialogTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Resume - Shivasai Krishna Goud Bathini
                </DialogTitle>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  data-testid="button-download-resume"
                >
                  <a
                    href="/attached_assets/Shiva_AI Engineer _1759900689431.pdf"
                    download="Shivasai_Krishna_Resume.pdf"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 overflow-auto p-6">
              <iframe
                src="/attached_assets/Shiva_AI Engineer _1759900689431.pdf"
                className="w-full h-full rounded-md border"
                title="Resume PDF"
              />
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </motion.header>
  );
}
