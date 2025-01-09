import React, { useEffect } from "react";
import Layout from "../components/Layout";
import CourseForm from "../components/CourseForm";
import SectionForm from "../components/SectionForm";
import { useCourses } from "../hooks/useCourses";
import { useSections } from "../hooks/useSections";
import { showSuccessAlert, showErrorAlert } from "../components/Alert";

const InstructorDashboard: React.FC = () => {
    const { courses, fetchCourses, createCourse } = useCourses();
    const { sections, fetchSections, createSection } = useSections();
    const [selectedCourse, setSelectedCourse] = React.useState<number | null>(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleCourseSubmit = async (courseData: { title: string; description: string; isPublished: boolean }) => {
        try {
            const course = await createCourse({ ...courseData, creatorId: 1 }); // Reemplazar con ID real del instructor
            showSuccessAlert("Curso creado exitosamente", "");
        } catch {
            showErrorAlert("Error al crear curso", "Intenta nuevamente.");
        }
    };

    const handleSectionSubmit = async (sectionData: { name: string; isUnlocked: boolean }) => {
        if (!selectedCourse) {
            showErrorAlert("Selecciona un curso primero", "Intenta nuevamente.");
            return;
        }
        try {
            const section = await createSection({ ...sectionData, courseId: selectedCourse });
            showSuccessAlert("Sección creada exitosamente", "");
        } catch {
            showErrorAlert("Error al crear sección", "Intenta nuevamente.");
        }
    };

    const handleCourseSelect = (courseId: number) => {
        setSelectedCourse(courseId);
        fetchSections(courseId);
    };

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Panel del Instructor</h1>

            {/* Crear Curso */}
            <CourseForm onSubmit={handleCourseSubmit} />

            {/* Listar Cursos */}
            <div className="bg-white p-4 rounded shadow mb-4">
                <h2 className="text-xl font-bold mb-2">Tus Cursos</h2>
                <ul>
                    {courses.map((course) => (
                        <li
                            key={course.id}
                            className={`p-2 border-b last:border-none cursor-pointer ${selectedCourse === course.id ? "bg-gray-200" : ""
                                }`}
                            onClick={() => handleCourseSelect(course.id)}
                        >
                            {course.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Crear Sección */}
            {selectedCourse && <SectionForm onSubmit={handleSectionSubmit} />}
        </>
    );
};

export default InstructorDashboard;
