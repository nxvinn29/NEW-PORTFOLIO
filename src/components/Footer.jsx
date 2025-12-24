const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8 text-center text-gray-400">
            <div className="container mx-auto px-4">
                <p>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with
                    <span className="text-red-500 mx-1">♥</span>
                    by <a href="/" className="text-white hover:text-primary font-semibold">Naveen</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
