import React from "react";

const FormSelect = () => {
  return (
    <div className="">
      <div className="px-10 lg:!px-14">
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
                          English मा
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
                          नेपालीमा मा
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
            तपाईले दर्ता गर्न चाहनुभएको प्रस्तावित Company को नाम नेपाली र
            अंग्रेजी दुबै भाषामा प्रस्ट बुझिनेगरी माथिको फर्ममा उल्लेख गर्नुहोस्
            । एउटा कम्पनीको बढिमा ३ वटा सम्म नाम रिजर्भको लागि पेश गर्न सकिनेछ ।
          </p>
        </div>
        {/* others details */}
        <div className="mt-5">
          <p className="text-primary-red text-lg underline">
            2. Others Details
          </p>
          <div className="mt-5">
            <div className="border-primary-blue max-w-3xl border font-bold">
              <div className="border-primary-blue flex flex-col border-b md:flex-row">
                <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
                  कम्पनी रहने ठेगाना
                </p>
                <input
                  type="text"
                  className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                />
              </div>
              <div className="border-primary-blue flex flex-col border-b md:flex-row">
                <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
                  सम्बन्धित ब्यक्तीको नाम
                </p>
                <input
                  type="text"
                  className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                />
              </div>
              <div className="border-primary-blue flex flex-col border-b md:flex-row">
                <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
                  सम्बन्धित ब्यक्तीको सम्पर्क न
                </p>
                <input
                  type="number"
                  className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                />
              </div>
              <div className="border-primary-blue flex flex-col border-b md:flex-row">
                <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
                  कम्पनीको प्रकार
                </p>
                <div className="border-primary-blue flex w-full items-center gap-5 border-t py-2 pl-2 md:border-l md:!py-0">
                  <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border-l p-1 text-white">
                    <label htmlFor="">एकल</label>
                    <input type="radio" name="radio-btn" id="" />
                  </div>
                  <div className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
                    <label htmlFor="">बहुल</label>
                    <input type="radio" name="radio-btn" id="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="">
                  <div className="border-primary-blue flex flex-col border-b md:flex-row">
                    <p className="text-primary-red px-5 py-2 sm:!w-[355px]">
                      जम्मा शेयर सदस्य संख्या
                    </p>
                    <input
                      type="number"
                      className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                    />
                  </div>
                  <div className="border-primary-blue flex flex-col border-b md:flex-row">
                    <p className="text-primary-red px-5 py-2 sm:!w-[355px]">
                      अधिकृत पुँजी
                    </p>
                    <input
                      type="number"
                      className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                    />
                  </div>
                  <div className="border-primary-blue flex flex-col md:flex-row">
                    <p className="text-primary-red px-5 py-2 sm:!w-[355px]">
                      जारी तथा चुक्ता पुँजी
                    </p>
                    <input
                      type="number"
                      className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                    />
                  </div>
                </div>
                <div className="border-primary-blue text-primary-blue grid place-content-center bg-pink-100 py-5 text-center md:border-l">
                  <p className="w-56">
                    शेयर सदस्य तथा पुँजी आधारमा तपाईको जम्मा लाग्ने रकम
                    <span className="text-primary-red text-xl">
                      रु.३०,००००।–
                    </span>
                    मात्र
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing details */}
        <div className="mt-5">
          <div className="border-primary-red text-primary-blue w-fit rounded-full border-2 p-2 text-xl">
            Pvt. Ltd. Company दर्ता शुल्क सम्बन्धि पूर्ण जानकारी लिनको लागि यहाँ
            गर्नुहोस
            <span
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLg"
              className="text-primary-red cursor-pointer"
            >
              Click
            </span>
            गर्नुहोस ।
          </div>
        </div>
        {/* share holder details */}
        <div className="mt-5">
          <p className="text-primary-red text-lg underline">
            3. Details of Share Holders
            <span className="text-primary-blue underline">
              (शेयर सदस्य तथा साँक्षीहरुको विवरण) (प्रा.लि. कम्पनीमा बढिमा १०१
              जना सम्म सदस्य रहन सकिन्छ ।)
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
                        <td className="border-primary-blue  text-primary-red border text-lg font-bold">
                          क्र. स.
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          शेयर सदस्यहरुको नाम
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          हालको ठेगाना
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          शेयर रकम
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          शेयर सदस्यको नागरिकता
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          साँक्षीको नाम
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          साँक्षीको ठेगाना
                        </td>
                        <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                          साँक्षीको नागरिकता
                        </td>
                        <td className="border-primary-blue boder border-r border-t px-5" />
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
              (कम्पनीले गर्ने मुख्य मुख्य कामहरु सहितको उद्देश्यहरु)
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
              (तपाईले दर्ता गर्न खोज्नुभएको कम्पनी रहने ठेगाना नजिक हाम्रो कुन
              शाखा नजिक पर्छ छनोट गर्नुहोस् ।)
            </span>
          </p>
          {/* radion buttons */}
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
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModalSumbit"
            className="bg-primary-blue mx-auto grid w-fit place-content-center rounded-full px-5 py-2 text-center text-xl font-bold text-white"
          >
            Sumbit
          </button>
        </div>
        {/* sumbit modal */}
        <div
          className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalSumbit"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg pointer-events-none relative w-auto">
            <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div className="flex justify-end">
                <svg
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="text-primary-blue h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                  />
                </svg>
              </div>
              <div className="modal-header rounded-t-md border-b border-gray-200 p-4">
                <h5
                  className="text-primary-red -mt-5 text-center text-2xl font-bold"
                  id="exampleModalXlLabel"
                >
                  तपाईले गर्नुभएको फाईल हाम्रो कर्मचारीहरुले हेर्दै हुनुहुन्छ ।
                </h5>
              </div>
              <div className="modal-body font-Palanquin relative m-3 p-4">
                <div className="slg:!flex-row border-primary-blue flex flex-col items-stretch border-r">
                  <p className="text-primary-blue border-primary-blue flex-1 border p-3 text-lg font-bold">
                    तपाईले अहिले
                    <span className="text-primary-red">Sumbit</span> गर्नुभएको
                    कामको लागि लाग्ने जम्मा रकम
                  </p>
                  <input
                    type="number"
                    className="text-primary-red border-primary-blue slg:!border-l-0 h-full border-l border-t border-b-0 py-[14px] px-3 text-lg"
                    name=""
                    id=""
                  />
                </div>
                <div className="slg:!flex-row flex flex-col items-stretch">
                  <p className="text-primary-blue border-primary-blue flex-1 border p-3 text-lg font-bold">
                    तपाईले अन्य कामहरुको भुक्तानी गर्न बाँकी रहेको पुरानो रकम
                  </p>
                  <input
                    type="number"
                    className="text-primary-red border-primary-blue slg:!border-l-0 h-full border py-[14px] px-3 text-lg"
                    name=""
                    id=""
                  />
                </div>
                <div className="slg:!flex-row flex flex-col items-stretch">
                  <p className="text-primary-blue border-primary-blue flex-1 border p-3 text-lg font-bold">
                    तपाईले हामीलाई भुक्तानी गर्नुपर्ने सबै जम्मा रकम
                    <span className="text-primary-red">
                      (पुरानो बाँकी सहित)
                    </span>
                  </p>
                  <p className="text-primary-red slg:!w-[239px] border-primary-blue border p-3 text-xl">
                    Rs.49500|-
                  </p>
                </div>
                <div className="slg:!flex-row flex flex-col items-stretch">
                  <p className="text-primary-blue border-primary-blue flex-1 border p-3 text-lg font-bold">
                    तपाईले अहिले कम्तिमा भुक्तानी गर्नुपर्ने रकम
                    <span className="text-primary-red">
                      (जम्मा रकामको ५० %)
                    </span>
                  </p>
                  <p className="text-primary-red slg:!w-[239px] border-primary-blue border p-3 text-xl">
                    Rs.49500|-
                  </p>
                </div>
                <div className="bg-primary-blue mt-5 rounded-full p-3 text-center text-sm font-bold text-white sm:!text-base md:!text-lg">
                  तल दिईएका भुक्तानीका माध्यामहरुबाट Payment गर्नुभएमा मात्र
                  तपाईको थप काम अगाडी बढ्नेछ ।
                </div>
                {/* payment details */}
                <div className="mt-5">
                  <div className="text-center">
                    <h1 className="text-primary-red text-2xl font-bold">
                      Our Payment Details
                    </h1>
                  </div>
                  <div className="">
                    {/* tab  */}
                    <div className="p-3 md:!p-10">
                      <ul className="tabs font-Acme border-primary-red m-0 grid list-none grid-cols-1 place-content-between gap-5 rounded-3xl border-2 p-3 text-xl md:grid-cols-2">
                        <li
                          data-tab-target="#first"
                          className="active tab cursor-pointer rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold"
                        >
                          <p>Bank Details</p>
                        </li>
                        <li
                          data-tab-target="#second"
                          className="tab cursor-pointer rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold opacity-70"
                        >
                          <p className="">Fone Pay Details</p>
                        </li>
                        <li
                          data-tab-target="#third"
                          className="tab cursor-pointer rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold"
                        >
                          <p>e-Sewa Details</p>
                        </li>
                        <li
                          data-tab-target="#fourth"
                          className="tab cursor-pointer rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold"
                        >
                          <p>Others Details</p>
                        </li>
                      </ul>
                      {/* tab contents */}
                      <div className="tab-content mx-3">
                        {/* first items */}
                        <div id="first" data-tab-content="" className="active">
                          {/* bank details */}
                          <div className="mt-10 font-bold">
                            <h1 className="text-primary-blue font-Rakkas text-center text-4xl font-bold underline">
                              Bank Details
                            </h1>
                            {/* bank A */}
                            <div className="font-Bree">
                              <p className="text-primary-red mt-5 text-center text-xl font-bold">
                                Bank:
                                <span className="text-primary-blue">A</span>
                                (Garima Bikas Bank Ltd.)
                              </p>
                              <div className="mt-5">
                                {/* left items details */}
                                <div className="">
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
                                <span className="text-primary-blue">B</span>
                                (Machhapuchhre Bank Ltd.)
                              </p>
                              <div className="mt-5">
                                {/* left items details */}
                                <div className="lg:col-span-2">
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
                                <span className="text-primary-blue">C</span>
                                (NMB Bank Ltd.) for Use Only Press
                              </p>
                              <div className="mt-5">
                                {/* left items details */}
                                <div className="lg:col-span-2">
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
                        <div className="mt-10" id="second" data-tab-content="">
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
                              <span className="text-primary-blue">1</span> (Used
                              for Graphic Marg Pvt. Ltd)
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
                                  src="./images/esewa_payment.png"
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
                              <span className="text-primary-blue">2</span> (Used
                              for Press Only)
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
                                  src="./images/esewa_payment.png"
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
                                <span className="text-primary-blue">1</span>
                                (Janachetana Multiple Co-Operative Society Ltd.)
                              </p>
                              {/* left items details */}
                              <div className="mt-10 grid place-content-center">
                                {/* cooperative name */}
                                <div className="border-primary-blue items-center border-2 sm:flex">
                                  <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                    Co-Operative Name
                                  </p>
                                  <p className="text-primary-blue border-primary-blue p-2">
                                    Janachetana Multiple Co-Operative Society
                                    Ltd.
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
                                <span className="text-primary-blue">2</span>
                                (Samunnat Saving &amp; Credit Co-Operative Ltd.)
                              </p>
                              {/* left items details */}
                              <div className="mt-10 grid place-content-center">
                                {/* cooperative name */}
                                <div className="border-primary-blue items-center border-2 sm:flex">
                                  <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                    Co-Operative Name
                                  </p>
                                  <p className="text-primary-blue border-primary-blue p-2">
                                    Samunnat Saving &amp; Credit Co-Operative
                                    Ltd.
                                  </p>
                                </div>
                                {/* branch address */}
                                <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                                  <p className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                                    Branch Address
                                  </p>
                                  <p className="text-primary-blue border-primary-blue p-2">
                                    Bharatpur-10, Bal Mandir Road, Chitwan
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
                                <span className="text-primary-blue">3</span>
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
                                    Bharatpur-10, Chaubiskothi, Chitwan
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
                <div className="bg-primary-red mt-5 rounded-full p-3 text-center text-sm font-bold text-white">
                  माथि दिईएका भुक्तानीका माध्यामहरुबाट
                  <span className="text-lg text-yellow-200">Payment</span>
                  गरिसकेपछि भुक्तानी रसिद
                  <span className="text-lg text-yellow-200">Submit</span>
                  गर्नुहोस् ।
                </div>
                {/* buttons */}
                <div className="mt-5 flex flex-col items-center justify-between slg:!flex-row">
                  <div className="">
                    <a
                      href=""
                      className="bg-primary-green rounded-full p-2 font-bold text-white sm:text-xl"
                    >
                      Go to dashboard
                    </a>
                  </div>
                  <div className="mt-10 flex flex-col items-center gap-4 slg:!mt-0 slg:!flex-row">
                    <input
                      type="file"
                      name=""
                      className="file:bg-primary-blue cursor-pointer file:rounded-full file:text-white sm:!w-44"
                      id=""
                    />
                    <a
                      href=""
                      className="bg-primary-blue rounded-full p-2 font-bold text-white sm:text-xl"
                    >
                      Upload Proof
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSelect;
