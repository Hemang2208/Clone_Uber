import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/users/logout");
  };

  return (
    <div>
      Home, How Are You ?<button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
