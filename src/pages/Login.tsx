import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { showSuccessAlert, showErrorAlert } from "../components/Alert";

const Login: React.FC = () => {
    const { login, user, isAuthenticated } = useAuthContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            showSuccessAlert("Inicio de Sesión Exitoso", "Redirigiendo...");
        } catch (err) {
            showErrorAlert("Error en el Inicio de Sesión", "Intenta nuevamente.");
        }
    };

    useEffect(() => {
        if (isAuthenticated && user) {
            navigate(user.role === "Instructor" ? "/instructor" : "/student");
        }
    }, [isAuthenticated, user, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
                <div className="mb-4">
                    <label className="block mb-1">Correo Electrónico</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Contraseña</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default Login;
