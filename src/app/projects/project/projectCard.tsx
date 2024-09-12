"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DialogCard from "../dialogCard/dialogCard";

interface ItruncateText {
  text: string;
  maxLength: number;
}

function truncateText({ text, maxLength }: ItruncateText) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

interface IProject {
  title: string;
  location: string;
  district: string;
  estimatedCost: string;
  excerpt: string;
  content: string;
  votes: number;
}

interface IProjectCard {
  project: IProject;
  index: number;
  area: string;
}

function ProjectCard({ project, index, area }: IProjectCard) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxExcerptLength = 150;

  return (
    <Card
      key={index}
      className="p-3 hover:shadow-2xl transition-all transform duration-300 ease-in-out"
    >
      <h2>
        <strong>
          {index + 1}. {project.title}
        </strong>
      </h2>
      <div className="pl-4">
        <p>
          <strong>District:</strong> {area}
        </p>
        <p>
          <strong>Estimated Cost:</strong> {project.estimatedCost}
        </p>
        <p className="my-2">
          {isExpanded
            ? project.excerpt
            : truncateText({
                text: project.excerpt,
                maxLength: maxExcerptLength,
              })}
          {!isExpanded && project.excerpt.length > maxExcerptLength && (
            <Button
              variant="link"
              className="pl-1 py-0 pr-0 m-0 text-blue-500 h-5"
              onClick={() => setIsExpanded(true)}
            >
              See more
            </Button>
          )}
        </p>
        <DialogCard project={project} index={index} />
        <p className="my-2">
          <strong>Votes:</strong> {project.votes}
        </p>
      </div>
    </Card>
  );
}

// TODO: Add Map functionality with a pin to be able to check loaction of a project

export default ProjectCard;
