import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer";
import AboutHeader from "../../Components/AboutMe/AboutHeader";
import AboutDetails from "../../Components/AboutMe/AboutDetails";
import ContactAbout from "../../Components/AboutMe/ContactAbout";

const AboutLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="md:w-8/12  mx-auto ">
        <div className="mt-4 mb-5">
          <div className=" ">
            <AboutHeader />
          </div>
          <div className="md:flex mt-4 gap-20 justify-between ">
            <AboutDetails />
          </div>
        </div>
        <div>
          {" "}
          <ContactAbout></ContactAbout>
        </div>
      </section>

      <footer className="mt-4 pt-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AboutLayout;
