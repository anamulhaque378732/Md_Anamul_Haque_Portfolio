import Header from "../../Components/Navbar/Navbar";

import Footer from "../../Components/Footer/Footer";
import AboutHeader from "../../Pages/Home/AboutMe/AboutHeader";
import AboutDetails from "../../Pages/Home/AboutMe/AboutDetails";

const AboutLayout = () => {
  return (
    <div className="mx-auto sm:px-2 lg:my-12 md:my-8 my-4 sm:mx-1">
      <main>
        <section className=" mx-auto ">
          <div className="mt-4 mb-5">
            <div className="md:mb-6 lg:mb-6 mb-2 ">
              <AboutHeader />
            </div>
            <div className="md:flex mt-4 gap-20 justify-between ">
              <AboutDetails />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutLayout;
