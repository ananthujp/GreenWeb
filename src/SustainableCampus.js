import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function SustainableCampus({ height }) {
  const [docs, setDoc] = useState([]);
  const [docsn, setDocN] = useState([]);
  const dataRef = collection(db, "SCamp");

  const getMax = (arr, prop) => {
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
        max = arr[i];
    }
    return max;
  };
  useEffect(() => {
    onSnapshot(query(dataRef, orderBy("timestamp", "asc")), (doc) => {
      setDoc(
        doc.docs.map((dc) => ({
          month: dc.data().month,
          Electricity: dc.data().Eusage,
          Food: dc.data().Fusage,
          Segregation: dc.data().Susage,
          Water: dc.data().Wusage,
          id: dc.id,
        }))
      );
    });
  }, []);
  useEffect(() => {
    setDocN(
      docs.map((dc) => ({
        month: dc.month,
        Electricity:
          (dc.Electricity / getMax(docs, "Electricity").Electricity) * 100,
        Food: (dc.Food / getMax(docs, "Food").Food) * 100,
        Segregation:
          (dc.Segregation / getMax(docs, "Segregation").Segregation) * 100,
        Water: (dc.Water / getMax(docs, "Water").Water) * 100,
      }))
    );
  }, [docs]);

  return (
    <div>
      <AreaChart width={300} height={height - 30} data={docsn}>
        <Tooltip />
        <CartesianGrid strokeDasharray="2 2 " />
        <XAxis stroke="#9ca3af" dataKey="month" />
        <YAxis stroke="#9ca3af" />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C582CA" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#C582CA" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C8CA82" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#C8CA82" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <Line type="monotone" dataKey="e" stroke="#8884d8" /> */}
        <Area
          type="monotone"
          dataKey="Electricity"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="Food"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey="Segregation"
          stroke="#C582CA"
          fillOpacity={1}
          fill="url(#colorRv)"
        />
        <Area
          type="monotone"
          dataKey="Water"
          stroke="#C8CA82"
          fillOpacity={1}
          fill="url(#colorSv)"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
      </AreaChart>
    </div>
  );
}

export default SustainableCampus;
