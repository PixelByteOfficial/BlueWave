// Add React import for JSX and React types.
import React from 'react';

export interface NavLink {
    name: string;
    path: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    details: string;
    benefits: string[];
    image: string;
}

export interface Industry {
    name: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface Project {
    id: number;
    title: string;
    industry: string;
    image: string;
    challenge: string;
    solution: string;
    results: {
        metric: string;
        value: string;
    }[];
}

export interface TeamMember {
    name: string;
    title: string;
    bio: string;
    image: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    image: string;
}

export interface Blogpost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
}

export interface JobOpening {
    id: number;
    title: string;
    location: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface SlideshowImage {
    image: string;
    title: string;
    subtitle: string;
}

export interface Chemical {
    name: string;
    description: string;
}

export interface Pump {
    name: string;
    description: string;
}