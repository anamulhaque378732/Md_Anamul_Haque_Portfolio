import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/Root/RootLayout";
import Home from "../Pages/Home/Home";
import AboutLayout from "../Layouts/AboutLayout/AboutLayout";
import SkillLayout from "../Layouts/SkillLayouts/SkillLayout";
import ContactLayout from "../Layouts/ContactLayout/ContactLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProjectLayout from "../Layouts/ProjectLayout/ProjectLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutLayout,
      },
      {
        path: "/skills",
        Component: SkillLayout,
      },

      {
        path: "/projects",
        Component: ProjectLayout,
      },

      {
        path: "/contact",
        Component: ContactLayout,
      },
    ],
  },
]);
