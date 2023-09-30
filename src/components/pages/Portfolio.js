import React from 'react';
import Project from '../Project';

const projects = [
  {
      title: 'ReelDeel',
      imageLink: '',
      GitHubLink: '',
      deployedLink: '',
      description: '',
      technologies: ''
  },

  {
      title: 'Lil Chef',
      imageLink: '',
      GitHubLink: '',
      deployedLink: '',
      description: '',
      technologies: ''
  },

  {
      title: 'TechBlog',
      imageLink: '',
      GitHubLink: '',
      deployedLink: '',
      description: '',
      technologies: ''
  },
  {
      title: 'NoteTaker',
      imageLink: '',
      GitHubLink: '',
      deployedLink: '',
      description: '',
      technologies: ''
  },
  {
      title: 'Work Day Scheduler',
      imageLink: '',
      GitHubLink: '',
      deployedLink: '',
      description: '',
      technologies: ''
  },
  {
      title: 'Final Project (placeholder)',
      imageLink: '',
      GitHubLink: '',
      deployedLink: '',
      description: '',
      technologies: ''
  }
]

export default function Portfolio() {
  return (
    <div>
      <section className='portfolio'>
        <h1>Portfolio Page</h1>
        <Project projects={projects} />
      </section>
    </div>
  );
}
