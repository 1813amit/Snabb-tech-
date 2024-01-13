// EmailInput.jsx

import React from "react";

const EmailInput = () => {
  return (
    <div className="relative flex justify-center w-full md:w-2/3 lg:w-1/2 xl:w-full mx-auto ">
      <input
        type="email"
        className=" text-yellow-400 w-[300px] px-3 py-2 border-b border-yellow focus:outline-none focus:border-yellow"
        placeholder="Email address"
      />
    </div>
  );
};

export default EmailInput;
