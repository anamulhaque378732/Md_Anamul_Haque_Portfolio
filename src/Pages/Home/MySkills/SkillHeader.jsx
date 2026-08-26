import workProfile from "../../../assets/Workprofile.jpg";

const SkillHeader = () => {
  return (
    <div className="flex bg-base-200 px-5   rounded-2xl md:py-10 justify-between">
      <h1 className="text-5xl pt-5 font-bold">My Skills</h1>
      <img
        className="w-24 h-24 sm:min-w-20 sm:min-h-20  rounded-full"
        src={workProfile}
        alt="WorkProfile"
      />
    </div>
  );
};

export default SkillHeader;
