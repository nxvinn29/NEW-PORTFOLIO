import ScrollReveal from './ScrollReveal';

const Resume = () => {
    const experience = [
        {
            year: 'Feb 2025 – May 2025',
            role: 'Product Design Intern',
            company: 'Bharat Balancing Weightss Co.',
            description: 'Supported design enhancement projects and participated in performance analysis tasks.',
            details: []
        },
        {
            year: 'Sep 2024 – Nov 2024',
            role: 'Web Development Intern',
            company: 'Prodigy InfoTech (Virtual)',
            description: 'Assisted in the development and testing of responsive web applications using modern frameworks.',
            details: []
        },
        {
            year: 'Jul 2023 – Aug 2023',
            role: 'Product Design Intern',
            company: 'Bharat Balancing Weightss Co.',
            description: 'Contributed to product design improvements and supported the design documentation process.',
            details: []
        }
    ];

    const education = [
        {
            year: '2021 – 2025',
            degree: 'B.E. in Computer Science and Design',
            institution: 'SNS College of Engineering',
            grade: 'CGPA: 7.45'
        },
        {
            year: '2020 – 2021',
            degree: 'Higher Secondary',
            institution: 'Govt Higher Secondary School',
            grade: 'Percentage: 80%'
        },
        {
            year: '2018 – 2020',
            degree: 'SSLC',
            institution: 'Govt High School',
            grade: 'Percentage: 76%'
        }
    ];

    const certifications = [
        'Java Full Stack – Wipro TalentNXT Program',
        'Python Programming – Udemy, Guvi, HackerRank',
        'IBM Design Thinking Practitioner',
        'AI for All – Awareness and Appreciation (Intel)'
    ];

    const publications = [
        'Presented "The TradeWheels" at ICRDICCT’25 (Scopus Indexed)',
        'Patent Filed: "VOISENSE – Synthetic Speech Analytics and Detection System"'
    ];

    return (
        <section id="resume-section" className="py-20 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16 relative">
                        <span className="text-7xl md:text-9xl font-bold text-white absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 opacity-10 select-none tracking-wider">Resume</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white relative z-10 drop-shadow-lg tracking-wide">Resume</h2>
                        <div className="w-24 h-2 bg-primary mx-auto mt-6 mb-6 rounded-full shadow-[0_0_15px_rgba(255,189,57,0.6)]"></div>
                        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg pt-2">
                            Aspiring Software Engineer with a strong technical mindset.
                        </p>
                        <div className="mt-8">
                            <a
                                href="https://drive.google.com/file/d/12T1UdLx2xYz3_MgItZp1ROT1CeAB8yTv/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-full shadow-[0_5px_15px_rgba(255,189,57,0.4)] hover:bg-white hover:scale-105 transition-transform duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Experience */}
                <div className="mb-16">
                    <ScrollReveal>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-primary w-8 h-1 mr-4"></span>
                            Internships
                        </h3>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experience.map((job, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary h-full hover:bg-gray-800">
                                    <span className="text-primary font-bold block mb-2">{job.year}</span>
                                    <h4 className="text-xl font-bold text-white mb-1">{job.role}</h4>
                                    <span className="text-gray-400 font-medium mb-4 block uppercase tracking-wide text-xs">{job.company}</span>
                                    <p className="text-gray-300 mb-4">{job.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="mb-16">
                    <ScrollReveal>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <span className="bg-primary w-8 h-1 mr-4"></span>
                            Education
                        </h3>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {education.map((edu, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary h-full hover:bg-gray-800">
                                    <span className="text-primary font-bold block mb-2">{edu.year}</span>
                                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                                    <span className="text-gray-400 font-medium mb-4 block uppercase tracking-wide text-xs">{edu.institution}</span>
                                    <p className="text-gray-300">{edu.grade}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Certifications & Patents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollReveal>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                <span className="bg-primary w-8 h-1 mr-4"></span>
                                Certifications
                            </h3>
                            <ul className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start bg-gray-900 p-4 rounded shadow-sm hover:bg-gray-800 transition">
                                        <span className="text-primary mr-3 mt-1">✓</span>
                                        <span className="text-gray-300 font-medium">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                <span className="bg-primary w-8 h-1 mr-4"></span>
                                Publications & Patents
                            </h3>
                            <ul className="space-y-4">
                                {publications.map((pub, index) => (
                                    <li key={index} className="flex items-start bg-gray-900 p-4 rounded shadow-sm hover:bg-gray-800 transition">
                                        <span className="text-primary mr-3 mt-1">★</span>
                                        <span className="text-gray-300 font-medium">{pub}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div className="text-center mt-16">
                        <a
                            href="https://drive.google.com/file/d/12T1UdLx2xYz3_MgItZp1ROT1CeAB8yTv/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-primary text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            Download CV
                        </a>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default Resume;
