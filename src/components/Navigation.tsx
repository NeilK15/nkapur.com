import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div
                    className="nav-logo"
                    onClick={() => scrollToSection('hero')}
                >
                    Neil Kapur
                </div>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('education')}>
                        Education
                    </li>
                    <li onClick={() => scrollToSection('experience')}>
                        Experience
                    </li>
                    <li onClick={() => scrollToSection('projects')}>
                        Projects
                    </li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
