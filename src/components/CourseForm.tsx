import React from "react";
import { useForm } from "../hooks/useForm";
import Button from "./Button";

interface CourseFormProps {
    onSubmit: (courseData: { title: string; description: string; isPublished: boolean }) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onSubmit }) => {
    const { formData, handleChange, resetForm } = useForm<{
        title: string;
        description: string;
        isPublished: boolean;
    }>({
        title: "",
        description: "",
        isPublished: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-2">Crear Curso</h2>
            <input
                type="text"
                name="title"
                placeholder="Título del curso"
                className="w-full px-3 py-2 mb-4 border rounded"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Descripción del curso"
                className="w-full px-3 py-2 mb-4 border rounded"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <label className="mb-4 block">
                <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={(e) =>
                        handleChange({ target: { name: "isPublished", value: e.target.checked } })
                    }
                />
                Publicar Curso
            </label>
            <Button text="Crear Curso" />
        </form>
    );
};

export default CourseForm;
