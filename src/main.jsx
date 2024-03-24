/* eslint-disable no-unused-vars */
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
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
        loader: () => fetch("/public/data/jobs.json"), // warning : only load the data you need. do not all the data
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/public/data/jobs.json"), // do not load all data. load only what you need
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
