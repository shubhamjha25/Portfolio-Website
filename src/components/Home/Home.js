import React from 'react';
import './Home.css';
import Freelance from '../../images/freelance.svg';
import ShubhamLogo from '../../images/shubham_logo.png';

const Home = () => {
    return (
        <>
            <img className="sj-logo" src={ShubhamLogo} />
            <div className="flex-wrap">
                <div className="left">
                    <h2>Hello World ________</h2>
                    <h1>I'm <span style={{color: 'rgb(28, 134, 76)'}}>Shubham Jha</span></h1>
                    <h3>A Web Developer & Programmer from India</h3>
                </div>
                <div className="right">
                    <img className="freelance-img" src={Freelance} alt="FREELACE IMAGE" />
                </div>
            </div>
        </>
    );
}

export default Home;