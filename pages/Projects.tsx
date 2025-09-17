
import React from 'react';
import { projects } from '../constants';

const Projects: React.FC = () => {
    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">Our Projects & Case Studies</h1>
                    <p className="text-lg mt-4 text-subtle-gray max-w-3xl mx-auto">
                        Explore how we've solved complex water treatment challenges for our clients, delivering tangible results and significant value.
                    </p>
                </div>

                <div className="space-y-16">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden md:flex">
                            <div className="md:w-2/5">
                                <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover" />
                            </div>
                            <div className="p-8 md:w-3/5">
                                <p className="text-aqua-teal font-semibold mb-1">{project.industry}</p>
                                <h2 className="text-2xl lg:text-3xl font-bold text-deep-navy mb-4">{project.title}</h2>
                                <div className="mb-6">
                                    <h3 className="font-bold text-gray-800">The Challenge:</h3>
                                    <p className="text-subtle-gray">{project.challenge}</p>
                                </div>
                                <div className="mb-6">
                                    <h3 className="font-bold text-gray-800">Our Solution:</h3>
                                    <p className="text-subtle-gray">{project.solution}</p>
                                </div>
                                <div className="border-t pt-4">
                                     <h3 className="font-bold text-gray-800 mb-2">Results:</h3>
                                     <div className="flex flex-wrap gap-4 text-center">
                                         {project.results.map((result, i) => (
                                             <div key={i} className="bg-aqua-teal/10 p-3 rounded-md flex-1 min-w-[120px]">
                                                 <p className="text-2xl font-bold text-aqua-teal">{result.value}</p>
                                                 <p className="text-sm text-deep-navy font-medium">{result.metric}</p>
                                             </div>
                                         ))}
                                     </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
