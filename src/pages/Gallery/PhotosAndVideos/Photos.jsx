import Images from "../../../media/images";
import { Link } from "react-router-dom";

const Photos = ({ photos }) => {
  return (
    <div>
      <div className=" mx-3">
        <div>
          <div className="mt-10">
            <div className="animation mt-8 flex flex-wrap items-center justify-center gap-6 bg-white">
              {photos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="animation mt-8 flex flex-wrap items-center justify-center gap-6 bg-white"
                    id="category2"
                  >
                    <Link
                      to={`${item.category.replace(" ", "-")}`}
                      className="about-button font-Acme !bg-primary-red"
                    >
                      {item.category}
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* show photos */}
            {photos.map((value, index) => {
              return (
                <>
                  <div key={index} className="mt-10">
                    <div className=" text-center">
                      <h1 className="title-style">{value.category}</h1>
                      <div className="mt-4">
                        <img
                          src={Images.title_border}
                          alt=""
                          className="mx-auto"
                        />
                      </div>
                    </div>
                    {/*photo cards */}
                    <div className="px-10 py-10">
                      <div className="grid grid-cols-1 items-center justify-center gap-7 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {value.images.map((img, index) => {
                          return (
                            <>
                              <card className="card-div">
                                <div>
                                  <img
                                    alt=""
                                    src={img.img}
                                    className="h-2/3 w-full"
                                  />
                                </div>
                                <div className="px-2 py-3">
                                  <p className="font-Acme text-lg font-semibold">
                                    {img.img_name}
                                  </p>
                                </div>
                              </card>
                            </>
                          );
                        })}
                      </div>
                      {/* view more */}
                      <div className="font-Berkshire mt-5 flex justify-center">
                        <Link
                          to={`${value.category.replace(" ", "-")}`}
                          className="!bg-primary-red rounded-full py-1 px-2 text-white"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                    {/* cards end here */}
                  </div>
                </>
              );
            })}
            {/* photos end here */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Photos;
