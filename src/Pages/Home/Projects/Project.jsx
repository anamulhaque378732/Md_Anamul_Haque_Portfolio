import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const {
    title,
    image_url,
    short_description,
    technologies,
    github_client,
    visit_url,
  } = project;

  return (
    <>
      <div className="h-full flex flex-col object-cover transition-transform duration-500 ease-in-out hover:scale-105">
        <div className="max-w-lg mx-auto md:mb-8 mb-6 lg:mb-12 h-full flex flex-col">
          <div className="bg-base-300 rounded-2xl shadow-xl md:p-6 p-2 border border-gray-100 h-full flex flex-col">
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-2 md:mb-6">
              <img
                src={image_url}
                alt={title}
                className="w-full h-52 my-2 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h2 className="text-3xl font-bold text-purple-700">{title}</h2>

              {/* Description */}
              <p className="text-gray-600 mt-3 leading-relaxed">
                {short_description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-5">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto pt-7">
                <a
                  href={github_client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-3 border-2 border-purple-700 text-purple-700 rounded-full py-2 text-xl font-semibold hover:bg-purple-700 hover:text-white transition"
                >
                  Code
                  <FaGithub />
                </a>

                <a
                  href={visit_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-3 bg-purple-700 text-white rounded-full py-2 text-xl font-semibold hover:bg-purple-800 transition"
                >
                  View Site
                  <BsArrowUpRightSquareFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
