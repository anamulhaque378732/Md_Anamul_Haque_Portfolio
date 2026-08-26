import { Link } from "react-router";
import SocialLink from "../SocialLnk/SocialLink";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="bg-base-300 text-base-content p-10">
        <div className="max-w-7xl mx-auto w-full flex flex-wrap justify-between gap-10">
          <nav>
            <h6 className=" text-xl font-bold">Contact Information</h6>

            <ul>
              <li className="my-2 flex items-center gap-2">
                <MdEmail className="text-xl shrink-0" />
                <a
                  href="mailto:anamulhaque4631@gmail.com"
                  className="hover:underline"
                >
                  anamulhaque4631@gmail.com
                </a>
              </li>
              <li className="my-2 flex items-center gap-2">
                <IoCallOutline className="text-xl shrink-0" />
                <a
                  href="mailto:anamulhaque4631@gmail.com"
                  className="hover:underline"
                >
                  +880 1521 378732
                </a>
              </li>

              <li className="my-2 flex items-center gap-2">
                <CiLocationOn className="text-xl shrink-0" />
                <a
                  href="mailto:anamulhaque4631@gmail.com"
                  className="hover:underline"
                >
                  Bogura Sador, Bogura
                </a>
              </li>
              <li className="hover:underline my-2"> </li>
            </ul>
          </nav>

          <nav>
            <h6 className=" text-xl font-bold"> Quick Link</h6>
            <ul>
              <li className="hover:underline my-2">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline my-2">
                <Link to="/projects"> Projects</Link>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className=" text-xl font-bold">Contact with me</h6>

            <div className="grid grid-flow-col gap-4">
              <SocialLink></SocialLink>
            </div>
          </nav>
        </div>

        <div className="container mt-8 text-center text-sm border-t mx-auto pt-4">
          <p>© 2026 Md. Anamul Haque. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
