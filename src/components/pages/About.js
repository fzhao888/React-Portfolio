import React from 'react';

export default function About() {
  return (
    <div className='about col-md-12'>
      <h1>About Page</h1>
      <section className='me'>
        <img src="images/me.jpg" alt="image of me" className='img-fluid rounded' />
        <p>
          Hello! My name is Frank Zhao.  I am currently taking a bootcamp class to become a fullstack developer.  This webpage showcases all the projects I have worked on.
        </p> 
      </section>
    </div>
  );
}
