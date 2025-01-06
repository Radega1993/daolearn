import React from "react";

const InstructorDashboard: React.FC = () => {
    const courses = [
        { id: 1, title: "Curso de React", students: 120 },
        { id: 2, title: "Curso de JavaScript", students: 80 },
    ];

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Panel del Instructor</h1>
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Tus Cursos</h2>
                <ul>
                    {courses.map((course) => (
                        <li
                            key={course.id}
                            className="p-2 border-b last:border-none flex justify-between"
                        >
                            <span>{course.title}</span>
                            <span>{course.students} estudiantes</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
};

export default InstructorDashboard;
