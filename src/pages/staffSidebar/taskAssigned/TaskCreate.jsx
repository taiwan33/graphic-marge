import React from "react";
import Images from "../../../media/images";

const TaskCreate = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
          New Task Create
        </h1>
        <div className="">
          <img src={Images.title_border} alt="" className="mx-auto mt-4" />
        </div>
        {/*   */}
        <div className="mt-10 px-3 pb-10 md:!px-10">
          <div className="border">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/*  date */}
              <div className="border-primary-blue flex flex-wrap items-center gap-2 border-2 p-2">
                <label htmlFor="" className="text-primary-red">
                  Task Create Date:
                </label>
                <input
                  type="text"
                  name=""
                  className="flex-grow py-2 px-2 outline-none"
                  id="nepali-datepicker"
                  placeholder="Select Nepali Date"
                />
              </div>
              {/* pan no */}
              <div className="border-primary-blue flex flex-wrap items-center gap-2 border-2 border-t-0 p-2 md:!border-t-2 md:border-l-0">
                <label htmlFor="" className="text-primary-red">
                  Branch Name:
                </label>
                <div className="flex-grow items-center gap-2 lg:flex">
                  <select
                    name=""
                    className="border-primary-blue w-full border p-2"
                  >
                    <option value="Select">Select</option>
                    <option value="One">One</option>
                    <option value="Two">two</option>
                    <option value="Three">three</option>
                    <option value="Four">four</option>
                  </select>
                </div>
              </div>
              {/* staff name */}
              <div className="border-primary-blue flex flex-wrap items-center gap-2 border-2 border-t-0 border-r-0 p-2">
                <label htmlFor="" className="text-primary-red">
                  Staff Name:
                </label>
                <div className="flex-grow items-center gap-2 lg:flex">
                  <select
                    name=""
                    className="border-primary-blue w-full border p-2"
                  >
                    <option value="Select">Select</option>
                    <option value="One">One</option>
                    <option value="Two">two</option>
                    <option value="Three">three</option>
                    <option value="Four">four</option>
                  </select>
                </div>
              </div>
              {/* company name */}
              <div className="border-primary-blue flex flex-wrap items-center gap-2 border-2 border-t-0 p-2">
                <label htmlFor="" className="text-primary-red">
                  Company Name:
                </label>
                <div className="flex-grow items-center gap-2 lg:flex">
                  <select
                    name=""
                    className="border-primary-blue w-full border p-2"
                  >
                    <option value="Select">Select</option>
                    <option value="One">One</option>
                    <option value="Two">two</option>
                    <option value="Three">three</option>
                    <option value="Four">four</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    className="flex-grow py-2 px-2 outline-none"
                    id="nepali-datepicker"
                    placeholder="Type company name"
                  />
                </div>
              </div>
              {/* details  */}
              <div className="border-primary-blue border-2 border-t-0 p-2 md:col-span-2">
                <label htmlFor="" className="text-primary-red">
                  Task/job Details:
                </label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="w-full p-3 outline-none"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {/* save submit btn */}
          <div className="bg-primary-green ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
            <a href="">Save</a>
          </div>
          <div className="bg-primary-blue ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
            <a href="">Submit</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskCreate;
