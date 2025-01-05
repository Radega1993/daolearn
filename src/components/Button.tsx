import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
    const baseStyle = "px-4 py-2 rounded font-bold focus:outline-none";
    const styles = {
        primary: `${baseStyle} bg-blue-500 text-white hover:bg-blue-600`,
        secondary: `${baseStyle} bg-gray-500 text-white hover:bg-gray-600`,
    };

    return (
        <button className={styles[variant]} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
