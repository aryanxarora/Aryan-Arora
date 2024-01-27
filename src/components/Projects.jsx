import Tile from "./Tile";
import projects from "../models/projects";

function Projects() {
  return (
    <div className="lg:flex lg:flex-wrap lg:px-10 2xl:px-20">
      {projects.map((project) => (
        <Tile
          imageUrl={project.imageUrl}
          title={project.title}
          tag={project.tag}
          description={project.description}
          repo={project.repo}
          techstack={project.techstack}
        />
      ))}
    </div>
  );
}

export default Projects;
