import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      });
  }, [navigate, token]);

  return <div>Captain Logout Page</div>;
};

export default CaptainLogout;
