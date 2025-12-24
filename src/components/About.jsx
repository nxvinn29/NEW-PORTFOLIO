import ScrollReveal from './ScrollReveal';

const About = () => {
    const skills = [
        { name: 'Flutter/Dart', percentage: 90 },
        { name: 'React/JS', percentage: 85 },
        { name: 'Node.js', percentage: 80 },
        { name: 'Java/Python', percentage: 80 },
        { name: 'Figma', percentage: 85 },
        { name: 'SQL/MongoDB', percentage: 75 },
    ];

    const aboutDetails = [
        { title: 'Profile', value: 'Software Tester & Software Engineer' },
        { title: 'Domain', value: 'App & Web Development, Game Designer, Content Creator, Freelancer, UI/UX, Vibe Coder' },
        { title: 'Education', value: 'B.E. Computer Science and Design' },
        { title: 'Language', value: 'English, Tamil' },
        { title: 'Tools', value: 'VS Code, Android Studio, Git, GitHub, Selenium' },
        { title: 'Interest', value: 'Coding, Content Creation, Traveling' },
    ];

    return (
        <section id="about-section" className="py-20 bg-black relative">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Column: Image, Info, Skills */}
                        <div className="w-full lg:w-5/12">
                            <div className="bg-gray-900 p-2 rounded-lg border border-gray-800">
                                <div className="relative mb-8 group">
                                    <img
                                        src="/images/about-me.png"
                                        alt="About Me"
                                        className="w-full rounded shadow-lg object-cover transition duration-300 group-hover:shadow-2xl opacity-90 group-hover:opacity-100"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500' }}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300 rounded"></div>
                                </div>

                                <div className="mb-8 p-4 bg-gray-800 rounded-lg shadow-inner border border-gray-700">
                                    <div className="flex justify-between mb-2 border-b border-gray-700 pb-2">
                                        <span className="font-bold text-white">Name:</span>
                                        <span className="text-gray-400">Naveen</span>
                                    </div>
                                    <div className="flex justify-between mb-2 border-b border-gray-700 pb-2">
                                        <span className="font-bold text-white">Job Role:</span>
                                        <span className="text-gray-400">Graphic Designer</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-white">Address:</span>
                                        <span className="text-gray-400 truncate max-w-[60%]">Dharmapuri, Tamilnadu</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Skills</h3>
                                    <div className="space-y-4">
                                        {skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                                    <span className="text-sm font-medium text-gray-500">{skill.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                    <div
                                                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out hover:bg-yellow-500"
                                                        style={{ width: `${skill.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: About Description */}
                        <div className="w-full lg:w-7/12 flex flex-col justify-center">
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold mb-4 text-white relative inline-block">
                                    About Me
                                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded"></span>
                                </h2>
                                <div className="h-4"></div>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    Aspiring Software Engineer with a strong technical mindset. Eager to apply my skills and knowledge to contribute to innovative software projects. Passionate about continuous learning, creativity, and working with dynamic teams to build efficient, user-focused solutions in the tech industry.
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {aboutDetails.map((detail) => (
                                        <li key={detail.title} className="flex flex-col sm:flex-row border-b border-gray-800 pb-2 last:border-0">
                                            <span className="font-bold text-white w-32 shrink-0">{detail.title}:</span>
                                            <span className="text-gray-400">{detail.value}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://www.instagram.com/_nxvinn29_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/naveen-a-csd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-[#0077b5] text-white rounded-full font-bold shadow-lg hover:bg-[#005fa3] hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://leetcode.com/u/naveen_techx/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-[#ffa116] text-black rounded-full font-bold shadow-lg hover:bg-[#e59113] hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        LeetCode
                                    </a>
                                    <a
                                        href="https://www.reddit.com/user/nxvinn29/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-[#ff4500] text-white rounded-full font-bold shadow-lg hover:bg-[#e03d00] hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        Reddit
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;
