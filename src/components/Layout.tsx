import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">{children}</div>
            <footer className="bg-dark text-white text-center p-4 mt-8">
                © 2025 DaoLearn. Todos los derechos reservados.
            </footer>
        </>
    );
};

export default Layout;
