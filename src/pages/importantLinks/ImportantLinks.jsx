import { Link } from "react-router-dom";

const ImportantLinks = () => {
  return (
    <div>
      <div className="">
        <div className="max-w mt-10 md:mt-16">
          <div className="text-center">
            <h1 className="title-style">Importants Links</h1>
            <div className="mt-4">
              <img src="./images/title-border.png" alt="" className="mx-auto" />
            </div>
          </div>
          {/* table */}
          <div className="w-full md:px-10">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="border-primary-blue min-w-full border text-center">
                      <thead className="font-Bree bg-primary-red text-lg font-bold">
                        <tr className="">
                          <th
                            scope="col"
                            className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                          >
                            SN.
                          </th>
                          <th
                            scope="col"
                            className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                          >
                            Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="font-Acme">
                        <tr className="border-primary-blue border-2 bg-white">
                          <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                            1
                          </td>
                          <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                            radio
                          </td>
                          <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://translate.google.com.np/"
                              className="card-button !bg-primary-blue font-bold"
                            >
                              Visit
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
      </div>
    </div>
  );
};
export default ImportantLinks;
