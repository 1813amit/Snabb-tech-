// PasswordInput.jsx

import React, { useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="relative w-full flex justify-center  md:w-2/3 lg:w-1/2 xl:w-full mx-auto">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-rose-800 xl:w-[250px] px-3 py-2 border-b border-yellow focus:outline-none focus:border-yellow"
          placeholder="Enter new password"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="underline cursor-pointer"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default PasswordInput;
