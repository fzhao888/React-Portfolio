import React from "react";



export default function Project(props) {
    return (
        <div>
            <section className='project'>
                <h1>Portfolio Page</h1>
                <section className='projectInfo'>
                    {
                        props.projects.map(project => (
                            <div>
                                <h2> {project.title} </h2>
                                <section>
                                    {project.imageLink}
                                    {project.deployedLink}
                                    {project.GitHubLink}
                                    {project.description}
                                    {project.technologies}
                                </section>
                            </div>
                        ))
                    }
                </section>
            </section>
        </div>
    );
}