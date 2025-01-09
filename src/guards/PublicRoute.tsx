import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

interface PublicRouteProps {
    children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const { isAuthenticated, user } = useAuthContext();

    if (isAuthenticated) {
        // Redirigir al dashboard correspondiente según el rol
        return <Navigate to={user?.role === "Instructor" ? "/instructor" : "/student"} />;
    }

    return children;
};

export default PublicRoute;
