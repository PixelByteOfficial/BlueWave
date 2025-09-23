import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://formsubmit.co/el/roxije', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('submitted');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                const data = await response.json();
                throw new Error(data.message || 'Something went wrong.');
            }
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Failed to send message. Please try again later.');
        }
    };


    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy">Get In Touch</h1>
                    <p className="text-lg mt-4 text-subtle-gray max-w-3xl mx-auto">
                        Have a question or a project in mind? We'd love to hear from you. Reach out to our team of experts, and we'll get back to you shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-deep-navy mb-6">Contact Information</h2>
                        <div className="space-y-6 text-subtle-gray">
                           <div className="flex items-start">
                                <svg className="w-6 h-6 text-aqua-teal mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <div>
                                    <h3 className="text-lg font-semibold text-deep-navy">Our Address</h3>
                                    <p>81/268,SakkarammanKadu, Bhavani</p>
                                    <p>Erode - 638301</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-aqua-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <div>
                                    <h3 className="text-lg font-semibold text-deep-navy">Phone Numbers</h3>
                                    <p>9488537907</p>
                                    <p>9445698873</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-aqua-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <div>
                                    <h3 className="text-lg font-semibold text-deep-navy">Email Address</h3>
                                    <p>bluewavetreatments@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                         {status === 'submitted' ? (
                            <div className="text-center py-10">
                                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h2 className="text-3xl font-bold text-deep-navy mb-2">Thank You!</h2>
                                <p className="text-subtle-gray">Your message has been sent successfully. We will get back to you shortly.</p>
                            </div>
                        ) : (
                             <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-3xl font-bold text-deep-navy mb-6">Send Us a Message</h2>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-aqua-teal focus:border-aqua-teal" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-aqua-teal focus:border-aqua-teal" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-aqua-teal focus:border-aqua-teal" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-aqua-teal focus:border-aqua-teal"></textarea>
                                </div>
                                 {status === 'error' && <p className="text-red-500 text-sm">{errorMessage}</p>}
                                <div>
                                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-aqua-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-deep-navy transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
