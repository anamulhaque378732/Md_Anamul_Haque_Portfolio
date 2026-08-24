import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer";
import AboutHeader from "../../Components/AboutMe/AboutHeader";
import AboutDetails from "../../Components/AboutMe/AboutDetails";
import ContactAbout from "../../Components/AboutMe/ContactAbout";
import SaySomething from "../../Components/SaySomething/SaySomething";

const AboutLayout = () => {
  return (
    <div className="lg:px-10 md:px-4 mx-auto sm:px-2 sm:mx-1">
      <header>
        <Header></Header>
      </header>
      <main>
        <section className="      mx-auto ">
          <div className="mt-4 mb-5">
            <div className="md:mb-6 lg:mb-6 mb-2 ">
              <AboutHeader />
            </div>
            <div className="md:flex mt-4 gap-20 justify-between ">
              <AboutDetails />
            </div>
          </div>
          <div>
            <ContactAbout></ContactAbout>
          </div>
        </section>
      </main>

      <footer className="mt-4 pt-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AboutLayout;
