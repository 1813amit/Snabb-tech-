// CheckboxComponent.jsx

import React from "react";
import image3 from "../img/Union.png";

const CheckboxComponent = () => {
  return (
    <div className=" flex flex-col items-center mt-9 mb-5  gap-5">
      {/* Checkbox 1 */}
      <label className="flex items-center -ml-28">
        <input type="checkbox" className="form-checkbox w-5 h-5 mr-2" />
        <span className="font-jost font-medium text-base leading-5">
          I’m an Expert
        </span>
      </label>

      {/* Checkbox 2 */}
      <label className="relative items-center">
        <input type="checkbox" className="form-checkbox w-5 h-5 mr-2" />
        <span className="font-jost font-medium text-base leading-5">
          I’m an Organization in Africa
        </span>
      </label>
    </div>
  );
};

export default CheckboxComponent;
