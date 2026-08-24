import AboutMe from "../../Components/AboutMe/AboutMe";
import MySkill from "../../Components/MySkills/MySkill";
import Projects from "../../Components/Projects/Projects";
import SaySomething from "../../Components/SaySomething/SaySomething";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe> <hr />
      <MySkill></MySkill> <hr />
      <Projects></Projects> <hr />
      <SaySomething></SaySomething>
    </div>
  );
};

export default Home;
