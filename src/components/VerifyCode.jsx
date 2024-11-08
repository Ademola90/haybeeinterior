import React from "react";
import Button from "./buttons";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const navigate = useNavigate();
  return (
    <div className=" justify-center items-center">
      <div className=" bg-black w-[500px] ">
        <input
          placeholder="Enter code"
          className=" w-[300px] outline-none h-[45px]"
          type="text"
        />
        <p className=" text-white cursor-pointer">Resend Code</p>
        <Button
          css={" text-[#fff]"}
          onClick={() => navigate("/register")}
          text="Login"
        />
      </div>
    </div>
  );
};

export default VerifyCode;
