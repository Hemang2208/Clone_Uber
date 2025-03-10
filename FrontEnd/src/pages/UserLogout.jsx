import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  }, [navigate, token]);

  return <div>User Logout Page</div>;
};

export default UserLogout;
