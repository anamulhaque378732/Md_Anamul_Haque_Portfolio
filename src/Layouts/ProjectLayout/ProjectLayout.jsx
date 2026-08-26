import { useLoaderData } from "react-router";
import ProjectsHeader from "../../Pages/Home/Projects/ProjectsHeader";
import Project from "../../Pages/Home/Projects/Project";

const ProjectLayout = () => {
  const projects = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
      <main>
        <section className=" lg:my-10 md:my-6 my-3    mx-auto ">
          <div className="md:mb-6 py-3 lg:mb-6 lg:px-5 px-1 md:px-3 mb-2 ">
            <ProjectsHeader />
          </div>
          <div className=" grid grid-cols-1 lg:gap-8 md:gap-6 gap-4  lg:grid-cols-2 md:grid-cols-2 px-2 items-stretch">
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
