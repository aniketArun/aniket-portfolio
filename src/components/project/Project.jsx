"use client"

import { motion } from "framer-motion"

const projects = [
    {
        title: "Job Portal",
        desc: "A full-stack platform with React, Django REST, and JWT for posting, applying, and managing jobs.",
        tech: ["React", "Django", "Material UI", "JWT"],
        img: "/jobapp.png", // replace with your screenshot
    },
    {
        title: "YDF Mobile App",
        desc: "High performance mobile application designed to collect scholarship applications based on moodle.",
        tech: ["Java", "Android", "Moodle LMS"],
        img: "/ydf_mobile_app.png",
    },
    {
        title: "LactVivechaka",
        desc: "Patented Ecosystem with ML Powered analytics, for better milk collection",
        tech: ["Next.js", "TypeScript", "REST API", "FireStore", "Flask"],
        img: "/lactvivechaka.png",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl w-full">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-center text-white mb-16 flex items-center justify-center gap-3"
                >
                    {/* Rocket before text */}
                    <motion.span
                        whileHover={{
                            x: [0, 600],   // fly across section (adjust width as needed)
                            y: [0, -200, 200, 0], // up & down path
                            rotate: [0, 45, -45, 0], // tilting
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        className="inline-block cursor-pointer"
                    >
                        🚀
                    </motion.span>

                    My <span className="text-pink-400">Projects</span>
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
                {/* + Many More */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-12 text-center text-2xl md:text-3xl font-extrabold tracking-wide 
               text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center gap-2"
                >
                    + Many More
                    <motion.span
                        whileHover={{ y: -40, x: 20, rotate: -45, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="inline-block cursor-pointer"
                    >
                        🚀
                    </motion.span>
                </motion.p>

            </div>
        </section>
    )
}
