import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SkillHeader from "../../Components/MySkils/SkillHeader";
import Skills from "../../Components/MySkils/Skills";
import SaySomething from "../../Components/SaySomething/SaySomething";

const SkillLayout = () => {
  return (
    <>
      <div className="lg:px-10 md:px-4 mx-auto sm:px-2 sm:mx-1">
        <header>
          <Header />
        </header>
        <section className="md:w-8/12  mx-auto">
          <div className="">
            <SkillHeader />
          </div>
          <div>
            <Skills />
          </div>
        </section>
        <section className="md:w-8/12  mx-auto ">
          <SaySomething />
        </section>
      </div>
      <footer className="md:mt-10 mt-2">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default SkillLayout;
