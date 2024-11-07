import React, { useEffect, useState } from "react";
// import pagelogo from "../../assets/pagelogo.png";
import Button from "../buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import Aos from "aos";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-white py-6 flex items-center justify-between lg:px-16 md:px-8 px-5">
      <div>
        <p className=" Sora text-3xl">Haybee </p>
        {/* <img className=" w-16 h-11" src={pagelogo} alt="" /> */}
      </div>
      <ul className=" lg:flex md:flex hidden items-center gap-10 ">
        <li className=" Soralight cursor-pointer text-[#666666] text-base">
          Furniture
        </li>
        <li className=" Soralight cursor-pointer text-[#666666] text-base">
          Service
        </li>
        <li className=" Soralight cursor-pointer text-[#666666] text-base">
          About us
        </li>
        <li className=" Soralight cursor-pointer text-[#666666] text-base">
          Contents
        </li>
      </ul>
      <div className=" lg:flex md:flex hidden items-center gap-10 ">
        {/* <Button
          css={"Soralight cursor-pointer text-main text-base"}
          text="Login"
        /> */}
        <Button
          onClick={() => navigate("/register")}
          text="Sign up"
          css={
            "Soralight cursor-pointer text-base text-[#fff] bg-main px-4 py-2 rounded-md"
          }
        />
      </div>
      <GiHamburgerMenu
        onClick={() => setToggle(!toggle)}
        size={24}
        className=" cursor-pointer lg:hidden md:hidden block"
      />

      {toggle && (
        <div
          data-aos="fade-right"
          className="  bg-white w-full h-screen z-40 fixed  top-16 right-0 items-center"
        >
          <ul className=" lg:hidden md:hidden grid mt-16 items-center gap-10 justify-center ">
            <li className=" Soralight text-center cursor-pointer text-[#000] text-xl">
              Photos
            </li>
            <li className=" Soralight text-center cursor-pointer text-[#000] text-xl">
              Videos
            </li>
            <li className=" Soralight text-center cursor-pointer text-[#000] text-xl">
              Trending
            </li>
            <li className=" Soralight text-center cursor-pointer text-[#000] text-xl">
              New Contents
            </li>
          </ul>

          <div className=" lg:flex md:flex grid justify-center mt-10 items-center gap-10 ">
            <p className=" Soralight cursor-pointer  text-center text-xl text-[#000]">
              You have 0 Credit
            </p>

            <div className=" flex justify-center items-center gap-5">
              {" "}
              {/* <Button
                css={"Soralight cursor-pointer text-[#000] text-base"}
                text="Login"
              /> */}
              <Button
                onClick={() => navigate("/register")}
                text="Sign up"
                css={
                  "Soralight cursor-pointer text-base text-[#fff] bg-main px-4 py-2 rounded-md"
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
