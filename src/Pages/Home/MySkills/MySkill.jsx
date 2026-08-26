import SkillHeader from "./SkillHeader";
import Skills from "./Skills";

const MySkill = () => {
  return (
    <div className="lg:my-12 md:my-8 md:py-5 my-2  py-2">
      <div className=" mx-3  md:mb-8 mb-4 p-1">
        <SkillHeader />
      </div>
      <div>
        <Skills></Skills>
      </div>
    </div>
  );
};

export default MySkill;
