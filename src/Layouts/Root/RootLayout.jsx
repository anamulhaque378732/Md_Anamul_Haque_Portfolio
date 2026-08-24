import { Outlet } from "react-router";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

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
