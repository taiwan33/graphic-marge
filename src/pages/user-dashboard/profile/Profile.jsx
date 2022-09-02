import React from "react";
import Images from "../../../media/images";

const Profile = () => {
  return (
    <div className="shadow-2xl">
      <h1 className="text-primary-red font-Rakkas mt-2 text-center text-4xl font-bold lg:!mt-6">
        Profile
      </h1>
      <div className="">
        <img src={Images.title_border} alt="" className="mx-auto mt-4" />
      </div>
      <div className="mt-10 grid place-content-center place-items-center rounded-xl py-10 ">
        <div className="gap-20 sm:flex">
          <div className="h-28 w-28">
            <img
              className="h-full w-full rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="mt-10">
            <a
              href="./edit-profile.html"
              className="bg-primary-blue font-Berkshire animation mt-5 rounded-xl px-5 py-3 text-white hover:bg-blue-900 lg:mt-0"
            >
              Edit Profile
            </a>
          </div>
        </div>
        <div className="border-primary-blue font-Acme my-10 grid place-content-center space-y-5 rounded-2xl border-2 p-5 text-left">
          <h1 className="text-primary-red font-bold md:text-xl">
            Name :<span className="text-primary-blue">Elezabeth Olsen</span>
          </h1>
          <h1 className="text-primary-red font-bold md:text-xl">
            Address :
            <span className="text-primary-blue">Bharatpur-11, Chitwan</span>
          </h1>
          <h1 className="text-primary-red font-bold md:text-xl">
            Contact : <span className="text-primary-blue">980000000</span>
          </h1>
          <h1 className="text-primary-red font-bold md:text-xl">
            Email :<span className="text-primary-blue">example@gmail.com</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
