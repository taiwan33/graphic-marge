import { Link } from "react-router-dom";
import Images from "../../../media/images";

const Videos = ({ videos }) => {
  return (
    <div>
      <div className="mt-10">
        <div className="animation mt-8 flex flex-wrap items-center justify-center gap-6 bg-white">
          {videos.map((value, index) => {
            return (
              <Link
                key={index}
                to={`${value.category.replace(" ", "-")}`}
                className="about-button font-Acme !bg-primary-red"
              >
                {value.category}
              </Link>
            );
          })}
        </div>

        {/* videos */}
        {videos.map((vid, index) => {
          return (
            <div key={index} className="mt-10" id="office">
              <div className="mb-10 text-center">
                <h1 className="title-style">{vid.category}</h1>
                <div className="mt-4">
                  <img alt="" src={Images.title_border} className="mx-auto" />
                </div>
              </div>
              {/* videos card */}
              <div className="px-10 py-10">
                <div className="grid grid-cols-1 items-center justify-center gap-7 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* single video thumbnail card */}
                  {vid.videos.map((value, index) => {
                    return (
                      <card
                        data-bs-toggle="modal"
                        data-bs-target="#videosModal"
                        className="card-div"
                      >
                        <div className="relative">
                          <img
                            alt=""
                            src={value.vid}
                            className="h-2/3 w-full"
                          />
                          {/* play icons */}
                          <div className="absolute top-1/2 left-[40%] h-10 w-10 translate-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 1536 1536"
                            >
                              <path
                                fill="currentColor"
                                d="M768 0q209 0 385.5 103T1433 382.5T1536 768t-103 385.5t-279.5 279.5T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0zm384 823q32-18 32-55t-32-55L608 393q-31-19-64-1q-32 19-32 56v640q0 37 32 56q16 8 32 8q17 0 32-9z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="px-2 py-3">
                          <p className="font-Acme text-lg font-semibold">
                            {value.vid_name}
                          </p>
                        </div>
                      </card>
                    );
                  })}
                </div>

                {/* view more */}
                <div className="font-Berkshire mt-5 flex justify-center">
                  <Link
                    to={`${vid.category.replace(" ", "-")}`}
                    className="!bg-primary-red rounded-full py-1 px-2 text-white"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Videos;
