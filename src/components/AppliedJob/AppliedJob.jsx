/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const AppliedJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  console.log(job);
  return (
    <div className="flex items-center md:justify-between mb-5 border-2 p-4 space-y-4 flex-col md:flex-row">
      <div className="flex gap-5 items-center flex-col md:flex-row">
        <div className="px-[20px] md:px-[45px] py-[40px] md:py-[90px] bg-[#F4F4F4]">
          <img className="w-[140px]" src={logo} alt="" />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="space-y-4 text-center md:text-start">
            <h3 className="text-xl font-bold">{job_title}</h3>
            <h3>{company_name}</h3>
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <button className="md:px-5 px-3 py-1 md:py-2 border border-[#9873FF] rounded font-bold text-[#9873FF]">
                {remote_or_onsite}
              </button>
              <button className="md:px-5 px-3 py-1 md:py-2 border border-[#9873FF] rounded font-bold text-[#9873FF]">
                {job_type}
              </button>
            </div>
          </div>
          <div className="flex gap-6">
            <p className="flex items-center gap-2">
              <IoLocationOutline size={20} />
              {location}
            </p>
            <p className="flex gap-2 items-center">
              <BiDollarCircle size={20} />
              Salary : {salary}
            </p>
          </div>
        </div>
      </div>
      <button
        className="md:px-5 px-3 py-1 rounded md:py-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF]  hover:to-[#7E90FE] text-lg font-medium
          md:font-medium text-white"
      >
        View Details
      </button>
    </div>
  );
};

export default AppliedJob;
