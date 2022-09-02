import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import BackButton from "../../../../components/common/backbutton/BackButton";
import FormPayment from "../../../../components/common/forms/FormPayment";


const BillPrinting = () => {
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const { slug } = useParams();
  console.log(slug);
  const onSubmit = (data) => {
    console.log(data);
    console.log(state);
  };
  return (
    <>
      <div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="px-10 lg:!px-14">
            <h1 className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
              {/* {slug.split("-")[0]} */}
              Bill Printing
            </h1>
            {/* company name details */}
            <div className="mt-5">
              <BackButton/>


              <div className="flex justify-between">
                <p className=" text-lg ">
                  बिल छपाईको लागि निम्नुसारको विवरण भरेर अर्डर गर्नुहोस ।
                </p>
                <p className="text-primary-red flex">
                  Firm No.
                  <p className=" text-primary-blue"> 1234</p>
                </p>
              </div>


              <div className="mt-4">
                <div className="flex-col flex md:flex-row flex-wrap">
                  <div className="flex flex-1 flex-wrap  border items-center m-0 px-2 border-primary-blue">
                  <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                  बिल छाप्ने कम्पनी वा ब्यवसायको नाम :
                    </label>
                    <input
                      type="text"
                      placeholder="e.g भरतपुर ट्रेदिङ् प्रा.ली."
                      name="company_name"
                      className=" text-primary-blue w-[60%] m-0  py-3 px-3 outline-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-wrap w-fit  border md:border-l-0 px-2 items-center border-primary-blue">
                  <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                  कम्पनीको ठेगाना :
                    </label>
                    <input
                      type="text"
                      placeholder="e.g भरतपुर - ११ , चितवन"
                      name="address"
                      className=" text-primary-blue w-[60%] flex-shrink-0 m-0  py-3 px-3 outline-none"
                    />
                  </div>
                </div>
                <div className="flex-col flex md:flex-row">
                  <div className="flex flex-1 flex-wrap border items-center border-t-0 px-2 border-primary-blue">
                    <label className="border-primary-blue  flex-shrink-0 text-primary-red  text-lg font-bold">
                      दर्ता नं. :{" "}
                    </label>
                    <input
                      type="number"
                      placeholder="e.g ६०७६/५३४४३/३५"
                      className=" text-primary-blue w-[30%]  m-0  py-3 px-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-1  border border-l-0 px-2 items-center border-t-0 border-primary-blue">
                    <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                      पान नं. :
                    </label>
                    <input
                      type="number"
                      placeholder="e.g १२३४५६६६५५"
                      className=" text-primary-blue w-[80%] m-0  py-3 px-3 outline-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-wrap  border border-l-0 px-2 items-center border-t-0 border-primary-blue">
                  <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                  छपाई गर्दा राख्ने सम्पर्क नं. :
                    </label>
                    <input
                      type="number"
                      placeholder="e.g ९८००००००००"
                      name="phone_nummber"
                      className=" text-primary-blue  m-0 px-3  outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col flex mt-5 md:flex-row">
                  <div className="flex flex-1 flex-wrap border items-center  px-2 border-primary-blue">
                    <label className="border-primary-blue  flex-shrink-0 text-primary-red  text-lg font-bold">
                    छपाई गर्ने साईज :
                    </label>
                    <input
                      type="number"
                      placeholder="e.g १५*२०"
                      name="calander_size"
                      className=" text-primary-blue w-[50%]  m-0  py-3 px-3 outline-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-wrap  border border-l-0 px-2 items-center  border-primary-blue">
                  <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                      प्रती :
                    </label>
                    <input
                      type="number"
                      placeholder="e.g १२"
                      name="paper_quatity"
                      className=" text-primary-blue w-[50%] px-3   outline-none"
                    />
                  </div>
                  <div className="flex flex-1  border border-l-0 px-2 items-center  border-primary-blue">
                    <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                    छपाई परिमाण :
                    </label>
                    <input
                      type="number"
                      placeholder="Type Here ............"
                      name="calander_quantity"
                      className=" text-primary-blue w-[50%] m-0  py-3 px-3 outline-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-wrap  border border-l-0 px-2 items-center  border-primary-blue">
                  <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                  लाग्ने जम्मा रकम :
                    </label>
                    <input
                      type="text"
                      placeholder="Type Here ............"
                      name="total_cost"
                      className=" text-primary-blue w-[50%]  px-3 outline-none"
                    />
                  </div>
                </div>

             
              <div className="border-2  rounded-[2rem] align-middle border-red-600 mt-3">
                <p className="text-primary-blue mt-0 text-base font-medium leading-10 md:!text-lg text-center">
                  Service Fees Shown above are not inlcude any Goverment
                  Charges,VAT,Taxes,Fines,Penalties and Incidental costs
                </p>
              </div>
            </div>
       
            {/* company objective */}
            <div className="mt-5">
              <p className="text-primary-blue  font-bold">
              
              अन्य केहि बिवरण दिनु पर्ने भएका यहाँ लेख्नुहोस् ।
           
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
                  (तपाईले दर्ता गर्न खोज्नुभएको कम्पनी रहने ठेगाना नजिक हाम्रो
                  कुन शाखा नजिक पर्छ छनोट गर्नुहोस् ।)
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
    </>
  );
};
export default BillPrinting;
