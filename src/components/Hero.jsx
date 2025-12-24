import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ['Software Engineer', 'Flutter Developer', 'Full Stack Developer', 'Software Tester'];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, words]);

    return (
        <section id="home-section" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-0">

            {/* Decorative Background Element */}
            {/* <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50/80 -skew-x-12 transform translate-x-20 hidden md:block z-0"></div> */}

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full relative z-10">

                {/* Text Content */}
                <div className="w-full md:w-1/2 pt-20 md:pt-0 text-center md:text-left order-2 md:order-1 z-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm md:text-base animate-fadeIn">Hello!</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-2 mb-4 leading-tight">
                        I'm <span className="text-primary">Naveen</span> <br />
                        <span className="text-white">a</span>
                    </h1>

                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 block mt-2 h-16">
                        {text}
                        <span className="animate-pulse text-primary">|</span>
                    </h2>

                    <div className="flex justify-center md:justify-start space-x-4 mt-8">
                        <a
                            href="https://github.com/nxvinn29"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-primary text-black rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition transform hover:-translate-y-1"
                        >
                            My GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/naveen-a-csd/"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-primary hover:text-white transition transform hover:-translate-y-1"
                        >
                            My Linkedin
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex justify-center items-end order-1 md:order-2">
                    <img
                        src="/images/me2.png"
                        alt="Naveen"
                        className="h-full object-contain object-bottom filter drop-shadow-2xl hover:scale-105 transition duration-500 ease-out"
                    />
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                <a href="#about-section" aria-label="Scroll Down">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section >
    );
};

export default Hero;
