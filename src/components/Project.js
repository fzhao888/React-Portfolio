import React from "react";
import { BsGithub } from 'react-icons/bs'



export default function Project(props) {
    return (
        <div>
            <section className='project'>
                <h1>Portfolio Page</h1>
                <section className="project-card col-md-12">
                    {
                        props.projects.map(project => (
                            <div className="projectInfo col-md-6">
                                <h2> {project.title} </h2>
                                <a href={project.GitHubLink}>< BsGithub size={'2em'} /> </a>
                                <section>
                                    <a href={project.deployedLink}> <img src={project.imageLink} alt='screenshot of deployed application' className="img-fluid img-thumbnail" /> </a>
                                </section>
                            </div>
                        ))
                    }
                </section>
            </section>
        </div>
    );
}