/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;

  return (
    <div className="p-10 bg-[#7E90FE0D] space-y-2 rounded">
      <img className="p-4 bg-[#7E90FE1A] rounded" src={logo} alt="" />
      <h3 className="text-xl font-bold">{category_name}</h3>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
