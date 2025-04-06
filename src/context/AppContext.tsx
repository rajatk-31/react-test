import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our global state
interface AppState {
  name: string;
  role: string;
  skills: string[];
  projects: {
    id: number;
    title: string;
    description: string;
  }[];
}

// Define the shape of our context
interface AppContextType {
  state: AppState;
  updateName: (name: string) => void;
  updateRole: (role: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  addProject: (project: { title: string; description: string }) => void;
  removeProject: (id: number) => void;
}

// Create the context with a default empty state
const AppContext = createContext<AppContextType | undefined>(undefined);

// Initial state for our app
const initialState: AppState = {
  name: "Rajat Kumar",
  role: "Full Stack Developer",
  skills: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "VueJS",
    "AWS",
  ],
  projects: [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Tailwind CSS",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "An online store with product listings and shopping cart functionality",
    },
  ],
};

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  // Functions to update state
  const updateName = (name: string) => {
    setState((prev) => ({ ...prev, name }));
  };

  const updateRole = (role: string) => {
    setState((prev) => ({ ...prev, role }));
  };

  const addSkill = (skill: string) => {
    setState((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const removeSkill = (skill: string) => {
    setState((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const addProject = (project: { title: string; description: string }) => {
    const newProject = {
      id: Math.max(0, ...state.projects.map((p) => p.id)) + 1,
      ...project,
    };
    setState((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const removeProject = (id: number) => {
    setState((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id),
    }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        updateName,
        updateRole,
        addSkill,
        removeSkill,
        addProject,
        removeProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for using the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
