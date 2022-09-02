import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Images from "../../media/images";
import BackButtton from "../../components/common/backbutton/BackButton";

const Calender = () => {
  let activeStyle = {
    background: "#ee1d23",
    color: "white",
  };
  return (
    <div className="w-padding mt-4 w-full">
      <BackButtton />
      <div className="title-style text-center">Calender Details</div>
      <div className="mt-4">
        <img src={Images.title_border} alt="" className="mx-auto" />
      </div>
      <div className="grid place-content-center">
        <div className="p-3 md:p-4 w-[60vw]">
          <div className="mx-auto  flex justify-center">
            <div className=" border-primary-red m-0 grid w-full list-none grid-cols-1 gap-4 rounded-3xl border-2 p-3 md:grid-cols-2">
              <NavLink
                style={({ isActive }) => {
                  return isActive ? activeStyle : undefined;
                }}
                to="graphic-calender"
                className=" bg-[#DFF1E7] text-[#343a40] font-Bree cursor-pointer rounded-full px-4 py-3 text-center text-lg font-bold no-underline"
              >
                <div className="px-4">Graphic Calender</div>
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? activeStyle : undefined;
                }}
                to="hamro-patro-calender"
                className="font-Bree cursor-pointer text-[#343a40] rounded-full bg-[#DFF1E7] px-4 py-3 text-center text-lg font-bold opacity-70 no-underline"
              >
                <div className="">Hamro Patro Calender</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Calender;
