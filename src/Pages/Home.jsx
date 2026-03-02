import AboutMe from "../Components/AboutMe/AboutMe";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MySkill from "../Components/MySkils/MySkill";
import Navbar from "../Components/Navbar/Navbar";
import SaySomething from "../Components/SaySomething/SaySomething";

const Home = () => {
  return (
    <>
      <div className="lg:px-10 md:px-4 mx-auto sm:px-2 sm:mx-1">
        <div className="md:h-screen">
          <header>
            <Header></Header>
          </header>
          <nav className="lg:my-10 md:my-5 md:w-8/12 mx-auto my-2">
            <Navbar />
          </nav>
        </div>
        <main className="md:w-8/12 mx-auto ">
          <section>
            <AboutMe></AboutMe>
          </section>
          <hr />
          <section>
            <MySkill />
          </section>
          <hr />
          <section className="py-10">Projects</section> <hr />
          <section>
            {" "}
            <SaySomething />{" "}
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
