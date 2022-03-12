import React from 'react';
import './About.css';
import SJ from '../../images/shubhamjha.jpg';
import WEBDEV from '../../images/webdeveloper.png'
import RESUME from '../../images/Shubham_Resume.pdf';

const About = () => {
    return(
        <>
            <div className="abt-wrap">
                <h1 style={{color: 'rgb(28, 134, 76)'}}>ABOUT ME</h1>
                <div className="first">
                    <div className="abt-left">   
                        <p>Innovative, Ambitious and a Forward-Thinking Tech Enthusiast ready to apply the skills he posses. Don't know whether I'm a quick learner or a slow learner, but I give my complete dedication and determination to the things I love to do. Always eager to learn new concepts of Computer Science.</p>
                        <div className="abt-btn-wrap">
                            <a href="https://www.linkedin.com/in/shubham-jha-252001/" target="_blank" className="abt-btn-1">Hire Me</a>
                            <a href={RESUME} target="_blank" className="abt-btn-2"><i className="fa fa-download"></i> Get CV</a>
                        </div>
                    </div>
                    <div className="abt-right">
                        <img src={SJ} />
                    </div>
                </div>
                <div className="second">
                    <h2>I'm available for any new opportunities, collabs, projects and ideas ...</h2>
                    <div className="abt-icon-wrap">
                        <a href="https://github.com/shubhamjha25" target="_blank"><i className="fa fa-2x fa-github"></i></a>
                        <a href="mailto:shubham.jha2001m@gmail.com"><i className="fa fa-2x fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/shubham-jha-252001/" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a>
                        <a href="https://twitter.com/shubhamjha25" target="_blank"><i className="fa fa-2x fa-twitter"></i></a>
                        <a href="https://t.me/shubhamjha25" target="_blank"><i className="fa fa-2x fa-telegram"></i></a>
                        <a href=""><i className="fa fa-2x fa-medium"></i></a>
                    </div>
                    
                </div>

                <div className="third">
                    <div className="abt-right">
                        <img src={WEBDEV} style={{width: '280px'}} />        
                    </div>
                    <div className="abt-left">
                        <p>I was first intoduced to coding & computer programming in class XI. The very first language, programming language I mean :), that i learnt was <span style={{color: 'green'}}>C++</span>. Apart from developing websites, I also like to play over Data Structure & Algorithms and try to solve the problems based on them. <br />
                        I also like to work in teams because I believe that it enables better skill and resource allocation and we gain overall efficieny. Have a Project in mind? Let's build it <span style={{color: 'green'}}>Together</span>. <i className="fa fa-handshake-o"></i></p>        
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;