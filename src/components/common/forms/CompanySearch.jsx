import React from "react";
import FormInput from "./FormInput";

const CompanySearch = () => {
  return (
    <div className="">
      <div className="flex py-3 pl-1 pr-8 w-fit border-2 border-primary-blue">
        <p className="text-primary-red font-bold text-sm">
          कम्पनी वा ब्यवसायको नाम:
        </p>
        <input
          className=" border-2 text-primary-blue border-primary-red rounded-xl"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default CompanySearch;
