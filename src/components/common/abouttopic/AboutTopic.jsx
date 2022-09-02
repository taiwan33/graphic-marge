import React from "react";
import { NavLink } from "react-router-dom";

const AboutTopic = ({ name, links, bgColor }) => {
  let activeStyle = {
    background: { bgColor },
    color: "white",
  };
  return (
    <NavLink
      to={links}
      style={({ isActive }) => {
        return isActive ? activeStyle : undefined;
      }}
      className="about-button text-white bg-red-600"
    >
      {name}
    </NavLink>
  );
};

export default AboutTopic;
