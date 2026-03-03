import { Outlet } from "react-router";

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
