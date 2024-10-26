import Image from "next/image";
import React from "react";
import TourDetails from "../components/Tour Details";
import PlateformOverview from "../components/Plateform Overview";

function Page() {
  return (
    <div className="space-y-32">
      <h1 className="text-[#f7a411] text-center py-20 font-semibold">
        About Us
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-16">
        <div className="md:px-32 px-5">
          <Image
            src="/Images/aboutImg.jpg"
            alt="aboutImg"
            width={1000}
            height={100}
            className="h-auto"
          />
        </div>
        <div className="space-y-8 px-4">
          <h1 className="text-[#f7a411]">ABOUT OUR COMPANY</h1>
          <h1 className="font-bold md:text-5xl text-2xl">
            We are Go Trip Ravels Support Company (1992)
          </h1>
          <p>
            We specialize in creating personalized travel experiences that cater
            to all kinds of explorers—whether you are a solo traveler, a family,
            or a group of friends. Our mission is to make travel easy,
            accessible, and enjoyable by offering a wide selection of curated
            tours, destinations, and activities to suit every interest and
            budget. With a dedicated team of travel experts and a passion for
            exploring the world, we ensure every journey is smooth and
            memorable. From the moment you start planning to the time you return
            home, we are here to make your travel dreams come true. Join us and
            discover the world with confidence and ease!
          </p>
          <p>
            We know the difference thoughtful planning and a touch of
            personalization can make. Our team of travel experts and local
            guides work tirelessly to ensure each tour is as unique as the
            traveler who embarks on it. From 24/7 customer support to secure
            booking and customizable itineraries, we are committed to delivering
            excellence every step of the way.
          </p>
        </div>
      </div>
      <TourDetails/>
      <PlateformOverview/>
    </div>
  );
}

export default Page;
