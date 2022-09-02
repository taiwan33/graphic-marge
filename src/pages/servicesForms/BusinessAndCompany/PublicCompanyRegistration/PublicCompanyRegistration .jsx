import React from "react";
import { useForm } from "react-hook-form";
import ComapanyNameDetails from "../../../../components/common/forms/ComapanyNameDetails";
import DetailsOfShareHolders from "../../../../components/common/forms/DetailsOfShareHolders";
import FormBranch from "../../../../components/common/forms/FormBranch";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormPayment from "../../../../components/common/forms/FormPayment";
import MainObjectives from "../../../../components/common/forms/MainObjectives";
import pvt_lmt_registration from "../PrivateCompanyRegistration/PrivateCompanyRegistration";

const PublicCompanyRegistration = () => {
  const { register, handleSubmit, unregister } = useForm();
  return (
    <div>
      <form className="px-10 lg:!px-14">
        <p className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
          Public Limited Company Registration Form
        </p>

        <div className="flex flex-col">
          <ComapanyNameDetails />
        </div>

        <div className="mt-5">
          <p className="text-primary-red text-lg underline">
            2. Others Details
          </p>
          <div className="border-primary-blue max-w-3xl border font-bold">
            {pvt_lmt_registration.map((item, i) => {
              const { name, validation, ip1, type } = item;

              // console.log(item);
              return (
                <div
                  key={i}
                  className="border-primary-blue flex flex-col border-b md:flex-row"
                >
                  <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
                    {ip1}
                  </p>

                  {item.ip1 === " कम्पनीको प्रकार" ? (
                    <>
                      <div className="border-primary-blue flex w-full items-center gap-5 border-t py-2 pl-2 md:border-l md:!py-0">
                        <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border-l p-1 text-white">
                          <label htmlFor="radio">एकल</label>
                          <input
                            type="radio"
                            id=""
                            value="ekal"
                            {...register("business_type", {
                              required: false,
                            })}
                          />
                        </div>

                        <div className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
                          <label htmlFor="radio">बहुल</label>
                          <input
                            type="radio"
                            id=""
                            {...register("business_type", {
                              required: false,
                            })}
                            value="bahul"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <input
                      {...register(item.name, { required: false })}
                      type={type}
                      {...register(name, validation)}
                      className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <span className="text-primary-red text-lg underline">
          3. Details of Share Holders hello world
          <span className="text-primary-blue underline">
            (शेयर सदस्य तथा साँक्षीहरुको विवरण) (प्रा.लि. कम्पनीमा बढिमा १०१ जना
            सम्म सदस्य रहन सकिन्छ ।)
          </span>
        </span>
        <DetailsOfShareHolders />
        <MainObjectives />

        <FormBranch />
        <FormButtom />
        <FormPayment />
      </form>
    </div>
  );
};

export default PublicCompanyRegistration;
