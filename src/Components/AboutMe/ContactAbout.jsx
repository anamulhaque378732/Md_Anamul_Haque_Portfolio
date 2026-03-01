import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { HiCalendar } from "react-icons/hi";

const ContactAbout = () => {
  return (
    <div className="grid   md:grid-cols-2 md:w-1/2">
      <div className=" border-l-4 border-violet-800 pl-2 md:my-5 rounded-l-md ">
        <h1 className="flex text-2xl font-bold pb-2  gap-2">
          <FaRegUser className="mt-1" />
          Name
        </h1>
        <p> Md. Anamul Haque</p>
      </div>
      <div className=" border-l-4 border-violet-800 pl-2 md:my-5 rounded-l-md ">
        <h1 className="flex text-2xl font-bold pb-2  gap-2">
          <MdEmail className="mt-1" /> Email
        </h1>
        <p> anamulhaque4631@gmail.com</p>
      </div>
      <div className=" border-l-4 border-violet-800 pl-2 md:my-5 rounded-l-md ">
        <h1 className="flex text-2xl font-bold pb-2  gap-2">
          <CiLocationOn className="mt-1" />
          Location
        </h1>
        <p> Bogura,Bangladesh</p>
      </div>
      <div className=" border-l-4 border-violet-800 pl-2 md:my-5 rounded-l-md ">
        <h1 className="flex text-2xl font-bold pb-2  gap-2">
          <HiCalendar className="mt-1" />
          Employment
        </h1>
        <p> Available</p>
      </div>
    </div>
  );
};

export default ContactAbout;
