import proPic from "../../assets/proPic.jpeg";

const AboutHeader = () => {
  return (
    <div className="flex bg-base-200 px-5   rounded-2xl md:py-10 justify-between">
      <h1 className="text-5xl pt-5 font-bold">My Story</h1>
      <img className="w-20 h-20 rounded-full" src={proPic} alt="" />
    </div>
  );
};

export default AboutHeader;
