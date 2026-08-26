import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaTwitter } from "react-icons/fa";

const SocialLink = () => {
  return (
    <ul className="flex gap-3 mx-2 text-5xl mb-2 mt-2 py-2">
      <li>
        <a
          href="https://www.linkedin.com/in/md-anamul-haque-b72378294/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://x.com/Ana463199"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/anamulhaque378732?tab=overview&from=2026-02-01&to=2026-02-28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};

export default SocialLink;
