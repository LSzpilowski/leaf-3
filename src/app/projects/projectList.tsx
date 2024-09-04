import React from "react";
import mockProjects from "../mockData";
import { Card } from "@/components/ui/card";

const areas = ["South-East", "South-West", "North-East", "North-West"];

function ProjectsList() {
  return (
    <div className="flex flex-col gap-5">
      {areas.map((area, index) => {
        return (
          <div key={index} className="flex flex-col gap-5">
            {mockProjects
              .filter((project) => project.district === area)
              .map((project, index) => {
                return (
                  <Card key={index} className="p-3">
                    <h2>
                      <strong>
                        {index + 1}. {project.title}
                      </strong>
                    </h2>
                    <div className="pl-4">
                      <p>
                        <strong>District:</strong> {area}
                      </p>
                      <p>{project.excerpt}</p>
                      <p>
                        <strong>Estimated Cost:</strong> {project.estimatedCost}
                      </p>
                      <p>
                        <strong>Votes:</strong> {project.votes}
                      </p>
                    </div>
                  </Card>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;
