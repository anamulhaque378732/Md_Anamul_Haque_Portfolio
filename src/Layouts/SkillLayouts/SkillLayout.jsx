import SkillHeader from "../../Pages/Home/MySkills/SkillHeader";
import Skills from "../../Pages/Home/MySkills/Skills";

const SkillLayout = () => {
  return (
    <>
      <div className=" lg:my-12 md:my-8 my-4    mx-auto sm:px-2  sm:mx-3">
        <section className="   my-3  mx-auto">
          <div className=" mx-2 lg:my-8 md:my-4 my-2 px-2">
            <SkillHeader />
          </div>
          <div>
            <Skills />
          </div>
        </section>
      </div>
    </>
  );
};

export default SkillLayout;
