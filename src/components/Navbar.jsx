import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Simple scroll spy logic
            const sections = ['home-section', 'about-section', 'resume-section', 'projects-section', 'contact-section'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top < 300) { // Adjusted offset for better accuracy
                        setActiveSection(section.replace('-section', ''));
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home-section' },
        { name: 'About', href: '#about-section' },
        { name: 'Resume', href: '#resume-section' },
        { name: 'Projects', href: '#projects-section' },
        { name: 'Contact', href: '#contact-section' },
        { name: 'Message me', href: '#contact-section', isCta: true },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-3 border-b border-gray-800' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold tracking-wider uppercase text-white">
                    Naveen A
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden focus:outline-none text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium uppercase tracking-widest relative group ${link.isCta
                                ? 'px-6 py-2 bg-primary text-black rounded hover:bg-yellow-500 transition-colors'
                                : 'text-white hover:text-primary transition-colors'
                                }`}
                        >
                            {link.name}
                            {!link.isCta && <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeSection === link.name.toLowerCase() ? 'w-full' : ''}`}></span>}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="flex flex-col items-center py-6 space-y-6 text-white">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-medium uppercase tracking-wide hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
