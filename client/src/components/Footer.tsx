export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Shivasai Krishna Goud Bathini. Built with React & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
