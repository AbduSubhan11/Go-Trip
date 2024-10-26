import Image from "next/image";
import React from "react";

function PackagesCards({ image, price, name }: { image: string; price: number,name:string }) {
  return (
    // CARD
    <div className="rounded-md w-full h-fit hover:shadow-2xl overflow-hidden border">
      <div className="h-[30%]">
        <Image
          src={image}
          alt="card1"
          width={1000}
          height={100}
          className="w-full h-full cursor-pointer hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="h-[70%] md:px-6 px-5 py-8 space-y-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-[#777777]">United staes of America</p>
        <div className="flex justify-between text-[#777777] border-b py-2">
          <h1>Duration</h1>
          <h1>06 days and 7 nights</h1>
        </div>
        <div className="flex justify-between text-[#777777] border-b py-2">
          <h1>Airport</h1>
          <h1>Dubai</h1>
        </div>
        <div className="flex justify-between text-[#777777] border-b py-2">
          <h1>Extras</h1>
          <h1>All Inclusive</h1>
        </div>
        <div className="flex justify-between text-[#777777] py-2">
          <h1>Price Per Person</h1>
          <button>${price}</button>
        </div>
      </div>
    </div>
  );
}

export default PackagesCards;
