import React from "react";
import Images from "../../media/images";
import BackButton from "../../components/common/backbutton/BackButton";

const Vacancy = () => {
  return (
    <div className="max-w w-padding">
      <BackButton />
      <div className="text-center">
        <h1 className="title-style">Open Positions</h1>
        <div className="mt-3">
          <img src={Images.title_border} alt="" className="mx-auto" />
        </div>
      </div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            {/* single item */}
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 text-center">
                <h1 className="title-font mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  Marketing Manager
                </h1>
                <p className="mb-3 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  ad nulla cum molestias explicabo rem maiores. Omnis odit fuga
                  veniam!
                </p>
                <a
                  href="./vacency-details.html"
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-600"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none" />
              </div>
            </div>
            {/* single item */}
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 text-center">
                <h1 className="title-font mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  Marketing Manager
                </h1>
                <p className="mb-3 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  ad nulla cum molestias explicabo rem maiores. Omnis odit fuga
                  veniam!
                </p>
                <a
                  href="./vacency-details.html"
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-600"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none" />
              </div>
            </div>
            {/* single item */}
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 text-center">
                <h1 className="title-font mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  Marketing Manager
                </h1>
                <p className="mb-3 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  ad nulla cum molestias explicabo rem maiores. Omnis odit fuga
                  veniam!
                </p>
                <a
                  href="./vacency-details.html"
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-600"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none" />
              </div>
            </div>
            {/* single item */}
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 text-center">
                <h1 className="title-font mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  Marketing Manager
                </h1>
                <p className="mb-3 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  ad nulla cum molestias explicabo rem maiores. Omnis odit fuga
                  veniam!
                </p>
                <a
                  href="./vacency-details.html"
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-600"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vacancy;
