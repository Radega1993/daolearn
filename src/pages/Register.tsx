import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { showSuccessAlert, showErrorAlert } from "../components/Alert";

const Register: React.FC = () => {
    const { register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Student");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await register(email, password, role);
            showSuccessAlert("Registro Exitoso", "Redirigiendo...");
            navigate(user.role === "Instructor" ? "/instructor" : "/student");
        } catch {
            showErrorAlert("Error en el Registro", "Intenta nuevamente.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Crear Cuenta</h2>
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
                <div className="mb-4">
                    <label className="block mb-1">Rol</label>
                    <select
                        className="w-full px-3 py-2 border rounded"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="Student">Estudiante</option>
                        <option value="Instructor">Instructor</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default Register;
