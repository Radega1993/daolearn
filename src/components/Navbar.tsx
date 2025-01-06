import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Navbar: React.FC = () => {
    const { user, isAuthenticated, logout } = useAuthContext();

    return (
        <nav className="bg-primary text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link to="/">DaoLearn</Link>
                </h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-secondary">Inicio</Link>
                    </li>
                    {!isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/login" className="hover:text-secondary">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="hover:text-secondary">Registro</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            {user?.role === "Instructor" && (
                                <li>
                                    <Link to="/instructor" className="hover:text-secondary">Instructor</Link>
                                </li>
                            )}
                            {user?.role === "Student" && (
                                <li>
                                    <Link to="/student" className="hover:text-secondary">Estudiante</Link>
                                </li>
                            )}
                            <li>
                                <button
                                    onClick={logout}
                                    className="hover:text-secondary"
                                >
                                    Cerrar Sesión
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
