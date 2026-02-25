import { Outlet } from "react-router";

import Header from "../../Components/Header/Header";

const HomeLayouts = () => {
  return (
    <div className="">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayouts;
