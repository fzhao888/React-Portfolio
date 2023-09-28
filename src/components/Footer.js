import React from 'react'; 
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function Footer(){
    return (
        <section class="card">
        <ul class="links"> 
            <a href="https://github.com/fzhao888"> <BsGithub/></a>
            <a href="https://www.linkedin.com/in/frank-zhao-1bb65822a/"><BsLinkedin/></a>
           
        </ul>
      </section>
    );
};

export default Footer;