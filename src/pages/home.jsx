import React from "react";
import hero from "../assets/hero.jpeg";
import Button from "../components/buttons";
import Navbar from "../components/navbar/index";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" lg:pl-16 lg:pr-0 md:px-8 px-5 lg:flex md:grid grid justify-center items-center bg-gradient-to-br mt-8 gap-10 ">
      <div className=" lg:w-1/2">
        <div>
          <div className=" grid ">
            <p className="  font-semibold text-[#000] Sora text-6xl">
              Make Your Interior More Minimaistic & Modern
            </p>
          </div>

          <div className=" grid mt-5">
            <p className="  text-dark lg:w-[350px]">
              Bringing interiors to life, understanding the person or people
              living in a home is far greater need in design.
            </p>
          </div>

          <div className=" lg:flex md:flex hidden items-center gap-10 mt-10 ">
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
        </div>
      </div>
      <div className=" lg:w-1/2 ">
        <img className=" rounded-tl-[200px]" src={hero} alt="" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
