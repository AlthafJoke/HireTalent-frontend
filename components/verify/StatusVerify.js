import React from "react";
import Link from "next/link";

const StatusVerify = () => {
  return (
    <>
      <div className=" flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
        <div className="flex flex-col p-8 bg-red-200 shadow-md hover:shodow-lg rounded">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 rounded p-3 border border-yellow-800 text-gray-100 bg-yellow-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none text-red-500">
                  Waiting list
                </div>
                <p className="text-sm text-gray-500 leading-none mt-1">
                  Please wait for approval from admin
                </p>
              </div>
            </div>
            <Link href='/'>
            <button className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded">
              Home
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusVerify;
