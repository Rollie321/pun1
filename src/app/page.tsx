
import InteractiveDemo from '@/components/interactive-demo';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container max-w-screen-lg mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-primary">
              Welcome to Charot Lang!
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Discover a new way to experience web applications. We blend simplicity with modern design to bring you an intuitive and delightful user experience.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 ease-in-out transform hover:scale-105 group">
              Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-screen-lg mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Responsive Design", description: "Seamless experience on any device, from mobile to desktop.", image: "https://placehold.co/600x400.png", hint:"responsive design" },
                { title: "Interactive UI", description: "Engaging elements that respond to your actions.", image: "https://placehold.co/600x400.png", hint: "user interface" },
                { title: "Modern Aesthetics", description: "Clean, beautiful, and professional look and feel.", image: "https://placehold.co/600x400.png", hint: "modern abstract" },
              ].map((feature, index) => (
                <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <CardHeader>
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      width={600} 
                      height={400} 
                      className="rounded-t-lg mb-4 aspect-[3/2] object-cover"
                      data-ai-hint={feature.hint}
                    />
                    <CardTitle className="font-headline text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Interactive Demo Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-screen-lg mx-auto px-4 flex flex-col items-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Try Our Interactive Demo
            </h2>
            <InteractiveDemo />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-screen-lg mx-auto px-4 text-center">
            <Card className="bg-primary/10 p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-primary">
                Ready to Dive In?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
                Join us and explore the possibilities. We are here to help you succeed.
              </p>
              <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 ease-in-out transform hover:scale-105 group">
                Learn More <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
