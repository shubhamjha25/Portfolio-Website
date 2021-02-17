import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
            <div className="sidenav">
                <NavLink activeClassName="active-class" exact to="/" title="Home"><i className="fa fa-home"></i></NavLink>
                <NavLink activeClassName="active-class" exact to="/about" title="About Shubham"><i className="fa fa-info"></i></NavLink>
                <NavLink activeClassName="active-class" exact to="/education" title="Educational Information"><i className="fa fa-graduation-cap"></i></NavLink>
                <NavLink activeClassName="active-class" exact to="/skills" title="Skills"><i className="fa fa-cogs"></i></NavLink>
                <NavLink activeClassName="active-class" exact to="/projects" title="Project Works"><i className="fa fa-tasks"></i></NavLink>
                <NavLink activeClassName="active-class" exact to="/json" title="JSON Document"><i className="fa fa-file-text-o"></i></NavLink>
                <div className="social-icons">
                    <a href="https://github.com/shubhamjha25" target="_blank" title="GitHub (shubhamjha25)"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/shubham-jha-252001/" target="_blank" title="LinkedIn"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook" title="Facebook"></i></a>
                </div>
            </div>
    );
}

export default Sidebar;