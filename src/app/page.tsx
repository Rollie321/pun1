
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { db } from '@/lib/firebase'; // Import db instance
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [studentName, setStudentName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSend = async () => {
    if (studentName.trim() === '') {
      toast({
        title: "Error",
        description: "Pakilagay ang iyong pangalan.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const namesDocRef = doc(db, "test", "names");

    try {
      const docSnap = await getDoc(namesDocRef);

      if (docSnap.exists()) {
        // Document exists, update the array
        await updateDoc(namesDocRef, {
          names: arrayUnion(studentName.trim()),
          lastModified: serverTimestamp(),
        });
      } else {
        // Document doesn't exist, create it
        await setDoc(namesDocRef, {
          names: [studentName.trim()],
          createdAt: serverTimestamp(),
          lastModified: serverTimestamp(),
        });
      }

      toast({
        title: "Success!",
        description: `Hello ${studentName}! Ang iyong pangalan ay naisave na sa listahan.`,
      });
      setStudentName(''); // Clear input after successful submission
    } catch (e) {
      console.error("Error updating/creating document: ", e);
      toast({
        title: "Error",
        description: "Nagkaroon ng problema sa pag-save ng iyong pangalan. Pakisubukan muli.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
              disabled={isLoading}
              suppressHydrationWarning // Added to address fdprocessedid
            />
          </div>
          <Button
            onClick={handleSend}
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 group"
            size="lg"
            disabled={isLoading}
            suppressHydrationWarning // Added to address fdprocessedid
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <Send className="mr-2 h-5 w-5" />
            )}
            {isLoading ? "Nagpapadala..." : "Oo"}
          </Button>
        </div>
      </div>
    </div>
  );
}
