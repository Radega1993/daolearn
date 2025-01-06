import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import apiClient from "../api/axios";
import { decodeToken } from "../utils/jwt"; // Crea esta función para decodificar el token

interface User {
    id: number;
    email: string;
    role: string;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = decodeToken(token);
            setUser(decoded); // Decodifica el token para obtener los datos del usuario
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await apiClient.post("/auth/login", { email, password });
            const { token, user: userData } = response.data;

            localStorage.setItem("token", token);
            setUser(userData);
        } catch (err) {
            throw new Error("Error al iniciar sesión");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext debe ser usado dentro de un AuthProvider");
    }
    return context;
};
