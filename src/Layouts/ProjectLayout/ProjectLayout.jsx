import { useLoaderData } from "react-router";
import Header from "../../Components/Header/Header";

import ProjectsHeader from "../../Components/Projects/ProjectsHeader";

import Footer from "../../Components/Footer/Footer";

import Project from "../../Components/Projects/Project";

const ProjectLayout = () => {
  const projects = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
      <header className="lg:px-10 md:px-4 mx-auto sm:px-2 sm:mx-1">
        <Header></Header>
      </header>
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
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ProjectLayout;
