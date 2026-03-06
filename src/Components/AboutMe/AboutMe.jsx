import AboutDetails from "./AboutDetails";
import AboutHeader from "./AboutHeader";
import ContactAbout from "./ContactAbout";

const AboutMe = () => {
  return (
    <div className="mt-4 mb-5 px-4 ">
      <div className="md:w-[550px] px-2">
        <AboutHeader />
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 mt-4 px-2 lg:gap-20 md:gap-12 justify-between ">
        <AboutDetails />
      </div>
      <div className="px-2">
        <ContactAbout />
      </div>
    </div>
  );
};

export default AboutMe;
