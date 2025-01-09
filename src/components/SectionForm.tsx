import React from "react";
import { useForm } from "../hooks/useForm";
import Button from "./Button";

interface SectionFormProps {
    onSubmit: (sectionData: { name: string; isUnlocked: boolean }) => void;
}

const SectionForm: React.FC<SectionFormProps> = ({ onSubmit }) => {
    const { formData, handleChange, resetForm } = useForm({
        name: "",
        isUnlocked: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-2">Crear Sección</h2>
            <input
                type="text"
                name="name"
                placeholder="Nombre de la sección"
                className="w-full px-3 py-2 mb-4 border rounded"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label className="mb-4 block">
                <input
                    type="checkbox"
                    name="isUnlocked"
                    checked={formData.isUnlocked}
                    onChange={(e) => handleChange(e as any)}
                />
                Desbloqueado
            </label>
            <Button text="Crear Sección" />
        </form>
    );
};

export default SectionForm;
