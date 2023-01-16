import { XCircleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function Modal({ children, setDisplay, z }) {
  return (
    <div
      style={{ zIndex: z ? z : 50 }}
      className={
        " top-0 fixed flex items-center justify-center w-full h-full glassBg "
      }
    >
      <div className="p-0 bg-white rounded-xl shadow-md flex flex-col items-center justify-center">
        <div className="flex flex-row justify-between w-full p-2">
          <div />
          <XCircleIcon
            onClick={() => setDisplay(false)}
            className="w-5 text-indigo-500"
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
