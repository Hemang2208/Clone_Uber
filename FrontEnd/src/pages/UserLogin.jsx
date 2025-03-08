// import React from 'react'
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext.jsx";
import axios from "axios";

const UserLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandle = async (e) => {
    e.preventDefault();

    const userData = {
      email: Email,
      password: Password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during signin:", error);
    }

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
          User Login Page
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
          New User ?{" "}
          <Link to="/signup" className="text-blue-600">
            Create a New Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-green-400 inline-block text-center text-white font-bold mb-7 rounded px-4 py-2 w-full text-lg"
        >
          Login as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
