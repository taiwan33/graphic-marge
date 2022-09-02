import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../../media/images";
import sidebar from "../../../pages/staffSidebar/Array";

const StafSidebar = () => {
  const [openedFolder, setOpenedFolder] = useState([]);

  const openFolder = (index) => {
    if (openedFolder.some((idx) => idx === index)) {
      setOpenedFolder(openedFolder.filter((item) => item !== index));
    } else {
      setOpenedFolder([...openedFolder, index]);
    }
  };
           
  const checkIsOpened = (index) => {
    if (openedFolder.some((idx) => idx === index)) return true;
    else return false;
  };

  return (
    <div className="sticky top-28">
      <aside className="hidden font-Bree -ml-[30px]  col-span-1  h-screen select-none flex-col justify-start overflow-x-scroll bg-white xl:!flex">
        <Link
          to="/staff"
          className="text-primary-blue font-Rakkas mt-5 text-center font-bold md:text-2xl"
        >
          Staff Dashboard
        </Link>
        {/* task assigned */}
        <div className="mt-3">
          {sidebar.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="dropdown-header text-primary-red"
                  onClick={() => {
                    openFolder(index);
                  }}
                >
                  {!checkIsOpened(index) ? (
                    <>
                      <img alt="" className="h-5 w-5" src={Images.plusIcon} />
                      <img
                        src={Images.folderCloseIcon}
                        className="h-5 w-5"
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <img alt="" className="h-5 w-5" src={Images.minusIcon} />
                      <img
                        src={Images.folderOpenIcon}
                        className="h-5 w-5"
                        alt=""
                      />
                    </>
                  )}
                  {item.name}
                </div>
                {item.chidren.length > 0 &&
                  item.chidren.map((childItem, idx) => {
                    return (
                      <div
                        className={`flex py-2 pl-4 gap-2 justify-start ${
                          checkIsOpened(index) ? "block" : "hidden"
                        } dropdown-item-bg`}
                        key={idx}
                      >
                        <img
                          src={Images.fileIcon}
                          className="h-5 w-5"
                          alt="noload"
                        />
                        <Link
                          to={`/staff/${childItem.link}`}
                          className="text-sm"
                        >
                          {" "}
                          {childItem.name}
                        </Link>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default StafSidebar;
