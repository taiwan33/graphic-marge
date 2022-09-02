import React from "react";

const ReceivedCreate = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create Receipt
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* Create receive  table */}
      <div className="w-padding mt-10">
        <div className="">
          <div className="grid lg:grid-cols-2">
            {/* left items */}
            <div className="">
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">Received Date:</p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border border-t-0 border-r-0 p-2">
                <label htmlFor="" className="text-primary-red font-bold">
                  Company Name:
                </label>
                <div className="flex-grow items-center gap-2 lg:flex">
                  <select
                    onchange="run()"
                    name=""
                    id="company_select"
                    className="w-full p-2"
                  >
                    <option value="Select">Select</option>
                    <option value="One">One</option>
                    <option value="Two">two</option>
                    <option value="Three">three</option>
                    <option value="Four">four</option>
                  </select>
                  <input
                    type="text"
                    defaultValue=""
                    id="company_name"
                    className="border-primary-blue w-full flex-grow border p-2 outline-none"
                    placeholder=" company name"
                  />
                </div>
              </div>
              <div className="border-primary-blue flex items-center gap-2 border border-t-0 px-3">
                <p className="text-primary-red font-bold">Received Details:</p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">
                  Payment giver name:
                </p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">
                  Payment giver Contact:
                </p>
                <input
                  type="number"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex flex-wrap items-center gap-2 border p-3 text-sm">
                <p className="text-primary-red font-bold">Received Mode:</p>
                <input
                  type="radio"
                  name="pay"
                  className="placeholder:text-primary-blue"
                />
                <label htmlFor="">Cash</label>
                <input
                  type="radio"
                  name="pay"
                  className="placeholder:text-primary-blue"
                />
                <label htmlFor="">Cheque</label>
                <input
                  type="radio"
                  name="pay"
                  className="placeholder:text-primary-blue"
                />
                <label htmlFor="">Bank Transfer</label>
                <input
                  type="radio"
                  name="pay"
                  className="placeholder:text-primary-blue"
                />
                <label htmlFor="">Esewa</label>
              </div>
            </div>
            {/* right items */}
            <div className="">
              <div className="border-primary-blue flex items-center gap-2 border border-l-0 px-3">
                <p className="text-primary-red font-bold">Pan no:</p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">Company Address:</p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">
                  Relation with company:
                </p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">Reveived Amount:</p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
            </div>
          </div>
          {/* cheque */}
          <h1 className="text-primary-blue mt-6 text-center font-bold">
            If cheque
          </h1>
          <div className="grid md:grid-cols-2">
            {/* left items */}
            <div className="">
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">Bank Name:</p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">Cheque No:</p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
            </div>
            {/* right items */}
            <div className="">
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">
                  Cheque holder name:
                </p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
              <div className="border-primary-blue flex items-center gap-2 border px-3">
                <p className="text-primary-red font-bold">
                  Cheque exchane date:
                </p>
                <input
                  type="text"
                  className="placeholder:text-primary-blue flex-grow p-3 outline-none"
                />
              </div>
            </div>
          </div>
          {/* bank */}
          <h1 className="text-primary-blue mt-6 text-center font-bold">
            If Bank
          </h1>
          <div className="border-primary-blue flex items-center gap-2 border px-3">
            <p className="text-primary-red font-bold">Bank Name:</p>
            <input
              type="text"
              className="placeholder:text-primary-blue flex-grow p-3 outline-none"
            />
          </div>
          {/* E sewa */}
          <h1 className="text-primary-blue mt-6 text-center font-bold">
            Esewa
          </h1>
          <div className="border-primary-blue flex items-center gap-2 border px-3">
            <p className="text-primary-red font-bold">Esewa number:</p>
            <input
              type="text"
              className="placeholder:text-primary-blue flex-grow p-3 outline-none"
            />
          </div>
          {/* submit button */}
          <div className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
            <a href="">Save</a>
          </div>
          <div className="bg-primary-blue ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
            <a href="">Submit</a>
          </div>
          <div className="bg-primary-blue ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
            <a href="">Approved</a>
          </div>
        </div>
      </div>
      {/* print bill */}
      <section className="mt-10 w-full sm:px-5 md:px-10">
        <div className="flex w-full max-w-[910px] flex-col gap-2 overflow-hidden border-2 border-green-500 p-2 md:mx-auto">
          <div className="flex items-center justify-between text-lg font-medium text-red-500 sm:text-sm md:text-base">
            <h1>
              Redg. No. :<span className="text-cyan-500">10419/075/076</span>
            </h1>
            <h1>
              Redg. No. :<span className="text-cyan-500">10419/075/076</span>
            </h1>
            <h1>
              Redg. No. :<span className="text-cyan-500">10419/075/076</span>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-lg font-bold text-red-600 md:text-3xl">
              Graphic Marg Pvt. Ltd.
            </h1>
            <p className="text-lg font-bold text-cyan-600 sm:text-sm md:text-base">
              Bharatpur-11, Bypass Road, Chitwan
            </p>
            <p className="text-lg font-bold text-red-600 sm:text-sm md:text-base">
              Contact No.:
              <span className="text-cyan-600">056-590279, 9855022279</span>
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-between text-lg font-semibold text-red-500 sm:text-sm md:text-lg">
              <h1>
                Receipt No. : <span className="text-cyan-500">01</span>
              </h1>
              <div className="hidden rounded-tl-xl rounded-br-xl border border-white bg-red-500 py-1 px-2 text-lg text-white shadow-md shadow-black sm:flex sm:text-xl">
                Money Receipt
              </div>
              <h1>
                Date : <span className="text-cyan-500">2079-01-20</span>
              </h1>
            </div>
          </div>
          <div className="sm:sm mt-5 flex flex-col gap-1 text-lg font-medium text-red-500 md:text-lg">
            <div>
              Received From (Company Name) :
              <span className="text-cyan-500">ABC Company</span>
            </div>
            <div className="flex gap-5 sm:gap-16">
              <p>
                Address :
                <span className="text-cyan-500">Bharatpur-11, Chitwan</span>
              </p>
              <p>
                PAN No. : <span className="text-cyan-500">8976776456</span>
              </p>
            </div>
            <div>
              The Sum of Rupees :<span className="text-cyan-500">5000000</span>{" "}
              only.
            </div>
            <div>
              By
              <span className="text-cyan-500">Esewa/Cash/Cheque/Transfer</span>,
              in Payment of Your Account.
            </div>
            <div>Payment Received Details:</div>
            <div className="flex gap-2">
              <p className="text-green-500 underline">If Cheque Received :</p>
              <div>
                Bank Name:
                <span className="text-cyan-500">Machhapuchhre Bank Ltd.</span>
              </div>
            </div>
            <h1 className="flex gap-5 sm:gap-16">
              <p>
                Cheque No. :<span className="text-cyan-500">09895765768</span>
              </p>
              <p>
                Cheque Exchange Date :
                <span className="text-cyan-500">2073-01-05</span>
              </p>
            </h1>
            <div className="flex gap-2">
              <p className="text-green-500 underline">If Bank Transfer :</p>
              <div>
                Bank Name:
                <span className="text-cyan-500">675434556677888</span>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-green-500 underline">If Esewa Transfer :</p>
              <div>
                Esewa Name/Esewa ID :
                <span className="text-cyan-500">98666655554</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 rounded-tl-xl rounded-br-xl border-2 border-red-500 py-1 px-2 text-lg sm:text-xl">
                <p className="rounded-tl-xl rounded-br-xl border-2 border-blue-500 bg-red-500 py-1 px-2 text-lg text-white sm:text-xl">
                  Rs.
                </p>
                <h1 className="rounded-tl-xl rounded-br-xl border-2 border-green-500 py-1 px-2 text-lg text-blue-500 sm:text-xl">
                  <span className="text-green-500">Rs.</span> 150000
                </h1>
              </div>
            </div>
            <div className="sm:sm mt-5 flex flex-col gap-1 border-2 border-pink-400 px-3 py-2 text-lg font-medium text-red-500 md:text-lg">
              <h1 className="text-green-500 underline">Payment Giver's</h1>
              <p>
                Name : <span className="text-cyan-500">Laxmi Pokhrel</span>
              </p>
              <p>
                Contact No. :<span className="text-cyan-500">985656565</span>
              </p>
              <p>
                Re.With Com. : <span className="text-cyan-500">Staff</span>
              </p>
            </div>
            <div className="sm:sm mt-5 flex flex-col gap-1 border-2 border-pink-400 px-3 py-2 text-lg font-medium text-red-500 md:text-lg">
              <h1 className="text-green-500 underline">Payment Receiver's</h1>
              <p>
                Signature :
                <span className="text-cyan-500">........................</span>
              </p>
              <p>
                Name : <span className="text-cyan-500">Ram Pokhrel</span>
              </p>
              <p>
                Post : <span className="text-cyan-500">Manager</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReceivedCreate;
