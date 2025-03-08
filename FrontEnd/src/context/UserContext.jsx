import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [User, setUser] = useState({
    Email: "",
    Fullname: {
      Firstname: "",
      Middlename: "",
      Lastname: "",
    },
  });

  return (
    <UserDataContext.Provider value={{ User, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
export { UserDataContext };
