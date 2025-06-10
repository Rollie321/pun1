
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react'; // For the send button icon

export default function Home() {
  const [studentName, setStudentName] = useState('');

  const handleSend = () => {
    // Placeholder for future send logic
    if (studentName.trim() === '') {
      alert('Pakilagay ang iyong pangalan.');
      return;
    }
    alert(`Hello ${studentName}! Ang iyong tugon ay (hindi pa talaga) naipadala.`);
  };

  return (
    <div className="flex flex-col min-h-screen items-center p-4 bg-background text-foreground">
      <main className="flex-grow flex flex-col items-center justify-center text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Student Portal
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Maligayang pagdating! Sagutin ang tanong sa ibaba.
        </p>
      </main>

      <div className="w-full max-w-md p-6 mt-auto bg-card shadow-xl rounded-lg border border-border">
        <div className="space-y-6">
          <p className="text-2xl font-semibold text-center text-primary">
            Gusto mo bang pumasa?
          </p>
          <div className="space-y-2">
             <label htmlFor="studentNameInput" className="text-sm font-medium text-foreground/90 sr-only">Iyong Pangalan</label>
            <Input
              id="studentNameInput"
              type="text"
              placeholder="Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full h-12 text-base"
              aria-label="Student Name"
            />
          </div>
          <Button 
            onClick={handleSend} 
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 group"
            size="lg"
          >
            <Send className="mr-2 h-5 w-5" /> Oo
          </Button>
        </div>
      </div>
    </div>
  );
}
