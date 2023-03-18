import React from 'react';
import {useNavigate} from 'react-router-dom';
import './projects_page.css';
import advanced_maze_solver_img from '../../images/project_imgs/advanced_maze_solver.png';
import graph_generator_img from '../../images/project_imgs/graph_generator.png';
import binomial_machine_img from '../../images/project_imgs/binomial_machine.png';
import pandemic_simulator_img from '../../images/project_imgs/pandemic_simulator.png';
import personal_website_img from '../../images/project_imgs/personal_website.png';

function ProjectsPage() {
    const navigate = useNavigate();
    return (
        <div id='projects_block'>
            <h1 id='projects_title'>Projects</h1>
            <div class='ornament'></div>
            <div id='projects_grid'>
                <img src={advanced_maze_solver_img} alt='A maze with two dots in it'></img>
                <a href='https://blahnikkai.github.io/advanced-maze-solver/'>Advanced Maze Solver</a>
                <div>Javascript, HTML, CSS</div>
                <div className='last'>Find a path in a maze from a startpoint to endpoint with depth-first, breadth-first, and A* search algorithms.</div>
                
                <img src={graph_generator_img} alt='Three white circles connected by two lines on a black background'></img>
                <a href='https://blahnikkai.github.io/graph-generator/'>Graph Generator</a>
                <div>Javascript, HTML, CSS</div>
                <div className='last'>Place points and animate the creation of a convex hull or a minimum spanning tree with weights based on Euclidian distance.</div>
                
                <img src={binomial_machine_img} alt='A histogram with one bar filled in solid blue'></img>
                <a href='https://github.com/blahnikkai/binomial-machine/'>Binomial Machine</a>
                <div>Python, Matplotlib, Tkinter</div>
                <div className='last'>Find a path in a maze from a startpoint to endpoint with depth-first, breadth-first, and A* search algorithms.</div>
                
                <img src={pandemic_simulator_img} alt='Two colored circles with dashed circles around them'></img>
                <a href='https://github.com/blahnikkai/pandemic-simulator'>Pandemic Simulator</a>
                <div>Java, JavaFX</div>
                <div className='last'>Simulate a pandemic spreading throughout a population. Physically divide areas by drawing walls.</div>

                <img src={personal_website_img} alt='A yellow B on a dark gray background'></img>
                <a onClick={() => {navigate('/')}} href='/'>Blahnik.ai</a>
                <div>React, Javascript, HTML, CSS</div>
                <div className='last'>Personal portfolio website. See my projects, experience, and contacts.</div>
            </div>
        </div>
    )
}

export default ProjectsPage;