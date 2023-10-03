import React from 'react';
import Project from '../Project'; 

// an array of projects -> each project has a title, github link, image link, deployed link
const projects = [
  {
      title: 'ReelDeel',
      imageLink: 'images/search-results.png',
      GitHubLink: 'https://github.com/fzhao888/ReelDeal',
      deployedLink: 'https://fzhao888.github.io/ReelDeal/', 
  },

  {
      title: 'Lil Chef',
      imageLink: 'images/recipesList.png',
      GitHubLink: 'https://github.com/fzhao888/Little-Chef',
      deployedLink: 'https://remys-little-chef-64326918dfaf.herokuapp.com/', 
  },

  {
      title: 'TechBlog',
      imageLink: 'images/techblog.png',
      GitHubLink: 'https://github.com/fzhao888/Tech-Blog',
      deployedLink: 'https://frank-tech-blog-045fc2396261.herokuapp.com/', 
  },
  {
      title: 'NoteTaker',
      imageLink: 'images/notetaker_sample2.png',
      GitHubLink: 'https://github.com/fzhao888/Note-Taker',
      deployedLink: 'https://frank-note-taker-e1c255ad5ce5.herokuapp.com/', 
  },
  {
      title: 'Work Day Scheduler',
      imageLink: 'images/Work-Day-Scheduler-Sample.png',
      GitHubLink: 'https://github.com/fzhao888/Work-Day-Scheduler',
      deployedLink: 'https://fzhao888.github.io/Work-Day-Scheduler/', 
  },
  {
      title: 'Weather Dashboard',
      imageLink: 'images/Weather-Dashboard.png',
      GitHubLink: 'https://github.com/fzhao888/Weather-Dashboard',
      deployedLink: 'https://fzhao888.github.io/Weather-Dashboard/', 
  }
]

export default function Portfolio() {
  return (
    <div>
      <section className='portfolio'> 
        <Project projects={projects} />
      </section>
    </div>
  );
}
