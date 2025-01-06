import React, { useEffect, useState } from "react";
import { useSections } from "../hooks/useSections";
import Layout from "../components/Layout";
import Button from "../components/Button";

const SectionsManagement: React.FC = () => {
    const { sections, fetchSections, createSection, loading, error } = useSections();
    const [newSection, setNewSection] = useState({ name: "", isUnlocked: false, courseId: 1 });

    useEffect(() => {
        fetchSections();
    }, []);

    const handleCreateSection = async () => {
        try {
            await createSection(newSection);
            fetchSections(); // Actualizar lista de secciones
        } catch (err) {
            console.error("Error al crear la sección:", err);
        }
    };

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">Gestión de Secciones</h1>
            {loading && <p>Cargando secciones...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {sections.map((section: any) => (
                    <li key={section.id} className="p-2 border-b">
                        <span>{section.name}</span> -{" "}
                        <span>{section.isUnlocked ? "Desbloqueado" : "Bloqueado"}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Nombre de la Sección"
                    className="border p-2 rounded w-full mb-2"
                    value={newSection.name}
                    onChange={(e) => setNewSection({ ...newSection, name: e.target.value })}
                />
                <Button text="Crear Sección" onClick={handleCreateSection} />
            </div>
        </Layout>
    );
};

export default SectionsManagement;
