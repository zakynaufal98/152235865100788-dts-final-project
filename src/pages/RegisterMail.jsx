import { useState } from "react";
import Image from "../asets/ApikGame.png";
import { registerWithEmail } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const RegisterMail = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e) => {
    setCredential({
      ...credential,
      email: e.target.value,
    });
  };

  const handleChangePassword = (e) => {
    setCredential({
      ...credential,
      password: e.target.value,
    });
  };

  const registerHandler = () => {
    registerWithEmail(credential.email, credential.password);
  };

  const submitButton = (e) => {
    e.preventDefault();
    registerHandler();
  };

  return (
    <div className="text-[#FFFFFF] flex justify-center h-screen font-medium text-xs">
      <div className="outer-container bg-[#2a2a2a] min-h-[20rem] mt-20 mb-20 items-center flex rounded-xl">
        <div className="inner-container  mr-10 ml-10 flex flex-col justify-center items-center ">
          <img src={Image} alt="" className="w-8 h-10 mt-10" />
          <span className="mt-5 p-5 text-center">Register Your Account</span>
          <form className="text-white flex flex-col">
            <div
              id="errorMessage"
              className="mb-2 uppercase text-red-500"
            ></div>
            <label className="mb-2">E-mail</label>
            <input
              type="email"
              value={credential.email}
              placeholder="example@domain.com"
              className="w-72 h-6 mb-3 p-4 border border-solid border-white bg-neutral-900 hover:bg-neutral-800  rounded"
              onChange={handleChangeEmail}
              required
            />
            <label className="mb-2">Password</label>
            <input
              type="password"
              value={credential.password}
              placeholder=""
              className="w-72 h-6 mb-3 p-4 border border-solid border-white bg-neutral-900 hover:bg-neutral-800 rounded"
              onChange={handleChangePassword}
              required
            />
            <button
              type="submit"
              className="bg-[#E50913] text-white text-s w-72 h-12 mt-6 rounded hover:bg-red-500"
              onClick={submitButton}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterMail;
