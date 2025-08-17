"use client"

import { motion } from "framer-motion"

const projects = [
    {
        title: "Job Portal",
        desc: "A full-stack platform with React, Django REST, and JWT for posting, applying, and managing jobs.",
        tech: ["React", "Django", "Material UI", "JWT"],
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // replace with your screenshot
    },
    {
        title: "Portfolio Website",
        desc: "A sleek and responsive personal portfolio built with React & Vite, styled with custom CSS.",
        tech: ["React", "Vite", "Tailwind"],
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        title: "Coupon System",
        desc: "REST API powered coupon management system with Laravel, tracking usage and analytics.",
        tech: ["Laravel", "MySQL", "REST API"],
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
]

export default function Projects() {
    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl w-full">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-center text-white mb-16"
                >
                    My <span className="text-pink-400">Projects</span> 🚀
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Project Image */}
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
     opacity-100 md:opacity-0 md:group-hover:opacity-100 
     transition duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-3">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-pink-500/20 text-pink-300 text-xs px-3 py-1 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
