import Image from "next/image";
import Link from "next/link";
import React from "react";

function footer() {
  return (
    <footer className="bg-[#112A3E] text-white mt-52">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-16 px-8 py-28 gap-10">
        <div className="space-y-6">
          <Image
            src={"/Images/Logo.png"}
            alt="footerImage"
            width={100}
            height={100}
          />
          <p>
            We are dedicated to providing you with seamless booking experiences
            and exceptional customer service. Whether you're planning a weekend
            getaway, a family vacation, or a business trip, our platform offers
            a wide range of options tailored to your needs.
          </p>
        </div>
        <div className=" space-y-6">
          <h1 className="font-bold text-2xl">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            <Link href={"/about"} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">About Us</Link>
            <Link href={"/contact"} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">Contact Us</Link>
            <Link href={""} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">Offers & Discounts</Link>
            <Link href={""} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">Get Coupon</Link>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="font-bold text-2xl">Support</h1>
          <div className="flex flex-col space-y-2">
            <Link href={""} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">Frequently Asked Questions</Link>
            <Link href={""} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">Terms & Conditions</Link>
            <Link href={""} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">Privacy Policy</Link>
            <Link href={""} className="hover:text-[#f7a411] hover:pl-1 font-thin w-fit">Report a Payment Issue</Link>
          </div>
        </div>
      </div>
      <h1 className="text-center py-5">
        Developed by <span className="text-[#F7A411]">Abdu Subhan</span> | All
        Rights Reserved
      </h1>
    </footer>
  );
}

export default footer;
