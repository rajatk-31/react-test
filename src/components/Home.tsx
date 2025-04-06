import React from "react";
import { useAppContext } from "../context/AppContext";

function Home() {
  const { state } = useAppContext();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{state.name}</h2>
        <p className="text-gray-600">{state.role}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {state.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Featured Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {state.projects.map((project) => (
            <div key={project.id} className="border p-4 rounded shadow-sm">
              <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
