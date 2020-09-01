import React from 'react';
import './Skills.css'
import Figma from '../../images/figma.png';
import Github from '../../images/github.png';
import jQuery from '../../images/jquery.png';
import cpp from '../../images/c++.png';
import c from '../../images/c.png';
import mysql from '../../images/mysql.png';
import git from '../../images/git.png';
import heroku from '../../images/heroku.png';
import npm from '../../images/npm.png';

const Skills = () => {
    return (
        <>
            <h1 className="skill-header">Skills</h1>
            <h2 className="skill-para">Some Tools & Technologies That I've Been Working With </h2>

            <div className="skill-pics">
            
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" width="70px" alt="SKILL-IMAGE"/>
                
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" width="70px" alt="SKILL-IMAGE"/>
            
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" width="70px" alt="SKILL-IMAGE" />
        
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" width="70px" alt="SKILL-IMAGE" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="70px" alt="SKILL-IMAGE" />

                <img src={jQuery} width="70px" alt="SKILL-IMAGE" />

                <img src={c} width="70px" alt="SKILL-IMAGE" />

                <img src={cpp} width="70px" alt="SKILL-IMAGE" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="70px" alt="SKILL-IMAGE"/>

                <img src={Github} width="70px" alt="SKILL-IMAGE" />  

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" width="70px" alt="SKILL-IMAGE" />  

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="70px" alt="SKILL-IMAGE" />
            
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png" width="70px" alt="SKILL-IMAGE" />

                <img src={mysql} width="70px" alt="SKILL-IMAGE" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" width="70px" alt="Services-1" />

                <img src={Figma} width="70px" alt="Services-1" />
       
                <img src={git} width="70px" alt="Services-1" />

                <img src={heroku} width="70px" alt="Services-1" />

                <img src={npm} width="70px" alt="Services-1" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" width="70px" alt="Services-1" />                     

            </div>
        </>
    );
}

export default Skills;