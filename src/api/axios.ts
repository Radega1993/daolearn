import axios from "axios";
import { isTokenExpired } from "../utils/jwt";

const apiClient = axios.create({
    baseURL: "http://localhost:3000", // Cambiar a la URL del backend
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para manejar tokens
apiClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
        if (isTokenExpired(token)) {
            console.error("El token ha expirado, debes iniciar sesión nuevamente.");
            localStorage.removeItem("token");
        } else {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
