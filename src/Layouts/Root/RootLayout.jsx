import { Outlet, useLocation } from "react-router";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";

const HomeLayouts = () => {
  const location = useLocation();
  return (
    <>
      <div className="max-w-7xl mx-auto transition-transform duration-500">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayouts;
