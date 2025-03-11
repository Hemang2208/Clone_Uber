import { useNavigate } from "react-router-dom";

const CaptainHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/captains/logout");
  };

  return (
    <div>
      Home, How Are You ?<button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CaptainHome;
