import React from 'react';
import { Link } from 'react-router-dom';
import { blogposts, faqs } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <details className="group border-b border-gray-200 last:border-b-0 py-4">
        <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="font-semibold text-deep-navy group-hover:text-aqua-teal transition-colors">{question}</span>
            <span className="transition-transform duration-300 transform group-open:rotate-180">
                 <svg className="w-6 h-6 text-aqua-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
        </summary>
        <p className="mt-4 text-subtle-gray">{answer}</p>
    </details>
);

const Resources: React.FC = () => {
    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">Resources & Insights</h1>
                    <p className="text-lg mt-4 text-subtle-gray max-w-3xl mx-auto">
                        Stay informed with our latest articles, guides, and news on water treatment technology and industry trends.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogposts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
                            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center text-sm text-subtle-gray mb-2">
                                    <span className="font-semibold text-aqua-teal">{post.category}</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-deep-navy mb-3 flex-grow">{post.title}</h2>
                                <p className="text-subtle-gray mb-4">{post.excerpt}</p>
                                <Link to="#" className="font-semibold text-aqua-teal mt-auto group-hover:text-deep-navy transition-colors">Read More →</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">Frequently Asked Questions</h2>
                         <p className="text-lg mt-2 text-subtle-gray">
                            Find answers to common questions about our services and water treatment in general.
                        </p>
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;