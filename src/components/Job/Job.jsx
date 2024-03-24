import { IoLocationOutline } from "react-icons/io5";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    salary,
    location,
    id,
  } = job;
  return (
    <div className="w-full ld:w-[648px] border-2 rounded bg-base-100 shadow-md p-4 md:p-7 lg:p-10 flex flex-col justify-between">
      <div>
        <img className="w-[80px] lg:w-[140px]" src={logo} alt="" />
        <h3 className="text-xl mt-3 md:text-2xl font-bold">{job_title}</h3>
      </div>
      <div className="space-y-2 mt-4 md:space-y-3">
        <p className="text-xl text-[#757575]">{company_name}</p>
        <div className="flex gap-4">
          <button className="md:px-5 px-3 py-1 md:py-2 border border-[#9873FF] rounded font-bold text-[#9873FF]">
            {remote_or_onsite}
          </button>
          <button className="md:px-5 px-3 py-1 md:py-2 border border-[#9873FF] rounded font-bold text-[#9873FF]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-4 text-[#757575] text-xl">
          <p className="flex items-center gap-2">
            <IoLocationOutline />
            {location}
          </p>
          <p className="flex gap-2 items-center">
            <BiDollarCircle />
            Salary : {salary}
          </p>
        </div>
        <div>
          <Link to={`/job/${id}`}>
            <button
              className="md:px-5 px-3 py-1 rounded md:py-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF]  hover:to-[#7E90FE] text-lg font-medium
          md:font-medium text-white"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
