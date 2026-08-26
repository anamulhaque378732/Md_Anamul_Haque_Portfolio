import { Link } from "react-router";
import { BsArrowDownRight } from "react-icons/bs";
import image from "../../../assets/image.png";
import { CgMail } from "react-icons/cg";

import SocialLink from "../../../Components/SocialLnk/SocialLink";

const Banner = () => {
  return (
    <div className="my-4 md:my-8 lg:my-12 min-h-[calc(100vh-250px)] flex items-center justify-center">
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-8 py-2">
        {/* Profile Image Section */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Anamul Haque"
            className="w-64 h-80 sm:w-80 sm:h-[400px] md:w-96 md:h-[450px] object-cover rounded-tl-[12%] rounded-tr-[4%] rounded-br-[12%] rounded-bl-[4%] shadow-2xl"
          />
        </div>

        {/* Bio & Intro Section */}
        <div className="w-full md:w-1/2 px-4 text-center md:text-left">
          <p className="font-medium text-lg md:text-xl pt-2">Hi,</p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl my-2 font-bold py-1 sm:py-3">
            I'm Anamul Haque
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl my-2 font-medium">
            Backend Focused <span className="font-bold text-primary">MERN</span>{" "}
            Stack Developer.
          </h2>

          <p className="py-4 my-2 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            I build clean and engaging web experiences with efficiency and
            precision. Let's create something amazing together.
          </p>

          {/* Social Links */}
          <div className="my-4 flex justify-center md:justify-start">
            <SocialLink />
          </div>

          {/* Email Display */}
          <div className="my-4">
            <a
              href="mailto:anamulhaque4631@gmail.com"
              className="inline-flex items-center gap-2 text-base sm:text-lg lg:text-xl hover:underline break-all"
            >
              <CgMail className="text-2xl shrink-0" />
              <span>anamulhaque4631@gmail.com</span>
            </a>
          </div>

          {/* Call to Action Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <Link
              to="/about"
              className="btn btn-primary p-4 inline-flex items-center gap-2 text-base"
            >
              About me <BsArrowDownRight className="text-xl font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
