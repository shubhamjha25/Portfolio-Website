import React from 'react';
import About from './About/About'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import './Menu.css'
import 'font-awesome/css/font-awesome.min.css'

const Menu = () => {
    return(
        <>
            <div className="sidenav">
                <a href="#"><i className="fa fa-home"></i></a>
                <a href="#"><i className="fa fa-info"></i></a>
                <a href="#"><i className="fa fa-graduation-cap"></i></a>
                <a href="#"><i className="fa fa-cogs"></i></a>
                <a href="#"><i className="fa fa-tasks"></i></a>
                <a href="https://github.com/shubhamjha25" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shubham-jha-252001/" target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
            </div>
            <div className="main">
                <About />
                <Education />
                <Projects />
                <Skills />
            </div>
        </>
    );
}

export default Menu;