import React from 'react';
import { jobOpenings } from '../constants';

const Careers: React.FC = () => {
    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">Join Our Team</h1>
                    <p className="text-lg mt-4 text-subtle-gray">
                        At Blue Wave Treatments, we are solving some of the most critical water challenges on the planet. If you are passionate about technology, sustainability, and making a real impact, we want to hear from you.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-deep-navy mb-8 text-center">Current Openings</h2>
                    <div className="space-y-6">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-deep-navy">{job.title}</h3>
                                        <p className="text-aqua-teal font-semibold">{job.location}</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <a href="#apply" className="bg-aqua-teal text-white font-bold py-2 px-6 rounded-full hover:bg-deep-navy transition-all duration-300 inline-block">
                                            Apply Now
                                        </a>
                                    </div>
                                </div>
                                <p className="text-subtle-gray mt-4 pt-4 border-t border-gray-200">
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {jobOpenings.length === 0 && (
                        <p className="text-center text-subtle-gray">There are no open positions at this time. Please check back later!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Careers;