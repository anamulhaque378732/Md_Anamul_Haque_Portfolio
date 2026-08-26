import proPic from "../../../assets/proPic.jpg";
import ContactAbout from "./ContactAbout";

const AboutDetails = () => {
  return (
    <>
      <div className="flex-1 ">
        <h1 className="text-3xl mt-5 font-medium">A little bit about me</h1>
        <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          <p className="py-2">
            I'm a{" "}
            <span className="font-bold text-blue-600  dark:text-blue-400">
              Backend Focused MERN Stack Developer
            </span>
            from Bogura, Bangladesh, with a strong focus on the MERN stack
            (MongoDB, Express, React, Node.js) and Go.
          </p>
          <p className="py-2">
            I bridge the gap between backend architecture and frontend interface
            design. I take pride in delivering
            <span className="font-bold">
              secure REST APIs, optimized databases
            </span>
            , and seamless UI designs where every detail is engineered with
            precision.
          </p>
          <p className="py-2">
            When I'm not writing code, I stay active by exploring modern
            developer tools, contributing to projects, and following{" "}
            <span className="font-bold">emerging web architecture trends</span>.
          </p>
        </div>
        <div className="">
          <ContactAbout></ContactAbout>
        </div>
      </div>
      <div className="flex-1">
        <img className="md:w-[600px] rounded-3xl" src={proPic} alt="" />
      </div>
    </>
  );
};

export default AboutDetails;
