/* eslint-disable no-unused-vars */
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import Statistics from "./components/Header/Statistics";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/job/:id",
        loader: () => fetch("/public/data/jobs.json"),
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
