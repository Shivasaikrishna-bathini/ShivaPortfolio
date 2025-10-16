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
// TODO: Update your resume - Replace the PDF file in attached_assets folder with your latest resume
//import resumePdf from "@assets/Shivasai_Krishna_Resume.pdf";
//not using the above line since it is only frontend static 
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
        isScrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-lg border-b border-border" : ""
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
            <div className="text-3xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity" style={{ fontFamily: "'Brush Script MT', cursive", fontStyle: 'italic' }}>
              SK
            </div>
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
              className="md:hidden overflow-hidden bg-background/95"
            >
              <div className="flex flex-col gap-4 pt-4 pb-4 border-t border-border/50 mt-4">
                
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 text-lg"
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
          <DialogContent className="max-w-5xl h-[95vh] p-0 flex flex-col">
            <DialogHeader className="px-6 py-3 border-b flex-shrink-0">
              <div className="flex items-center justify-between">
                <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
                  <FileText className="h-5 w-5" />
                  Resume
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  data-testid="button-download-resume"
                >
                  <a
                    href="/attached_assets/Shivasai_Krishna_Resume.pdf"
                    download="Shivasai_Krishna_Resume.pdf"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 overflow-hidden">
              <object
                data="/attached_assets/Shivasai_Krishna_Resume.pdf"
                type="application/pdf"
                className="w-full h-full"
                title="Resume PDF"
              >
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="mb-4">Your browser cannot display the PDF.</p>
                    <Button asChild data-testid="button-fallback-download-resume">
                      <a
                        href="/attached_assets/Shivasai_Krishna_Resume.pdf"
                        download="Shivasai_Krishna_Resume.pdf"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </object>
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </motion.header>
  );
}
