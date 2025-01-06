import React, { useEffect } from "react";
import { useCourses } from "../hooks/useCourses";

const Courses: React.FC = () => {
    const { courses, fetchCourses, loading, error } = useCourses();

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Cursos</h1>
            {loading && <p>Cargando cursos...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {courses.map((course: any) => (
                    <li key={course.id} className="p-2 border-b last:border-none">
                        {course.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
