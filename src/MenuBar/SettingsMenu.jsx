import { useState } from "react";

export default function SettingsMenu(props) {
  const {open, setOpen} = props;

  return (
    <>
    {open && (
        <div className="absolute top-0 right-0 z-10">
          <div className="relative bg-white shadow-lg rounded-md px-4 py-2 w-64">
            <button
              onClick={() => setOpen(false)}
              className=" text-gray-500 hover:text-gray-700 float-end"
            >
              <i className="fa fa-close m-2"></i>
            </button>
            <button
              onClick={() => console.log("Clear data clicked")}
              className="w-full bg-red-500 text-white py-2 px-4 rounded mb-4 hover:bg-red-600"
            >
              Clear Data
            </button>
            <div className="flex justify-around mb-4">
              <label className=" text-gray-700 font-bold mb-2">
                Cycle Speed:
              </label>
              <button
                onClick={() => console.log("Cycle speed clicked")}
                className="w-[50%] text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                {"{slow}"}
              </button>
            </div>
          </div>
        </div>
        )}
    </>
  );
}
