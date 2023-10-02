import React from 'react'; 
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function Footer(){
    return (
        <div className="footer">
            <section className="links"> 
                <a href="https://github.com/fzhao888" className='github'>  <BsGithub size={'2em'}/> </a>  
                <a href="https://www.linkedin.com/in/frank-zhao-1bb65822a/"><BsLinkedin size={'2em'}/></a>            
            </section>
      </div>
    );
};

export default Footer;