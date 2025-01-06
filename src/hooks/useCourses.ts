import { useState } from "react";
import apiClient from "../api/axios";

export const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await apiClient.get("/courses");
            setCourses(response.data);
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al cargar los cursos");
        }
    };

    const createCourse = async (courseData: { title: string; description: string; isPublished: boolean; creatorId: number }) => {
        setLoading(true);
        try {
            const response = await apiClient.post("/courses", courseData);
            setLoading(false);
            return response.data;
        } catch (err: any) {
            setLoading(false);
            setError(err.response?.data?.message || "Error al crear el curso");
            throw err;
        }
    };

    return { courses, fetchCourses, createCourse, loading, error };
};
