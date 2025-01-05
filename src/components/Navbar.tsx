import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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
                    <li>
                        <Link to="/login" className="hover:text-secondary">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="hover:text-secondary">Registro</Link>
                    </li>
                    <li>
                        <Link to="/instructor" className="hover:text-secondary">Instructor</Link>
                    </li>
                    <li>
                        <Link to="/student" className="hover:text-secondary">Estudiante</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
