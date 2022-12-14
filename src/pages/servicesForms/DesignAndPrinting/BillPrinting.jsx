import { useForm } from "react-hook-form";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import FormPayment from "../../../components/common/forms/FormPayment";

import {
  pvt_details_of_shareholder,
  pvt_lmt_registration,
} from "../../../components/utils/formArray/FormArray";

const BillPrinting = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("submit");
    console.log(data);
  };
  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="px-10 lg:!px-14">
          <h1 className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
            Pvt. Ltd. Company Registration Form
          </h1>
          {/* company name details */}
          <div className="mt-5">
            <p className="text-primary-red text-lg underline">
              1. Company Name Details
            </p>
            {/* table form */}
            <div className="flex lex-col">
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
                            Company Name 1
                          </td>
                          <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                            Company Name 2
                          </td>
                          <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                            Company Name 3
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-primary-blue border">
                          <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                            English ??????
                          </td>
                          <td className="p-0">
                            <input
                              type="text"
                              name=""
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
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="text"
                              name=""
                              className="border-primary-blue text-primary-blue m-0 w-full py-3 px-3 outline-none"
                              id=""
                            />
                          </td>
                        </tr>
                        <tr className="border-primary-blue border">
                          <td className="text-primary-red font-ganga border-primary-blue border-r px-10 text-center font-semibold">
                            ???????????????????????? ??????
                          </td>
                          <td className="p-0">
                            <input
                              type="text"
                              name=""
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
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="text"
                              name=""
                              className="border-primary-blue text-primary-blue m-0 w-full py-3 px-3 outline-none"
                              id=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-primary-blue mt-3 text-base font-medium leading-10 md:!text-lg">
              ?????????????????? ??????????????? ???????????? ??????????????????????????? ?????????????????????????????? Company ?????? ????????? ?????????????????? ???
              ???????????????????????? ???????????? ?????????????????? ?????????????????? ??????????????????????????? ?????????????????? ?????????????????? ??????????????????
              ??????????????????????????? ??? ???????????? ???????????????????????? ??????????????? ??? ????????? ???????????? ????????? ???????????????????????? ???????????? ?????????
              ???????????? ?????????????????? ???
            </p>
          </div>
          {/* others details */}
          <div className="mt-5">
            <p className="text-primary-red text-lg underline">
              2. Others Details
            </p>
            <div className="mt-5">
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

                      {ip1 === " ???????????????????????? ??????????????????" ? (
                        <>
                          <div className="border-primary-blue flex w-full items-center gap-5 border-t py-2 pl-2 md:border-l md:!py-0">
                            <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border-l p-1 text-white">
                              <label htmlFor="radio">?????????</label>
                              <input
                                type="radio"
                                id=""
                                {...register("radio", { required: true })}
                              />
                            </div>

                            <div className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
                              <label htmlFor="radio">????????????</label>
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
            </div>
          </div>
          {/* pricing details */}
          <div className="mt-5">
            <div className="border-primary-red text-primary-blue w-fit rounded-full border-2 p-2 text-xl">
              Pvt. Ltd. Company ??????????????? ??????????????? ???????????????????????? ??????????????? ????????????????????? ??????????????? ????????????
              ???????????? ????????????????????????
              <span
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLg"
                className="text-primary-red cursor-pointer"
              >
                Click
              </span>
              ???????????????????????? ???
            </div>
          </div>
          {/* share holder details */}
          <div className="mt-5">
            <p className="text-primary-red text-lg underline">
              3. Details of Share Holders
              <span className="text-primary-blue underline">
                (???????????? ??????????????? ????????? ???????????????????????????????????? ???????????????) (????????????.??????. ???????????????????????? ??????????????? ?????????
                ????????? ???????????? ??????????????? ????????? ?????????????????? ???)
              </span>
            </p>
            <div className="flex justify-end">
              <a className="add-record cursor-pointer" data-added={0}>
                <i className="">
                  <svg
                    className="text-primary-blue h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"
                    />
                    <path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z" />
                  </svg>
                </i>
              </a>
            </div>
            {/* share holder details form */}
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="min-w-[1300px] overflow-x-auto">
                    <table id="tbl_posts">
                      <thead>
                        <tr>
                          {pvt_details_of_shareholder.map((item, i) => {
                            return (
                              <td
                                key={i}
                                className="border-primary-blue  text-primary-red border text-lg font-bold"
                              >
                                {item.ip1}
                              </td>
                            );
                          })}
                          {/* <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                            ???????????? ?????????????????????????????? ?????????
                          </td>
                          <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                            ??????????????? ??????????????????
                          </td>
                          <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                            ???????????? ?????????
                          </td>
                          <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                            ???????????? ????????????????????? ????????????????????????
                          </td>
                          <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                            ??????????????????????????? ?????????
                          </td>
                          <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                            ??????????????????????????? ??????????????????
                          </td>
                          <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                            ??????????????????????????? ????????????????????????
                          </td> */}
                          {/* <td className="border-primary-blue boder border-r border-t px-5" /> */}
                        </tr>
                      </thead>
                      <tbody id="tbl_posts_body">
                        <tr id="rec-1" className="border-primary-blue border">
                          <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                            1
                          </td>
                          <td className="p-0">
                            <input
                              type="text"
                              {...register("name", { required: true })}
                              className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                              id=""
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="text"
                              {...register("address", { required: true })}
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
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="file"
                              name=""
                              className="border-primary-blue file:bg-primary-blue h-[54px] w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
                              id=""
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="text"
                              name=""
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
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="file"
                              name=""
                              className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                              id=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ display: "none" }}>
                      {/* table row add */}
                      <table id="sample_table">
                        <tbody>
                          <tr id="" className="border-primary-blue border">
                            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                              <span className="sn">1</span>
                            </td>
                            <td className="p-0">
                              <input
                                type="text"
                                name=""
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
                              />
                            </td>
                            <td className="p-0">
                              <input
                                type="text"
                                name=""
                                className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                                id=""
                              />
                            </td>
                            <td className="p-0">
                              <input
                                type="file"
                                name=""
                                className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
                                id=""
                              />
                            </td>
                            <td className="p-0">
                              <input
                                type="text"
                                name=""
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
                              />
                            </td>
                            <td className="p-0">
                              <input
                                type="file"
                                name=""
                                className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                                id=""
                              />
                            </td>
                            <td className="">
                              <a href="" className="delete-record">
                                <svg
                                  className="text-primary-red h-8 w-8"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  role="img"
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8l-1.4 1.4z"
                                  />
                                </svg>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* company objective */}
          <div className="mt-5">
            <p className="text-primary-red text-lg underline">
              4. Main Objectives
              <span className="text-primary-blue underline">
                (???????????????????????? ??????????????? ??????????????? ??????????????? ?????????????????? ?????????????????? ?????????????????????????????????)
              </span>
            </p>
            {/* text area */}
            <div className="mt-3">
              <textarea
                name=""
                className="border-primary-blue w-full border p-3"
                id=""
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
          </div>
          {/* branch */}
          <div className="mt-5">
            <p className="text-primary-red text-lg underline">
              5. Working Branch
              <span className="text-primary-blue underline">
                (?????????????????? ??????????????? ???????????? ?????????????????????????????? ?????????????????? ???????????? ?????????????????? ???????????? ?????????????????? ?????????
                ???????????? ???????????? ???????????? ???????????? ??????????????????????????? ???)
              </span>
            </p>
            {/* radio buttons */}
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
                <p className="text-lg text-white">Head Office- Chitwan</p>
                <input type="radio" className="h-5 w-5" name="branch" id="" />
              </div>
              <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
                <p className="text-lg text-white">Bijauri, Dang</p>
                <input type="radio" className="h-5 w-5" name="branch" id="" />
              </div>
              <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
                <p className="text-lg text-white">Pokhara, Kaski</p>
                <input type="radio" className="h-5 w-5" name="branch" id="" />
              </div>
              <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
                <p className="text-lg text-white">Kawasoti, Nawalpur</p>
                <input type="radio" className="h-5 w-5" name="branch" id="" />
              </div>
              <div className="bg-primary-red flex w-fit items-center gap-1 rounded-full px-2 py-0.5">
                <p className="text-lg text-white">Damauli, Tanahun</p>
                <input type="radio" className="h-5 w-5" name="branch" id="" />
              </div>
            </div>
          </div>
          <div className="mt-10 grid place-content-center">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModalSumbit"
              className="bg-primary-blue mx-auto grid w-fit place-content-center rounded-full px-5 py-2 text-center text-xl font-bold text-white"
            >
              Sumbit
            </div>
          </div>
          {/* sumbit modal */}
          <FormPayment
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </form>
      </div>
    </div>
  );
};
export default BillPrinting;
