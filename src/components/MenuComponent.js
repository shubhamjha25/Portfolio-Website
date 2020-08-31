import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home'
import About from './About/About'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import './Menu.css'
import 'font-awesome/css/font-awesome.min.css';
import { Switch, Route, Redirect } from "react-router-dom";

const Menu = () => {
    return(
        <>
            <Sidebar />
            <div className="main">
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route exact path="/about" component = {About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/skills" component = {Skills} />
                <Route exact path="/projects" component = {Projects} />
            </Switch>
            </div>
        
        </>
    );
}

export default Menu;