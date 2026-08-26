import { Link } from "react-router";
import SocialLink from "../SocialLink";

const Footer = () => {
  return (
    <>
      <footer className="bg-base-300 text-base-content p-10">
        <div className="max-w-7xl mx-auto w-full flex flex-wrap justify-between gap-10">
          <nav>
            <h6 className=" text-xl font-bold">Contact Information</h6>

            <ul>
              <li className="hover:underline my-2">
                anamulhaque4631@gmail.com
              </li>
              <li className="hover:underline my-2"> +880 1521 378732</li>
              <li className="hover:underline my-2"> Bogura Sador, Bogura</li>
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

        <div class="container mt-8 text-center text-sm border-t mx-auto pt-4">
          <p>© 2026 Md. Anamul Haque. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
