import { useLoaderData } from "react-router";
import AboutMe from "../Components/AboutMe/AboutMe";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MySkill from "../Components/MySkils/MySkill";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import SaySomething from "../Components/SaySomething/SaySomething";

const Home = () => {
  const projects = useLoaderData();

  return (
    <>
      <div className="lg:px-10 md:px-4 mx-auto sm:px-2 sm:mx-1">
        <div className="lg:h-screen">
          <header>
            <Header></Header>
          </header>
          <nav className="lg:my-10    md:my-5 lg:8/12 md:w-10/12 mx-auto my-2">
            <Navbar />
          </nav>
        </div>
        <main className=" lg:w-10/12  mx-auto">
          <section>
            <AboutMe></AboutMe>
          </section>
          <hr />
          <section className="">
            <MySkill />
          </section>
          <hr />
          <section className="lg:py-10 md:py-6 py-3">
            <Projects projects={projects}></Projects>
          </section>
          <hr />
          <section>
            <SaySomething />
          </section>
        </main>
      </div>
      <div className="mt-5">
        <section className="w-full">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default Home;
