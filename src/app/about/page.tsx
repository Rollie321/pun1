
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Users, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <main className="flex-grow py-16 md:py-24">
        <div className="container max-w-screen-lg mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Charot Lang
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              We are a passionate team dedicated to creating innovative and user-friendly web experiences. Our philosophy revolves around clean design, robust functionality, and a touch of "charot lang" - a bit of fun and lightheartedness in everything we do.
            </p>
          </section>

          <section className="mb-16">
            <Image 
              src="https://placehold.co/1200x400.png" 
              alt="Team working together" 
              width={1200} 
              height={400} 
              className="rounded-lg shadow-lg mb-12 aspect-[3/1] object-cover"
              data-ai-hint="team collaboration"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-primary">Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">A diverse group of developers, designers, and strategists united by a common goal.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">To build exceptional digital products that delight users and drive results for our clients.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Eye className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">To be a leading name in web development, known for quality, creativity, and a sprinkle of charot.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We're always looking for new challenges and collaborations. Let's build something amazing together!
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
