import React from "react";
import { useNavigate } from "react-router-dom";

const ClientSelection = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/project/task-details/team-assignment");
  };

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-semibold mb-4">Client Selection</h2>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Select Client</label>
        <input
          type="text"
          placeholder="Search for existing client"
          className="h-12 w-100 px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button className="text-black font-semibold hover:underline mb-6">
        Add New Client
      </button>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          className="text-sm px-4 py-2 text-gray-600 hover:text-black rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClientSelection;