import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-center bg-cover bg-[url(/Start_Image.jpg)] h-screen w-screen pt-8 flex flex-col justify-between bg-red-100">
        <img className="w-1/4 ml-8" src="/Uber_Logo.png" alt="Uber_Logo" />
        <div className="bg-white pb-7 py-5 px-7">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="inline-block text-center text-xl w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;

// UBER_LOGO :- https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png
// UBER_BG :- https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
