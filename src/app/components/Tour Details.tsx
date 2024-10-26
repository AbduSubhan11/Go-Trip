import Image from "next/image";
import React from "react";

function TourDetails() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-8 px-4 md:px-16 py-20">
      <div className="w-full h-52 hover:shadow-xl border flex flex-col justify-center items-center px-5">
        <Image
          src="/Images/guide.png"
          alt="man"
          width={100}
          height={100}
          className="w-20 h-20"
        />
        <h1 className="font-semibold text-center">8000+ Our Local Guides</h1>
      </div>
      <div className="w-full h-52 hover:shadow-xl border flex flex-col justify-center items-center">
        <Image
          src="/Images/done.png"
          alt="man"
          width={100}
          height={100}
          className="w-20 h-20"
        />
        <h1 className="font-semibold text-center">100% Trusted Tour Agency</h1>
      </div>
      <div className="w-full h-52 hover:shadow-xl border flex flex-col justify-center items-center">
        <Image
          src="/Images/world.png"
          alt="man"
          width={100}
          height={100}
          className="w-20 h-20"
        />
        <h1 className="font-semibold text-center">28+ Years of Travel Experience</h1>
      </div>
      <div className="w-full h-52 hover:shadow-xl border flex flex-col justify-center items-center">
        <Image
          src="/Images/like.png"
          alt="man"
          width={100}
          height={100}
          className="w-20 h-20"
        />
        <h1 className="font-semibold text-center">98% Our Travelers are Happy</h1>
      </div>
    </div>
  );
}

export default TourDetails;
