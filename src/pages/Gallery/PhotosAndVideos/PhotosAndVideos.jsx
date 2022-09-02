import React, { useState } from "react";
import Images from "../../../media/images";
import Photos from "./Photos";
import Videos from "./Videos";

const PhotosAndVideos = () => {
  const photos = [
    {
      id: 1,
      category: "Office photos",
      images: [
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "office photo one",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "office photo two",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "office photo three",
        },
      ],
    },
    {
      id: 2,
      category: "Picnic photos",
      images: [
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "Picnic photos 1",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "Picnic photos 2",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "Picnic photos 3",
        },
      ],
    },
    {
      id: 3,
      category: "Tour photos",
      images: [
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
      ],
    },
    {
      id: 4,
      category: "Company photos",
      images: [
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
      ],
    },
    {
      id: 5,
      category: "Other photos",
      images: [
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
        {
          img: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          img_name: "mountains",
        },
      ],
    },
  ];

  const videos = [
    {
      id: 1,
      category: "Office videos",
      videos: [
        {
          vid: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          vid_name: "Picnic photos 1",
        },
        {
          vid: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          vid_name: "Picnic photos 2",
        },
        {
          vid: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          vid_name: "Picnic photos 3",
        },
      ],
    },
    {
      id: 2,
      category: "Picnic videos",
      videos: [
        {
          vid: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          vid_name: "Picnic photos 1",
        },
        {
          vid: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          vid_name: "Picnic photos 2",
        },
        {
          vid: "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          vid_name: "Picnic photos 3",
        },
      ],
    },
  ];

  const [isActiveLink, setIsActiveLink] = useState(0);
  const [showActive, setShowActive] = useState(0);
  const activeHandler = (index) => {
    setIsActiveLink(index);
    setShowActive(index);
  };

  return (
    <div className="">
      <div className="w-padding mt-5 w-full">
        <div className="max-w">
          <div className="text-center">
            <h1 className="title-style">Our Gallery</h1>
            <div className="mt-4">
              <img src={Images.title_border} alt="" className="mx-auto" />
            </div>
          </div>
          <div className="mt-10">
            <div className="tabs border-primary-red r m-0 flex list-none flex-wrap items-center justify-center gap-10 border-b-4 p-0">
              <div
                onClick={() => activeHandler(0)}
                className={`font-Bree cursor-pointer ${
                  isActiveLink === 0 && "bg-[#0e4ca0] text-white"
                } rounded-t-lg px-20 py-3 text-center text-2xl font-bold`}
              >
                <span>Photos</span>
              </div>
              <div
                onClick={() => activeHandler(1)}
                className={`font-Bree cursor-pointer ${
                  isActiveLink === 1 && "bg-[#0e4ca0] text-white"
                } rounded-t-lg px-20 py-3 text-center text-2xl font-bold`}
              >
                <span>Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showActive === 0 && <Photos photos={photos} />}
      {showActive === 1 && <Videos videos={videos} />}
    </div>
  );
};

export default PhotosAndVideos;
