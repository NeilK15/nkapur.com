import './App.css';
import InterestItem from './components/InterestItem';
import Navigation from './components/Navigation';

function App() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="app">
            <Navigation />
            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-content">
                    <h1>Neil Kapur</h1>
                    {/* <h2>Computer Science Professional</h2> */}
                    <p>
                        Passionate about technology, innovation, and solving the
                        most complex problems with software
                    </p>
                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get in Touch
                        </button>
                        {/* <button className="btn btn-secondary">Contact</button> */}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className="about-main">
                            <div className="about-header">
                                <img
                                    className="profile-image"
                                    src="Headshot.png"
                                />
                                <div className="about-text">
                                    <p>
                                        Neil is a dedicated Computer Science
                                        student with a passion for artificial
                                        intelligence, cloud computing, and
                                        full-stack development. He has developed
                                        expertise in AI research and machine
                                        learning applications, with a strong
                                        technical foundation across multiple
                                        programming languages and frameworks.
                                    </p>
                                    <p>
                                        As a natural leader and collaborative
                                        team player, Neil approaches problems
                                        with a logical mindset while
                                        consistently delivering high-quality
                                        results. His commitment to continuous
                                        learning drives him to stay at the
                                        forefront of emerging technologies in
                                        computer science.
                                    </p>
                                </div>
                                <div className="skills">
                                    <h3>Technical Skills</h3>
                                    <div className="skills-grid">
                                        <div className="skill-category">
                                            <h4>Programming Languages</h4>
                                            <ul>
                                                <li>Java</li>
                                                <li>Python</li>
                                                <li>JavaScript/TypeScript</li>
                                            </ul>
                                        </div>
                                        <div className="skill-category">
                                            <h4>Technologies</h4>
                                            <ul>
                                                <li>React.js</li>
                                                <li>
                                                    Retrieval Augmented
                                                    Generation (RAG)
                                                </li>
                                                <li>AWS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="interests-section">
                                <h3>Other Interests</h3>
                                <div className="interests-grid">
                                    <InterestItem
                                        title="The Outdoors"
                                        image="outdoors.JPG"
                                    ></InterestItem>
                                    <InterestItem
                                        title="Cooking"
                                        image="food.jpg"
                                        link="https://www.instagram.com/neilmeals/"
                                    ></InterestItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="education">
                <div className="container">
                    <h2>Education</h2>
                    <div className="education-item">
                        <div className="education-header">
                            <h3>Bachelor of Science in Computer Science </h3>
                            <span className="education-date">May 2026</span>
                        </div>
                        <p className="education-institution">
                            University of Maryland, College Park
                        </p>
                        <p className="education-description">
                            <b>Relevant coursework:</b> Artificial Intelligence,
                            Machine Learning, Applied Quantitative Analysis,
                            Organization of Programming Languages, Algorithms,
                            Data Science, Linear Algebra, Discrete Structures
                        </p>
                        <li className="education-description">
                            Quality Enhancement Systems and Teams (QUEST) Honor
                            Society
                        </li>
                        <li className="education-description">
                            Chapter President of Zeta Beta Tau Fraternity
                        </li>
                        <li className="education-description">
                            Business, Society and Entrepreneurship Scholar
                        </li>
                        {/* <p className="education-gpa">GPA: 3.8/4.0</p> */}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience">
                <div className="container">
                    <h2>Experience</h2>
                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Applied AI Intern</h3>
                            <span className="experience-date">
                                June 2025 - July 2025
                            </span>
                        </div>
                        <p className="experience-company">
                            Deloitte Consulting LLC
                        </p>
                        <ul className="experience-description">
                            <li>
                                Contributed to functional and technical
                                consulting projects for government and public
                                services clients.
                            </li>
                            <li>
                                Conducted AI research and gained hands-on
                                experience with AWS cloud technologies.
                            </li>
                            <li>
                                Participated in agile development processes
                                including daily scrums across two concurrent
                                public sector projects.
                            </li>
                            <li>
                                Developed core consulting competencies through
                                client meetings and cross-functional team
                                collaboration.
                            </li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Software Engineer Intern</h3>
                            <span className="experience-date">
                                May 2024 - August 2024
                            </span>
                        </div>
                        <p className="experience-company">
                            Word Exploration Technologies
                        </p>
                        <ul className="experience-description">
                            <li>
                                Enhanced data ingestion process for pWin.ai, an
                                AI copilot for generating proposal responses.
                            </li>

                            <li>
                                Applied prompt engineering techniques across
                                GPT-4o, GPT-Turbo, and OpenAI vision models.
                            </li>

                            <li>
                                Automated PDF processing into Qdrant Vector
                                Database for RAG implementation.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <div className="experience-header">
                            <h3>Software Engineer Intern</h3>
                            <span className="experience-date">
                                June 2023 - August 2023
                            </span>
                        </div>
                        <p className="experience-company">
                            Applied Information Sciences
                        </p>
                        <ul className="experience-description">
                            <li>
                                Developed pWin.ai using GPT-4-32k and Python to
                                automate customer workflows.
                            </li>
                            <li>
                                Participated in agile development with daily
                                scrums and Azure DevOps.
                            </li>
                            <li>
                                Gained expertise in Microsoft Azure and Bicep
                                for infrastructure as code.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Projects Section */}

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2>Contacts</h2>
                    <div className="contact-content">
                        <p>
                            I'm always interested in new opportunities and
                            collaborations.
                        </p>
                        <div className="contact-links">
                            <a
                                href="mailto:neiltkapur@gmail.com"
                                className="contact-link"
                            >
                                Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/neil-kapur/"
                                className="contact-link"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/NeilK15"
                                className="contact-link"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
