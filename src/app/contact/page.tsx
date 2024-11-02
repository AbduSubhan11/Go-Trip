import React from "react";
import TourDetails from "../components/Tour Details";

function Page() {
  return (
    <div>
      <h1 className="text-[#f7a411] text-center sm:py-32 py-16 font-semibold">
        Contact Us
      </h1>
      {/* GRID */}
      <div className=" md:flex space-y-20 space-x-10 md:px-20 px-6 ">
        {/* LEFT */}
        <div className=" md:w-[80%] space-y-5">
          <h1 className="font-black text-2xl">Get in Touch</h1>
          <form action="" className="space-y-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="outline-none h-10 pl-2 border"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="outline-none h-10 pl-2 border"
              />
            </div>
            <div className="flex flex-col space-y-10">
              <input
                type="text"
                placeholder="Enter Subject"
                className="outline-none h-10 pl-2 border"
              />
              <textarea
                name="message"
                placeholder="Enter Message"
                className="outline-none h-32 pl-2 border"
              ></textarea>
            </div>
            <div>
              <button className="border border-[#014B85] hover:bg-[#014B85] hover:text-white px-10 py-3">
                SEND
              </button>
            </div>
          </form>
        </div>
        {/* RIGHT */}
        <div className="space-y-5 w-fit">
          <div className="flex space-x-4">
            <svg
              className="h-8 w-8 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <div>
              <h1>Karachi, Pakistan</h1>
            </div>
          </div>
          <div className="flex space-x-4">
            <svg
              className="h-8 w-8 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="7" y="4" width="10" height="16" rx="1" />{" "}
              <line x1="11" y1="5" x2="13" y2="5" />{" "}
              <line x1="12" y1="17" x2="12" y2="17.01" />
            </svg>
            <div>
              <h1>+92 3334370902</h1>
              <p className="text-gray-400">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <svg
              className="h-8 w-8 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <div>
              <h1>abdusubhan6678@gmail.com</h1>
              <p className="text-gray-400">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
      <TourDetails/>
    </div>
  );
}

export default Page;
