import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const { title, image_url, details, use_element, code_url, visit_url } =
    project;

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-base-300 rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="rounded-xl overflow-hidden mb-6">
          <img
            src={image_url}
            alt="Project"
            className="w-full h-52  my-2 object-cover"
          />
        </div>

        <h2 className="text-3xl font-bold text-purple-700">{title}</h2>

        <p className="text-gray-600 mt-3 leading-relaxed"> </p>
        {details}

        <div className="flex flex-wrap gap-3 mt-5">
          {use_element.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-7">
          <button className=" flex-1 mx-auto gap-2 items-center justify-center  border-2 border-purple-700 text-purple-700 rounded-full py-2  hover:bg-purple-700 hover:text-white transition">
            <a
              className="flex  justify-center items-center text-xl mx-auto text-center gap-3 font-semibold   "
              href={code_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <FaGithub className="mt-1" />
            </a>
          </button>

          <button className="flex-1 bg-purple-700 text-white rounded-full py-2 font-semibold hover:bg-purple-800 transition flex items-center justify-center gap-2">
            <a
              className="flex gap-3  text-xl"
              href={visit_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
              <span>
                <BsArrowUpRightSquareFill className="mt-1 " />
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
