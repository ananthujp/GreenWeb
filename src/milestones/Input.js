import { addDoc, collection, doc, updateDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Modal from "./Modal";
import Preview from "./Preview";

function Input({ setDisplay, edit, setEdit }) {
  const [form, setForm] = useState({
    title: edit?.title,
    subtitle: edit?.subtitle,
    details: edit?.data,
    date: new Date(edit?.date ? edit.date.toString() : null)
      .toISOString()
      .split("T")[0],
    pics: edit?.pics,
    child: edit?.child,
  });
  const [error, setError] = useState();
  const handleSubmit = () => {
    var Error = [];
    if (!form.title) {
      Error.push("Title");
    }
    if (!form.subtitle) {
      Error.push("Subtitle");
    }
    if (!form.details) {
      Error.push("Details");
    }
    if (!form.pics) {
      Error.push("Images");
    }
    if (!form.date) {
      Error.push("Date");
    }
    if (Error.length) {
      setError(
        Error.length > 1
          ? "Fill the following fields : " + Error
          : "Fill the following field : " + Error
      );
    } else {
      setError();
      !edit
        ? addDoc(collection(db, "Timeline"), {
            title: form.title,
            subtitle: form.subtitle,
            details: form.details,
            date: new Date(form.date),
            pics: form.pics.split(","),
            child: form.child ? form.child : "",
          }).then(() => setDisplay(false))
        : updateDoc(doc(db, "Timeline", edit.id), {
            title: form.title,
            subtitle: form.subtitle,
            details: form.details,
            date: new Date(form.date),
            child: form.child ? form.child : "",
            pics: form.pics.toString().split(","),
          }).then(() => setEdit(false));
    }
  };

  return (
    <div className="flex flex-col p-4 max-w-xl w-full ">
      <div action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label className="mb-1 block text-sm font-medium text-[#07074D]">
                Title
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="First Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label className="mb-1 block text-sm font-medium text-[#07074D]">
                Subtitle
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                value={form.subtitle}
                onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                placeholder="Last Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-[#07074D]">
            Details
          </label>
          <textarea
            type="number"
            name="guest"
            id="guest"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            placeholder="More details about the event"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-[#07074D]">
            Images (links separated by commas)
          </label>
          <textarea
            type="number"
            name="guest"
            id="guest"
            value={form.pics}
            onChange={(e) => setForm({ ...form, pics: e.target.value })}
            placeholder="More details about the event"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-[#07074D]">
            Childs (if any)
          </label>
          <textarea
            type="number"
            name="guest"
            id="guest"
            value={form.child}
            onChange={(e) => setForm({ ...form, child: e.target.value })}
            placeholder="<div> </div>"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label className="mb-1 block text-sm font-medium text-[#07074D]">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={form?.date ? form.date : ""}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        {error && (
          <div className="mx-auto bg-red-100 p-1 text-sm mb-2 rounded-lg text-red-500">
            {error}
          </div>
        )}
        <div className="w-full flex flex-row justify-between">
          <button
            onClick={() => handleSubmit()}
            className="mx-auto hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-sm font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
