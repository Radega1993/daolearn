import React from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Bienvenido a DaoLearn
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    DaoLearn es una plataforma diseñada para conectar instructores con
                    estudiantes, permitiendo la creación y gestión de cursos de manera
                    eficiente. Aquí puedes aprender y compartir conocimientos fácilmente.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="/register"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Comenzar como Estudiante
                    </a>
                    <a
                        href="/instructor"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Crear como Instructor
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
