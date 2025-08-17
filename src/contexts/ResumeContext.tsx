import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResumeSection {
  id: string;
  type: 'summary' | 'experience' | 'education' | 'skills' | 'projects';
  content: any;
  atsScore: number;
  suggestions: string[];
}

interface Resume {
  id: string;
  title: string;
  sections: ResumeSection[];
  atsScore: number;
  lastModified: Date;
  targetJobRole?: string;
}

interface ResumeContextType {
  currentResume: Resume | null;
  resumes: Resume[];
  setCurrentResume: (resume: Resume) => void;
  updateSection: (sectionId: string, content: any) => void;
  addSuggestion: (sectionId: string, suggestion: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [currentResume, setCurrentResume] = useState<Resume | null>({
    id: '1',
    title: 'Software Engineer Resume',
    atsScore: 78,
    lastModified: new Date(),
    sections: [
      {
        id: 'summary',
        type: 'summary',
        content: 'Experienced software engineer with 5+ years in full-stack development.',
        atsScore: 75,
        suggestions: ['Add specific technologies', 'Include quantifiable achievements']
      },
      {
        id: 'experience',
        type: 'experience',
        content: [
          {
            company: 'Tech Corp',
            position: 'Senior Software Engineer',
            duration: '2021 - Present',
            description: 'Led development of web applications using React and Node.js'
          }
        ],
        atsScore: 82,
        suggestions: ['Use action verbs', 'Add metrics and results']
      }
    ]
  });

  const [resumes, setResumes] = useState<Resume[]>([
    currentResume!
  ]);

  const updateSection = (sectionId: string, content: any) => {
    if (!currentResume) return;
    
    const updatedSections = currentResume.sections.map(section => 
      section.id === sectionId ? { ...section, content } : section
    );
    
    const updatedResume = {
      ...currentResume,
      sections: updatedSections,
      lastModified: new Date()
    };
    
    setCurrentResume(updatedResume);
  };

  const addSuggestion = (sectionId: string, suggestion: string) => {
    if (!currentResume) return;
    
    const updatedSections = currentResume.sections.map(section => 
      section.id === sectionId 
        ? { ...section, suggestions: [...section.suggestions, suggestion] }
        : section
    );
    
    const updatedResume = {
      ...currentResume,
      sections: updatedSections
    };
    
    setCurrentResume(updatedResume);
  };

  return (
    <ResumeContext.Provider value={{ 
      currentResume, 
      resumes, 
      setCurrentResume, 
      updateSection,
      addSuggestion 
    }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}