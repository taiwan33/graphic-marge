import { useParams } from "react-router-dom";
import BackButton from "../../../components/common/backbutton/BackButton";

const MorePhotos = ({ hello }) => {
  const param = useParams();
  return (
    <>
      <div className="">
        <BackButton />
        <div className="text-center">
          <h1 className="title-style capitalize">
            {param.slug.replace("-", " ")}
          </h1>
          <div className="mt-4">
            <img src="./images/title-border.png" alt="" className="mx-auto" />
          </div>
        </div>
        <div className="px-10">
          {/*photo cards */}
          <div className="px-10 py-10">
            <div className="grid grid-cols-1 items-center justify-center gap-7 text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <card
                data-bs-toggle="modal"
                data-bs-target="#photosModal"
                className="card-div"
              >
                <div>
                  <img
                    alt=""
                    src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
                    className="h-2/3 w-full"
                  />
                </div>
                <div className="px-2 py-3">
                  <p className="text-lg font-semibold">Mountian</p>
                </div>
              </card>
            </div>
          </div>
          {/* cards end here */}
        </div>
      </div>
    </>
  );
};
export default MorePhotos;
