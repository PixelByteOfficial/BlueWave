
import React from 'react';
import { testimonials } from '../constants';

const Clients: React.FC = () => {
    // Placeholder logos
    const clientLogos = ['Client A', 'Partner B', 'Company C', 'Trustee D', 'Corp E', 'Group F'];

    return (
        <div className="py-16 md:py-24 space-y-16 md:space-y-24">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">Our Valued Clients</h1>
                    <p className="text-lg mt-4 text-subtle-gray max-w-3xl mx-auto">
                       We are proud to partner with industry leaders who trust us with their critical water management needs.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {clientLogos.map(logo => (
                        <div key={logo} className="text-2xl font-semibold text-gray-400 grayscale hover:grayscale-0 hover:text-deep-navy transition-all duration-300">
                           {logo}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-gray-100 py-16 md:py-24">
                 <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">Client Testimonials</h2>
                        <p className="text-lg mt-2 text-subtle-gray">Hear directly from those we've helped.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-center text-center sm:text-left">
                                <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"/>
                                <div>
                                    <p className="text-subtle-gray italic mb-4">"{testimonial.quote}"</p>
                                    <div>
                                        <p className="font-bold text-deep-navy">{testimonial.author}</p>
                                        <p className="text-sm text-subtle-gray">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
