import axios from "axios";
import { decodeToken, isTokenExpired } from "../utils/jwt";

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
            try {
                const response = await axios.post("http://localhost:3000/auth/refresh-token", {
                    token,
                });
                const { newToken } = response.data;
                localStorage.setItem("token", newToken);
                config.headers.Authorization = `Bearer ${newToken}`;
            } catch (err) {
                console.error("Error al refrescar el token:", err);
                localStorage.removeItem("token");
            }
        } else {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

export default apiClient;
