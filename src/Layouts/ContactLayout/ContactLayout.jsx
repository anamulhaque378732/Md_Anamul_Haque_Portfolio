import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SaySomething from "../../Components/SaySomething/SaySomething";

const ContactLayout = () => {
  return (
    <>
      <div className="lg:px-10 h-screen  md:px-4 mx-auto sm:px-2 sm:mx-1">
        <header>
          <Header></Header>
        </header>
        <main>
          <section className="md:w-8/12  mx-auto ">
            <SaySomething />
          </section>
        </main>
      </div>
      <footer className="w-full">
        {" "}
        <Footer />
      </footer>
    </>
  );
};

export default ContactLayout;
