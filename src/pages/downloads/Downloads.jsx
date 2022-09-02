import { saveAs } from "file-saver";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDownloads } from "../../features/downloads/downloadSlice";
// import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Images from "../../media/images";
import PrintFile from "../../components/printFile/PrintFile";

const Downloads = () => {
  const dispatch = useDispatch();
  const { downloads } = useSelector((state) => state.downloads);

  const fileRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => fileRef.current,
  });

  console.log(fileRef);

  useEffect(() => {
    dispatch(fetchDownloads());
  }, [dispatch]);

  return (
    <div className="max-w w-padding">
      <div className="text-center">
        <h1 className="title-style">Downloads</h1>
        <div className="mt-4">
          <img src={Images.title_border} alt="" className="mx-auto" />
        </div>
      </div>
      {/* table */}
      <div className="mt-10 w-full md:mt-16">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="font-Bree bg-primary-red border-b text-lg font-bold">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-lg text-white">
                        SN.
                      </th>
                      <th scope="col" className="px-6 py-4 text-lg text-white">
                        File Name
                      </th>
                      <th scope="col" className="px-6 py-4 text-lg text-white">
                        view
                      </th>
                      <th scope="col" className="px-6 py-4 text-white">
                        Download
                      </th>
                      <th scope="col" className="px-6 py-4 text-white">
                        Print
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    {downloads.map((items, index) => {
                      return (
                        <tr key={index} className="border-b bg-white">
                          <td className="font-Aladin whitespace-nowrap px-6 py-4 text-lg font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="font-Aladin whitespace-nowrap px-6 py-4 text-lg font-light text-gray-900">
                            {items.title}
                          </td>
                          <td className="font-Aladin whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            <div className="grid place-content-center">
                              <div className="grid place-content-center">
                                <a href={items.file}>
                                  <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#000000"
                                  >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="font-Aladin whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            <div className="grid place-content-center">
                              {/* downloads */}
                              <svg
                                onClick={() => {
                                  saveAs(items.file);
                                }}
                                className="h-8 w-8 "
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 24 24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <g>
                                  <rect fill="none" height={24} width={24} />
                                </g>
                                <g>
                                  <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
                                </g>
                              </svg>
                            </div>
                          </td>
                          <td className="font-Aladin whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            <div className="grid place-content-center">
                              {/* print */}
                              <PrintFile ref={fileRef} item={items.file} />
                              <button
                                onClick={() => {
                                  handlePrint();
                                  console.log(items.file);
                                }}
                              >
                                <svg
                                  className="h-8 w-8"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                  <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
                                  <circle cx={18} cy="11.5" r={1} />
                                </svg>
                              </button>
                              {/* content={() => fileRef.current} */}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end table */}
    </div>
  );
};

export default Downloads;
