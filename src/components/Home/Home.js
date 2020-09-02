import React from 'react';
import './Home.css';
import Freelance from '../../images/freelance.svg';
import ShubhamLogo from '../../images/shubham_logo.png';
import { NavLink } from 'react-router-dom';

var ReactRotatingText = require('react-rotating-text');

const Home = () => {
    return (
        <>
            <div className="home-first">
                <div className="flex-wrap">
                    <div className="left">
                        <img className="sj-logo" src={ShubhamLogo} />
                        <h2>Hello, Hola, नमस्ते !</h2>
                        <h1>This is <span style={{color: 'rgb(28, 134, 76)'}}>Shubham Jha</span></h1>
                        <ReactRotatingText className="text-rotate" color={'white'} items={['A Web Developer', 'A Programmer', 'A Mobile App Developer']} />
                    </div>
                    <div className="right">
                        <img className="freelance-img" src={Freelance} alt="FREELACE IMAGE" />
                    </div>
                </div>
            </div>
            <div className="home-second">
                <h2>Know More About Me <NavLink activeClassName="active-class" exact to="/about"><i className="fa fa-info"></i></NavLink></h2>
            </div>
        </>
    );
}

export default Home;