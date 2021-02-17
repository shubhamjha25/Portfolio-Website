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
            <h1 className="skill-header">SKILLS</h1>
            <h2 className="skill-para">Some Tools & Technologies That I've Been Working With </h2>

            <div className="skill-pics">
            
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" width="70px" alt="HTML5"/>
                
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" width="70px" alt="CSS3"/>
            
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" width="70px" alt="Bootsrap" />
        
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" width="70px" alt="SASS/SCSS" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="70px" alt="Javascript" />

                <img src={jQuery} width="70px" alt="jQuery" />

                <img src={c} width="70px" alt="C" />

                <img src={cpp} width="70px" alt="C++" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="70px" alt="Python" />

                <img src={Github} width="70px" alt="GitHub" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" width="70px" alt="Typescript" />  

                <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png" width="70px" alt="MongoDB" />

                <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" width="100px" alt="Express" />
                
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="70px" alt="ReactJS" />

                <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png" width="70px" alt="NodeJS" />

                <img src="https://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png" width="70px" alt="Redux" />
            
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png" width="70px" alt="PHP" />

                <img src={mysql} width="70px" alt="MySQL" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" width="70px" alt="Firebase" />

                <img src={Figma} width="70px" alt="Figma" />
       
                <img src={git} width="70px" alt="Git" />

                <img src={heroku} width="70px" alt="Heroku" />

                <img src={npm} width="70px" alt="NPM" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" width="70px" alt="VS Code" />                     

            </div>
        </>
    );
}

export default Skills;