import { useLoaderData } from "react-router";
import AboutMe from "../Components/AboutMe/AboutMe";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MySkill from "../Components/MySkills/MySkill";
import Navbar from "../Components/Banner/Banner";
import Projects from "../Components/Projects/Projects";
import SaySomething from "../Components/SaySomething/SaySomething";

const Home = () => {
  const projects = useLoaderData();

  return (
    <>
      <div className="lg:px-10 md:px-4  mx-auto sm:px-2 sm:mx-1">
        <div className="lg:h-screen">
          <header>
            <Header></Header>
          </header>
          <nav className="  mx-auto my-2">
            <Navbar />
          </nav>
        </div>
        <main className="  mx-auto">
          <section>
            <AboutMe></AboutMe>
          </section>
          <hr />
          <section className="">
            <MySkill />
          </section>
          <hr />
          <section className=" md:py-6 py-3">
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
