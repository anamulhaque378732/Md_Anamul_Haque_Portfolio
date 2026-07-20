import htmlLogo from "../../assets/htmlPng.png";
import cssLogo from "../../assets/cssPng.jpg";
import javaScriptLogo from "../../assets/javaScriptPng.png";
import reactLogo from "../../assets/reactPng.png";
import nextLogo from "../../assets/nextPng.webp";
import ReactQueryLog from "../../assets/reactQueryPng.webp";
import bootstrapLogo from "../../assets/bootstarpPng.png";
import tailwindLogo from "../../assets/tailwindLogoPng.webp";
import styleComponentLogo from "../../assets/styleComponentPng.png";
import gitLogo from "../../assets/gitPng.png";
import goLogo from "../../assets/go.png";
import gitHubLogo from "../../assets/github.png";

import expressLogo from "../../assets/Express.jpg";
import nodeLogo from "../../assets/node.webp";
import mongodbLogo from "../../assets/mongodb.png";
import postManLogo from "../../assets/postman.png";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Basic skill */}

      <div className="w-full max-w-96 p-4 rounded-lg">
        <ul className="border flex flex-wrap justify-center gap-5 p-4 rounded-lg w-full max-w-[20.1rem]">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={htmlLogo}
              alt="htmlLogo"
            />
            <p>HTML</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img className="w-10 h-10 rounded-sm" src={cssLogo} alt="cssLogo" />{" "}
            <p>CSS</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={javaScriptLogo}
              alt="JsLogo"
            />
            <p>JavaScript</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img className="w-10 h-10 rounded-sm" src={goLogo} alt="GoLogo" />
            <p> Go </p>
          </li>
        </ul>
      </div>

      {/*  design */}

      <div className="w-full max-w-96 p-4 rounded-lg">
        <ul className="border flex flex-wrap justify-center gap-5 p-4 rounded-lg w-full max-w-[20.1rem]">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={bootstrapLogo}
              alt="BootStrapLogo"
            />
            <p>Bootstrap</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={tailwindLogo}
              alt="tailwindLogo"
            />
            <p>Tailwind CSS</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 rounded-sm h-10"
              src={styleComponentLogo}
              alt="StyleComponentLogo"
            />
            <p>Styled Components</p>
          </li>
        </ul>
      </div>
      {/* Frame work */}

      <div className="w-full max-w-96 p-4 rounded-lg">
        <ul className="border flex flex-wrap justify-center gap-5 p-4 rounded-lg w-full max-w-[20.1rem]">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={reactLogo}
              alt="reactLogo"
            />{" "}
            <p>React</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={nextLogo}
              alt="next.jsLOgo"
            />{" "}
            <p>Next.js</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={ReactQueryLog}
              alt="reactQueryLogo"
            />{" "}
            <p>React query</p>
          </li>
        </ul>
      </div>

      {/* Backed */}

      <div className="w-full max-w-96 p-4 rounded-lg">
        <ul className="border flex flex-wrap justify-center gap-5 p-4 rounded-lg w-full max-w-[20.1rem]">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={expressLogo}
              alt="reactLogo"
            />
            <p>Express.js</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={nodeLogo}
              alt="next.jsLOgo"
            />
            <p>Node.js</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={mongodbLogo}
              alt="reactQueryLogo"
            />
            <p>MongoDB</p>
          </li>
        </ul>
      </div>
      {/* git github */}
      <div className="flex gap-4 p-2 md:p-4 md:w-96 rounded-lg">
        <ul className="border flex flex-wrap justify-center gap-5 p-4 rounded-lg w-full max-w-[20.1rem]">
          <li className="flex flex-col md:gap-4 gap-2 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img className="w-10 rounded-sm h-10" src={gitLogo} alt="gitLogo" />
            <p>Git</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 rounded-sm h-10"
              src={gitHubLogo}
              alt="gitLogo"
            />
            <p>GitHub</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 rounded-sm h-10"
              src={postManLogo}
              alt="gitLogo"
            />
            <p>Postman</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
