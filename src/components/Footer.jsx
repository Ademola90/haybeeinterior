import React from "react";
import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-16 md:px-8 px-5 py-12 grid justify-center items-center">
      <div className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-center lg:gap-0 md:gap-0 gap-10 ">
        <div>
          <p className=" Sora text-3xl">Haybee </p>
          <p className=" text-[#606060] Satoshi text-base w-[90%] mt-3">
            {" "}
            Bringing interiors to life, understanding the person or people
            living in a home is far greater need in design.
          </p>
          <div className=" flex items-center gap-5 mt-5">
            <FaFacebook size={20} className=" text-main" />
            <FaInstagramSquare size={20} className=" text-main" />
            <FaTiktok size={20} className=" text-main" />
            <FaSquareXTwitter size={20} className=" text-main" />
          </div>
        </div>
        <ul>
          <li className=" Sora text-lg ">OUR SERVICES</li>
          <li className=" Satoshi text-[#606060] text-base mt-4">
            Interior & Exterior Painting
          </li>
          <li className="Satoshi text-[#606060] text-base mt-2">
            2 Pack Epoxy Floor Finishes
          </li>
          <li className="Satoshi text-[#606060] text-base mt-2">
            Outdoor Decking Coating
          </li>
          <li className="Satoshi text-[#606060] text-base mt-2">
            Wallpaper Hanging
          </li>
        </ul>
        <div>
          <div>
            <p className=" Sora text-lg ">CONTACT</p>
            <li className="Satoshi text-[#606060] text-base mt-4">
              haybeeinterior@gmail.com
            </li>
            <li className="Satoshi text-[#606060] text-base mt-2">
              +234 814 685 6287
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
