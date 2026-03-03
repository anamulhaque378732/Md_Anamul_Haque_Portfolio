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

const Skills = () => {
  return (
    <div className=" grid lg:grid-cols-3  gap-4  md:grid-cols-1 sm:grid-cols-1">
      <div className="flex gap-4 p-4 md:w-96  rounded-lg">
        <ul className="border justify-center rounded-lg   gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={htmlLogo}
              alt="htmlLogo"
            />{" "}
            <p>Html</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img className="w-10 h-10 rounded-sm" src={cssLogo} alt="cssLogo" />{" "}
            <p>Css</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={javaScriptLogo}
              alt="jsLogo"
            />{" "}
            <p>JavaScript</p>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 p-4 md:w-96  rounded-lg">
        <ul className="border justify-center rounded-lg gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
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
      <div className="flex flex-1 justify-between md:w-96  gap-4 p-4 rounded-lg">
        <ul className="border justify-center rounded-lg gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={bootstrapLogo}
              alt="BootStrapLogo"
            />{" "}
            <p>Bootstrap</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 h-10 rounded-sm"
              src={tailwindLogo}
              alt="tailwindLogo"
            />{" "}
            <p>Tailwind CSS</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img
              className="w-10 rounded-sm h-10"
              src={styleComponentLogo}
              alt="StyleComponentLogo"
            />{" "}
            <p>Styled Components</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 gap-4 p-4  justify-between md:w-96 rounded-lg">
        <ul className="border justify-center rounded-lg gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img className="w-10 rounded-sm h-10" src={gitLogo} alt="gitLogo" />{" "}
            <p>Git</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
