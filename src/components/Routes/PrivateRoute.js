import { Navigate } from "react-router-dom";

import { useContext } from "react";

import { UserContext } from "../../assets/contexts/userContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if (!user) {
        alert("Você não está logado!")
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
