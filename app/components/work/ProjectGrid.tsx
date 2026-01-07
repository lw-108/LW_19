import React from "react";
import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";

const ProjectGrid = () => {
    return (
        <>
            <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20">
                <h4 className="text-[16px] md:text-[20px] lg:text-[34px]">
                    Check out some of my work!
                </h4>
            </div>

            <div className="grid w-[90%] grid-cols-1 gap-y-10 gap-x-6 lg:max-w-[1200px]">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
