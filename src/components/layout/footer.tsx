import { Twitter, Github, Linkedin, Laugh } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/40 bg-background/95 py-8">
      <div className="container max-w-screen-lg flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Laugh className="h-5 w-5 text-primary" />
          <p>&copy; {currentYear} Charot Lang. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" aria-label="Twitter" className="transition-colors hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="GitHub" className="transition-colors hover:text-primary">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
