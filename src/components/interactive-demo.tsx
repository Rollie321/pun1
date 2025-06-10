"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function InteractiveDemo() {
  const [message, setMessage] = useState("Click the button to see a message!");
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // This demonstrates dynamic content loading based on state change after hydration
    if (count > 0) {
      setMessage(`Button clicked ${count} time${count > 1 ? 's' : ''}! Keep going!`);
    }
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    toast({
      title: "Action Performed!",
      description: `You clicked the button. Current count: ${count + 1}`,
      duration: 3000,
    });
  };

  return (
    <Card className="w-full max-w-md shadow-lg transition-all hover:shadow-xl duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="font-headline text-primary">Interactive Demo</CardTitle>
        <CardDescription>This shows basic JavaScript interactivity.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-center min-h-[40px]">{message}</p>
        <Button 
          onClick={handleClick} 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Click Me
        </Button>
      </CardContent>
      <CardFooter className="flex justify-around">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
          <ThumbsUp className="mr-2 h-4 w-4" /> Like
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
          <MessageSquare className="mr-2 h-4 w-4" /> Comment
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
}
