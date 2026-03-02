import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FiSend, FiMessageCircle } from "react-icons/fi";

const SaySomething = () => {
  return (
    <div className="flex md:mt-10 mt-2 md:gap-5  justify-center items-center ">
      <div className="flex-1   md:px-5">
        <h1 className="text-5xl md:py-4 px-1 py-1  md:mx-2 font-bold text-indigo-800">
          Let's chat.
        </h1>
        <h2 className="text-4xl font-semibold md:py-4 md:mx-2 md:my-2">
          Tell me about your project.
        </h2>
        <p className="text-xl font-medium md:py-3 md:px-2 md:mx-2 md:my-2 my-1 mx-1 py-1 px-1">
          Let's create something together 🤟
        </p>
        <div className="">
          <ul className="flex gap-3 text-3xl mb-2 py-2">
            <li>
              <a href="">
                <IoLogoLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithub />
              </a>
            </li>
          </ul>
          <ul className="flex gap-3 md:mt-10 mt-2  text-center opacity-90 z-50 bg-white text-black md:py-5  border rounded-xl text-2xl mb-2 py-2">
            <li>
              <p className="flex items-center  gap-2" href="">
                <CgMail className="mt-1 text-3xl" />
                <span className="text-xl -pb-2 hover:underline ">
                  anamulhaque4631@gmail.com
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-[#f4f6f8] w-full   rounded-2xl shadow-lg p-8">
          {/* Header */}
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2 mb-6">
            Send me a message
            <FiMessageCircle className="text-purple-600 text-xl" />
          </h2>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white  text-black 
            focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black
            focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-3 text-black rounded-xl border border-gray-300 bg-white 
            focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            ></textarea>

            {/* Success Message */}
            <p className="text-green-600 text-sm mt-2"></p>

            {/* Button */}
            <button
              type="submit"
              className="mt-3 bg-purple-600 hover:bg-purple-700 
            text-white px-6 py-3 rounded-full flex items-center gap-2 
            shadow-md hover:shadow-lg transition duration-300"
            >
              Send
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SaySomething;
