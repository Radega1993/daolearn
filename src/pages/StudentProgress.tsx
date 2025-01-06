import React, { useEffect } from "react";
import { useProgress } from "../hooks/useProgress";
import Layout from "../components/Layout";

const StudentProgress: React.FC = () => {
    const studentId = 1; // Ejemplo: Reemplazar con el ID del estudiante autenticado
    const { progress, fetchProgress, loading, error } = useProgress();

    useEffect(() => {
        fetchProgress(studentId);
    }, [studentId]);

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">Progreso del Estudiante</h1>
            {loading && <p>Cargando progreso...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {progress.map((entry: any) => (
                    <li key={entry.id} className="p-2 border-b">
                        <span>Sección: {entry.sectionName}</span> -{" "}
                        <span>{entry.isCompleted ? "Completado" : "Pendiente"}</span>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default StudentProgress;
