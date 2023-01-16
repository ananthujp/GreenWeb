import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

function Preview({ title, date, data, child }) {
  return (
    <div className={"flex w-full  justify-center "}>
      <div
        className={
          "mb-0 flex flex-row justify-between overflow-hidden bg-gradient-to-br animate-all shadow-lg mt-2 " +
          "from-green-400 to-cyan-600 flex-row"
          //+ (opened ? " rounded-full" : " rounded-full")
        }
      >
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5 } }}
          exit={{ opacity: 0, transition: { delay: 1.5 } }}
          className="flex flex-col bg-white h-full p-4"
        >
          <div className="w-full flex flex-row justify-between">
            <h1
              className={
                "font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r " +
                "from-green-400 to-cyan-600"
              }
            >
              {title}
            </h1>
          </div>

          <h1 className="text-xs font-light text-gray-400">
            {date.toString().slice(3, 15)}
          </h1>
          <p className="mt-2 max-w-[21rem] text-justify">{data}</p>
          {child && <div>{child}</div>}
        </div>
      </div>
    </div>
  );
}

export default Preview;
