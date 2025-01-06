import { useState } from "react";
import apiClient from "../api/axios";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await apiClient.post("/auth/login", { email, password });
            const { user, token } = response.data;

            // Guardar el token en localStorage
            localStorage.setItem("token", token);

            setLoading(false);
            return user; // Retornar el usuario con el rol
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al iniciar sesión");
            throw err;
        }
    };

    const register = async (email: string, password: string, role: string) => {
        setLoading(true);
        try {
            const response = await apiClient.post("/auth/register", { email, password, role });
            const { user, token } = response.data;

            // Guardar el token en localStorage
            localStorage.setItem("token", token);

            setLoading(false);
            return user; // Retornar el usuario con el rol
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al registrar usuario");
            throw err;
        }
    };

    return { login, register, loading, error };
};
