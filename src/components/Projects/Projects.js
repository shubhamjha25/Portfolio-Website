import React, {useState, useEffect} from 'react';
import './Projects.css'
import { portfolio } from './Portfolio'

function RenderCard({name, img, source}){
    return(

        <div className="card-wrap">
            <a href={source} target="_blank"><img src={img} className="card-img" alt="Project-Image" /></a>
            <h2 className="card-project-title">{name}</h2>
        </div>

    );
}

const Projects = () => {

    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <>
            <div className="portfolio__labels">
                <a active={filter === 'all'} onClick={() => setFilter('all')}>ALL</a>
                <a active={filter === 'web'} onClick={() => setFilter('web')}>HTML/CSS/JS</a>
                <a active={filter === 'react'} onClick={() => setFilter('react')}>REACT</a>
                <a active={filter === 'php'} onClick={() => setFilter('php')}>PHP</a>
                <a active={filter === 'cpp'} onClick={() => setFilter('cpp')}>C/C++</a>
            </div>

            <div className="portfolio__container" style={{color: 'white'}}>
                    {projects.map(item => item.filtered === true ? (
                        <RenderCard name={item.name} img={item.img} source={item.url} />
                    ) : '')}
            </div>
        </>
    );
}

export default Projects;