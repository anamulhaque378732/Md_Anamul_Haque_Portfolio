import htmlLogo from "../../../assets/htmlPng.png";
import cssLogo from "../../../assets/cssPng.jpg";
import javaScriptLogo from "../../../assets/javaScriptPng.png";
import reactLogo from "../../../assets/reactPng.png";
import nextLogo from "../../../assets/nextPng.webp";
import ReactQueryLog from "../../../assets/reactQueryPng.webp";

import tailwindLogo from "../../../assets/tailwindLogoPng.webp";
import styleComponentLogo from "../../../assets/styleComponentPng.png";
import gitLogo from "../../../assets/gitPng.png";
import goLogo from "../../../assets/go.png";
import gitHubLogo from "../../../assets/github.png";

import expressLogo from "../../../assets/Express.jpg";
import nodeLogo from "../../../assets/node.webp";
import mongodbLogo from "../../../assets/mongodb.png";
import postManLogo from "../../../assets/postman.png";

const skillSections = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javaScriptLogo },
      { name: "React", logo: reactLogo },
      { name: "Next.js", logo: nextLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },

      { name: "Styled Components", logo: styleComponentLogo },
      { name: "React Query", logo: ReactQueryLog },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "Go", logo: goLogo },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: gitHubLogo },
      { name: "Postman", logo: postManLogo },
    ],
  },
];

function Skills() {
  return (
    <div className="  mx-auto p-4 space-y-8">
      <h2 className="text-4xl font-bold text-center mb-6">Technical Skills</h2>

      {/* 3 Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillSections.map((section, idx) => (
          <div key={idx} className="border rounded-xl p-5 shadow-sm   ">
            {/* Section Header */}
            <h3 className="text-2xl font-bold     mb-4 pb-2 border-b text-center">
              {section.title}
            </h3>

            {/* Skills Grid */}
            <ul className="flex flex-wrap gap-4 justify-center">
              {section.skills.map((skill, skillIdx) => (
                <li
                  key={skillIdx}
                  className="group flex flex-col gap-2 justify-center items-center border rounded-lg size-24 text-sm cursor-pointer transition-all duration-200 hover:border-blue-500 hover:shadow-md hover:-translate-y-1"
                >
                  <img
                    className="w-10 h-10 object-contain rounded-sm transition-transform duration-200 group-hover:scale-110"
                    src={skill.logo}
                    alt={skill.name}
                  />
                  <p className="font-medium text-xs group-hover:underline group-hover:text-blue-600 transition-colors text-center px-1">
                    {skill.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
