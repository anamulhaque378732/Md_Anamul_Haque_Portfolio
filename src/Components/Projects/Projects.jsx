import Project from "./Project";
import ProjectsHeader from "./ProjectsHeader";

const Projects = ({ projects }) => {
  return (
    <div>
      <div className="md:w-[550px] lg:my-10 my-3 py-3 lg:py-10 md:my-5 md:py-5">
        <ProjectsHeader />
      </div>
      <div className="  grid lg:grid-cols-3 md:grid-cols-1  grid-cols-1 px-2">
        {projects &&
          projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
