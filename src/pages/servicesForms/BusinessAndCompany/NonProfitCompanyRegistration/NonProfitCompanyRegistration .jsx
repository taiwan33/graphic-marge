import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import ComapanyNameDetails from "../../../../components/common/forms/ComapanyNameDetails";
import FormBranch from "../../../../components/common/forms/FormBranch";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormPayment from "../../../../components/common/forms/FormPayment";
import MainObjectives from "../../../../components/common/forms/MainObjectives";
import { non_public_lmt_registration } from "./NonProfitCompanyRegArr";
import Images from "../../../../media/images";
import { pvt_details_of_shareholder } from "../PrivateCompanyRegistration/PrivateCompanyRegistrationArr";

const NonProfitCompanyRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [tableRow, setTableRow] = useState(1);
  const [shareHolders, setShareHolders] = useState([
    {
      name: "",
      address: "",
      share_amount: "",
      citizenship: "",
      witness_name: "",
      witness_address: "",
      witness_citizenship: "",
    },
  ]);
  const { state } = useLocation();
  const { slug } = useParams();

  useEffect(() => {
    console.log("share-------------holders", shareHolders);
  }, [shareHolders]);

  // console.log(non_public_lmt_registration);
  const onSubmit = (data) => {
    data.shareHolders = shareHolders;
    console.log("data", data);
    // console.log(state);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
        Non Profit Company Registration Form
      </p>
      <ComapanyNameDetails register={register} />
      {/* <FormOtherDetails /> */}
      <div className="border-primary-blue max-w-3xl border font-bold">
        {non_public_lmt_registration.map((item, i) => {
          const { name, validation, ip1, type } = item;
          // console.log(item);
          return (
            <div
              key={i}
              className="border-primary-blue flex flex-col border-b md:flex-row"
            >
              <p className="text-primary-red px-5 py-2 sm:!w-[300px]">{ip1}</p>

              {ip1 === " कम्पनीको प्रकार" ? (
                <>
                  <div className="border-primary-blue flex w-full items-center gap-5 border-t py-2 pl-2 md:border-l md:!py-0">
                    <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border-l p-1 text-white">
                      <label htmlFor="radio">एकल</label>
                      <input
                        type="radio"
                        id=""
                        {...register("radio", { required: true })}
                      />
                    </div>

                    <div className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
                      <label htmlFor="radio">बहुल</label>
                      <input
                        type="radio"
                        id=""
                        {...register("radio", { required: true })}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <input
                  type={type}
                  {...register(name, validation)}
                  className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap justify-between">
          <span className="text-primary-red text-lg underline">
            3. Details of Members
            <span className="text-primary-blue underline">
              (शेयर सदस्य तथा साँक्षीहरुको विवरण) (प्रा.लि. कम्पनीमा बढिमा १०१
              जना सम्म सदस्य रहन सकिन्छ ।)
            </span>
          </span>

          {/* test */}
          <img
            onClick={() => {
              setTableRow(tableRow + 1);
              // setShareHolders([{name:'', address: ''}])
              setShareHolders((shareHolders) => [
                ...shareHolders,
                {
                  name: "",
                  address: "",
                  share_amount: "",
                  citizenship: "",
                  witness_name: "",
                  witness_address: "",
                  witness_citizenship: "",
                },
              ]);

              console.log(shareHolders);
            }}
            src={Images.row_add}
            className="h-10 w-10 cursor-pointer"
            alt=""
            srcset=""
          />
          {/* test close */}
        </div>
      </div>

      {/* <DetailsOfShareHolders /> */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="min-w-[1300px] overflow-x-auto">
              <table id="tbl_posts">
                <thead>
                  <tr>
                    {pvt_details_of_shareholder.map((item, i) => {
                      return (
                        <>
                          <td
                            key={i}
                            className="border-primary-blue  text-primary-red border text-lg font-bold"
                          >
                            {item.ip1}
                          </td>
                        </>
                      );
                    })}
                  </tr>
                </thead>
                {/* {non_public_lmt_registration.map((item, i) => {
                  return (
                    <>
                      <td
                        key={i}
                        className="border-primary-blue  text-primary-red border text-lg font-bold"
                      >
                        <input type={item.type} />
                      </td>
                    </>
                  );
                })} */}
                <tbody>
                  {/* form */}
                  {[...Array(tableRow)].map((value, index) => {
                    return (
                      <tr className="border-primary-blue border">
                        <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                          {index + 1}
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            // setState(prevState => [...prevState, 'somedata'] )
                            // const [shareHolders, setShareHolders] = useState([])

                            onChange={(e) => {
                              let newArr = [...shareHolders];
                              newArr[index].name = e.target.value;
                              setShareHolders(newArr);
                              console.log("asfasd");
                            }}
                            // {...register(`name${index}`, {
                            //   // required: false,
                            // }, onchange=((e)=> {
                            //    setShareHolders([...shareHolders, {"name":e.target.value}])
                            // }))}

                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            // {...register(`address${index}`, {
                            //   // required: false,
                            // }, onchange=((e)=> {
                            //    setShareHolders([...shareHolders, {"address":e.target.value}])
                            // }))}
                            onChange={(e) => {
                              let newArr = [...shareHolders];
                              newArr[index].address = e.target.value;
                              setShareHolders(newArr);
                            }}
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                            onChange={(e) => {
                              let newArr = [...shareHolders];
                              newArr[index].share_amount = e.target.value;
                              setShareHolders(newArr);
                            }}
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="file"
                            name=""
                            className="border-primary-blue file:bg-primary-blue h-[54px] w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
                            id=""
                            onChange={(e) => {
                              let newArr = [...shareHolders];
                              // newArr[index].citizenship = e.target.files[index]
                              // console.log(e.target.files)
                              setShareHolders(newArr);
                              // console.log(e.target.files[index])
                              // Make new FileReader
                              let reader = new FileReader();
                              let baseURL = "";
                              reader.readAsDataURL(e.target.files[index]);
                              // on reader load somthing...
                              return new Promise((resolve) => {
                                reader.onload = () => {
                                  // Make a fileInfo Object
                                  // console.log("Called", reader);
                                  baseURL = reader.result;
                                  // baseURL = baseURL.slice(5,baseURL.length)
                                  // baseURL += "="
                                  newArr[index].citizenship = baseURL;

                                  resolve(baseURL);
                                };
                              });
                            }}
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                            onChange={(e) => {
                              let newArr = [...shareHolders];
                              newArr[index].witness_name = e.target.value;
                              setShareHolders(newArr);
                            }}
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                            onChange={(e) => {
                              let newArr = [...shareHolders];
                              newArr[index].witness_address = e.target.value;
                              setShareHolders(newArr);
                            }}
                          />
                        </td>
                        <td className="p-0 border-r-2 border-primary-blue">
                          <input
                            type="file"
                            name=""
                            className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                            id=""
                            onChange={(e) => {
                              let newArr = [...shareHolders];
                              // newArr[index].citizenship = e.target.files[index]
                              // console.log(e.target.files)
                              setShareHolders(newArr);
                              console.log(e.target.files[index]);
                              // Make new FileReader
                              let reader = new FileReader();
                              let baseURL = "";
                              reader.readAsDataURL(e.target.files[index]);
                              // on reader load somthing...
                              return new Promise((resolve) => {
                                reader.onload = () => {
                                  // Make a fileInfo Object
                                  console.log("Called", reader);
                                  baseURL = reader.result;
                                  // console.log(baseURL);
                                  // newArr[index].witness_citizenship = baseURL.slice(5,(baseURL.length+1))
                                  console.log(baseURL);
                                  // baseURL = baseURL.slice(5, baseURL.length)
                                  // baseURL += "="
                                  newArr[index].witness_citizenship = baseURL;
                                  resolve(baseURL);
                                };
                              });
                            }}
                          />
                        </td>
                        <td className="p-0">
                          <div
                            id={index}
                            // console.log(index)
                            onClick={() => {
                              setTableRow(tableRow - 1);
                              let newArr = shareHolders;
                              console.log(tableRow);

                              if (shareHolders.length === 1) {
                                newArr.splice(0, 1);
                              } else {
                                newArr.splice(tableRow - 1);
                              }
                              setShareHolders(newArr);

                              // unregister(`name${index}`)
                              // unregister(`address${index}`)
                            }}
                            className=""
                          >
                            remove
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {/* form close */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <MainObjectives register={register} />
      <p className="text-primary-red text-lg underline">
        5. Working Branch
        <span className="text-primary-blue ml-3">
          (तपाईले दर्ता गर्न खोज्नुभएको कम्पनी रहने ठेगाना नजिक हाम्रो कुन शाखा
          नजिक पर्छ छनोट गर्नुहोस् ।)
        </span>
      </p>
      <FormBranch register={register} />
      <FormButtom />
      <FormPayment
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </form>
  );
};

export default NonProfitCompanyRegistration;
