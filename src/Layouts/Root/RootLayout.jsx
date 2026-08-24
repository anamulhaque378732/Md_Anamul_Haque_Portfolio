import { Outlet } from "react-router";
import Navbar from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

const HomeLayouts = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>

        <main>
          <Outlet />
        </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomeLayouts;
