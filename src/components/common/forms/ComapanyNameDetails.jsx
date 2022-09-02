import React from "react";
import FormInput from "./FormInput";

// import { useForm } from "react-hook-form";


const ComapanyNameDetails = ({register}) => {
  // const { register} = useForm();


  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                      S. N.
                    </td>
                    <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                      Business Name 1
                    </td>
                    <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                      Business Name 2
                    </td>
                    <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                      Business Name 3
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-primary-blue border">
                    <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                      English मा
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        // name=""
                        {...register(`company_name`, {
                          // required: false,
                        })}

                        className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                        id=""
                      />
                    </td>
                    <td className="p-0">
                      {/* <FormInput /> */}
                      <input
                        type="text"
                        // name=""     
                        {...register(`company_name_alt_1`, {
                          // required: false,
                        })}


                        className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                        id=""
                      />
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        // name=""
                        {...register(`company_name_alt_2`, {
                          // required: false,
                        })}
                        className="border-primary-blue text-primary-blue m-0 w-full py-3 px-3 outline-none"
                        id=""
                      />
                    </td>
                  </tr>
                  <tr className="border-primary-blue border">
                    <td className="text-primary-red font-ganga border-primary-blue border-r px-10 text-center font-semibold">
                      नेपालीमा मा
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        name=""
                        className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                        id=""
                        {...register(`company_name_nep`, {
                          // required: false,
                        })}

                      />
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        name=""
                        className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                        id=""
                        {...register(`company_name_alt_1_nep`, {
                          // required: false,
                        })}
                      />
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        name=""
                        className="border-primary-blue text-primary-blue m-0 w-full py-3 px-3 outline-none"
                        id=""
                        {...register(`company_name_alt_2_nep`, {
                          // required: false,
                        })}

                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p className=" text-primary-blue">
        तपाईले दर्ता गर्न चाहनुभएको प्रस्तावित ऋयmउबलथ को नाम नेपाली र अंग्रेजी
        दुबै भाषामा प्रस्ट बुझिनेगरी माथिको फर्ममा उल्लेख गर्नुहोस् । एउटा
        कम्पनीको बढिमा ३ वटा सम्म नाम रिजर्भको लागि पेश गर्न सकिनेछ ।
      </p>
    </>
  );
};

export default ComapanyNameDetails;
