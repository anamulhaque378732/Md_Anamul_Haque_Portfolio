import { Link } from "react-router";
import { BsArrowDownRight } from "react-icons/bs";
import image from "../../assets/image.png";

import { CgMail } from "react-icons/cg";

import NavNewTab from "./NavNewTab";
const Navbar = () => {
  return (
    <div className="  md:px-8 mx-2 ">
      <div className=" flex   lg:flex-row-reverse flex-col  justify-between mt-2  py-4">
        <div className="md:mt-16  ">
          <img
            src={image}
            className=" w-96 md:h-[450px]  rounded-tl-[12%] rounded-tr-[4%] rounded-br-[12%] rounded-bl-[4%]  lg:ml-20 shadow-2xl"
          />
        </div>
        <div className="md:mt-20  mx-4 ">
          <p className="font-medium text-xl pt-4 ">Hi,</p>
          <h1 className="text-5xl font-bold py-4"> I'm Anamul</h1>
          <h2 className="text-3xl font-medium">
            Frontend focused <span className="text-bold">MERN</span> stack
            developer.
          </h2>
          <p className="py-6 text-xl">
            I build clean and engaging web experiences with
            <br />
            efficiency and precision. Let's create something amazing together.
          </p>
          <div>
            <NavNewTab />
            <ul className="flex gap-3 text-center text-2xl mb-2 py-2">
              <li>
                <p className="flex items-center  gap-2" href="">
                  <CgMail className="" />
                  <span className="text-xl -pb-2 hover:underline ">
                    anamulhaque4631@gmail.com
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <Link to="/about" className="btn p-4  btn-primary">
            About me <BsArrowDownRight className="text-xl font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
