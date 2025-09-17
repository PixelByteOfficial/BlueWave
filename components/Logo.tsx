import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Link to="/" className={`flex items-center space-x-2 transition-colors duration-300 hover:opacity-80 ${className}`}>
            <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 24C12 24 14 16 20 16C26 16 28 24 34 24C40 24 42 16 42 16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 32C12 32 14 24 20 24C26 24 28 32 34 32C40 32 42 24 42 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-bold tracking-tight">
                Blue <span className="text-aqua-teal">Wave</span> Treatments
            </span>
        </Link>
    );
};

export default Logo;