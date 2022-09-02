import React from "react";

const FormPayment = () => {
  return (
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
                <span className="text-primary-red">Sumbit</span> गर्नुभएको कामको
                लागि लाग्ने जम्मा रकम
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
                <span className="text-primary-red">(पुरानो बाँकी सहित)</span>
              </p>
              <p className="text-primary-red slg:!w-[239px] border-primary-blue border p-3 text-xl">
                Rs.49500|-
              </p>
            </div>
            <div className="slg:!flex-row flex flex-col items-stretch">
              <p className="text-primary-blue border-primary-blue flex-1 border p-3 text-lg font-bold">
                तपाईले अहिले कम्तिमा भुक्तानी गर्नुपर्ने रकम
                <span className="text-primary-red">(जम्मा रकामको ५० %)</span>
              </p>
              <p className="text-primary-red slg:!w-[239px] border-primary-blue border p-3 text-xl">
                Rs.49500|-
              </p>
            </div>
            <div className="bg-primary-blue mt-5 rounded-full p-3 text-center text-sm font-bold text-white sm:!text-base md:!text-lg">
              तल दिईएका भुक्तानीका माध्यामहरुबाट Payment गर्नुभएमा मात्र तपाईको
              थप काम अगाडी बढ्नेछ ।
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
                              <img src="../images/qr.png" className="" alt="" />
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
                              <img src="../images/qr.png" className="" alt="" />
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
                              <img src="../images/qr.png" className="" alt="" />
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
                          Esewa :<span className="text-primary-blue">1</span>{" "}
                          (Used for Graphic Marg Pvt. Ltd)
                        </p>
                        <p className="text-primary-red mt-5 text-center text-lg font-bold">
                          Esewa Id:
                          <span className="text-primary-blue">9855022279</span>
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
                          Esewa :<span className="text-primary-blue">2</span>{" "}
                          (Used for Press Only)
                        </p>
                        <p className="text-primary-red mt-5 text-center text-lg font-bold">
                          Esewa Id:
                          <span className="text-primary-blue">9846901357</span>
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
                                Janachetana Multiple Co-Operative Society Ltd.
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
                                Samunnat Saving &amp; Credit Co-Operative Ltd.
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
                <button
                  type="submit"
                  className="bg-primary-blue rounded-full p-2 font-bold text-white sm:text-xl"
                >
                  Upload Proof
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPayment;
