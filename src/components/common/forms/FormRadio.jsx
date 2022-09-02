import React from "react";

const FormRadio = () => {
  return (
    <tr className="flex">
      <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
        ब्यवसायको नाम
      </th>
      <tr className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
        <td className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
          <label htmlFor="">एकल </label>
          <input type="radio" name="radio-btn" id="" />
        </td>
        <td className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
          <label htmlFor="">साझेदारी </label>
          <input type="radio" name="radio-btn" id="" />
        </td>
      </tr>
    </tr>
  );
};

export default FormRadio;
