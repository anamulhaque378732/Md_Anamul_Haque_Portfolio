import SkillHeader from "./SkillHeader";
import Skills from "./Skills";

const MySkill = () => {
  return (
    <div className="md:my-5 md:py-5 my-2 py-2">
      <div className="md:w-[550px]">
        <SkillHeader />
      </div>
      <div>
        <Skills></Skills>
      </div>
    </div>
  );
};

export default MySkill;
