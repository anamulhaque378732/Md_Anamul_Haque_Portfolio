import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts/HomeLayouts";
import SkillLayout from "../Layouts/SkillLayouts/SkillLayout";
import AboutLayout from "../Layouts/AboutLayout/AboutLayout";
import ProjectLayout from "../Layouts/ProjectLayout/ProjectLayout";
import ContactLayout from "../Layouts/ContactLayout/ContactLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    errorElement: <h1> Error</h1>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/projects.json"),
        hydrateFallbackElement: <p> Loading</p>,
      },
      {
        path: "/skills",
        Component: SkillLayout,
      },
      {
        path: "/about",
        Component: AboutLayout,
      },
      {
        path: "/contact",
        Component: ContactLayout,
      },
    ],
  },
  {
    path: "/projects",
    Component: ProjectLayout,
    loader: () => fetch("/projects.json"),
    hydrateFallbackElement: <p> loading</p>,
  },
]);
