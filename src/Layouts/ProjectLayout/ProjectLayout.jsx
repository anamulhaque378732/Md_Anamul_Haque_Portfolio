import { useLoaderData } from "react-router";
import Header from "../../Components/Header/Header";

import ProjectsHeader from "../../Components/Projects/ProjectsHeader";
import ProjectLayouts from "./ProjectLayouts";
import Footer from "../../Components/Footer/Footer";
import SaySomething from "../../Components/SaySomething/SaySomething";

const ProjectLayout = () => {
  const projects = useLoaderData();
  return (
    <div>
      <header className="lg:px-10 md:px-4 mx-auto sm:px-2 sm:mx-1">
        <Header></Header>
      </header>
      <main>
        <section className=" lg:w-8/12 lg:my-10 md:my-6 my-3  md:w-10/12  mx-auto ">
          <div className="md:mb-6 py-3 lg:mb-6 lg:px-5 px-1 md:px-3 mb-2 ">
            <ProjectsHeader />
          </div>
          <div className="grid lg:grid-cols-3  md:grid-cols-1 grid-cols-1 lg:my-8 px-5 lg:gap-10 justify-between ">
            {projects &&
              projects.map((project) => (
                <ProjectLayouts key={project.id} project={project} />
              ))}
          </div>
        </section>

        <section className=" lg:w-8/12 md:w-10/12  mx-auto ">
          <SaySomething></SaySomething>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ProjectLayout;
