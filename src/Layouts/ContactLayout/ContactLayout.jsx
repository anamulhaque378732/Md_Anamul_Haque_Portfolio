import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navbar/Navbar";
import SaySomething from "../../Components/SaySomething/SaySomething";

const ContactLayout = () => {
  return (
    <>
      <div className="lg:px-10    md:px-4 mx-auto sm:px-2 sm:mx-1">
        <header>
          <Header></Header>
        </header>
        <main className="md:mt-16 mt-2">
          <section className="   mx-auto ">
            <SaySomething />
          </section>
        </main>
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </>
  );
};

export default ContactLayout;
