import React from "react";
import Project from "./Project";
import projects from "./projects";

export default function PortFolio() {

  return (

    /* for each project, give title, imageUrl, ghLink, appLink as props */
    /* to generate the Project component */
    
    <div className="portfolio d-flex flex-row">
      <ul className="list-group">
        {projects.map((item) => (
          <li className="list-group-item" key={item.title}>
            <Project title={item.title} imageUrl={item.imageUrl} ghLink={item.ghLink} appLink={item.appLink} />
          </li>
        ))}
      </ul>
    </div>

  );
}