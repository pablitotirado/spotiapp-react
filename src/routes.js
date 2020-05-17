import { lazy } from "react";

const Home = lazy(() => import("./views/home"));
const Albums = lazy(() => import("./views/albums"));
const Artist = lazy(() => import("./views/artists"));

export default [
  {
    component: Home,
    path: "/home",
    exact: true,
  },
  {
    component: Albums,
    path: "/albums",
    exact: true,
  },
  {
    component: Artist,
    path: "/artists",
    exact: true,
  },
];
