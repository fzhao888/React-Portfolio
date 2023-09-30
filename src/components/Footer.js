import React from 'react'; 
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function Footer(){
    return (
        <section className="card">
            <section className="links"> 
                <a href="https://github.com/fzhao888"> <BsGithub/></a> 
                <a href="https://www.linkedin.com/in/frank-zhao-1bb65822a/"><BsLinkedin/></a>            
            </section>
      </section>
    );
};

export default Footer;