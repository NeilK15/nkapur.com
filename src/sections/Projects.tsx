const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3>Recipe Cookbook Full Stack App</h3>
                        <p>
                            A full-stack web application built to organize my
                            family's recipes. The app is still in progress.
                        </p>
                        <div className="project-tech">
                            <span>Vite React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://github.com/NeilK15/kapur-home"
                                target="_blank"
                                className="btn btn-secondary btn-small btn-outline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <h3>Portfolio Website</h3>
                        <p>
                            A simple web application meant to showcase my
                            education, work experience, and projects. I used
                            React to build the front end and use AWS amplify to
                            quickly and easily deploy.
                        </p>
                        <div className="project-tech">
                            <span>Vite React</span>
                            <span>AWS Amplify</span>
                        </div>
                        <div className="project-links">
                            <a href="#" className="btn btn-primary btn-small">
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/NeilK15/nkapur.com"
                                target="_blank"
                                className="btn btn-secondary btn-small btn-outline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
