import { useState, useCallback } from "react";
import apiClient from "../api/axios";
import { Course } from "../types/Course";

export const useCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCourses = useCallback(async () => {
        setLoading(true);
        try {
            const response = await apiClient.get<Course[]>("/courses");
            setCourses(response.data);
        } catch (err: any) {
            setError(err.response?.data?.message || "Error al cargar los cursos");
        } finally {
            setLoading(false);
        }
    }, []);

    const createCourse = async (courseData: Omit<Course, "id">) => {
        setLoading(true);
        try {
            const response = await apiClient.post<Course>("/courses", courseData);
            fetchCourses(); // Actualiza la lista tras crear
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || "Error al crear el curso");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { courses, fetchCourses, createCourse, loading, error };
};
