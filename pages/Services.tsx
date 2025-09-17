import React from 'react';
import { Link } from 'react-router-dom';
import { services, chemicals, pumps } from '../constants';

const Services: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">Our Core Service Categories</h1>
                    <p className="text-lg mt-4 text-subtle-gray max-w-3xl mx-auto">
                        We provide a full spectrum of water management solutions tailored to meet the specific needs of industrial, municipal, and residential clients.
                    </p>
                </div>

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                            <div className="md:w-1/2">
                                <img src={service.image} alt={service.title} className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video" />
                            </div>
                            <div className="md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                     <service.icon className="w-12 h-12 text-aqua-teal flex-shrink-0" />
                                     <h2 className="text-3xl font-bold text-deep-navy">{service.title}</h2>
                                </div>
                                <p className="text-subtle-gray mb-4">{service.details}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="text-subtle-gray">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="bg-aqua-teal text-white font-bold py-2 px-6 rounded-full hover:bg-deep-navy transition-all duration-300 inline-block">
                                    Request a Consultation
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chemicals Section */}
            <div className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">Chemicals We Provide</h2>
                        <p className="text-lg mt-2 text-subtle-gray max-w-2xl mx-auto">Advanced and trusted chemicals for water and wastewater treatment.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {chemicals.map(chemical => (
                            <div key={chemical.name} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-deep-navy mb-2">{chemical.name}</h3>
                                <p className="text-subtle-gray">{chemical.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pumps Section */}
             <div className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">Pump Systems We Service</h2>
                        <p className="text-lg mt-2 text-subtle-gray max-w-2xl mx-auto">Expertise across all types of pumps for various treatment applications.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pumps.map(pump => (
                            <div key={pump.name} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-aqua-teal">
                                <h3 className="text-xl font-bold text-deep-navy mb-2">{pump.name}</h3>
                                <p className="text-subtle-gray">{pump.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;