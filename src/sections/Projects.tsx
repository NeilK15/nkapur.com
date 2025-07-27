import React from 'react';

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
                            family's recipes.
                        </p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                        </div>
                        <div className="project-links">
                            {/* <a href="#" className="btn btn-small">
                                Live Demo
                            </a> */}
                            <a
                                href="https://github.com/NeilK15/kapur-home"
                                className="btn btn-small btn-outline"
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
