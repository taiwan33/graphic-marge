import React from "react";

const NewsCreate = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create News Post
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
            {/* writer name */}
            <div className="border-primary-blue flex items-center gap-2 border-2 p-2">
              <label htmlFor="" className="text-primary-red">
                News Writer Name:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                id="nepali-datepicker"
                placeholder="News Writer Name"
              />
            </div>
            {/*News Poster Name */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:!border-t-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red">
                News Poster Name:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="News Poster Name"
              />
            </div>
            {/* News Heading */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
              <label htmlFor="" className="text-primary-red">
                News Heading:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="News Heading"
              />
            </div>
            {/* News Category */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red flex-shrink-0">
                News Category:
              </label>
              <select
                className="form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected="">One</option>
                <option value={1}>Two</option>
                <option value={2}>Three</option>
                <option value={3}>Four</option>
              </select>
            </div>
          </div>
          {/* upload phote */}
          <div className="border-primary-blue items-center gap-2 border-2 border-t-0 p-1 md:flex">
            <label
              htmlFor=""
              className="text-primary-red flex-shrink-0 font-bold"
            >
              Upload Photos
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col items-center">
                <label className="text-primary-blue text-sm" htmlFor="">
                  Heading photo-1
                </label>
                <input
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 w-[200px] outline-none file:rounded-lg file:text-white"
                  id=""
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-primary-blue text-sm" htmlFor="">
                  Heading photo-2
                </label>
                <input
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 w-[200px] outline-none file:rounded-lg file:text-white"
                  id=""
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-primary-blue text-sm" htmlFor="">
                  Mid photo-1
                </label>
                <input
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 w-[200px] outline-none file:rounded-lg file:text-white"
                  id=""
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-primary-blue text-sm" htmlFor="">
                  Mid photo-2
                </label>
                <input
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 w-[200px] outline-none file:rounded-lg file:text-white"
                  id=""
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-primary-blue text-sm" htmlFor="">
                  Mid photo-3
                </label>
                <input
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 w-[200px] outline-none file:rounded-lg file:text-white"
                  id=""
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-primary-blue text-sm" htmlFor="">
                  footer photo-1
                </label>
                <input
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 w-[200px] outline-none file:rounded-lg file:text-white"
                  id=""
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-primary-blue text-sm" htmlFor="">
                  footer photo-2
                </label>
                <input
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 w-[200px] outline-none file:rounded-lg file:text-white"
                  id=""
                />
              </div>
            </div>
          </div>
          {/* news details */}
          <div className="border-primary-blue border-2 border-t-0 p-2">
            <p htmlFor="" className="text-primary-red font-bold">
              News Details
            </p>
            <textarea
              name=""
              id=""
              className="w-full border border-gray-700 p-3"
              rows={10}
              defaultValue={""}
            />
          </div>
          {/* buttons */}
          <div className="mb-10">
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
              Post
            </a>
          </div>
        </div>
      </div>
      {/* end table */}
    </div>
  );
};

export default NewsCreate;
