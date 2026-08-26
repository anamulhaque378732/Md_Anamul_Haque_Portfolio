import { Link } from "react-router";
import { BsArrowDownRight } from "react-icons/bs";
import image from "../../../assets/image.png";
import { CgMail } from "react-icons/cg";

import SocialLink from "../../../Components/SocialLink";

const Banner = () => {
  return (
    <div className="lg:my-12 md:my-8 my-4 h-[calc(100vh-250px)]">
      <div className=" flex md:flex-row-reverse flex-col justify-between   mt-2  py-2">
        <div className="md:mt-16  ">
          <img
            src={image}
            className=" md:w-96 md:h-[450px]   rounded-tl-[12%] rounded-tr-[4%] rounded-br-[12%] rounded-bl-[4%]  lg:ml-20 shadow-2xl"
          />
        </div>
        <div className="md:mt-20 md:w-1/2 mx-4 ">
          <p className="font-medium text-xl pt-2 ">Hi,</p>
          <h1 className="text-5xl my-2 font-bold py-3"> I'm Anamul Haque</h1>
          <h2 className="text-3xl my-2 font-medium">
            Backend Focused <span className="text-bold">MERN</span> Stack
            Developer.
          </h2>
          <p className="py-6 my-2 text-xl">
            I build clean and engaging web experiences with efficiency and
            precision. Let's create something amazing together.
          </p>

          <div className="my-2">
            <SocialLink></SocialLink>
          </div>
          <div className="my-2">
            <ul className="flex gap-3 text-center text-2xl mb-2 py-2">
              <li>
                <p className="flex items-center  gap-2">
                  <CgMail className="" />
                  <span className="text-xl -pb-2 my-2 hover:underline ">
                    anamulhaque4631@gmail.com
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <Link to="/about" className="btn p-4 my-2 btn-primary">
            About me <BsArrowDownRight className="text-xl font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
