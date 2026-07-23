import proPic from "../../assets/proPic.jpg";

const AboutDetails = () => {
  return (
    <>
      <div className="flex-1 ">
        <h1 className="text-3xl mt-5 font-medium">A little bit about me</h1>
        <p className="py-4">
          I'm a front-end developer from Bogura, Rajshahi,Bangladesh. I care
          deeply about precision and creativity in web development, making sure
          <span className="  font-bold"> every detail</span> is just right.
        </p>
        <p>
          I love turning ideas into code, creating digital experiences that are
          smooth, engaging, and
          <span className="font-bold"> user-friendly</span>. I focus on doing
          things well and learning from each project.
        </p>
        <p className="py-4">
          When I'm not coding, I enjoy reading tech blogs and trying out the
          <span className="font-bold"> latest design trends</span>. These
          hobbies keep me inspired and help me stay sharp in my work.
        </p>
      </div>
      <div className="flex-1">
        <img className="md:w-[600px] rounded-3xl" src={proPic} alt="" />
      </div>
    </>
  );
};

export default AboutDetails;
