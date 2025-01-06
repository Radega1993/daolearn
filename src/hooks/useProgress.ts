import { useState } from "react";
import apiClient from "../api/axios";

export const useProgress = () => {
    const [progress, setProgress] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProgress = async (studentId: number) => {
        setLoading(true);
        try {
            const response = await apiClient.get(`/progress/${studentId}`);
            setProgress(response.data);
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al cargar el progreso");
        }
    };

    const unlockSection = async (studentId: number, sectionId: number) => {
        setLoading(true);
        try {
            const response = await apiClient.post(`/progress/unlock-section`, {
                studentId,
                sectionId,
            });
            setLoading(false);
            return response.data;
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al desbloquear la sección");
            throw err;
        }
    };

    return { progress, fetchProgress, unlockSection, loading, error };
};
