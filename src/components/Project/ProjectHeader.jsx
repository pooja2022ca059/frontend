import React from "react";
import dropdown from "../../assets/downArrow.png";
import gridMenu from "../../assets/grid.png";
import lineMenu from "../../assets/menu.png";
import add from "../../assets/add.png";
import client from "../../assets/client.png";

const ProjectHeader = ({ onViewChange, view }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-10 gap-4 mb-6">
      {/* Filters Button */}
      <div className="w-full sm:w-auto">
        <button className="flex items-center justify-center bg-gray-100 text-sm text-gray-700 px-4 py-3 rounded-md border hover:bg-gray-200 transition w-full">
          Filters
          <img className="ml-2 h-4 w-4" src={dropdown} alt="dropdown" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-4 w-full sm:w-auto">
        {/* View Toggle */}
        <div className="flex space-x-2 w-full sm:w-auto justify-center">
          <button
            className={`flex justify-center items-center w-full sm:w-auto px-4 py-3 rounded ${
              view === "grid" ? "bg-indigo-600" : "bg-gray-100"
            }`}
            onClick={() => onViewChange("grid")}
          >
            <img className="h-5 w-5" src={gridMenu} alt="Grid View" />
          </button>

          <button
            className={`flex justify-center items-center w-full sm:w-auto px-4 py-3 rounded ${
              view === "list" ? "bg-indigo-600" : "bg-gray-100"
            }`}
            onClick={() => onViewChange("list")}
          >
            <img className="h-5 w-5" src={lineMenu} alt="List View" />
          </button>
        </div>

        {/* New Project Button */}
        <button className="flex items-center justify-center w-full sm:w-auto text-white text-sm font-medium px-4 py-3 rounded-md shadow bg-gradient-to-r from-indigo-600 via-purple-500 to-yellow-500">
          <img className="h-4 w-4 mr-2" src={add} alt="Add" />
          New Project
        </button>

        {/* New Client Button */}
        <button className="flex items-center justify-center w-full sm:w-auto text-gray-800 text-sm font-medium px-4 py-3 rounded-md shadow bg-white border hover:bg-gray-50 transition">
          <img className="h-4 w-4 mr-2" src={client} alt="Client" />
          New Client
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;
