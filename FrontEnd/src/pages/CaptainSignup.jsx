import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Middlename, setMiddlename] = useState("");
  const [Lastname, setLastname] = useState("");

  const [VehicleType, setVehicleType] = useState("");
  const [VehicleColor, setVehicleColor] = useState("");
  const [VehiclePlate, setVehiclePlate] = useState("");
  const [VehicleCapacity, setVehicleCapacity] = useState("");
  const [VehicleBrand, setVehicleBrand] = useState("");
  const [VehicleModel, setVehicleModel] = useState("");

  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  const submitHandle = async (e) => {
    e.preventDefault();

    const newCaptain = {
      email: Email,
      password: Password,

      fullname: {
        firstname: Firstname,
        middlename: Middlename,
        lastname: Lastname,
      },

      vehical: {
        vehicalColor: VehicleColor,
        plateNumber: VehiclePlate,
        capacity: VehicleCapacity,
        vehicalType: VehicleType,
        vehicalBrand: VehicleBrand,
        vehicalModel: VehicleModel,
      },
    };

    console.log(newCaptain);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        newCaptain,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.status);
      
      if (response.status) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setMiddlename("");
    setLastname("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleBrand("");
    setVehicleModel("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-1/4 h-auto" src="/Uber_Logo.png" alt="Uber_Logo" />
        <h2 className="mt-5 mb-4 underline text-center font-bold text-xl">
          Captain Signup Page
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
              className="bg-gray-200 mb-3 w-full rounded px-4 py-2 border text-lg placeholder:text-base"
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
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                placeholder="Middle Name"
                value={Middlename}
                onChange={(e) => {
                  setMiddlename(e.target.value);
                }}
                type="text"
              />
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                placeholder="Last Name"
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
            className="bg-gray-200 mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
            className="bg-gray-200 mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Enter Your Password"
            required
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />

          <h3 className="text-lg font-semibold mb-1">Vehical Information</h3>

          <div className="flex flex-col">
            <div className="flex gap-3 mb-3">
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                placeholder="Vehicle Color"
                required
                value={VehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
                type="text"
              />
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                placeholder="Vehicle Number"
                required
                value={VehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex gap-3 mb-3">
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                placeholder="Vehicle Brand"
                required
                value={VehicleBrand}
                onChange={(e) => {
                  setVehicleBrand(e.target.value);
                }}
                type="text"
              />
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                placeholder="Vehicle Model"
                required
                value={VehicleModel}
                onChange={(e) => {
                  setVehicleModel(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex gap-3 mb-3">
              <input
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                placeholder="Vehicle Capacity"
                required
                value={VehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
                type="number"
              />
              <select
                className="bg-gray-200 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                required
                value={VehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Your Vehicle Type
                </option>
                <option value="car">CAR</option>
                <option value="auto">AUTO</option>
                <option value="bike">BIKE</option>
              </select>
            </div>
          </div>

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
          to="/login"
          className="bg-orange-400 inline-block text-center text-white font-bold mb-7 mt-7 rounded px-4 py-2 w-full text-lg"
        >
          Login as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
