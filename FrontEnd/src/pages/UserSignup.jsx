import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext.jsx";
import axios from "axios";

const UserSignup = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Middlename, setMiddlename] = useState("");
  const [Lastname, setLastname] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandle = async (e) => {
    e.preventDefault();

    const newUser = {
      email: Email,
      password: Password,
      fullname: {
        firstname: Firstname,
        middlename: Middlename,
        lastname: Lastname,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser,
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
      console.error("Error during signup:", error);
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setMiddlename("");
    setLastname("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-1/4 h-auto fixed"
          src="/Uber_Logo.png"
          alt="Uber_Logo"
        />
        <h2 className="mt-16 mb-4 underline text-center font-bold text-xl">
          User Signup Page
        </h2>
        <form
          onSubmit={(e) => {
            submitHandle(e);
          }}
          action=""
        >
          <h3 className="text-lg font-semibold mb-1">Enter Your Name</h3>
          <div className="flex flex-col">
            <input
              className="bg-gray-200 mb-3 w-full rounded px-4 py-2 border text-lg placeholder:text-sm"
              placeholder="Enter Your First Name"
              required
              value={Firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              type="text"
            />
            <div className="flex gap-3 mb-3">
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
                placeholder="Middle Name"
                required
                value={Middlename}
                onChange={(e) => {
                  setMiddlename(e.target.value);
                }}
                type="text"
              />
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
                placeholder="Last Name"
                required
                value={Lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-1">Enter Your Email</h3>
          <input
            className="bg-gray-200 mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            placeholder="Enter Your Email"
            required
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />

          <h3 className="text-lg font-semibold mb-1">Enter Your Password</h3>
          <input
            className="bg-gray-200 mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            placeholder="Enter Your Password"
            required
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />

          <button className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Signup
          </button>
        </form>
        <p className="text-black text-center">
          Already have an Account ?{" "}
          <Link to="/Login" className="text-blue-600">
            Login Here
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

export default UserSignup;
