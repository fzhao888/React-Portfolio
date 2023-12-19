import React from 'react';

export default function About() {
  return (
    <div className='about col-md-12'>
      <h1>About</h1>
      <section className='me'>
        <section class='meImg'>
          <img src="images/me.jpeg" alt="image of me" className='img-fluid rounded' />
        </section>
        <p>
          Hello! My name is Frank Zhao.  I recently graduated bootcamp class to become a fullstack developer, and also have a Bachelor's in Computer Science.  This webpage showcases all the projects I have worked on.
        </p>
      </section>
    </div>
  );
}
