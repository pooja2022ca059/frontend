import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";


const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 ">
      {projects.map((project, index) => (
        <Link to={`/project/${project.id}`} key={index}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;