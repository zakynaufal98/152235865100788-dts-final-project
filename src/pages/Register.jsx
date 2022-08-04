import Image from "../asets/ApikGame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { MailIcon } from "@heroicons/react/solid";

const Register = () => {
  return (
    <div className="text-[#FFFFFF] flex justify-center font-medium text-xs h-screen">
      <div className="outer-container bg-[#2a2a2a] min-h-[20rem] mt-20 mb-20 items-center flex rounded-xl">
        <div className="inner-container  mr-10 ml-10 flex flex-col justify-center items-center ">
          <img src={Image} alt="" className="w-8 h-10 mt-10" />
          <span className="mt-5 p-5 text-center">
            Chose How to Sign up an Account
          </span>
          <ul className="flex flex-col gap-6 mt-10">
            <li className="bg-[#1b1c1c] flex gap-3 items-center p-3 rounded-lg">
              <MailIcon className="transition delay-75 hover:text-cyan-600 text-white h-6" />

              <Link to="/registermail">
                <p className="text-justify">SIGN UP WITH EMAIL</p>
              </Link>
            </li>
            <li className="bg-[#1b1c1c] flex gap-3 items-center p-3 rounded-lg">
              <FontAwesomeIcon
                icon={faGoogle}
                className="transition delay-75 hover:text-cyan-600 text-red-300 h-6"
              />
              <p>SIGN UP WITH GOOGLE</p>
            </li>
            <li className="bg-[#1b1c1c] flex gap-3 items-center p-3 rounded-lg">
              <FontAwesomeIcon
                icon={faFacebook}
                className="transition delay-75 hover:text-cyan-600 text-blue-500 h-6"
              />
              <p>SIGN UP WITH FACEBOOK</p>
            </li>
          </ul>
          <Link to="/login" className="mt-8">
            <span>Have an account? Login Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
