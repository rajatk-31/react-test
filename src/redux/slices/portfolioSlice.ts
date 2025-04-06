import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of our state
interface PortfolioState {
  name: string;
  role: string;
  skills: string[];
  projects: {
    id: number;
    title: string;
    description: string;
  }[];
}

// Initial state
const initialState: PortfolioState = {
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

// Create the slice
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    // Action to update name
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    // Action to update role
    updateRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },

    // Action to add a skill
    addSkill: (state, action: PayloadAction<string>) => {
      state.skills.push(action.payload);
    },

    // Action to remove a skill
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },

    // Action to add a project
    addProject: (
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) => {
      const newProject = {
        id: Math.max(0, ...state.projects.map((p) => p.id)) + 1,
        ...action.payload,
      };
      state.projects.push(newProject);
    },

    // Action to remove a project
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  updateName,
  updateRole,
  addSkill,
  removeSkill,
  addProject,
  removeProject,
} = portfolioSlice.actions;

// Export reducer
export default portfolioSlice.reducer;
