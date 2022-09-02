import React from "react";

const BookMarkCreate = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create Bookmark
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* table  */}
      <div className="mt-5 px-3 md:!px-10">
        <div className="">
          <div className="grid md:grid-cols-2">
            {/* site name */}
            <div className="border-primary-blue flex items-center gap-2 border-2 p-2">
              <label htmlFor="" className="text-primary-red">
                Site Name
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                id="nepali-datepicker"
                placeholder="Select Nepali Date"
              />
            </div>
            {/* Action */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:!border-t-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red">
                Action:
              </label>
              <label className="text-primary-blue" htmlFor="">
                Show
              </label>
              <input
                type="radio"
                name="action"
                className="py-2 px-2 outline-none"
              />
              <label className="text-primary-blue" htmlFor="">
                Hide
              </label>
              <input
                type="radio"
                name="action"
                className="py-2 px-2 outline-none"
              />
            </div>
            {/* site details */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
              <label htmlFor="" className="text-primary-red">
                Site Details:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Details"
              />
            </div>
            {/* Link */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red">
                Link:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Link"
              />
            </div>
          </div>
        </div>
        {/* buttons */}
        <a
          href=""
          className="bg-primary-green ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
        >
          Save
        </a>
        <a
          href=""
          className="bg-primary-blue ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
        >
          Submit
        </a>
      </div>
      {/* end table */}
    </div>
  );
};

export default BookMarkCreate;
