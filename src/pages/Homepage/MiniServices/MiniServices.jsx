import React from "react";
import { Link, Outlet } from "react-router-dom";

const MiniServices = () => {
  return (
    <div
      className="md:px-10 px-4
    "
    >
      <div className="max-w mt-4 grid w-full gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-7">
        <Link
          to="downloads"
          className=" no-underline animation hover:border-primary-blue cursor-pointer rounded-md py-4 hover:-translate-y-2 hover:border hover:bg-slate-50 hover:shadow-md"
        >
          <div className="bg-primary-green text-text-primary relative mx-auto grid h-[88px] w-[88px] place-content-center rounded-full font-semibold">
            <span className="text-white">
              <svg
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
                className="h-11 w-11"
              >
                <rect fill="none" height={50} width={50} />
                <path
                  d="  M32,35c0,0,8.312,0,9.098,0C45.463,35,49,31.463,49,27.099s-3.537-7.902-7.902-7.902c-0.02,0-0.038,0.003-0.058,0.003  c0.061-0.494,0.103-0.994,0.103-1.504c0-6.71-5.439-12.15-12.15-12.15c-5.229,0-9.672,3.309-11.386,7.941  c-1.087-1.089-2.591-1.764-4.251-1.764c-3.319,0-6.009,2.69-6.009,6.008c0,0.085,0.01,0.167,0.013,0.251  C3.695,18.995,1,22.344,1,26.331C1,31.119,4.881,35,9.67,35c0.827,0,8.33,0,8.33,0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                />
                <polyline
                  fill="none"
                  points="30,41 25,46 20,41   "
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={2}
                  x1={25}
                  x2={25}
                  y1={26}
                  y2="45.668"
                />
              </svg>
            </span>
          </div>
          <div className=" mt-4 text-center text-black">Downloads</div>
        </Link>
        {/* job vacency */}
        <Link
          to="vacancy"
          className="animation no-underline  hover:border-primary-blue cursor-pointer rounded-md py-4 hover:-translate-y-2 hover:border hover:bg-slate-50 hover:shadow-md"
        >
          {/* icons  */}
          <div className="bg-primary-green text-text-primary relative mx-auto grid h-[88px] w-[88px] place-content-center rounded-full font-semibold">
            <span className="text-white">
              <svg
                className="h-11 w-11"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} y={0} />
                </g>
                <g>
                  <g>
                    <rect height="1.5" width={4} x={14} y={12} />
                    <rect height="1.5" width={4} x={14} y={15} />
                    <path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,7V4h2v3v2h-2V7z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z" />
                    <circle cx={9} cy="13.5" r="1.5" />
                    <path d="M11.08,16.18C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43 C12,16.96,11.64,16.42,11.08,16.18z" />
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div className="mt-4 text-center text-black">Vacency</div>
        </Link>
        {/* payment details */}
        <Link
          to="/payment"
          className="animation no-underline  hover:border-primary-blue cursor-pointer rounded-md py-4 hover:-translate-y-2 hover:border hover:bg-slate-50 hover:shadow-md"
        >
          {/* icons  */}
          <div className="bg-primary-green text-text-primary relative mx-auto grid h-[88px] w-[88px] place-content-center rounded-full font-semibold">
            <span className="text-white">
              <svg
                className="h-11 w-11"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M3 3a2 2 0 0 0-2 2v1h14V5a2 2 0 0 0-2-2H3Zm-2 8V7h14v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Zm9.5-1a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"
                />
              </svg>
            </span>
          </div>
          <div className="mt-4 text-black text-center">Payment Details</div>
        </Link>
        {/* language translate  */}
        <Link
          to="language-translate"
          className="animation no-underline  hover:border-primary-blue cursor-pointer rounded-md py-4 hover:-translate-y-2 hover:border hover:bg-slate-50 hover:shadow-md"
        >
          <div className="bg-primary-green text-text-primary relative mx-auto grid h-[88px] w-[88px] place-content-center rounded-full font-semibold">
            <span className="text-white">
              <svg
                className="h-11 w-11"
                version="1.1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M17,20H2.5C1.122,20,0,18.878,0,17.5v-15C0,1.122,1.122,0,2.5,0h8c0.214,0,0.404,0.136,0.473,0.338l6.5,19    c0.052,0.152,0.027,0.321-0.066,0.452C17.313,19.922,17.162,20,17,20z M2.5,1C1.673,1,1,1.673,1,2.5v15C1,18.327,1.673,19,2.5,19    h13.8L10.143,1H2.5z" />
                  </g>
                  <g>
                    <path d="M21.5,24h-8c-0.208,0-0.395-0.129-0.468-0.324l-1.5-4c-0.097-0.259,0.034-0.547,0.292-0.644    c0.259-0.096,0.547,0.034,0.644,0.292L13.847,23H21.5c0.827,0,1.5-0.673,1.5-1.5v-15C23,5.673,22.327,5,21.5,5H12    c-0.276,0-0.5-0.224-0.5-0.5S11.724,4,12,4h9.5C22.878,4,24,5.122,24,6.5v15C24,22.878,22.878,24,21.5,24z" />
                  </g>
                  <g>
                    <path d="M13.5,24c-0.117,0-0.234-0.041-0.329-0.124c-0.208-0.182-0.229-0.498-0.047-0.706l3.5-4    c0.182-0.209,0.498-0.229,0.706-0.047c0.208,0.182,0.229,0.498,0.047,0.706l-3.5,4C13.777,23.942,13.639,24,13.5,24z" />
                  </g>
                  <g>
                    <path d="M9.5,14c-0.206,0-0.398-0.127-0.471-0.332L7,7.987l-2.029,5.681c-0.093,0.26-0.38,0.396-0.639,0.303    c-0.26-0.093-0.396-0.379-0.303-0.639l2.5-7c0.142-0.398,0.8-0.398,0.941,0l2.5,7c0.093,0.26-0.042,0.546-0.303,0.639    C9.613,13.991,9.556,14,9.5,14z" />
                  </g>
                  <g>
                    <path d="M8,11H6c-0.276,0-0.5-0.224-0.5-0.5S5.724,10,6,10h2c0.276,0,0.5,0.224,0.5,0.5S8.276,11,8,11z" />
                  </g>
                  <g>
                    <path d="M21.5,11h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5S21.776,11,21.5,11z" />
                  </g>
                  <g>
                    <path d="M17.5,11c-0.276,0-0.5-0.224-0.5-0.5v-1C17,9.224,17.224,9,17.5,9S18,9.224,18,9.5v1C18,10.776,17.776,11,17.5,11z" />
                  </g>
                  <g>
                    <path d="M16,17c-0.157,0-0.311-0.073-0.408-0.21c-0.16-0.225-0.107-0.537,0.118-0.697c2.189-1.555,3.79-4.727,3.79-5.592    c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,1.318-1.927,4.785-4.21,6.408C16.202,16.97,16.101,17,16,17z" />
                  </g>
                  <g>
                    <path d="M20,18c-0.121,0-0.242-0.043-0.337-0.131c-0.363-0.332-3.558-3.283-4.126-4.681c-0.104-0.256,0.02-0.547,0.275-0.651    c0.253-0.103,0.547,0.019,0.651,0.275c0.409,1.007,2.936,3.459,3.875,4.319c0.204,0.187,0.217,0.502,0.031,0.707    C20.27,17.945,20.135,18,20,18z" />
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div className="mt-4 text-black text-center">Language Translate</div>
        </Link>
        {/* date converter  */}
        <Link
          to="date-converter"
          className="animation no-underline  hover:border-primary-blue cursor-pointer rounded-md py-4 hover:-translate-y-2 hover:border hover:bg-slate-50 hover:shadow-md"
        >
          {/* icons  */}
          <div className="bg-primary-green text-text-primary relative mx-auto grid h-[88px] w-[88px] place-content-center rounded-full font-semibold">
            <span className="text-white">
              <svg
                className="h-11 w-11"
                fill="currentColor"
                version="1.1"
                viewBox="0 0 100.353 100.353"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M32.286,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5   v-9.762C33.786,43.113,33.115,42.441,32.286,42.441z M30.786,52.203h-6.762v-6.762h6.762V52.203z" />
                  <path d="M55.054,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5   v-9.762C56.554,43.113,55.882,42.441,55.054,42.441z M53.554,52.203h-6.762v-6.762h6.762V52.203z" />
                  <path d="M77.12,42.441h-9.762c-0.828,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762   C78.62,43.113,77.948,42.441,77.12,42.441z M75.62,52.203h-6.762v-6.762h6.762V52.203z" />
                  <path d="M32.286,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5   v-9.762C33.786,65.349,33.115,64.677,32.286,64.677z M30.786,74.439h-6.762v-6.762h6.762V74.439z" />
                  <path d="M55.054,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5   v-9.762C56.554,65.349,55.882,64.677,55.054,64.677z M53.554,74.439h-6.762v-6.762h6.762V74.439z" />
                  <path d="M77.12,64.677h-9.762c-0.828,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762   C78.62,65.349,77.948,64.677,77.12,64.677z M75.62,74.439h-6.762v-6.762h6.762V74.439z" />
                  <path d="M89,13.394h-9.907c-0.013,0-0.024,0.003-0.037,0.004V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994   H56.041V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994H33.025V11.4c0-3.268-2.658-5.926-5.926-5.926   s-5.926,2.659-5.926,5.926v1.995c-0.005,0-0.01-0.001-0.015-0.001h-9.905c-0.829,0-1.5,0.671-1.5,1.5V92.64   c0,0.828,0.671,1.5,1.5,1.5H89c0.828,0,1.5-0.672,1.5-1.5V14.894C90.5,14.065,89.828,13.394,89,13.394z M70.204,11.4   c0-1.614,1.312-2.926,2.926-2.926s2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926s-2.926-1.312-2.926-2.926V11.4z    M50.115,8.474c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926c-1.614,0-2.926-1.312-2.926-2.926v-4.643   c0.004-0.047,0.014-0.092,0.014-0.141s-0.01-0.094-0.014-0.141V11.4C47.189,9.786,48.501,8.474,50.115,8.474z M24.173,11.4   c0-1.614,1.312-2.926,2.926-2.926c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926   c-1.614,0-2.926-1.312-2.926-2.926V11.4z M87.5,91.14H12.753V16.394h8.405c0.005,0,0.01-0.001,0.015-0.001v3.285   c0,3.268,2.659,5.926,5.926,5.926s5.926-2.658,5.926-5.926v-3.283h11.164v3.283c0,3.268,2.659,5.926,5.926,5.926   s5.926-2.658,5.926-5.926v-3.283h11.163v3.283c0,3.268,2.658,5.926,5.926,5.926s5.926-2.658,5.926-5.926V16.39   c0.013,0,0.024,0.004,0.037,0.004H87.5V91.14z" />
                </g>
              </svg>
            </span>
          </div>
          <div className="mt-4 text-center text-black">Date COnverter</div>
        </Link>
        {/* unicode to preeti  */}

        <Link
          to="unicode-to-preeti"
          className="animation no-underline  hover:border-primary-blue cursor-pointer rounded-md py-4 hover:-translate-y-2 hover:border hover:bg-slate-50 hover:shadow-md"
        >
          {/* icons  */}
          <div className="bg-primary-green text-text-primary relative mx-auto grid h-[88px] w-[88px] place-content-center rounded-full font-semibold">
            <span className="text-white">
              <svg
                className="h-11 w-11"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M12.1464 3.14645C12.3417 2.95118 12.6583 2.95118 12.8536 3.14645L15.8536 6.14645C16.0488 6.34171 16.0488 6.65829 15.8536 6.85355L12.8536 9.85355C12.6583 10.0488 12.3417 10.0488 12.1464 9.85355C11.9512 9.65829 11.9512 9.34171 12.1464 9.14645L14.2929 7H4.5C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6H14.2929L12.1464 3.85355C11.9512 3.65829 11.9512 3.34171 12.1464 3.14645Z"
                  fill="currentColor"
                />
                <path
                  d="M7.85355 10.1464C8.04882 10.3417 8.04882 10.6583 7.85355 10.8536L5.70711 13H15.5C15.7761 13 16 13.2239 16 13.5C16 13.7761 15.7761 14 15.5 14H5.70711L7.85355 16.1464C8.04882 16.3417 8.04882 16.6583 7.85355 16.8536C7.65829 17.0488 7.34171 17.0488 7.14645 16.8536L4.14645 13.8536C3.95118 13.6583 3.95118 13.3417 4.14645 13.1464L7.14645 10.1464C7.34171 9.95118 7.65829 9.95118 7.85355 10.1464Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="mt-4 text-center text-black">Unicode To Preeti</div>
        </Link>
        {/* preeti to unicode  */}
        <Link
          to="preeti-to-unicode"
          className="animation no-underline  hover:border-primary-blue cursor-pointer rounded-md py-4 hover:-translate-y-2 hover:border hover:bg-slate-50 hover:shadow-md"
        >
          {/* icons  */}
          <div className="bg-primary-green text-text-primary relative mx-auto grid h-[88px] w-[88px] place-content-center rounded-full font-semibold">
            <span className="text-white">
              <svg
                className="h-11 w-11"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M12.1464 3.14645C12.3417 2.95118 12.6583 2.95118 12.8536 3.14645L15.8536 6.14645C16.0488 6.34171 16.0488 6.65829 15.8536 6.85355L12.8536 9.85355C12.6583 10.0488 12.3417 10.0488 12.1464 9.85355C11.9512 9.65829 11.9512 9.34171 12.1464 9.14645L14.2929 7H4.5C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6H14.2929L12.1464 3.85355C11.9512 3.65829 11.9512 3.34171 12.1464 3.14645Z"
                  fill="currentColor"
                />
                <path
                  d="M7.85355 10.1464C8.04882 10.3417 8.04882 10.6583 7.85355 10.8536L5.70711 13H15.5C15.7761 13 16 13.2239 16 13.5C16 13.7761 15.7761 14 15.5 14H5.70711L7.85355 16.1464C8.04882 16.3417 8.04882 16.6583 7.85355 16.8536C7.65829 17.0488 7.34171 17.0488 7.14645 16.8536L4.14645 13.8536C3.95118 13.6583 3.95118 13.3417 4.14645 13.1464L7.14645 10.1464C7.34171 9.95118 7.65829 9.95118 7.85355 10.1464Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="mt-4 text-center text-black">Preeti to Unicode</div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MiniServices;
