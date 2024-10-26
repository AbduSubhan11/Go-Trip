import Image from "next/image";
import React from "react";

function FavouritePlaces() {
  return (
    <div>
      <h1 className="text-[#FFB400] text-center">FEATURED TOURS Packages</h1>
      <h1 className="text-center font-bold text-5xl">Favourite Places</h1>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-28 px-10 py-20 md:gap-4 gap-10">
        {/* CARD 1 */}
        <div className="rounded-md w-full h-fit overflow-hidden border">
          <div className="h-[70%]">
            <Image
              src="/Images/favouriteCard1.jpg"
              alt="card1"
              width={1000}
              height={100}
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="h-[30%] md:px-10 px-5 py-8 space-y-2">
            <p className="flex items-center text-[#97A0A7]">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-yellow-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              Superb
            </p>
            <h1 className="font-bold text-2xl">Experience the Serenity of the Sea!</h1>
            <p className="text-[#4CAFA4] font-bold">
              $1870{" "}
              <span className="font-semibold text-[#97A0A7]">/Per Person</span>
            </p>
            <p className="text-[#97A0A7]">3 Days Tour</p>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="rounded-md w-full h-fit border overflow-hidden">
          <div className="h-[70%]">
            <Image
              src="/Images/favouriteCard2.jpg"
              alt="card1"
              width={1000}
              height={100}
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="h-[30%] md:px-10 px-5  py-8 space-y-2">
            <p className="flex items-center text-[#97A0A7]">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-yellow-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              Superb
            </p>
            <h1 className="font-bold text-2xl">Discover the Serenity of the Forest</h1>
            <p className="text-[#4CAFA4] font-bold">
              $2000{" "}
              <span className="font-semibold text-[#97A0A7]">/Per Person</span>
            </p>
            <p className="text-[#97A0A7]">3 Days Tour</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="rounded-md w-full  h-fit  border overflow-hidden">
          <div className="h-[70%]">
            <Image
              src="/Images/favouriteCard3.jpg"
              alt="card1"
              width={1000}
              height={100}
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="h-[30%] md:px-10 px-5  py-8 space-y-2">
            <p className="flex items-center text-[#97A0A7]">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-yellow-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              Superb
            </p>
            <h1 className="font-bold text-2xl">
              Slide into the Adventure of a Lifetime!
            </h1>
            <p className="text-[#4CAFA4] font-bold">
              $1000{" "}
              <span className="font-semibold text-[#97A0A7]">/Per Person</span>
            </p>
            <p className="text-[#97A0A7]">3 Days Tour</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouritePlaces;
