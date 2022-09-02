import { React, useEffect, useRef } from "react";
import Images from "../../media/images";
import BackButton from "../../components/common/backbutton/BackButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotice } from "../../features/noticeSlice/NoticeSlice";
import moment from "moment";
import NepaliDate from "nepali-date-converter";
import { saveAs } from "file-saver";
import ReactToPrint from "react-to-print";

const Notice = () => {
  const notice = useSelector((state) => state.notice);
  const dispatch = useDispatch();
  const months = [
    "वैशाख",
    "ज्येष्ठ",
    "आषाढ़",
    "श्रावण",
    "भाद्र",
    "आश्विन",
    "कार्तिक",
    "मार्गशीर्ष",
    "पौष",
    "माघ",
    "फाल्गुण",
    "चैत्र",
  ];

  const imageRef = useRef();

  useEffect(() => {
    // console.log(notice);
    dispatch(fetchNotice());
  }, [dispatch]);

  return (
    <div className=" mt-3 w-full">
      <BackButton />
      <div className="max-w">
        <div className="">
          {/* notice  */}
          <div className="mt-10 px-4 py-5 lg:mt-0 lg:px-0">
            <div className="text-center">
              <div className="title-style">All Notices Details</div>
              <div className="mt-4">
                <img src={Images.title_border} alt="" className="mx-auto" />
              </div>
            </div>

            {/* notices  */}
            <div className="font-Laila mt-6 flex flex-col gap-y-6 overflow-auto">
              {notice.data.map((items, index) => {
                const dateFromApi = Date.parse(items.created_at);
                const month = new NepaliDate(dateFromApi).getMonth();
                const nepaliMonth = months[month];
                console.log(`notice desc ${items.description}`);
                const day = new NepaliDate(dateFromApi).getDate();
                return (
                  <>
                    <div key={index} className="py-3">
                      <button
                        href="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#noticeModal"
                      ></button>
                      <div
                        data-bs-toggle="modal"
                        data-bs-target="#noticeModal"
                        className="flex w-fit cursor-pointer"
                      >
                        <div className="text-primary-red border-primary-green grid w-16 place-content-center border-r-2 text-center md:w-32">
                          <span>{day}</span>
                          <span>{nepaliMonth}</span>
                        </div>
                        <div className="flex flex-col pl-4">
                          <div className="text-primary-blue flex flex-wrap items-center gap-5 text-sm md:!text-base">
                            <span className="font-semibold">{items.title}</span>

                            <div className="">
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#noticeImage"
                              >
                                <div className="bg-primary-red flex cursor-pointer items-center gap-2 rounded-full p-2 text-white">
                                  <div className="font-Acme text-lg font-bold">
                                    Notice Photo File
                                  </div>
                                  <img
                                    src={items.image}
                                    className="h-5 w-5 scale-110 rounded-full md:h-10 md:w-10"
                                    alt=""
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                          <span className="text-primary-red mt-1 text-xs">
                            <i className="far fa-clock" />
                            <span> {moment(items.created_at).fromNow()}</span>
                          </span>
                        </div>
                      </div>

                      {/* notice details modal */}
                      <div
                        className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                        id="noticeModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalScrollableLabel"
                      >
                        <div className="modal-dialog modal-dialog-scrollable pointer-events-none relative w-auto">
                          <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                              <h5
                                className="text-primary-red font-Acme text-xl font-semibold leading-normal"
                                id="exampleModalScrollableLabel"
                              >
                                Notice
                              </h5>
                              <button
                                type="button"
                                className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body relative p-4">
                              <p className="font-Bree text-primary-blue leading-10">
                                {items.description}
                              </p>
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                              <button
                                type="button"
                                className="font-Berkshire inline-block rounded bg-purple-600 px-6 py-2.5 text-xs font-semibold uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* notice image modal */}
                      <div
                        className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                        id="noticeImage"
                        tabIndex={-1}
                        aria-labelledby="exampleModalScrollableLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-scrollable pointer-events-none relative w-auto">
                          <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                              <h5
                                className="text-primary-red text-xl font-semibold leading-normal"
                                id="exampleModalScrollableLabel"
                              >
                                Notice
                              </h5>
                              <button
                                type="button"
                                className="h-6 w-6"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 1024 1024"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="modal-body relative p-4">
                              <img
                                ref={imageRef}
                                src={items.image}
                                className="h-full w-full object-cover"
                                alt=""
                              />
                            </div>
                            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                              <div className="flex gap-3">
                                <button
                                  onClick={() => {
                                    saveAs(items.image, "notice.jpg");
                                  }}
                                  className="!bg-primary-blue font-Berkshire inline-block rounded px-6 py-2.5 text-lg font-semibold leading-tight text-white shadow-md"
                                >
                                  Download
                                </button>

                                <ReactToPrint
                                  trigger={() => (
                                    <button
                                      type="button"
                                      className="font-Berkshire inline-block rounded !bg-green-700 px-6 py-2.5 text-lg font-semibold leading-tight text-white"
                                    >
                                      Print
                                    </button>
                                  )}
                                  content={() => imageRef.current}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* notice ends here  */}
        </div>
      </div>
    </div>
  );
};

export default Notice;
