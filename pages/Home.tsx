import React from 'react';
import { Link } from 'react-router-dom';
import { services, slideshowImages } from '../constants';
import Slideshow from '../components/Slideshow';

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-deep-navy text-white pt-24 pb-16 md:pt-40 md:pb-32 text-center">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://www.kelvinindia.in/blog/wp-content/uploads/2024/09/industrial-waste-waer-treatment-plant.jpg')" }}></div>
                <div className="container mx-auto px-4 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Advanced Water Treatment Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Reliable, clean, and compliant water treatment services. We deliver tailored product solutions and technical support for various industries.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-aqua-teal text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-aqua-teal transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </section>

            {/* Slideshow Section */}
            <Slideshow images={slideshowImages} />

            {/* ISO Badge Section */}
            <section className="py-16 bg-soft-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
                        <div className="flex-grow">
                            <h2 className="text-3xl font-bold text-deep-navy">Committed to Quality & Excellence</h2>
                            <p className="text-lg mt-2 text-subtle-gray">We adhere to the highest international standards to deliver reliable and effective solutions.</p>
                        </div>
                        <div className="inline-flex items-center bg-gray-50 p-4 rounded-lg border-l-4 border-aqua-teal flex-shrink-0">
                            <svg className="w-12 h-12 text-green-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <p className="text-xl font-bold text-deep-navy">ISO 9001:2015</p>
                                <p className="text-subtle-gray">Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">Our Core Services</h2>
                    <p className="text-lg mt-2 text-subtle-gray max-w-2xl mx-auto">From industrial processing to residential purity, we have a solution for you.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((service) => (
                        <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex justify-center mb-4">
                                <service.icon className="w-16 h-16 text-aqua-teal" />
                            </div>
                            <h3 className="text-xl font-bold text-deep-navy mb-2">{service.title}</h3>
                            <p className="text-subtle-gray mb-4">{service.description}</p>
                            <Link to="/services" className="font-semibold text-aqua-teal hover:text-deep-navy">Learn More →</Link>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Link
                        to="/contact"
                        className="bg-deep-navy text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-aqua-teal transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        Have a Project in Mind? Contact Our Experts
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;