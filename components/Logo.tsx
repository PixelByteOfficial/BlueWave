import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Link
            to="/"
            className={`flex items-center space-x-3 transition-colors duration-300 hover:opacity-80 ${className}`}
        >
            {/* ✅ Logo Image from Link */}
            <img
                src="https://i.ibb.co/fV1PgLt9/logo.jpg"  // <-- replace with your logo link
                alt="Logo"
                className="w-10 h-10 rounded-full flex-shrink-0"
            />

            <span className="text-xl font-bold tracking-tight">
                Blue <span className="text-aqua-teal">Wave</span> Treatments
            </span>
        </Link>
    );
};

export default Logo;
