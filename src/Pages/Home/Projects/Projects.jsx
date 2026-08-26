import Project from "./Project";
import ProjectsHeader from "./ProjectsHeader";

const Projects = ({ projects }) => {
  return (
    <div>
      <div className=" lg:my-10 my-3 py-3 md:my-5 md:py-5">
        <ProjectsHeader />
      </div>
      <div className=" grid grid-cols-1 lg:gap-8 md:gap-6 gap-4  lg:grid-cols-2 md:grid-cols-2 px-2 items-stretch">
        {projects &&
          projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
