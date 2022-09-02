import React from "react";

const CreateUser = () => {
  return (
    <div classname="">
      <h1 classname="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create User
      </h1>
      <div classname="">
        <img
          src="../../images/title-border.png"
          alt=""
          classname="mx-auto mt-4"
        />
      </div>
      {"{"}/* table */{"}"}
      <div classname="mt-5 p-3 md:!px-10">
        <div classname="grid md:grid-cols-2">
          {"{"}/* name */{"}"}
          <div classname="border-primary-blue flex items-center gap-2 border-2 p-2">
            <label htmlfor="" classname="text-primary-red">
              User Name
            </label>
            <input
              type="text"
              name=""
              classname="flex-grow py-2 px-2 outline-none"
              id=""
              placeholder="User Name"
            />
          </div>
          {"{"}/* Address */{"}"}
          <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:!border-t-2 md:border-l-0">
            <label htmlfor="" classname="text-primary-red">
              Address:
            </label>
            <input
              type="text"
              name=""
              classname="flex-grow py-2 px-2 outline-none"
              placeholder="Address"
            />
          </div>
          {"{"}/* Email */{"}"}
          <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
            <label htmlfor="" classname="text-primary-red">
              Email:
            </label>
            <input
              type="text"
              name=""
              classname="flex-grow py-2 px-2 outline-none"
              placeholder="Address"
            />
          </div>
          {"{"}/* Mobile no */{"}"}
          <div classname="border-primary-blue flex flex-wrap items-center gap-2 border-2 border-t-0 p-2 md:border-l-0">
            <label htmlfor="" classname="text-primary-red">
              Mobile Number:
            </label>
            <input
              type="number"
              name=""
              classname="flex-grow py-2 px-2 outline-none"
              placeholder="Phone Number"
            />
          </div>
          {"{"}/* pan no */{"}"}
          <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
            <label htmlfor="" classname="text-primary-red">
              PAN No/Citizenship no:
            </label>
            <input
              type="text"
              name=""
              classname="flex-grow py-2 px-2 outline-none"
              placeholder="{111111111}"
            />
          </div>
          {"{"}/* user id */{"}"}
          <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:border-l-0">
            <label htmlfor="" classname="text-primary-red">
              User Id:
            </label>
            <div classname="flex flex-wrap items-center gap-2">
              <div classname="border-primary-blue flex-shrink-0 rounded-full border px-2 py-1">
                <label classname="text-primary-red" htmlfor="">
                  Email
                </label>
                <input type="radio" name="user-id" id="" />
                <label classname="text-primary-red" htmlfor="">
                  Number:
                </label>
                <input type="radio" name="user-id" id="" />
              </div>
              <input
                type="text"
                classname="outline-none"
                placeholder="user id"
                name=""
                id=""
              />
            </div>
          </div>
          {"{"}/* pass */{"}"}
          <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
            <label htmlfor="" classname="text-primary-red">
              Password:
            </label>
            <input
              type="text"
              name=""
              classname="flex-grow py-2 px-2 outline-none"
              placeholder=""
            />
          </div>
          {"{"}/* c pass */{"}"}
          <div classname="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 sm:!border-l-0">
            <label htmlfor="" classname="text-primary-red">
              Conform Password:
            </label>
            <input
              type="text"
              name=""
              classname="flex-grow py-2 px-2 outline-none"
              placeholder=""
            />
          </div>
        </div>
      </div>
      {"{"}/* end table */{"}"}
    </div>
  );
};

export default CreateUser;
