import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
            <div className="sidenav">
                <NavLink exact to="/"><i className="fa fa-home"></i></NavLink>
                <NavLink exact to="/about"><i className="fa fa-info"></i></NavLink>
                <NavLink exact to="/education"><i className="fa fa-graduation-cap"></i></NavLink>
                <NavLink exact to="/skills"><i className="fa fa-cogs"></i></NavLink>
                <NavLink exact to="/projects"><i className="fa fa-tasks"></i></NavLink>
                <NavLink exact to="/json"><i className="fa fa-file-text-o"></i></NavLink>
                <div className="social-icons">
                    <a href="https://github.com/shubhamjha25" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/shubham-jha-252001/" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
    );
}

export default Sidebar;