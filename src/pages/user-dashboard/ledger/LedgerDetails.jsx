import React from "react";
import Images from "../../../media/images";

const LedgerDetails = () => {
  return (
    <div className="">
      <h1 className="text-primary-red font-Rakkas mt-2 text-center text-3xl font-bold lg:!mt-6">
        Ledger Details
      </h1>
      <div className="">
        <img src={Images.title_border} alt="" className="mx-auto mt-4" />
      </div>
      {/* table */}
      <div className="mt-3 w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="font-Bree bg-primary-red border-primary-blue border font-bold">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        SN.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        <p>Transaction Date</p>
                        <p>(कारोबार मिति)</p>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        <p>Transaction Details</p>
                        <p>(कारोबार विवरण )</p>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        <p>Dr.Amount</p>
                        <p>(भुक्तानी गरेको )</p>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        <p>Cr. Amount</p>
                        <p>(काम गरेको दिनुपर्ने )</p>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        <p>Balance</p>
                        <p>(लिनु/दिनु/बाँकी )</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    <tr className="border-primary-blue border bg-white">
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        2078-9-10
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        New company registration
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        20,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        30,000
                      </td>
                      <td className="text-primary-blue border-primary-blue whitespace-nowrap border px-6">
                        10,000
                      </td>
                      {/* <td
                          data-bs-toggle="modal"
                          data-bs-target="#paymentModal"
                          className="bg-primary-green mt-1 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                        >
                          PAY
                        </td> */}
                    </tr>
                    {/* total */}
                    <tr className="border-primary-red border-2 bg-white">
                      <td className="text-primary-red whitespace-nowrap px-6 py-4 text-xl font-bold">
                        Total:
                      </td>
                      <td />
                      <td />
                      <td className="text-primary-red whitespace-nowrap px-6 py-4 text-xl font-bold">
                        999,000
                      </td>
                      <td className="text-primary-red whitespace-nowrap px-6 py-4 text-xl font-bold">
                        999,000
                      </td>
                      <td className="text-primary-red whitespace-nowrap px-6 py-4 text-xl font-bold">
                        999,000
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* buttons */}
                <div className="flex justify-between">
                  {/* pay button */}
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#paymentModal"
                    className="bg-primary-green font-Berkshire m-10 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-green-700"
                  >
                    PAY
                  </div>
                  <div
                    data-bs-toggle="modal"
                    data-bs-target="#proofModal"
                    className="bg-primary-blue font-Berkshire m-10 inline-flex cursor-pointer whitespace-nowrap rounded-lg py-3 px-5 text-sm font-bold text-white hover:bg-blue-700"
                  >
                    Upload Proof
                  </div>
                </div>
                {/* payment modal */}
                <div
                  className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                  id="paymentModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalCenterTitle"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered pointer-events-none relative !max-w-[800px]">
                    <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding p-5 text-current shadow-lg outline-none">
                      {/* close btn */}
                      <span className="flex justify-end">
                        <button
                          type="button"
                          className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </span>
                      {/* modal content */}
                      <div className="modal-body relative p-1 sm:p-4">
                        <div className="border-primary-red rounded-lg border p-1">
                          <div className="bg-primary-red font-Laila rounded-xl px-1 py-1 text-center text-xl font-medium text-white sm:px-3">
                            तपाईंले
                            <span className="text-yellow-300">Submit</span>
                            गर्नुभएको फाईल हाम्रो कर्मचारीहरूले हेर्दै हुनुहुन्छ
                          </div>
                          {/* table */}
                          <div className="grid place-content-center overflow-x-scroll">
                            <table className="mt-6">
                              <tbody>
                                <tr className="border-primary-blue border">
                                  <td className="border-primary-blue font-Laila text-primary-blue border px-4 py-2">
                                    तपाईले अहिले Submit गर्नुभएको कामको लागि
                                    लाग्ने जम्मा रकम
                                  </td>
                                  <td className="border-primary-blue text-primary-red border px-4 py-2">
                                    Rs.30000/
                                  </td>
                                </tr>
                                <tr className="border-primary-blue border">
                                  <td className="border-primary-blue font-Laila text-primary-blue border px-4 py-2">
                                    तपाईले अहिले Submit गर्नुभएको कामको लागि
                                    लाग्ने जम्मा रकम
                                  </td>
                                  <td className="border-primary-blue text-primary-red border px-4 py-2">
                                    Rs.30000/
                                  </td>
                                </tr>
                                <tr className="border-primary-blue border">
                                  <td className="border-primary-blue font-Laila text-primary-blue border px-4 py-2">
                                    तपाईले अहिले Submit गर्नुभएको कामको लागि
                                    लाग्ने जम्मा रकम
                                  </td>
                                  <td className="border-primary-blue text-primary-red border px-4 py-2">
                                    Rs.30000/
                                  </td>
                                </tr>
                                <tr className="border-primary-blue border">
                                  <td className="border-primary-blue font-Laila text-primary-blue border px-4 py-2">
                                    तपाईले अहिले Submit गर्नुभएको कामको लागि
                                    लाग्ने जम्मा रकम
                                  </td>
                                  <td className="border-primary-blue text-primary-red border px-4 py-2">
                                    Rs.30000/
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="bg-primary-blue mt-5 rounded-lg px-2 py-1 text-center text-white">
                            तल दिईएका भुक्तानीका माध्यामहरूबाट
                            <span className="text-lg text-yellow-300">
                              Payment
                            </span>
                            गर्नुभएमा मात्र तपाईको थप काम अगाडी बढ्नेछ
                          </div>
                          {/* payment details */}
                          <div className="mt-10">
                            <div className="text-center">
                              <h1 className="title-style !text-xl">
                                Our Payment Details
                              </h1>
                            </div>
                            <div className="">
                              {/* tab  */}
                              <div className="p-3">
                                <ul className="tabs font-Acme border-primary-red m-0 grid list-none grid-cols-1 place-content-between gap-5 rounded-3xl border-2 p-3 text-xl md:grid-cols-2 lg:grid-cols-4">
                                  <li
                                    data-tab-target="#first"
                                    className="active tab cursor-pointer rounded-full bg-[#DFF1E7] py-1.5 text-center text-sm font-bold"
                                  >
                                    <p>Bank Details</p>
                                  </li>
                                  <li
                                    data-tab-target="#second"
                                    className="tab cursor-pointer rounded-full bg-[#DFF1E7] py-1.5 text-center text-sm font-bold"
                                  >
                                    <p className="">Fone Pay Details</p>
                                  </li>
                                  <li
                                    data-tab-target="#third"
                                    className="tab cursor-pointer rounded-full bg-[#DFF1E7] py-1.5 text-center text-sm font-bold"
                                  >
                                    <p>e-Sewa Details</p>
                                  </li>
                                  <li
                                    data-tab-target="#fourth"
                                    className="tab cursor-pointer rounded-full bg-[#DFF1E7] py-1.5 text-center text-sm font-bold"
                                  >
                                    <p>Others Details</p>
                                  </li>
                                </ul>
                                {/* tab contents */}
                                <div className="tab-content mx-3">
                                  {/* first items */}
                                  <div
                                    id="first"
                                    data-tab-content=""
                                    className="active"
                                  >
                                    {/* bank details */}
                                    <div className="mt-10 font-bold">
                                      <h1 className="text-primary-blue font-Rakkas text-center text-4xl font-bold underline">
                                        Bank Details
                                      </h1>
                                      {/* bank A */}
                                      <div className="font-Bree">
                                        <p className="text-primary-red mt-5 text-center text-xl font-bold">
                                          Bank:
                                          <span className="text-primary-blue">
                                            A
                                          </span>
                                          (Garima Bikas Bank Ltd.)
                                        </p>
                                        <div className="mt-5 flex flex-wrap items-center justify-center">
                                          {/* left items details */}
                                          <div className="w-full sm:!w-auto">
                                            {/* bank name */}
                                            <div className="border-primary-blue items-center border-2 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Bank Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                Garima Bikash Bank
                                              </p>
                                            </div>
                                            {/* branch name */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Branch Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                Malpot Chowk
                                              </p>
                                            </div>
                                            {/* A/C Holder Name */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                A/C Holder Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                Graphic Marg Pvt. Ltd.
                                              </p>
                                            </div>
                                            {/* a/c number */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                A/C Number
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                03700100753960000001
                                              </p>
                                            </div>
                                            {/* bank contact number */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Bank Contact Number
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                056-533275
                                              </p>
                                            </div>
                                          </div>
                                          {/* qr code */}
                                          <div className="border-primary-blue h-auto border-2 sm:w-[13.13rem] lg:!border-l-0">
                                            <img
                                              src="../images/qr.png"
                                              className=""
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/* bank B */}
                                      <div className="font-Bree mt-10">
                                        <p className="text-primary-red mt-5 text-center text-xl font-bold">
                                          Bank:
                                          <span className="text-primary-blue">
                                            B
                                          </span>
                                          (Machhapuchhre Bank Ltd.)
                                        </p>
                                        <div className="mt-5 flex flex-wrap items-center justify-center">
                                          <div className="" />
                                          {/* left items details */}
                                          <div className="w-full sm:!w-auto">
                                            {/* bank name */}
                                            <div className="border-primary-blue items-center border-2 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Bank Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 flex-shrink-0 p-2">
                                                Machhapuchhre Bank Ltd.
                                              </p>
                                            </div>
                                            {/* branch name */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Branch Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                Hakim Chowk
                                              </p>
                                            </div>
                                            {/* A/C Holder Name */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                A/C Holder Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                Graphic Marg Pvt. Ltd.
                                              </p>
                                            </div>
                                            {/* a/c number */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                A/C Number
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                1400084086600011
                                              </p>
                                            </div>
                                            {/* bank contact number */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Bank Contact Number
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                056-590976
                                              </p>
                                            </div>
                                          </div>
                                          {/* qr code */}
                                          <div className="border-primary-blue h-auto border-2 sm:w-[13.13rem] lg:!border-l-0">
                                            <img
                                              src="../images/qr.png"
                                              className=""
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/* bank C */}
                                      <div className="font-Bree mt-10">
                                        <p className="text-primary-red mt-5 text-center text-xl font-bold">
                                          Bank:
                                          <span className="text-primary-blue">
                                            C
                                          </span>
                                          (NMB Bank Ltd.) for Use Only Press
                                        </p>
                                        <div className="mt-5 flex flex-wrap items-center justify-center">
                                          <div className="col-span" />
                                          {/* left items details */}
                                          <div className="w-full sm:!w-auto">
                                            {/* bank name */}
                                            <div className="border-primary-blue items-center border-2 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Bank Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                NMB Bank Ltd.
                                              </p>
                                            </div>
                                            {/* branch name */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Branch Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                NGT Mainroad
                                              </p>
                                            </div>
                                            {/* A/C Holder Name */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                A/C Holder Name
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                Graphic Marg Pvt. Ltd.
                                              </p>
                                            </div>
                                            {/* a/c number */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                A/C Number
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                156014448900015
                                              </p>
                                            </div>
                                            {/* bank contact number */}
                                            <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                              <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                                Bank Contact Number
                                              </p>
                                              <p className="text-primary-blue border-primary-blue w-56 p-2">
                                                056-596862
                                              </p>
                                            </div>
                                          </div>
                                          {/* qr code */}
                                          <div className="border-primary-blue h-auto border-2 sm:w-[13.13rem] lg:!border-l-0">
                                            <img
                                              src="../images/qr.png"
                                              className=""
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* second items */}
                                  <div
                                    className="mt-10"
                                    id="second"
                                    data-tab-content=""
                                  >
                                    {/* fone pay details */}
                                    <h1 className="text-primary-red font-Rakkas text-center text-xl font-bold underline">
                                      Fone Pay Details
                                    </h1>
                                    <p className="text-primary-red mt-5 text-center text-lg font-bold underline">
                                      Fone Pay Transfer Bank:
                                      <span className="text-primary-blue font-Acme">
                                        Garima Bikas Bank Ltd.
                                      </span>
                                    </p>
                                    <div className="mt-5 grid place-content-center">
                                      <img
                                        src="../images/qr.png"
                                        className="border-primary-red border-2 p-2 sm:w-56"
                                        alt=""
                                      />
                                    </div>
                                    <div className="mt-5 grid place-content-center">
                                      <p className="border-primary-blue font-Acme text-primary-red border-2 p-2 text-lg font-bold">
                                        Fone Pay contact no:
                                        <span className="text-primary-blue font-semibold">
                                          9811111111
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  {/* third item */}
                                  <div
                                    className="font-Acme mt-10"
                                    id="third"
                                    data-tab-content=""
                                  >
                                    {/* esewa details for graphic marg */}
                                    <div>
                                      <h1 className="text-primary-red font-Rakkas mt-10 text-center text-xl font-bold underline">
                                        Esewa Details
                                      </h1>
                                      <p className="text-primary-red mt-5 text-center text-lg font-bold underline">
                                        Esewa :
                                        <span className="text-primary-blue">
                                          1
                                        </span>
                                        (Used for Graphic Marg Pvt. Ltd)
                                      </p>
                                      <p className="text-primary-red mt-5 text-center text-lg font-bold">
                                        Esewa Id:
                                        <span className="text-primary-blue">
                                          9855022279
                                        </span>
                                      </p>
                                      <div className="grid place-content-center">
                                        <div className="border-primary-red mt-5 inline-block border-2">
                                          <img
                                            src="../images/esewa_payment.png"
                                            className="mx-auto h-10"
                                            alt=""
                                          />
                                          <img
                                            src="../images/qr.png"
                                            className="p-2 sm:w-56"
                                            alt=""
                                          />
                                          <p className="text-primary-red text-center text-xl font-bold underline">
                                            Janak Khadka
                                          </p>
                                          <p className="text-primary-blue border-primary-green mt-2 border-b-2 text-center text-xl font-bold">
                                            9846901357
                                          </p>
                                          <p className="text-primary-blue mt-2 text-center font-bold underline">
                                            For
                                          </p>
                                          <p className="text-primary-red text-center text-xl font-bold">
                                            Graphic Marg Pvt. Ltd
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    {/* esewa details for press */}
                                    <div className="mt-10">
                                      <p className="text-primary-red mt-5 text-center text-lg font-bold underline">
                                        Esewa :
                                        <span className="text-primary-blue">
                                          2
                                        </span>
                                        (Used for Press Only)
                                      </p>
                                      <p className="text-primary-red mt-5 text-center text-lg font-bold">
                                        Esewa Id:
                                        <span className="text-primary-blue">
                                          9846901357
                                        </span>
                                      </p>
                                      <div className="grid place-content-center">
                                        <div className="border-primary-red mt-5 inline-block border-2">
                                          <img
                                            src="../images/esewa_payment.png"
                                            className="mx-auto h-10"
                                            alt=""
                                          />
                                          <img
                                            src="../images/qr.png"
                                            className="p-2 sm:w-56"
                                            alt=""
                                          />
                                          <p className="text-primary-red text-center text-xl font-bold underline">
                                            Janak Khadka
                                          </p>
                                          <p className="text-primary-blue border-primary-green mt-2 border-b-2 text-center text-xl font-bold">
                                            9846901357
                                          </p>
                                          <p className="text-primary-blue mt-2 text-center font-bold underline">
                                            For
                                          </p>
                                          <p className="text-primary-red text-center text-xl font-bold">
                                            Graphic Marg Pvt. Ltd
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="font-Acme mt-10"
                                    id="fourth"
                                    data-tab-content=""
                                  >
                                    {/* other details */}
                                    <div className="mt-10 font-bold">
                                      <h1 className="text-primary-red font-Rakkas text-center text-xl font-bold underline">
                                        Co-Operative &amp; Group A/C Details
                                      </h1>
                                      {/* cooperative 1 */}
                                      <div className="">
                                        <p className="text-primary-red mt-5 text-center text-xl font-bold">
                                          Co-Operative:
                                          <span className="text-primary-blue">
                                            1
                                          </span>
                                          (Janachetana Multiple Co-Operative
                                          Society Ltd.)
                                        </p>
                                        {/* left items details */}
                                        <div className="mt-10 grid place-content-center">
                                          {/* cooperative name */}
                                          <div className="border-primary-blue items-center border-2 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Co-Operative Name
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Janachetana Multiple Co-Operative
                                              Society Ltd.
                                            </p>
                                          </div>
                                          {/* branch address */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Branch Address
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Bharatpur-12, Bypass Road, Chitwan
                                            </p>
                                          </div>
                                          {/* A/C Holder Name */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              A/C Holder's Name
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Janak Khadka
                                            </p>
                                          </div>
                                          {/* a/c number */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              A/C Number
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              NS-01-631 (MR-01-775)
                                            </p>
                                          </div>
                                          {/* account type*/}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Account Type
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Normal Saving
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      {/* cooperative  2*/}
                                      <div className="mt-10">
                                        <p className="text-primary-red font-Rakkas mt-5 text-center text-xl font-bold">
                                          Co-Operative:
                                          <span className="text-primary-blue">
                                            2
                                          </span>
                                          (Samunnat Saving &amp; Credit
                                          Co-Operative Ltd.)
                                        </p>
                                        {/* left items details */}
                                        <div className="mt-10 grid place-content-center">
                                          {/* cooperative name */}
                                          <div className="border-primary-blue items-center border-2 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Co-Operative Name
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Samunnat Saving &amp; Credit
                                              Co-Operative Ltd.
                                            </p>
                                          </div>
                                          {/* branch address */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Branch Address
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Bharatpur-10, Bal Mandir Road,
                                              Chitwan
                                            </p>
                                          </div>
                                          {/* A/C Holder Name */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              A/C Holder's Name
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Janak Khadka (1453)
                                            </p>
                                          </div>
                                          {/* a/c number */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              A/C Number
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              321344/2601129
                                            </p>
                                          </div>
                                          {/* account type*/}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Account Type
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              General Saving
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      {/* cooperative 3 */}
                                      <div className="mt-10">
                                        <p className="text-primary-red font-Rakkas mt-5 text-center text-xl font-bold">
                                          Co-Operative:
                                          <span className="text-primary-blue">
                                            3
                                          </span>
                                          (V-Group Saving Fund)
                                        </p>
                                        {/* left items details */}
                                        <div className="mt-10 grid place-content-center">
                                          {/* cooperative name */}
                                          <div className="border-primary-blue items-center border-2 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Co-Operative Name
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              V-Group Saving Fund
                                            </p>
                                          </div>
                                          {/* branch address */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Branch Address
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Bharatpur-10, Chaubiskothi,
                                              Chitwan
                                            </p>
                                          </div>
                                          {/* A/C Holder Name */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              A/C Holder's Name
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Janak Khadka
                                            </p>
                                          </div>
                                          {/* a/c number */}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              A/C Number
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              1212121
                                            </p>
                                          </div>
                                          {/* account type*/}
                                          <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                            <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                              Account Type
                                            </p>
                                            <p className="text-primary-blue border-primary-blue p-2">
                                              Monthly Saving
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2 p-4">
                            <label
                              htmlFor="c-name"
                              className="font-semibold text-primary-blue"
                            >
                              Upload a proof
                              <span className="text-primary-red">*</span>
                            </label>
                            <input
                              required=""
                              type="file"
                              className="order-input border border-primary-blue w-full"
                            />
                          </div>
                        </div>
                      </div>
                      {/* end model content */}
                      {/* buttons */}
                      <div className="font-Berkshire flex justify-center gap-10">
                        <div className="animation bg-primary-green mx-4 mt-4 rounded-lg text-center hover:bg-green-700">
                          <button
                            className="w-fit py-3 px-10 text-lg font-bold text-white"
                            type="submit"
                          >
                            Upload Proof
                          </button>
                        </div>
                        <div className="animation bg-primary-blue mx-4 mt-3 rounded-lg text-center hover:bg-blue-700">
                          <a
                            href="./ledger-details.html"
                            className="w-fit py-3 px-10 text-lg font-bold text-white"
                            type="submit"
                          >
                            Go back to dashboard
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of Payment modal */}
                {/* upload proof modal */}
                <div
                  className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                  id="proofModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalCenterTitle"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered pointer-events-none relative w-auto">
                    <div className="modal-content !text-primary-blue pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding p-5 text-current shadow-lg outline-none">
                      <div className="modal-header border-primary-blue flex flex-shrink-0 items-center justify-between rounded-t-md border p-4">
                        <h5
                          className="text-xl font-medium leading-normal"
                          id="exampleModalScrollableLabel"
                        >
                          Upload Payment Proof
                        </h5>
                        <button
                          type="button"
                          className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body relative p-4">
                        <h1>Tapaile vuktani garnu vayeko rakam 000</h1>
                        <div className="mt-3">
                          <h1>vuktani garnu vayeko madhyam</h1>
                        </div>
                      </div>
                      <hr />
                      <div className="mt-3 grid grid-cols-4">
                        <div className="">
                          <input
                            type="radio"
                            name="pay"
                            defaultValue="Cash"
                            id=""
                            className="h-4 w-4"
                          />
                          <label htmlFor="" className="font-bold">
                            Cash
                          </label>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="pay"
                            defaultValue="Cash"
                            id=""
                            className="h-4 w-4"
                          />
                          <label htmlFor="" className="font-bold">
                            Bank
                          </label>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="pay"
                            defaultValue="Cash"
                            id=""
                            className="h-4 w-4"
                          />
                          <label htmlFor="" className="font-bold">
                            Esewa
                          </label>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="pay"
                            defaultValue="Cash"
                            id=""
                            className="h-4 w-4"
                          />
                          <label htmlFor="" className="font-bold">
                            Fonpay
                          </label>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="pay"
                            defaultValue="Cash"
                            id=""
                            className="h-4 w-4"
                          />
                          <label htmlFor="" className="font-bold">
                            QR
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="flex flex-col space-y-2 p-4">
                        <label htmlFor="c-name" className="font-semibold">
                          Upload a proof
                          <span className="text-primary-red">*</span>
                        </label>
                        <input
                          required=""
                          type="file"
                          className="order-input w-full"
                        />
                      </div>
                      <div className="animation bg-primary-green mx-4 mt-4 inline-flex rounded-lg text-center hover:bg-green-700">
                        <button
                          className="w-full py-3 px-10 text-xl font-bold text-white"
                          type="submit"
                        >
                          Upload Proof
                        </button>
                      </div>
                      <div className="animation bg-primary-blue mx-4 mt-3 mb-10 inline-flex rounded-lg text-center hover:bg-blue-700">
                        <a
                          href="./ledger-details.html"
                          className="w-full py-3 px-10 text-xl font-bold text-white"
                          type="submit"
                        >
                          Go back to dashboard
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of upload proof modal */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end table */}
    </div>
  );
};

export default LedgerDetails;
