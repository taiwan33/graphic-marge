import React from "react";

const MainObjectives = ({register}) => {

  // main_objectives
  return (
    <div className="mt-5">
      <p className="text-primary-red text-lg underline">
        4. Main Objectives
        <span className="text-primary-blue underline">
          (कम्पनीले गर्ने मुख्य मुख्य कामहरु सहितको उद्देश्यहरु)
        </span>
      </p>
      {/* text area */}
      <div className="mt-3">
        <textarea
          // name=""
          {...register(`main_objectives`, {
            // required: false,
          })}
          className="border-primary-blue w-full border p-3"
          id=""
          cols={30}
          rows={10}
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export default MainObjectives;
