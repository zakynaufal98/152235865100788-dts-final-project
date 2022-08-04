import Image from "../asets/ApikGame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { MailIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  return (
    <div className="text-[#FFFFFF] flex justify-center h-screen font-medium text-xs">
      <div className="outer-container bg-[#2a2a2a] min-h-[20rem] mt-20 mb-20 items-center flex rounded-xl">
        <div className="inner-container  mr-10 ml-10 flex flex-col justify-center items-center ">
          <img src={Image} alt="" className="w-12 h-12 mt-10" />
          <span className="mt-5 p-5 text-center">
            Chose How to sign in into your Account
          </span>
          <ul className="flex flex-col gap-6 mt-10">
            <li className="bg-[#1b1c1c] flex gap-3 items-center p-3 rounded-lg">
              <MailIcon className="transition delay-75 hover:text-cyan-600 text-white h-6" />
              <Link to="/loginmail">
                <p className="hover:text-cyan-600">SIGN IN WITH EMAIL</p>
              </Link>
            </li>
            <li className="bg-[#1b1c1c] flex gap-3 items-center p-3 rounded-lg">
              <FontAwesomeIcon
                icon={faGoogle}
                className="transition delay-75 hover:text-cyan-600 text-red-500 h-6"
              />
              <p>SIGN IN WITH GOOGLE</p>
            </li>
            <li className="bg-[#1b1c1c] flex gap-3 items-center p-3 rounded-lg">
              <FontAwesomeIcon
                icon={faFacebook}
                className="transition delay-75 hover:text-cyan-600 text-blue-500 h-6"
              />
              <p>SIGN IN WITH FACEBOOK</p>
            </li>
          </ul>
          <Link to="/register" className="mt-6">
            <span>Dont Have an account? Register Here</span>
          </Link>
          <Link to="/" className="mt-2 mb-6">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
