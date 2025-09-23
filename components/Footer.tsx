import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-deep-navy text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Blue Wave Treatments</h3>
                        <p className="text-gray-300">
                           Delivering advanced and trusted solutions for water and wastewater treatment.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.facebook.com/profile.php?id=61581096955892" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-aqua-teal transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                            <a href="https://www.instagram.com/bluewavetreatments?utm_source=qr&igsh=ZTVlYnhkbjIxM29j" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-aqua-teal transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C7.416 2.175 7.796 2.163 12 2.163zm0 1.44c-3.111 0-3.483.012-4.693.068-1.09.05-1.83.24-2.32.432a2.89 2.89 0 00-1.05.748 2.89 2.89 0 00-.748 1.05c-.192.49-.382 1.23-.432 2.32C3.613 8.517 3.6 8.889 3.6 12s.013 3.483.068 4.693c.05 1.09.24 1.83.432 2.32a2.89 2.89 0 00.748 1.05 2.89 2.89 0 001.05.748c.49.192 1.23.382 2.32.432C8.517 20.387 8.889 20.4 12 20.4s3.483-.013 4.693-.068c1.09-.05 1.83-.24 2.32-.432a2.89 2.89 0 001.05-.748 2.89 2.89 0 00.748-1.05c.192-.49.382-1.23.432-2.32.055-1.21.068-1.582.068-4.693s-.013-3.483-.068-4.693c-.05-1.09-.24-1.83-.432-2.32a2.89 2.89 0 00-.748-1.05 2.89 2.89 0 00-1.05-.748c-.49-.192-1.23-.382-2.32-.432C15.483 3.613 15.111 3.6 12 3.6zm0 2.88c-3.136 0-5.688 2.552-5.688 5.688s2.552 5.688 5.688 5.688 5.688-2.552 5.688-5.688-2.552-5.688-5.688-5.688zm0 9.408c-2.056 0-3.72-1.664-3.72-3.72s1.664-3.72 3.72-3.72 3.72 1.664 3.72 3.72-1.664 3.72-3.72 3.72zm5.76-9.648a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/arun-n-769119385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-aqua-teal transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H6.34C4.486 1 3 2.44 3 4.226v15.547C3 21.56 4.486 23 6.34 23h11.328C19.514 23 21 21.56 21 19.774V4.226C21 2.44 19.514 1 17.668 1z" clipRule="evenodd" /></svg></a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-aqua-teal transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start"><span className="mr-2 mt-1">📍</span>81/268,Sakkaramman kadu,Bhavani,Erode</li>
                            <li className="flex items-center"><span className="mr-2">📞</span>9488537907</li>
                            <li className="flex items-center"><span className="mr-2">✉️</span> bluewavetreatments@gmail.com</li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">Stay updated with our latest technologies and news.</p>
                        <form>
                            <div className="flex">
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none" />
                                <button type="submit" className="bg-aqua-teal text-white px-4 py-2 rounded-r-md hover:bg-opacity-80 transition-colors">
                                    →
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Blue Wave Treatments. All Rights Reserved.</p>
                    <p className="mt-2 text-sm">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link> | <Link to="#" className="hover:text-white">Terms of Service</Link>
                    </p>
                    <p className="mt-4 text-xs">
                        Designed & Developed by <a href="https://www.instagram.com/rexora_solutions/" target="_blank" rel="noopener noreferrer" className="font-semibold text-aqua-teal hover:text-white transition-colors">REXORA SOLUTIONS</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
