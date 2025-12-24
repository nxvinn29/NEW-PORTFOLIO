import { useEffect, useState } from 'react';

const Stats = () => {
    return (
        <section className="py-10 bg-white" id="section-counter">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-10 md:gap-20">

                    <div className="text-center p-4">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                            20
                        </div>
                        <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">Achievements</span>
                    </div>

                    <div className="text-center p-4">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                            50
                        </div>
                        <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">Artworks</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
