// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// <button onClick={handleLogout}>Logout</button>
// const handleLogout = () => {
//   navigate("/users/logout");
// };

// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const penelOpenRef = useRef(null);
  const penelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen === true) {
      gsap.to(penelOpenRef.current, {
        height: "70%",
        padding: 20,
      });
      gsap.to(penelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(penelOpenRef.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(penelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useEffect(() => {
    if (vehiclePanel === true) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-1/4 h-auto absolute left-5 top-5"
        src="/Uber_Logo.png"
        alt="Uber Logo"
      />

      <div className="h-screen w-screen">
        <img
          className="h-[75vh] w-screen object-cover"
          src="/Map_Design.gif"
          alt="BackGround Map Image"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <h4
            ref={penelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="text-xs font-semibold underline opacity-0 absolute right-9 top-8"
          >
            DOWN
          </h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line bg-black rounded-full absolute h-[55px] w-[5px] top-[45%] left-8"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-gray-200 px-8 py-2 text-base rounded-lg mt-4 w-full"
              type="text"
              placeholder="Add a PickUp Location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-gray-200 px-8 py-2 text-base rounded-lg mt-3 w-full"
              type="text"
              placeholder="Enter Your Destination"
            />
          </form>
        </div>
        <hr />
        <div ref={penelOpenRef} className="h-[0%] bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-8 translate-y-full bg-white"
      >
        <h4
          onClick={() => {
            setVehiclePanel(false);
          }}
          className="text-xs font-semibold text-center underline absolute right-10 top-11"
        >
          DOWN
        </h4>
        <h3 className="text-2xl underline font-semibold mb-5">
          Choose Your Vehicle
        </h3>

        <div className="flex border-2 border-gray-100 active:border-black mb-3 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10 w-auto"
            src="/Uber_Car.webp"
            alt="Uber Car Logo"
          />
          <div className="w-1/2">
            <h4 className="font-semibold text-base">
              UberCar <span>{">"} 4</span>
            </h4>
            <h5 className="font-medium text-sm">2 Mins Away</h5>
            <p className="font-base text-xs">Affordable & Compact Rides</p>
          </div>
          <h2 className="text-lg font-bold">Rs 200.00</h2>
        </div>

        <div className="flex border-2 border-gray-100 active:border-black mb-3 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12 w-auto"
            src="/Uber_Auto.webp"
            alt="Uber Auto Logo"
          />
          <div className="w-1/2">
            <h4 className="font-semibold text-base">
              UberAuto <span>{">"} 3</span>
            </h4>
            <h5 className="font-medium text-sm">2 Mins Away</h5>
            <p className="font-base text-xs">Affordable & Compact Rides</p>
          </div>
          <h2 className="text-lg font-bold">Rs 200.00</h2>
        </div>

        <div className="flex border-2 border-gray-100 active:border-black mb-3 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12 w-auto"
            src="/Uber_Moto.webp"
            alt="Uber Motor Bike Logo"
          />
          <div className="w-1/2">
            <h4 className="font-semibold text-base">
              UberMoto <span>{">"} 1</span>
            </h4>
            <h5 className="font-medium text-sm">2 Mins Away</h5>
            <p className="font-base text-xs">Affordable & Compact Rides</p>
          </div>
          <h2 className="text-lg font-bold">Rs 200.00</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
