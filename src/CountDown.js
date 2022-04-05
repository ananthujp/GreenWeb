import { doc, getDoc, onSnapshot } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function CountDown() {
  var endDate = new Date();
  const [time, setTime] = useState();
  const [bg, setBg] = useState();
  const [cap, setCap] = useState();
  const timer = () => {
    var startDate = new Date();
    return (endDate - startDate) / 1000;
  };
  useEffect(() => {
    onSnapshot(doc(db, "Events", "xgJmTVpV7D3krxjCxzMS"), (doc) => {
      endDate.setDate(doc.data().date);
      endDate.setMonth(doc.data().month);
      endDate.setHours(doc.data().timeH);
      endDate.setMinutes(doc.data().timeM);
      endDate.setSeconds(0);
      setBg(doc.data().bg);
      setCap(doc.data().text);
    });

    setInterval(() => setTime(timer), 1000);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="relative flex flex-col items-center justify-end mr-4 w-2/5 rounded-xl overflow-hidden"
    >
      <div
        style={{
          border: "1px solid rgba(255, 255, 255, 0.49)",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255,255,255,0.32)",
        }}
        className="shadow-md rounded-t-md text-white bg-white px-2 py-0.5"
      >
        {cap}
      </div>
      <div
        style={{
          border: "1px solid rgba(255, 255, 255, 0.49)",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255,255,255,0.32)",
        }}
        className="flex flex-row shadow-md rounded-md bg-white p-2 mb-4"
      >
        <div className="flex border-r border-white items-center flex-col px-2">
          <div className="font-popb text-lg text-white">
            {parseInt(time / (60 * 60 * 24))}
          </div>
          <div className=" font-popt text-xs text-white">Days</div>
        </div>
        <div className="flex border-r border-white items-center flex-col px-2">
          <div className="font-popb text-lg text-white">
            {parseInt((time / (60 * 60)) % 24)}
          </div>
          <div className=" font-popt text-xs text-white">Hours</div>
        </div>
        <div className="flex border-r border-white items-center flex-col px-2">
          <div className="font-popb text-lg text-white">
            {parseInt((time / 60) % 60)}
          </div>
          <div className=" font-popt text-xs text-white">Minutes</div>
        </div>
        <div className="flex items-center flex-col px-2">
          <div className="font-popb text-lg text-white">
            {parseInt(time % 60)}
          </div>
          <div className=" font-popt text-xs text-white">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
