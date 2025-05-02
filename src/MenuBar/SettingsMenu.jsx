import { useState } from "react";

export default function SettingsMenu(props) {
  const {open, setOpen, handleSpeed, speed} = props;
  return (
    <>
    {open && (
        <div className="absolute top-0 right-0 z-10">
          <div className="relative bg-gray-200 shadow-lg h-32 px-4 w-48 text-sm">
          <div className="text-right">
            <button
              onClick={() => setOpen(false)}
              className=" text-gray-500 hover:text-gray-700"
            >
              <i className="fa fa-close m-2"></i>
            </button>
            </div>
            <div>
            <button
              onClick={() => console.log("Clear data clicked")}
              className="bg-red-500 text-white py-1 px-4 rounded mb-1 hover:bg-zinc-600 w-full"
            >
              Clear Data
            </button>
            </div>
            <div className="flex flex-col items-center">
              <label className=" text-gray-700 font-bold">
                Cycle Speed:
              </label>
              <button
                onClick={() => handleSpeed()}
                className="w-[50%] text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-zinc-600"
              >
                {speed}
              </button>
            </div>
          </div>
        </div>
        )}
    </>
  );
}
