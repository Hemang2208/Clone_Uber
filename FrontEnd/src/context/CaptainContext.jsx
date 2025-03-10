import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [Captain, setCaptain] = useState({
    Email: "",
    Fullname: {
      Firstname: "",
      Middlename: "",
      Lastname: "",
    },
    Vehicle: {
      Color: "",
      Type: "",
      Capacity: "",
      Number: "",
      Model: "",
      Brand: "",
    },
  });

  return (
    <CaptainDataContext.Provider value={{ Captain, setCaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
};

CaptainContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaptainContext;
export { CaptainDataContext };
