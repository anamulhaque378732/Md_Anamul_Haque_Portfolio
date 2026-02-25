import AboutMe from "../Components/AboutMe/AboutMe";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className=" lg:px-10 md:px-4  mx-auto ">
        <div className="">
          <header>
            <Header></Header>
          </header>
          <nav className="lg:my-10 md:my-5 md:w-8/12 mx-auto my-2">
            <Navbar />
          </nav>
        </div>
        <div className="md:w-8/12 mx-auto ">
          <AboutMe></AboutMe>
        </div>
      </div>
      <div>
        <section className="w-full">
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};

export default Home;
