
import React from 'react';
import { industries } from '../constants';

const Industries: React.FC = () => {
    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">Industries We Serve</h1>
                    <p className="text-lg mt-4 text-subtle-gray max-w-3xl mx-auto">
                        Our expertise in water treatment technology provides critical solutions for a wide range of sectors, ensuring efficiency, compliance, and sustainability.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => (
                        <div key={industry.name} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                            <div className="bg-aqua-teal/10 p-4 rounded-full mb-6">
                                <industry.icon className="w-16 h-16 text-aqua-teal" />
                            </div>
                            <h3 className="text-2xl font-bold text-deep-navy mb-3">{industry.name}</h3>
                            <p className="text-subtle-gray">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;
