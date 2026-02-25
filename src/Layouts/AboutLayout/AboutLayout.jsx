import Header from "../../Components/Header/Header";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Footer from "../../Components/Footer/Footer";

const AboutLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="md:w-8/12 mx-auto ">
        <AboutMe />
      </section>
      <footer className="mt-4 pt-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AboutLayout;
