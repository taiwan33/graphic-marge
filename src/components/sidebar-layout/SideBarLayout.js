import React from "react";
import { Route, Routes } from "react-router-dom";
import sidebar from "../../pages/staffSidebar/Array";

const SideBarLayout = () => {
  return (
    <div>
      {sidebar.map((item) =>
        item.chidren.map((list, i) => {
          return (
            <div key={i}>
              <Routes>
                <Route path={`/${list.link}`} element={<list.component />} />
              </Routes>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SideBarLayout;
