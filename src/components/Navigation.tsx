import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy logic
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Add offset for better UX

            console.log('========================================');
            console.log('Scroll pos: ' + scrollPosition);

            // Find which section is currently in view
            // Loop from bottom to top to get the correct active section
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const sectionElt = document.getElementById(section.id);
                if (sectionElt) {
                    const sectionPos = sectionElt.offsetTop;
                    console.log(section.id + ': ' + sectionPos);

                    if (scrollPosition >= sectionPos) {
                        console.log('Setting active section to: ' + section.id);
                        setActiveSection(section.id);
                        break; // Important: break once we find the active section
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Call once to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array is correct here

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
                    <img
                        className={`${isScrolled ? 'hidden' : ''}`}
                        src={'nk_logo-light-transparent.svg'}
                    />
                    <img
                        className={`${isScrolled ? '' : 'hidden'}`}
                        src={'nk_logo-dark-transparent.svg'}
                    />
                </div>
                <ul className="nav-links">
                    <li
                        onClick={() => scrollToSection('about')}
                        className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                    >
                        About
                    </li>
                    <li
                        onClick={() => scrollToSection('education')}
                        className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
                    >
                        Education
                    </li>
                    <li
                        onClick={() => scrollToSection('experience')}
                        className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() => scrollToSection('projects')}
                        className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => scrollToSection('contact')}
                        className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                    >
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
