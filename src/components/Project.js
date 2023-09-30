 import React from "react";

 

 export default function Project(props){
    return (
        <div>
        <section className='project'>
          <h1>Portfolio Page</h1>
          <section className='projectInfo'>   
            <h2>{props.title}</h2>
            {props.imageLink}
            {props.GitHubLink}
            {props.description}
          </section>
        </section>
      </div>
    );
 }