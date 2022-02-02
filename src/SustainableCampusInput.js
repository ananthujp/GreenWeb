import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { animMainDiv, animImg, animH1, animH2 } from "./Animations";
import { DataInputSvg } from "./vectors/importSVG";
import { serverTimestamp } from "firebase/firestore";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import { CheckIcon, PlusIcon, PencilIcon } from "@heroicons/react/outline";
import { db } from "./firebase";
import SustainableCampus from "./SustainableCampus";
function SustainableCampusInput() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [docs, setDoc] = useState([]);
  const [dtype, setDtype] = useState("F");
  const dataRef = collection(db, "SCamp");
  const nextMonth = () => {
    return docs.length > 11 ? months[docs.length % 12] : months[docs.length];
  };
  useEffect(() => {
    onSnapshot(query(dataRef, orderBy("timestamp", "asc")), (doc) => {
      setDoc(doc.docs.map((dc) => ({ data: dc.data(), id: dc.id })));
    });
  }, []);
  const retType = () => {
    switch (dtype) {
      case "E":
        return "Electricity";
      case "W":
        return "Water";
      case "S":
        return "Segregation";
      default:
    }
  };
  const getData = (dc) => {
    switch (dtype) {
      case "E":
        return dc.Eusage;
      case "W":
        return dc.Wusage;
      case "S":
        return dc.Susage;
      case "F":
        return dc.Fusage;
      default:
    }
  };
  const handleUpdate = (dc) => {
    if (dc.data.conf) {
      switch (dtype) {
        case "E":
          updateDoc(doc(dataRef, dc.id), {
            Eusage: document.getElementById(`input.txt${dc.id}`).value,
            conf: !dc.data.conf,
          });
          break;
        case "W":
          updateDoc(doc(dataRef, dc.id), {
            Wusage: document.getElementById(`input.txt${dc.id}`).value,
            conf: !dc.data.conf,
          });
          break;
        case "S":
          updateDoc(doc(dataRef, dc.id), {
            Susage: document.getElementById(`input.txt${dc.id}`).value,
            conf: !dc.data.conf,
          });
          break;
        case "F":
          updateDoc(doc(dataRef, dc.id), {
            Fusage: document.getElementById(`input.txt${dc.id}`).value,
            conf: !dc.data.conf,
          });
          break;
        default:
      }
    } else {
      updateDoc(doc(dataRef, dc.id), {
        conf: !dc.data.conf,
      });
    }
  };
  const handleWrite = () => {
    addDoc(collection(db, "SCamp"), {
      month: nextMonth(),
      Eusage: 0,
      Wusage: 0,
      Susage: 0,
      Fusage: 0,
      conf: true,
      timestamp: serverTimestamp(),
    });
  };
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
            ADD Data
          </motion.h1>
          <motion.h1
            variants={animH2}
            initial="initial"
            animate="animate"
            exit="exit"
            className="ftext-center mx-auto font-treb text-md text-purple-300"
          >
            Connect with us
          </motion.h1>
          <div className="flex flex-col shadow-md rounded-xl">
            <div className="rounded-t-xl p-4 bg-gradient-to-br from-purple-500 to-indigo-500">
              <h1 className="font-treb text-white text-lg">
                Please Enter Data
              </h1>
            </div>
            <div className="flex flex-col p-4 justify-center">
              <div className="bg-gray-100 font-bold text-indigo-800 font-pop p-2 rounded-t-lg flex flex-row justify-between w-full">
                <h1>Month</h1>
                <h1>Usage</h1>
                <h1>Status</h1>
              </div>
              {docs.map((dc) => (
                <div
                  key={`month.data${dc.id}`}
                  className={
                    "bg-gray-50 p-2 flex flex-row justify-between w-full " +
                    (dc.data.conf ? " text-gray-600" : " text-gray-400")
                  }
                >
                  <h1 className="text-center  font-pop">{dc.data.month}</h1>
                  {dc.data.conf ? (
                    <input
                      id={`input.txt${dc.id}`}
                      type="text"
                      className="rounded-lg text-center font-pop outline-none bg-green-50 text-green-600 px-2"
                      placeholder={getData(dc.data)}
                    />
                  ) : (
                    getData(dc.data)
                  )}
                  <div
                    onClick={() => handleUpdate(dc)}
                    className="bg-green-400 hover:bg-green-200  text-white rounded-full w-6 h-6 p-1"
                  >
                    {dc.data.conf ? <CheckIcon /> : <PencilIcon />}
                  </div>
                </div>
              ))}

              <div className="bg-gray-100 p-2 flex flex-row justify-center rounded-b-lg w-full">
                <div
                  onClick={() => handleWrite()}
                  className="bg-green-400 hover:bg-green-200  text-white rounded-full w-6 h-6"
                >
                  <PlusIcon />
                </div>
              </div>
            </div>
          </div>
          <SustainableCampus />
        </div>
      </div>
    </motion.div>
  );
}

export default SustainableCampusInput;
