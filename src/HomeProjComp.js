import {
  CalendarIcon,
  UserAddIcon,
  ChevronRightIcon,
  PlusIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useState } from "react";

function HomeProjComp() {
  const [ProjData, setProjData] = useState([
    {
      id: 0,
      name: "Plogging",
      add: false,
    },
    {
      id: 1,
      name: "Slow Fashion Drive",
      add: false,
    },
    {
      id: 2,
      name: "Menstrual Sustainability",
      add: false,
    },
    {
      id: 3,
      name: "Green Blog Series",
      add: false,
    },
  ]);
  return (
    <div
      id="projComp"
      className="flex flex-col w-full h-full justify-between bg-white bg-opacity-5 rounded-3xl -ml-2"
    >
      <div className="flex flex-row m-2 h-12 py-2 bg-white bg-opacity-10 items-center rounded-3xl">
        <div className="flex w-9 h-9 ml-2 items-center justify-center p-1 rounded-full text-green-400 ">
          <CalendarIcon />
        </div>
        <h1 className="font-pop py-2 text-gray-100 md:text-base text-sm ml-2">
          On Going Activities
        </h1>
      </div>

      <motion.div className="bg-white flex- flex-col bg-opacity-5 max-h-36 h-full rounded-3xl mx-2 mb-0 -mt-1 overflow-y-auto">
        {ProjData.map((doc, index) => (
          <motion.div
            onClick={() => {
              setProjData(
                ProjData.map((data) =>
                  data.id === index ? { ...data, add: !data.add } : { ...data }
                )
              );
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.2 * parseInt(index) },
            }}
            className="flex flex-row items-center w-full transition-all max-h-12 h-10 text-blue-100 hover:text-green-300 bg-white bg-opacity-5 justify-between hover:bg-opacity-25 border-b-2 border-gray-600 border-opacity-25"
          >
            <div className="flex flex-row items-center  ">
              <div className="flex w-5 h-5 ml-2 items-center justify-center ">
                <ChevronRightIcon />
              </div>
              <h1 className="font-popt ml-2 text-sm">{doc.name}</h1>
            </div>
            <div
              className={
                "flex w-6 transition-all h-6 mr-2 items-center justify-center p-1 rounded-full " +
                (doc.add
                  ? "hover:text-green-300 text-white bg-green-300 hover:bg-white  "
                  : "text-green-300 hover:text-white bg-white hover:bg-green-300 bg-opacity-10 ")
              }
            >
              {doc.add ? <CheckIcon /> : <PlusIcon />}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-row mb-2 mx-2 h-12 items-center justify-around">
        <div
          onClick={() =>
            (window.location =
              "mailto:greenclub@iitgn.ac.in?subject=I would like to join the Club&body=Dear Admin,%0D%0A %0D%0A I went through the Green Club website and I found following campaigns interesting :%0D%0A" +
              ProjData.map((doc, index) =>
                doc.add ? "%0D%0A" + "-" + doc.name : null
              ) +
              "%0D%0A%0D%0AI would like to join these campaigns and be apart of the club.%0D%0A%0D%0A Thanks and Regards, %0D%0A")
          }
          className="flex flex-row cursor-pointer h-10 group bg-white hover:bg-green-300 bg-opacity-10 items-center rounded-3xl"
        >
          <div className="flex w-6 h-7 ml-2 items-center group-hover:text-white justify-center  text-green-400 bg-opacity-10">
            <UserAddIcon />
          </div>
          <h1 className="font-popt py-1 text-gray-100 md:text-sm text-xs ml-2 mr-2  ">
            Join Us
          </h1>
        </div>
        <div
          onClick={() =>
            (window.location =
              "mailto:greenclub@iitgn.ac.in?subject=I would like to join the Club&body=Dear Admin,%0D%0A %0D%0A I went through the Green Club website and I found following campaigns interesting :%0D%0A" +
              ProjData.map((doc, index) =>
                doc.add ? "%0D%0A" + "-" + doc.name : null
              ) +
              "%0D%0A%0D%0AI would like to join these campaigns and be apart of the club.%0D%0A%0D%0A Thanks and Regards, %0D%0A")
          }
          className="flex flex-row cursor-pointer h-10 group bg-white hover:bg-green-300 bg-opacity-10 items-center rounded-3xl"
        >
          <div className="flex w-6 h-7 ml-2 items-center group-hover:text-white justify-center  text-green-400 bg-opacity-10">
            <PencilIcon />
          </div>
          <h1 className="font-popt py-1 text-gray-100 md:text-sm text-xs ml-2 mr-2  ">
            Write Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomeProjComp;
