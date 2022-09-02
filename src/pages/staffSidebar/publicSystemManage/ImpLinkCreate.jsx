import React from "react";

const ImpLinkCreate = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create Important Link
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
        <div className="border">
          <div className="grid md:grid-cols-2">
            {/* Link Name */}
            <div className="flex items-center gap-2 border-2 border-gray-900 p-2">
              <label htmlFor="" className="text-primary-red">
                Link Name:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                id="nepali-datepicker"
                placeholder="Link Name"
              />
            </div>
            {/* Link category */}
            <div className="flex items-center gap-2 border-2 border-t-0 border-black p-2 md:!border-t-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red">
                Link category:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Link category"
              />
            </div>
            {/* Link details */}
            <div className="flex items-center gap-2 border-2 border-t-0 border-black p-2">
              <label htmlFor="" className="text-primary-red">
                Link details:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Link Details"
              />
            </div>
            {/* Link Address */}
            <div className="flex items-center gap-2 border-2 border-t-0 border-black p-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red">
                Link Address:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Link Address"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end table */}
    </div>
  );
};

export default ImpLinkCreate;
