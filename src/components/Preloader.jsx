import { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate loading time or wait for window load

        const handleLoad = () => setLoading(false);
        window.addEventListener('load', handleLoad);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500"
            style={{ opacity: loading ? 1 : 0, pointerEvents: loading ? 'all' : 'none' }}>
            <div className="relative w-12 h-12">
                <svg className="animate-spin w-full h-full" viewBox="0 0 50 50">
                    <circle
                        className="opacity-25"
                        cx="25"
                        cy="25"
                        r="20"
                        stroke="#eeeeee"
                        strokeWidth="4"
                        fill="none"
                    ></circle>
                    <circle
                        className="opacity-75"
                        cx="25"
                        cy="25"
                        r="20"
                        stroke="#F96D00" // Original Orange color
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="80"
                        strokeDashoffset="60"
                        strokeLinecap="round"
                    ></circle>
                </svg>
            </div>
        </div>
    );
};

export default Preloader;
