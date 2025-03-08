import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return <>{children}</>;
};

UserProtectedWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProtectedWrapper;
