import React from "react";
import PackagesCards from "../components/PackagesCards";
import Link from "next/link";

function Page() {
  return (
    <div>
      <h1 className="text-[#f7a411] text-center py-32 font-semibold">
        Our Packages
      </h1>
      <div className="text-center">
        <h1 className="font-bold text-2xl font-serif">Popular Destinations</h1>
        <p className="text-[#777777]">
          We all live in an age that belongs to the young at heart. Life that is
          becoming extremely fast, day to.
        </p>
      </div>
      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 md:p-32 p-6 gap-10">
        <PackagesCards
          image="/Images/packagecard1.webp"
          price={999}
          name="The Street View"
        />
        <PackagesCards
          image="/Images/packagecard2.webp"
          price={1499}
          name="The Mountain View"
        />
        <PackagesCards
          image="/Images/packagecard3.webp"
          price={1299}
          name="The Sea Beach View"
        />
        <PackagesCards
          image="/Images/packagecard4.webp"
          price={1999}
          name="The Sea Beach View"
        />
        <PackagesCards
          image="/Images/packagecard5.webp"
          price={1499}
          name="The Dark Forest Adventure"
        />
        <PackagesCards
          image="/Images/favouriteCard2.jpg"
          price={1299}
          name="The Mountain in Forest"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-3xl font-bold text-center font-serif">
          Did not find your Package? Feel free to ask us. We‘ll make it for you
        </h1>
        <Link
          href={"/contact"}
          className="bg-[#f7a411] px-4 py-2 hover:bg-[#fac365]"
        >
          REQUEST CUSTOM PRICE
        </Link>
      </div>
    </div>
  );
}
export default Page;
