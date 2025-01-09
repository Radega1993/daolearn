import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
    children: JSX.Element;
    roles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
    const { user, isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (roles && !roles.includes(user?.role ?? "")) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
