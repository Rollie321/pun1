import Link from 'next/link';
import { Laugh, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 max-w-screen-lg items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <Laugh className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Charot Lang</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/about" className="transition-colors hover:text-primary">About</Link>
          <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
          <Button variant="outline" size="sm" className="transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground">
            Contact Us
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 pt-8">
                <Link href="/" className="text-lg transition-colors hover:text-primary">Home</Link>
                <Link href="/about" className="text-lg transition-colors hover:text-primary">About</Link>
                <Link href="/services" className="text-lg transition-colors hover:text-primary">Services</Link>
                <Button variant="default" className="w-full transition-all duration-300 ease-in-out hover:bg-primary/90">
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
