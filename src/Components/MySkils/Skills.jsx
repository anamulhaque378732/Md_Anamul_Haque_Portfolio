import React from "react";

const Skills = () => {
  return (
    <div className=" grid lg:grid-cols-3   md:grid-cols-2">
      <div className="flex gap-4 p-4 md:w-96  rounded-lg">
        <ul className="border justify-center rounded-lg gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>Html</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>Css</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>JavaScript</p>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 p-4 md:w-96  rounded-lg">
        <ul className="border justify-center rounded-lg gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>React</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>Next.js</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>React query</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 justify-between md:w-96  gap-4 p-4 rounded-lg">
        <ul className="border justify-center rounded-lg gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>Bootstrap</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>Tailwind CSS</p>
          </li>
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>Styled Components</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 gap-4 p-4  justify-between md:w-96 rounded-lg">
        <ul className="border justify-center rounded-lg gap-5 flex flex-wrap mx-w-[20.1rem] p-4">
          <li className="flex flex-col gap-4 justify-center items-center border text-center rounded-lg size-24 text-sm">
            <img src="" alt="" /> <p>Git</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
