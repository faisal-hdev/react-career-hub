/* eslint-disable no-unused-vars */
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold mt-[120px]">
        Job Details
      </h3>
      <div className="grid md:grid-cols-5 gap-4 my-[40px] md:my-[80px] lg:my-[130px]">
        <div className="md:col-span-3 space-y-6">
          <p className="leading-8 font-medium">
            <span className="font-bold text-[18px]">Job Description : </span>
            {job_description}
          </p>
          <p className="leading-8 font-medium">
            <span className="font-bold text-[18px]">Job Responsibility : </span>
            {job_responsibility}
          </p>
          <p className="leading-8 font-medium">
            <span className="font-bold text-[18px]">
              Educational Requirements :{" "}
            </span>
            {educational_requirements}
          </p>
          <p className="leading-8 font-medium">
            <span className="font-bold text-[18px]">Experiences : </span>
            {experiences}
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-5 rounded p-8 bg-[#7E90FE1A]">
            <h3 className="text-xl font-bold border-b pb-6">Job Details</h3>
            <p className="flex">
              <span className="font-bold flex items-center gap-2">
                <AiOutlineDollarCircle className="text-xl" />
                Salary :
              </span>{" "}
              {salary}
            </p>
            <p className="flex">
              <span className="font-bold flex items-center gap-2">
                <MdOutlineSubtitles className="text-xl" />
                job Title :
              </span>
              {job_title}
            </p>

            <h3 className="text-xl font-bold border-b pb-6">
              Contact Information
            </h3>
            <p className="flex">
              <span className="font-bold flex items-center gap-2">
                <FiPhone className="text-xl" />
                Phone :
              </span>
              {contact_information?.phone}
            </p>
            <p className="flex">
              <span className="font-bold flex items-center gap-2">
                <MdOutlineMailOutline className="text-xl" />
                Email :
              </span>
              {contact_information?.email}
            </p>
            <p className="flex">
              <span className="font-bold flex items-center gap-2">
                <IoLocationOutline className="text-xl" />
                Address :
              </span>
              {contact_information?.address}
            </p>
          </div>
          <button
            className="w-full py-2 mt-6 rounded md:py-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF]  hover:to-[#7E90FE] font-medium
         md:text-lg text-white"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
