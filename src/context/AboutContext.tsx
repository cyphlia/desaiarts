import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface AboutInfo {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  workingHours: string;
  specialties: string[];
  experience: string;
}

interface AboutContextType {
  aboutInfo: AboutInfo;
  updateAboutInfo: (updates: Partial<AboutInfo>) => void;
}

const AboutContext = createContext<AboutContextType | undefined>(undefined);

const defaultAboutInfo: AboutInfo = {
  companyName: 'K.D. Arts',
  address: 'Enter address here',
  phone: 'Enter number here',
  email: 'Enter email here',
  description: 'Enter company description here',
  workingHours: 'Enter working hours here',
  specialties: ['Enter specialty 1 here', 'Enter specialty 2 here', 'Enter specialty 3 here'],
  experience: 'Enter years of experience here',
};

export const AboutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo>(() => {
    const saved = localStorage.getItem('kd-arts-about');
    return saved ? JSON.parse(saved) : defaultAboutInfo;
  });

  useEffect(() => {
    localStorage.setItem('kd-arts-about', JSON.stringify(aboutInfo));
  }, [aboutInfo]);

  const updateAboutInfo = (updates: Partial<AboutInfo>) => {
    setAboutInfo(prev => ({ ...prev, ...updates }));
  };

  return (
    <AboutContext.Provider value={{ aboutInfo, updateAboutInfo }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = () => {
  const context = useContext(AboutContext);
  if (context === undefined) {
    throw new Error('useAbout must be used within an AboutProvider');
  }
  return context;
};