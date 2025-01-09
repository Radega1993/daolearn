import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import apiClient from "../api/axios";
import { decodeToken, isTokenExpired } from "../utils/jwt";

interface User {
    id: number;
    email: string;
    role: string;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, role: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !isTokenExpired(token)) {
            const decoded = decodeToken(token);
            setUser(decoded);
        } else {
            localStorage.removeItem("token");
        }
    }, []);

    const login = async (email: string, password: string) => {
        const response = await apiClient.post("/auth/login", { email, password });
        const { token, user: userData } = response.data;

        localStorage.setItem("token", token);
        setUser(userData);
    };

    const register = async (email: string, password: string, role: string) => {
        const response = await apiClient.post("/auth/register", { email, password, role });
        const { token, user: userData } = response.data;

        localStorage.setItem("token", token);
        setUser(userData);
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
                register,
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
