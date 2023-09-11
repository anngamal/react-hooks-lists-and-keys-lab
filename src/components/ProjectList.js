import React from "react";
import ProjectItem from "./ProjectItem";

// const projList = projects.map((proObj) =>{
//   return <projList key={proObj.id} />
// })
function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
       projects.map((proObj) =>{
        return <ProjectItem key={proObj.id} name={proObj.name} about={proObj.about} technologies={proObj.technologies} />
      })

        // Map projects to a list of ProjectItem components.
      /* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
