import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  updateName,
  updateRole,
  addSkill,
  removeSkill,
} from "../redux/slices/portfolioSlice";

function AboutMe() {
  const { name, role, skills } = useAppSelector((state) => state.portfolio);
  const dispatch = useAppDispatch();
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim()) {
      dispatch(addSkill(newSkill.trim()));
      setNewSkill("");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <div className="mb-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <div className="p-4 border rounded bg-gray-50">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => dispatch(updateName(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => dispatch(updateRole(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Skills Management</h2>
            <div className="p-4 border rounded bg-gray-50">
              <form onSubmit={handleAddSkill} className="mb-4 flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a new skill"
                  className="flex-grow p-2 border rounded"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add
                </button>
              </form>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group px-3 py-1 bg-gray-200 rounded-full text-sm flex items-center"
                  >
                    {skill}
                    <button
                      onClick={() => dispatch(removeSkill(skill))}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-4">
          Hello! I'm a passionate developer who loves creating beautiful and
          functional web applications. With experience in modern frontend
          technologies like React, I enjoy building responsive and user-friendly
          interfaces.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying outdoor activities.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
