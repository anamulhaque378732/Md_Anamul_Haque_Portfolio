import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SkillHeader from "../../Components/MySkills/SkillHeader";
import Skills from "../../Components/MySkills/Skills";

const SkillLayout = () => {
  return (
    <>
      <div className="lg:px-10 md:px-4 md:mx-2 mx-auto sm:px-2  sm:mx-3">
        <header>
          <Header />
        </header>
        <section className="   my-3  mx-auto">
          <div className=" mx-2 px-2">
            <SkillHeader />
          </div>
          <div>
            <Skills />
          </div>
        </section>
      </div>
      <footer className="md:mt-10 mt-2">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default SkillLayout;
