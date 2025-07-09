import { Clock } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [type, setType] = useState("General");

  return (
    <div className="bg-transparent rounded-2xl p-6 md:p-10 w-full mx-auto border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg md:text-xl font-bold mr-2">Write it here!</h2>
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
            <button
              className={`cursor-pointer px-4 py-1 rounded bg-gray-100 text-sm font-medium transition-colors ${
                type === "General"
                  ? "bg-white border border-gray-200 shadow-sm"
                  : ""
              }`}
              onClick={() => setType("General")}
              type="button"
            >
              General
            </button>
            <button
              className={`cursor-pointer px-4 py-1 rounded bg-gray-100 text-sm font-medium transition-colors ${
                type === "Project"
                  ? "bg-white border border-gray-200 shadow-sm"
                  : ""
              }`}
              onClick={() => setType("Project")}
              type="button"
            >
              Project
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 text-black text-sm">
          <Clock className="w-4 h-4" />
          <span>Average Response Time: 24 Hours or Less</span>
        </div>
      </div>
      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 bg-gray-100 rounded-lg px-4 py-3 outline-none placeholder-gray-400 text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-gray-100 rounded-lg px-4 py-3 outline-none placeholder-gray-400 text-base"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none placeholder-gray-400 text-base resize-none"
        />
        <div>
          <button
            type="submit"
            className={`w-full text-white font-semibold py-4 rounded-xl text-lg transition-colors shadow ${
              type === "General"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Send Message <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
