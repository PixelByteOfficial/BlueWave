// Add React import for JSX and React types.
import React from 'react';
import { NavLink, Service, Industry, Project, TeamMember, Testimonial, Blogpost, JobOpening, FAQ, SlideshowImage, Chemical, Pump } from './types';

// Icons (simple placeholders)
// FIX: Rewrote SVG components using React.createElement to be valid in a .ts file and fixed type definitions.
const WaterDropIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7.8 7.8a1.5 1.5 0 010-2.12 1.5 1.5 0 012.12 0l4.24 4.24a1.5 1.5 0 010 2.12-1.5 1.5 0 01-2.12 0L7.8 7.8z" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 18a6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6z" })
    )
);

const FactoryIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.117 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.117 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" })
  )
);

const BuildingIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" })
  )
);

const HomeIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955a.75.75 0 01-1.06 1.06l-1.06-.955V21a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75v-8.69l-1.06.955a.75.75 0 01-1.06-1.06z" })
  )
);

const RecycleIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 12c0-5.234-4.266-9.5-9.5-9.5S.5 6.766.5 12s4.266 9.5 9.5 9.5 9.5-4.234 9.5-9.5z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 9.75L12 14.25 7.5 9.75" })
  )
);

const WrenchIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l2.472-2.472a4.5 4.5 0 00-6.364-6.364L4.5 9.75l2.472 2.472a4.5 4.5 0 006.364 0z" })
  )
);
const HospitalIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12h.008v.008h-.008v-.008zm-3.75 0h.008v.008h-.008v-.008zm-3.75 0h.008v.008h-.008v-.008z" })
  )
);
const FoodIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25V7.5A2.25 2.25 0 019.75 5.25h4.5A2.25 2.25 0 0116.5 7.5v6.75m0 0a3 3 0 00-3-3m0 0A3 3 0 009.75 12m6.75 0v.008" })
  )
);
const HotelIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" })
  )
);

const BeakerIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
      React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.239.02.48.04.72.062a2.25 2.25 0 012.288 2.034l.06 1.1M9.75 3.104A2.25 2.25 0 007.5 1.5h-3A2.25 2.25 0 002.25 3.75v16.5A2.25 2.25 0 004.5 22.5h15a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25h-3.069a2.25 2.25 0 00-2.181 1.604l-.06 1.1M15 14.5l-1.091-1.091a2.25 2.25 0 01-.659-1.591V3.104m6.15 11.396L15 14.5" })
    )
);

const ClipboardIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5H18a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25-2.25H6.75a2.25 2.25 0 01-2.25-2.25v-9a2.25 2.25 0 012.25-2.25z" })
    )
);


export const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export const services: Service[] = [
    {
        id: 'design',
        title: 'Design, Construction & Installation',
        description: 'Custom engineering solutions for wastewater plants.',
        icon: FactoryIcon,
        details: 'We provide end-to-end engineering solutions for custom or prefabricated wastewater plants, including civil and mechanical works, for a wide array of industries and infrastructure.',
        benefits: ['Tailored plant design', 'Prefabricated & custom options', 'Full civil & mechanical works', 'Solutions for all industries'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXO02Vi-0i1SCv4Qp8w8piAzbtVpve833PQ&s',
    },
    {
        id: 'maintenance',
        title: 'Operation & Maintenance (O&M)',
        description: 'Ensuring optimal plant performance and longevity.',
        icon: WrenchIcon,
        details: 'Our skilled staff handle daily operations, including routine inspections, preventive maintenance, equipment servicing, and emergency troubleshooting to assure optimal plant performance.',
        benefits: ['Skilled daily operation', 'Preventive maintenance schedules', 'Emergency troubleshooting', 'Guaranteed plant performance'],
        image: 'https://blog.ipleaders.in/wp-content/uploads/2019/03/ETP-STP-Operation-services.jpg',
    },
    {
        id: 'upgrades',
        title: 'Repair & Upgrades',
        description: 'Modernizing systems for automation and compliance.',
        icon: RecycleIcon,
        details: 'We perform mechanical, electrical, civil, and process repairs of components like pumps, panels, valves, tanks, and motors. We also provide upgrades for automation and regulatory compliance.',
        benefits: ['Comprehensive component repair', 'Electrical & mechanical expertise', 'Automation upgrades', 'Regulatory compliance updates'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNpFILNRfNIXhYZb7O_FPrpTSqZNQuIgh1g&s',
    },
    {
        id: 'monitoring',
        title: 'Analytical Monitoring',
        description: 'Precise water quality testing and reporting.',
        icon: ClipboardIcon,
        details: 'We conduct water quality testing and online/offline monitoring throughout all treatment steps, providing support for adjustments and reporting to meet environmental standards.',
        benefits: ['Online & offline testing', 'Support for adjustments', 'Environmental standards compliance', 'Detailed reporting'],
        image: 'https://cdn.prod.website-files.com/64fef88ee8b22d3d21b715a2/65853d771eeb000e960dd8af_What%20is%20Data%20Monitoring.webp',
    },
    {
        id: 'dosing',
        title: 'Chemical Dosing & Sludge Handling',
        description: 'Managing disinfection, nutrient control, and sludge.',
        icon: BeakerIcon,
        details: 'Our services include the precise management of dosing systems for disinfection and nutrient control, as well as the removal, dewatering, and safe disposal of sludge.',
        benefits: ['Precise chemical management', 'Disinfection & nutrient control', 'Safe sludge removal & dewatering', 'Safe disposal practices'],
        image: 'https://a9a14750.delivery.rocketcdn.me/wp-content/uploads/2024/10/The-Complete-Guide-on-Fine-Chemicals-Quality-Applications-and-Industries.webp',
    },
];

export const chemicals: Chemical[] = [
    { name: 'Hydrochloric Acid (HCL)', description: 'Used for pH adjustment, scale removal, and cleaning in water treatment plants.' },
    { name: 'Sodium Hypochlorite', description: 'Powerful disinfectant for water purification and microbial control.' },
    { name: 'Sodium Metabisulfite (SMBS)', description: 'Dechlorination agent and oxygen scavenger.' },
    { name: 'Antiscalant', description: 'Prevents scaling in RO and other membrane systems for enhanced efficiency.' },
    { name: 'Polymer', description: 'Coagulant and flocculant for improved solid-liquid separation and sludge dewatering.' },
    { name: 'Citric Acid', description: 'Cleaning reagent for removing mineral deposits and scaling.' },
];

export const pumps: Pump[] = [
    { name: 'Centrifugal Pumps', description: 'Commonly used in wastewater treatment, using centrifugal force to move fluid.' },
    { name: 'Positive Displacement Pumps', description: 'Use impellers, gears, and rollers to displace and move fluid through the system.' },
    { name: 'Submersible Pumps', description: 'Includes sump pumps, sewage/effluent pumps, water pumps, and dewatering pumps.' },
    { name: 'Progressive Cavity Pumps', description: 'Uses pipelines or storage tanks to transfer slurry or liquids from the inlet area.' },
    { name: 'Circulation Pumps', description: 'Used to keep slurry moving through a wastewater treatment plant.' },
    { name: 'Agitator Pumps', description: 'Can supply kinetic energy along the pump intake to handle solids.' },
];

export const industries: Industry[] = [
    { name: 'Manufacturing', description: 'Ensuring process water quality and compliant wastewater discharge for all types of manufacturing facilities.', icon: FactoryIcon },
    { name: 'Hospitals & Healthcare', description: 'Providing ultra-pure water for medical applications and safe water management for healthcare facilities.', icon: HospitalIcon },
    { name: 'Food & Beverage', description: 'Delivering high-purity ingredient water and effective wastewater solutions for food and beverage producers.', icon: FoodIcon },
    { name: 'Municipal', description: 'Partnering with cities and towns to provide clean, safe drinking water and manage wastewater for the public.', icon: BuildingIcon },
    { name: 'Hospitality', description: 'Offering solutions for hotels and resorts to provide guests with high-quality water and manage laundry and utility costs.', icon: HotelIcon },
    { name: 'Residential Complexes', description: 'Implementing centralized water treatment and filtration systems for apartment buildings and housing developments.', icon: HomeIcon },
];

export const projects: Project[] = [
    {
        id: 1,
        title: 'Effluent Treatment Plant (ETP)',
        industry: 'Industrial',
        image: 'https://trityenviro.com/assets/blogs/effluent-treatment-plant-process-and-flow-diagram-in-pharma-industry.webp',
        challenge: 'An industrial facility required a robust system to treat complex wastewater effluent to meet stringent environmental discharge norms.',
        solution: 'Designed and commissioned a custom Effluent Treatment Plant using a combination of physical, chemical, and biological processes for effective contaminant removal.',
        results: [
            { metric: 'Pollutant Reduction', value: '95%+' },
            { metric: 'Compliance', value: '100%' },
            { metric: 'Operational Cost', value: '-20%' }
        ]
    },
    {
        id: 2,
        title: 'Advanced Reverse Osmosis (RO) System',
        industry: 'Manufacturing',
        image: 'https://www.fgwater.com/MTK/2025428/1.png',
        challenge: 'A client needed high-purity water for their sensitive manufacturing processes, requiring the removal of dissolved solids and contaminants.',
        solution: 'Installed a high-efficiency Reverse Osmosis plant with pre-treatment and antiscalant dosing to ensure longevity and consistent performance.',
        results: [
            { metric: 'TDS Reduction', value: '99%' },
            { metric: 'Water Recovery', value: '75%' },
            { metric: 'Purity', value: 'Ultra-Pure' }
        ]
    },
    {
        id: 3,
        title: 'Sewage Treatment Plant (STP) for a Community',
        industry: 'Municipal',
        image: 'https://jeiaquatech.in/wp-content/uploads/2023/12/Sewage-Treatment-Plant.jpg.webp',
        challenge: 'A residential complex needed an efficient and compact Sewage Treatment Plant to recycle wastewater for non-potable uses like landscaping.',
        solution: 'Implemented a state-of-the-art STP using Membrane Bioreactor (MBR) technology, ensuring high-quality treated water in a small footprint.',
        results: [
            { metric: 'Water Recycling', value: '80%' },
            { metric: 'BOD/COD Reduction', value: '>98%' },
            { metric: 'Footprint', value: 'Compact' }
        ]
    },
    {
        id: 4,
        title: 'High-Purity Ultra Filtration (UF) Plant',
        industry: 'Pharmaceutical',
        image: 'https://3.imimg.com/data3/CH/MM/MY-11895202/ultra-filtration-plant-uf-plant.jpg',
        challenge: 'A pharmaceutical company required a system to produce water free of particulates, bacteria, and pathogens for their sensitive manufacturing processes.',
        solution: 'Installed a state-of-the-art Ultra Filtration (UF) system as a pre-treatment for their RO plant, ensuring consistent feed water quality and protecting downstream equipment.',
        results: [
            { metric: 'SDI Reduction', value: '< 1' },
            { metric: 'Microbial Removal', value: '99.9%' },
            { metric: 'RO Membrane Life', value: '+40%' }
        ]
    },
    {
        id: 5,
        title: 'Comprehensive Water Treatment Plant (WTP)',
        industry: 'Food & Beverage',
        image: 'https://www.suez.com/-/media/suez-global/images/header/usine-traitement-eau-potable-senegal.jpg?w=800&v=1&d=20240611T070330Z&format=jpg&crop=0&hash=6B827ED432E0BA5DE61018694CC90741',
        challenge: 'A beverage company needed a reliable source of high-quality process water that met strict industry standards for taste, odor, and purity.',
        solution: 'Engineered a complete Water Treatment Plant including clarification, multimedia filtration, activated carbon filtration, and UV disinfection to treat incoming municipal water.',
        results: [
            { metric: 'Turbidity', value: '< 0.1 NTU' },
            { metric: 'Chlorine Removal', value: '100%' },
            { metric: 'Water Quality', value: 'Consistent' }
        ]
    }
];

export const team: TeamMember[] = [
    { name: 'Arun N', title: 'Founder & Lead Engineer', bio: 'With extensive experience in water and wastewater treatment, Arun leads the company with a focus on performance, safety, and tailored solutions for every client.', image: '' },
];

export const testimonials: Testimonial[] = [];

export const blogposts: Blogpost[] = [];

export const jobOpenings: JobOpening[] = [];

export const faqs: FAQ[] = [];

export const slideshowImages: SlideshowImage[] = [
    {
        image: 'https://i.ibb.co/v6dP2M9N/1.png',
        title: 'Blue Wave Treatments',
        subtitle: 'Rigorous analytical monitoring to ensure the highest quality standards.'
    },
    {
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/YK/WS/RL/66259690/ambujasvm-pumps-and-motor-500x500.png',
        title: 'High-Performance Pumps & Equipment',
        subtitle: 'Utilizing reliable, state-of-the-art hardware for maximum uptime and efficiency.'
    },
    {
        image: 'https://rostorechennai.com/wp-content/uploads/2023/03/WhatsApp-Image-2025-07-07-at-11.25.38_050324ba-1200x800.jpg',
        title: 'Advanced Reverse Osmosis (RO) Systems',
        subtitle: 'Delivering ultra-pure water by removing the finest contaminants.'
    },
     {
        image: 'https://www.snexplores.org/wp-content/uploads/2020/09/1030_SS_Chemical-1028x579.jpg',
        title: 'Precision Chemical Dosing & Analysis',
        subtitle: 'Optimizing treatment processes with precise chemical management and monitoring.'
    },
    {
        image: 'https://www.nobrokerhood.com/blog/wp-content/uploads/2024/01/Sewage-Treatment-PlantSTP.jpg',
        title: 'Large-Scale Water Treatment Plants',
        subtitle: 'Engineering robust and efficient solutions for municipal and industrial needs.'
    }
];