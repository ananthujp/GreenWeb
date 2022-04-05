import React, { useState } from "react";
import { motion } from "framer-motion";
import { animMainDiv, animImg, animH1, animH2 } from "./Animations";
import { DataInputSvg } from "./vectors/importSVG";
import { CheckIcon } from "@heroicons/react/outline";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "./firebase";
function AddEvent() {
  const [bg, setBg] = useState();
  const [cap, setCap] = useState();
  return (
    <motion.div
      variants={animMainDiv}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full mt-12 flex flex-col ">
        <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
          <motion.div
            variants={animImg}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full  mx-auto"
          >
            <DataInputSvg />
          </motion.div>
          <motion.h1
            variants={animH1}
            initial="initial"
            animate="animate"
            exit="exit"
            className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl"
          >
            ADD Event
          </motion.h1>
          <motion.h1
            variants={animH2}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center mx-auto font-treb text-md text-purple-300"
          >
            Details of the event
          </motion.h1>
          <div className="flex flex-col shadow-md rounded-xl">
            <div className="rounded-t-xl p-4 flex flex-row justify-between bg-gradient-to-br from-purple-500 to-indigo-500">
              <h1 className="font-treb text-white text-lg">
                Please Enter Data
              </h1>
            </div>
            <div className="flex flex-col p-4 justify-center">
              <div className="bg-gray-100 font-bold text-indigo-800 font-pop p-2 rounded-t-lg flex flex-row justify-between w-full">
                <h1>Title</h1>
                <input
                  id={`input.txt${1}`}
                  value={cap}
                  onChange={(e) => setCap(e.target.value)}
                  type="text"
                  className="rounded-lg text-center font-pop outline-none bg-green-50 text-green-600 px-2"
                  placeholder={""}
                />
                <div
                  onClick={() =>
                    updateDoc(
                      doc(db, "Events", "xgJmTVpV7D3krxjCxzMS"),
                      {
                        text: cap,
                      },
                      { merge: true }
                    )
                  }
                  className="bg-green-400 hover:bg-green-200  text-white rounded-full w-6 h-6 p-1"
                >
                  <CheckIcon />
                </div>
              </div>
              <div className="bg-gray-100 font-bold text-indigo-800 font-pop p-2 flex flex-row justify-between w-full">
                <h1>Image</h1>
                <input
                  value={bg}
                  onChange={(e) => setBg(e.target.value)}
                  id={`input.txt${2}`}
                  type="text"
                  className="rounded-lg text-center font-pop outline-none bg-green-50 text-green-600 px-2"
                  placeholder={""}
                />
                <div
                  onClick={() =>
                    updateDoc(
                      doc(db, "Events", "xgJmTVpV7D3krxjCxzMS"),
                      {
                        bg: bg,
                      },
                      { merge: true }
                    )
                  }
                  className="bg-green-400 hover:bg-green-200  text-white rounded-full w-6 h-6 p-1"
                >
                  <CheckIcon />
                </div>
              </div>
              <div className="bg-gray-100 font-bold text-indigo-800 font-pop p-2 flex flex-row justify-between w-full">
                <h1>Date</h1>

                <input
                  id={`input.txt.mon`}
                  type="text"
                  className="rounded-lg text-center font-pop outline-none bg-green-50 text-green-600 px-2"
                  placeholder={""}
                />
                <input
                  id={`input.txt.date`}
                  type="text"
                  className="rounded-lg text-center font-pop outline-none bg-green-50 text-green-600 px-2"
                  placeholder={""}
                />
                <div
                  onClick={() =>
                    updateDoc(
                      doc(db, "Events", "xgJmTVpV7D3krxjCxzMS"),
                      {
                        date: document.getElementById(`input.txt.date`).value,
                        month: document.getElementById(`input.txt.mon`).value,
                      },
                      { merge: true }
                    )
                  }
                  className="bg-green-400 hover:bg-green-200  text-white rounded-full w-6 h-6 p-1"
                >
                  <CheckIcon />
                </div>
              </div>
              <div className="bg-gray-100 rounded-b-lg font-bold text-indigo-800 font-pop p-2 flex flex-row justify-between w-full">
                <h1>Time</h1>

                <input
                  id={`input.txt.hr`}
                  type="text"
                  className="rounded-lg text-center font-pop outline-none bg-green-50 text-green-600 px-2"
                  placeholder={""}
                />
                <input
                  id={`input.txt.min`}
                  type="text"
                  className="rounded-lg text-center font-pop outline-none bg-green-50 text-green-600 px-2"
                  placeholder={""}
                />
                <div
                  onClick={() =>
                    updateDoc(
                      doc(db, "Events", "xgJmTVpV7D3krxjCxzMS"),
                      {
                        timeH: document.getElementById(`input.txt.hr`).value,
                        timeM: document.getElementById(`input.txt.min`).value,
                      },
                      { merge: true }
                    )
                  }
                  className="bg-green-400 hover:bg-green-200  text-white rounded-full w-6 h-6 p-1"
                >
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AddEvent;
