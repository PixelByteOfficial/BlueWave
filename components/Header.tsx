import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(window.scrollY > 10);
    const location = useLocation();

    // Effect for scroll handling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);
    
    const isTransparent = !isScrolled && !isOpen;

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
            isActive
                ? 'text-aqua-teal font-semibold'
                : isTransparent
                ? 'text-white hover:text-aqua-teal'
                : 'text-deep-navy hover:text-aqua-teal'
        }`;

    const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
            isActive ? 'bg-aqua-teal text-white' : 'text-deep-navy hover:bg-gray-100'
        }`;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white shadow-md'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Logo className={isTransparent ? 'text-white' : 'text-deep-navy'} />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} to={link.path} className={navLinkClasses}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-aqua-teal ${isTransparent ? 'text-white' : 'text-deep-navy'}`}
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.path} className={mobileNavLinkClasses}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
