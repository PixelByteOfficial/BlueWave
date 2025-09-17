import React from 'react';
import { team } from '../constants';

const About: React.FC = () => {
    return (
        <div className="space-y-16 md:space-y-24 py-16 md:py-24">
            {/* Mission Section */}
            <section className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">About Blue Wave Treatments</h1>
                <p className="text-lg mt-4 text-subtle-gray max-w-3xl mx-auto">
                    Delivering advanced and trusted chemicals for water and wastewater treatment.
                </p>
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                         <h2 className="text-3xl font-bold text-deep-navy mb-4">Our Commitment</h2>
                         <p className="text-subtle-gray">
                           Blue Wave Treatments delivers advanced and trusted chemicals for water and wastewater treatment. With a focus on performance and safety, Blue Wave Treatments is committed to supporting various industries with tailored product solutions and technical services.
                         </p>
                    </div>
                </div>
            </section>
            
            {/* Leadership Team */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">Meet Our Founder</h2>
                    <p className="text-lg mt-2 text-subtle-gray">The expert guiding our mission forward.</p>
                </div>
                <div className="max-w-md mx-auto">
                    {team.map((member) => (
                        <div key={member.name} className="bg-white rounded-lg shadow-lg text-center p-8">
                            <h3 className="text-2xl font-bold text-deep-navy mb-2">{member.name}</h3>
                            <p className="text-aqua-teal font-semibold mb-4">{member.title}</p>
                            <p className="text-subtle-gray">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;