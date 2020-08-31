import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import "./Education.css";

class Education extends React.Component{
    render(){
        return (
        <section id="id2">
        <div className="divTimeline">
                <h1 style={{textAlign: 'center', color: '#FFFAFA', paddingBottom: '20px'}}>Educational Information</h1>
                <section id="timeline">
                    
                    <article>
                        <div class="inner">
                            <span class="date">
                                <i class="fa fa-graduation-cap" 
                                    style={{fontSize: "35px"}}
                                ></i>
                            </span>
                            <div className="innerInner">
                            <h2>B.Tech in Computer Science & Engineering<br /> (2019 - 2023) </h2>
                                <p>
                                    <h3>B. P. Poddar Intitute of Management and Technology <br /> (MAKAUT University) </h3>
                                </p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="inner">
                            <span class="date">
                                <i class="fa fa-pencil" style={{ fontSize: "35px" }}></i>
                            </span>
                            <div className="innerInner">
                            <h2>Senior Secondary School (2017 - 2019) </h2>
                            <p>
                                <h3>Kendriya Vidyalaya Cossipore <br/> (CBSE Board)</h3>
                                    Studied Physics, Chemistry, Mathematics, Computer Science (C++), English and Physical Education in class XI & XII.<br />Scored 93.2%
                            </p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="inner">
                            <span class="date">
                                <i class="fa fa-book" style={{ fontSize: "35px" }}></i>
                            </span>
                            <div className="innerInner">
                            <h2>Secondary School</h2>
                            <p>
                            <h3>Kendriya Vidyalaya Cossipore <br/> (CBSE Board)</h3>
                                Well, I learnt discipline in my school life. <br /> Also, Scored 10 CGPA in Class X
                            </p>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
            </section>
    )
    }
}

export default Education;