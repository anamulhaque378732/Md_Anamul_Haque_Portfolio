import AboutDetails from "./AboutDetails";
import AboutHeader from "./AboutHeader";

const AboutMe = () => {
  return (
    <div className="mt-4 mb-5  py-5 ">
      <div className="px-2  ">
        <AboutHeader />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2  px-2 lg:gap-20 md:gap-12 lg:my-12 md:my-8 my-4 justify-between">
        <AboutDetails />
      </div>
    </div>
  );
};

export default AboutMe;
