import React from "react";

const CreateNotice = () => {
  return (
    <div classname="">
      <h1 classname="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create Notice
      </h1>
      <div classname="">
        <img
          src="../../images/title-border.png"
          alt=""
          classname="mx-auto mt-4"
        />
      </div>
      {"{"}/* table */{"}"}
      <div classname="mt-5 px-3 md:!px-10">
        <div classname="">
          <div classname="grid md:grid-cols-2">
            {"{"}/* staff name */{"}"}
            <div classname="border-primary-blue flex items-center gap-2 border-2 p-2">
              <label htmlfor="" classname="text-primary-red">
                Staff Name
              </label>
              <input
                type="text"
                name=""
                classname="flex-grow py-2 px-2 outline-none"
                id=""
                placeholder="Staff name"
              />
            </div>
            {"{"}/* date */{"}"}
            <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:!border-t-2 md:border-l-0">
              <label htmlfor="" classname="text-primary-red">
                Date
              </label>
              <input
                type="text"
                name=""
                classname="flex-grow py-2 px-2 outline-none"
                id=""
                placeholder="date"
              />
            </div>
            {"{"}/* heading */{"}"}
            <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
              <label htmlfor="" classname="text-primary-red">
                Notice Heading:
              </label>
              <input
                type="text"
                name=""
                classname="flex-grow py-2 px-2 outline-none"
                placeholder="Notice Heading"
              />
            </div>
            {"{"}/* photo */{"}"}
            <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:border-l-0">
              <label htmlfor="" classname="text-primary-red">
                Notice Photo:
              </label>
              <input
                type="file"
                name=""
                classname="text-primary-blue file:bg-primary-red ml-3 w-full outline-none file:rounded-lg file:text-white"
                id=""
              />
            </div>
          </div>
          <div classname="border-primary-blue border-2 border-t-0 p-2">
            <p classname="text-primary-red font-bold">Notice Details</p>
            <textarea
              name=""
              classname="w-full border border-gray-700"
              id=""
              rows="{10}"
              defaultvalue='{""}'
              defaultValue={
                '      </div>\n      {/* buttons */}\n      <div className="mb-10">\n        <a\n          href=""\n          className="bg-primary-green ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"\n        >\n          Save\n        </a>\n        <a\n          href=""\n          className="bg-primary-blue ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"\n        >\n          Submit\n        </a>\n      </div>\n    </div>\n  </div>\n  {/* end table */}\n</div>\n'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotice;
