import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status) {
            setCaptain(response.data.captain);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error in Fetching Captain Profile:", error);
          localStorage.removeItem("token");
          navigate("/captain-login");
        });
    }
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div className="text-center text-3xl">Loading...</div>;
  }

  return <>{children}</>;
};

CaptainProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaptainProtectedWrapper;
