import { useState } from "react";
import apiClient from "../api/axios";

export const useSections = () => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSections = async () => {
        setLoading(true);
        try {
            const response = await apiClient.get("/sections");
            setSections(response.data);
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al cargar las secciones");
        }
    };

    const createSection = async (sectionData: { name: string; isUnlocked: boolean; courseId: number }) => {
        setLoading(true);
        try {
            const response = await apiClient.post("/sections", sectionData);
            setLoading(false);
            return response.data;
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al crear la sección");
            throw err;
        }
    };

    return { sections, fetchSections, createSection, loading, error };
};
