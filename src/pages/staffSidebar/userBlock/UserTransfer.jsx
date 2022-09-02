import React from "react";

const UserTransfer = () => {
  return (
    <div className="flex items-center gap-1">
      <h1>user transfer</h1>
      <div className="form-check">
        <input
          className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
          type="checkbox"
          defaultValue=""
          id="flexCheckDefault3"
        />
      </div>
    </div>
  );
};

export default UserTransfer;
