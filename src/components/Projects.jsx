import ScrollReveal from './ScrollReveal';

const Projects = () => {
    const projects = [
        {
            title: 'VOISENSE',
            category: 'AI / Deep Learning',
            // Placeholder images, normally you'd want specific screenshots
            img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
            link: '#',
            description: 'Synthetic Speech Analytics and Detection System using deep learning based acoustic pattern recognition.'
        },
        {
            title: 'AI Testing Helper',
            category: 'AI / Testing',
            img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
            link: '#',
            description: 'AI-powered assistant for manual testers to streamline software testing process.'
        },
        {
            title: 'Evolve',
            category: 'Mobile App',
            img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
            link: '#',
            description: 'Smart Mobility Solution for EVs with map integration and charging point detection.'
        },
        {
            title: 'AR Furniture App',
            category: 'AR / Unity',
            img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
            link: '#',
            description: 'Augmented Reality smart furniture app using Unity and AR Foundation.'
        },
        {
            title: 'Smart Attendance',
            category: 'Computer Vision',
            img: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800',
            link: '#',
            description: 'Facial recognition-based attendance system using Python, Keras, and CNN.'
        },
        {
            title: 'Facial Emotion Detection',
            category: 'Computer Vision',
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
            link: '#',
            description: 'A system that detects facial emotions using OpenCV and Python.'
        }
    ];

    return (
        <section id="projects-section" className="py-20 bg-black relative">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16 relative">
                        <span className="text-7xl md:text-9xl font-bold text-white absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 opacity-10 select-none tracking-wider">Projects</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white relative z-10 drop-shadow-lg tracking-wide">Our Projects</h2>
                        <div className="w-24 h-2 bg-primary mx-auto mt-6 mb-6 rounded-full shadow-[0_0_15px_rgba(255,189,57,0.6)]"></div>
                        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg pt-2">
                            Showcasing innovative solutions in AI, Mobile Dev, and AR.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} className="h-full">
                            <div className="group relative block h-80 rounded-lg overflow-hidden shadow-lg bg-gray-900 cursor-pointer border border-gray-800 hover:border-primary transition-colors duration-300">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                    style={{ backgroundImage: `url(${project.img})` }}
                                ></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
