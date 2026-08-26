import { useLoaderData } from "react-router";
import AboutMe from "./AboutMe/AboutMe";
import MySkill from "./MySkills/MySkill";
import Projects from "./Projects/Projects";
import SaySomething from "../../Components/SaySomething/SaySomething";
import Banner from "./Banner/Banner";

const Home = () => {
  const projects = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe> <hr />
      <MySkill></MySkill> <hr />
      <Projects projects={projects}></Projects> <hr />
      <SaySomething></SaySomething>
    </div>
  );
};

export default Home;
