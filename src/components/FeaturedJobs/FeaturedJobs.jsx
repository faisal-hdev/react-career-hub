import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("/public/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-[40px] md:mt-[8opx] lg:mt-[130px]">
      <div className="text-center">
        <h2 className="text-2xl lg:text-5xl font-extrabold mb-2 lg:mb-4">
          Featured Jobs
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 my-8 lg:my-14">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div
        className={
          dataLength === jobs.length
            ? "hidden"
            : "flex items-center justify-center mb-[40px] md:mb-[80px] lg:mb-[130px]"
        }
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="md:px-5 flex justify-center items-center px-3 py-1 rounded md:py-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF]  hover:to-[#7E90FE] text-lg font-medium
         md:text-xl md:font-bold text-white"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
