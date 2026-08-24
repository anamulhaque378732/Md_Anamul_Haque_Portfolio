import { useLoaderData } from "react-router";
import ProjectsHeader from "../../Components/Projects/ProjectsHeader";
import Project from "../../Components/Projects/Project";

const ProjectLayout = () => {
  const projects = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
      <main>
        <section className=" lg:my-10 md:my-6 my-3    mx-auto ">
          <div className="md:mb-6 py-3 lg:mb-6 lg:px-5 px-1 md:px-3 mb-2 ">
            <ProjectsHeader />
          </div>
          <div className="grid lg:grid-cols-3  md:grid-cols-1 grid-cols-1 lg:my-8 px-5 lg:gap-10 justify-between ">
            {projects &&
              projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectLayout;
