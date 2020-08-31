import React from 'react';
import './Home.css';
import Freelance from '../../images/freelance.png';

const Home = () => {
    return (
        <>
            <div className="flex-wrap">
                <div className="left">
                    <h3>Hello World ________</h3>
                    <h2>I'm Shubham Jha</h2>
                    <h4>A Web Developer & Programmer from India <i className="fa-fa-india"></i></h4>
                </div>
                <div className="right">
                    <img className="freelance-img" src={Freelance} alt="FREELACE IMAGE" />
                </div>
            </div>
        </>
    );
}

export default Home;