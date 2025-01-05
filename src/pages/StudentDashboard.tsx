import React from "react";
import Layout from "../components/Layout";

const StudentDashboard: React.FC = () => {
    const courses = [
        { id: 1, title: "Curso de React", progress: "80%" },
        { id: 2, title: "Curso de JavaScript", progress: "50%" },
    ];

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">Panel del Estudiante</h1>
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Mis Cursos</h2>
                <ul>
                    {courses.map((course) => (
                        <li
                            key={course.id}
                            className="p-2 border-b last:border-none flex justify-between"
                        >
                            <span>{course.title}</span>
                            <span>{course.progress} completado</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default StudentDashboard;
