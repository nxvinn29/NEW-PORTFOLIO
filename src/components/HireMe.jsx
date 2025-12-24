const HireMe = () => {
    return (
        <section
            className="py-20 bg-cover bg-center bg-fixed relative"
            style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}
        >
            <div className="absolute inset-0 bg-blue-900/80"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Have a Project? <br />
                    <a
                        href="#contact-section"
                        className="inline-block mt-4 bg-primary text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition shadow-lg"
                    >
                        Message Me
                    </a>
                </h2>
                <h4 className="text-xl text-gray-200">
                    I love to code & create awesome artworks.
                </h4>
            </div>
        </section>
    );
};

export default HireMe;
