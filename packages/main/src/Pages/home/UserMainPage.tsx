import React from "react";
import { styled } from "@mui/material";
import { Buttons } from "ui/components";
import { NavBar } from "./NavBar";

const projectList = [
  {
    id: 1,
    projectName: "project-1",
    projectLink: "www.google.com",
  },
];

export function UserMainPage() {
  return (
    <div>
      <NavBar imageUrl="" name="Asif Mehmood" email="amehmood999@gmail.com" />
      <div>
        <div>
          <p>Helpful link</p>
          <div>
            <Buttons appearance="primary" href="#">
              +
            </Buttons>
            <p>Create Project</p>
          </div>
          <div>
            <p>your Part of these project</p>
            {projectList.map((project) => {
              return (
                <div key={project.id}>
                  <Buttons appearance="primary" href={project.projectLink}>
                    {project.projectName}
                  </Buttons>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
