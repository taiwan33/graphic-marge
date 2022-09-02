import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBranch } from "../../../features/branch/branchSlice";

const FormBranch = ({ register }) => {
  const branch = useSelector((state) => state.branch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBranch());
  }, []);
  return (
    <>
      <p className="text-primary-red text-lg underline">
        5. Working Branch
        <span className="text-primary-blue underline text-base font-semibold mx-2">
          (तपाईले दर्ता गर्न खोज्नुभएको कम्पनी रहने ठेगाना नजिक हाम्रो कुन शाखा
          नजिक पर्छ छनोट गर्नुहोस् ।)
        </span>
      </p>

      <div className="flex space-x-3">
        {branch.data.map((item) => {
          return (
            <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
              <div className="flex flex-wrap gap-2">
                <p className="text-lg flex items-center text-white">
                  {item.name}
                </p>
                <input
                  type="radio"
                  className="h-5 w-5 flex items-center"
                  name="branch"
                  value={item.code}
                  id=""
                  // {...register(`associated_branch`, {
                  //   required: false,
                  // })}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className=" text-primary-blue border-2 my-3 bg-yellow-100 text-center rounded-full px-8 w-fit border-primary-red text-sm ">
        Service Fees Shown above are Not Include Any Government Charges, VAT,
        Taxes, Fines, Penalties and Incidental costs.
      </div>
    </>
  );
};

export default FormBranch;
// import React from "react";

// const FormBranch = ({ register }) => {
//   return (
//     <>
//       <p className="text-primary-red text-lg underline">
//         5. Working Branch
//         <span className="text-primary-blue underline text-base font-semibold mx-2">
//           (तपाईले दर्ता गर्न खोज्नुभएको कम्पनी रहने ठेगाना नजिक हाम्रो कुन शाखा
//           नजिक पर्छ छनोट गर्नुहोस् ।)
//         </span>
//       </p>
//       <div className="mt-3 flex flex-wrap gap-2">
//         <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
//           <p className="text-lg text-white">Head Office- Chitwan</p>
//           <input
//             type="radio"
//             className="h-5 w-5"
//             name="branch"
//             value="ktm"
//             {...register(`associated_branch`, {
//               // required: false,
//             })}
//             id=""
//           />
//         </div>
//         <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
//           <p className="text-lg text-white">Bijauri, Dang</p>
//           <input
//             type="radio"
//             className="h-5 w-5"
//             // name="branch"
//             value="ktm"
//             {...register(`associated_branch`, {
//               // required: false,
//             })}
//             id=""
//           />
//         </div>
//         <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
//           <p className="text-lg text-white">Pokhara, Kaski</p>
//           <input
//             type="radio"
//             className="h-5 w-5"
//             //  name="branch"
//             value="ktm"
//             {...register(`associated_branch`, {
//               // required: false,
//             })}
//             id=""
//           />
//         </div>
//         <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
//           <p className="text-lg text-white">Kawasoti, Nawalpur</p>
//           <input
//             type="radio"
//             className="h-5 w-5"
//             // name="branch"
//             value="ktm"
//             {...register(`associated_branch`, {
//               // required: false,
//             })}
//             id=""
//           />
//         </div>
//         <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
//           <p className="text-lg text-white">Damauli, Tanahun</p>
//           <input
//             type="radio"
//             className="h-5 w-5"
//             name="branch"
//             value="ktm"
//             {...register(`associated_branch`, {
//               // required: false,
//             })}
//             id=""
//           />
//         </div>
//       </div>
//       <div className=" text-primary-blue border-2 my-3 bg-yellow-100 text-center rounded-full px-8 w-fit border-primary-red text-sm ">
//         Service Fees Shown above are Not Include Any Government Charges, VAT,
//         Taxes, Fines, Penalties and Incidental costs.
//       </div>
//     </>
//   );
// };

// export default FormBranch;
