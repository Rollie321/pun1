
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Send } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [studentName, setStudentName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedNames, setFetchedNames] = useState<string[]>([]);
  const [isLoadingNames, setIsLoadingNames] = useState(true);
  const { toast } = useToast();

  const fetchNamesList = async () => {
    setIsLoadingNames(true);
    const namesDocRef = doc(db, "test", "names");
    try {
      const docSnap = await getDoc(namesDocRef);
      if (docSnap.exists() && docSnap.data().names) {
        setFetchedNames((docSnap.data().names as string[]).sort());
      } else {
        setFetchedNames([]);
      }
    } catch (error) {
      console.error("Error fetching names list: ", error);
      toast({
        title: "Error",
        description: "Hindi makuha ang listahan ng mga pangalan.",
        variant: "destructive",
      });
      setFetchedNames([]);
    } finally {
      setIsLoadingNames(false);
    }
  };

  useEffect(() => {
    fetchNamesList();
  }, []);

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
        await updateDoc(namesDocRef, {
          names: arrayUnion(studentName.trim()),
          lastModified: serverTimestamp(),
        });
      } else {
        await setDoc(namesDocRef, {
          names: [studentName.trim()],
          createdAt: serverTimestamp(),
          lastModified: serverTimestamp(),
        });
      }

      // Removed success toast
      setStudentName('');
      await fetchNamesList(); 
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
    <div className="flex flex-1 flex-col items-center p-4 bg-background text-foreground">
      <main className="flex-grow flex flex-col items-center justify-center text-center w-full px-4">

        <div className="text-center text-foreground/90 mb-10 max-w-xl mx-auto">
          <p className="mb-2">Alam kong mahirap mag-aral</p>
          <p className="mb-2">pero hindi lahat nabibigyan ng gan'yang pagkakataon</p>
          <br />
          <p className="mb-2">Kung nahihirapan ka, dapat maging proud ka pa nga</p>
          <p className="mb-2">dahil may mga taong takot maghirap at pinipiling mandaya</p>
          <br />
          <p className="mb-2">Anumang mangyari, matatapos din lahat ng paghihirap</p>
          <br />
          <p className="mb-2">At kahit na sabihin mong sa dulo ng bawat paghihirap ay may</p>
          <p className="mb-2">kasunod pang mga paghihirap, anong magagawa natin? Hindi tayo</p>
          <p className="mb-2">Diyos para mamili ng tadhana</p>
        </div>
      </main>

      <div className="w-full max-w-md p-6 mt-auto mb-4 bg-card shadow-xl rounded-lg border border-border">
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
              suppressHydrationWarning
            />
          </div>
          <Button
            onClick={handleSend}
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 group"
            size="lg"
            disabled={isLoading}
            suppressHydrationWarning
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <Send className="mr-2 h-5 w-5" />
            )}
            Oo
          </Button>
        </div>
      </div>

      <div className="w-full max-w-md">
        <Accordion type="single" collapsible className="w-full rounded-lg border bg-card text-card-foreground shadow-md">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline flex justify-between w-full items-center">
              Mga papasa sa first year
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-0 pb-4">
              <div className="max-h-[70vh] overflow-y-auto p-2 rounded-md border border-input bg-background">
                {isLoadingNames ? (
                  <p className="text-muted-foreground text-center py-4">Loading names...</p>
                ) : fetchedNames.length > 0 ? (
                  <ul className="divide-y divide-border/30">
                    {fetchedNames.map((name, index) => (
                      <li key={`${name}-${index}`} className="py-2 px-2 text-sm text-foreground/90">
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-center py-4">Wala pang pangalan sa listahan.</p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="pb-10"></div>
    </div>
  );
}
