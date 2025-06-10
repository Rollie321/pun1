
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  hint: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Crafting responsive, high-performance websites tailored to your needs using the latest technologies.",
    icon: Code,
    image: "https://placehold.co/600x400.png",
    hint: "coding computer"
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces that enhance user experience and engagement.",
    icon: Palette,
    image: "https://placehold.co/600x400.png",
    hint: "design sketch"
  },
  {
    title: "Backend Solutions",
    description: "Building robust and scalable backend systems to power your applications and manage data effectively.",
    icon: Server,
    image: "https://placehold.co/600x400.png",
    hint: "server racks"
  },
  {
    title: "Mobile App Dev",
    description: "Developing cross-platform mobile applications that deliver seamless performance on iOS and Android.",
    icon: Smartphone,
    image: "https://placehold.co/600x400.png",
    hint: "mobile app"
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="flex-grow py-16 md:py-24">
        <div className="container max-w-screen-lg mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              At Charot Lang, we offer a comprehensive suite of services to bring your digital vision to life. We combine technical expertise with creative flair to deliver outstanding results.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={600} 
                  height={300} 
                  className="rounded-t-lg aspect-[2/1] object-cover"
                  data-ai-hint={service.hint}
                />
                <CardHeader className="flex flex-row items-start space-x-4 pt-6">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-primary text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-foreground/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
