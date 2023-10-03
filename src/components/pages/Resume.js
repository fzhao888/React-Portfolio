import React from 'react';

export default function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1> 
        <a className='btn btn-primary' href='assets/Frank-Zhao.pdf' download='Frank-Zhao.pdf'> Download Resume</a> 
      <section className='proficiencies col-md-6'>
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li> HTML </li>
          <li> CSS </li>
          <li> JavaScript </li>
          <li> jQuery</li>
          <li> responsive design</li>
          <li> React </li>
          <li> Bootstrap </li>
        </ul>

        <h3>Back-End Proficiencies</h3>
        <ul>
          <li> APIs </li>
          <li> Node </li>
          <li> Express </li>
          <li> MySQL, Sequelize</li>
          <li> MongoDB, Mongoose</li>
        </ul>
      </section>
    </div>
  );
}
