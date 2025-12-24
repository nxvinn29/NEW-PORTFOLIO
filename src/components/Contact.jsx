import ScrollReveal from './ScrollReveal';

const Contact = () => {
    return (
        <section id="contact-section" className="py-20 bg-black relative">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16 relative">
                        <span className="text-7xl md:text-9xl font-bold text-white absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 opacity-10 select-none tracking-wider">Contact</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white relative z-10 drop-shadow-lg tracking-wide">Contact Me</h2>
                        <div className="w-24 h-2 bg-primary mx-auto mt-6 mb-6 rounded-full shadow-[0_0_15px_rgba(255,189,57,0.6)]"></div>
                        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg pt-2">
                            Below are the details to reach out to me!
                        </p>
                    </div>
                </ScrollReveal>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <ScrollReveal className="h-full">
                        <div className="text-center p-8 bg-gray-900 rounded-lg cursor-pointer hover:bg-primary hover:text-black transition group h-full border border-gray-800">
                            <div className="w-16 h-16 bg-gray-800 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-white group-hover:text-primary transition">
                                📍
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-black">Address</h3>
                            <p className="text-gray-400 group-hover:text-black">Malayinoor, Pennagram, Dharmapuri- 636810</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="h-full">
                        <div className="text-center p-8 bg-gray-900 rounded-lg cursor-pointer hover:bg-primary hover:text-black transition group h-full border border-gray-800">
                            <div className="w-16 h-16 bg-gray-800 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-white group-hover:text-primary transition">
                                📞
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-black">Contact Number</h3>
                            <p className="text-gray-400 group-hover:text-black">
                                <a href="tel://9345488738">+91 93454 88738</a>
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="h-full">
                        <div className="text-center p-8 bg-gray-900 rounded-lg cursor-pointer hover:bg-primary hover:text-black transition group h-full border border-gray-800">
                            <div className="w-16 h-16 bg-gray-800 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-white group-hover:text-primary transition">
                                ✉️
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-black">Email Address</h3>
                            <p className="text-gray-400 group-hover:text-black break-words">
                                <a href="mailto:naveen.techx@gmail.com">naveen.techx@gmail.com</a>
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="h-full">
                        <div className="text-center p-8 bg-gray-900 rounded-lg cursor-pointer hover:bg-primary hover:text-black transition group h-full border border-gray-800">
                            <div className="w-16 h-16 bg-gray-800 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-white group-hover:text-primary transition">
                                ⬇️
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-black">Download Resume</h3>
                            <p className="text-gray-400 group-hover:text-black">
                                <a href="https://drive.google.com/file/d/12T1UdLx2xYz3_MgItZp1ROT1CeAB8yTv/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Contact Form */}
                <ScrollReveal>
                    <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto border border-gray-800">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white">Have a <span className="text-primary">Question?</span></h2>
                        </div>

                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                            <input type="hidden" name="access_key" value="bbf0b4d7-fef7-4c19-a169-d98711155ed3" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder="Full Name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none placeholder-gray-500"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-10 py-4 bg-primary text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl transition transform hover:-translate-y-1"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </ScrollReveal>

                {/* Social Links */}
                <div className="mt-16 flex justify-center items-center space-x-8">
                    <span className="text-gray-400 font-medium">Find me on</span>
                    <a href="https://www.linkedin.com/in/naveen-a-csd/" className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition transform hover:-translate-y-1" aria-label="LinkedIn">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                    </a>
                    <a href="https://twitter.com/_nxvinn29_" className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition transform hover:-translate-y-1" aria-label="Twitter">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.18-6.787-5.915 6.787h-3.306l7.516-8.601-8.363-11.008h6.71l4.897 6.452zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/_nxvinn29_/" className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition transform hover:-translate-y-1" aria-label="Instagram">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.011-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.2-4.356-2.618-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
