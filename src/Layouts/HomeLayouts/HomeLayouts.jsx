import { Outlet } from "react-router";

const HomeLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayouts;
