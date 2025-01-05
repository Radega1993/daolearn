import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";

const Login: React.FC = () => {
    const { formData, handleChange } = useForm({ email: "", password: "" });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Logging in:", formData);
    };

    return (
        <Layout>
            <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-primary mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <label className="block mb-2">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 mb-4 border rounded"
                        required
                    />
                    <label className="block mb-2">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 mb-4 border rounded"
                        required
                    />
                    <Button text="Iniciar Sesión" />
                </form>
            </div>
        </Layout>
    );
};

export default Login;
