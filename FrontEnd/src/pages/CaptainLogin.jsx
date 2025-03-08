// import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CaptainData, setCaptainData] = useState({});

  const submitHandle = (e) => {
    e.preventDefault();
    setCaptainData({
      Email: Email,
      Password: Password,
    });
    CaptainData;

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-1/4 h-auto fixed"
          src="/Uber_Logo.png"
          alt="Uber_Logo"
        />
        <h2 className="mt-16 mb-7 underline text-center font-bold text-xl">
          Captain Login Page
        </h2>
        <form
          onSubmit={(e) => {
            submitHandle(e);
          }}
          action=""
        >
          <h3 className="text-lg font-semibold mb-2">Enter Your Email</h3>
          <input
            className="bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Enter Your Email"
            required
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
          <h3 className="text-lg font-semibold mb-2">Enter Your Password</h3>
          <input
            className="bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Enter Your Password"
            required
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <button className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Login
          </button>
        </form>
        <p className="text-black text-center">
          Join Our Fleet -{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register Here
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-orange-400 inline-block text-center text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg"
        >
          Login as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
