import React from 'react';
import {Link} from 'react-router-dom';
import './short_projects.css';
import advanced_maze_solver_img from '../../images/project_imgs/advanced_maze_solver.png';
import graph_generator_img from '../../images/project_imgs/graph_generator.png';
import binomial_machine_img from '../../images/project_imgs/binomial_machine.png';
import pandemic_simulator_img from '../../images/project_imgs/pandemic_simulator.png';
import personal_website_img from '../../images/project_imgs/personal_website.png';

function ShortProjects() {
    return(
        <body id='short_projects_tile'>
            <h1>Projects</h1>
            <div className='ornament'></div>
            <div className='exp_list'>
                <div className='exp'>
                    <img src={advanced_maze_solver_img} alt='FIU logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            Advanced Maze Solver
                        </h1>
                        <p className='exp_pos'>
                            Javascript, HTML, CSS
                        </p>
                    </div>
                </div>
                <div className='exp'>
                    <img src={graph_generator_img} alt='MYCS logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            Graph Generator
                        </h1>
                        <p className='exp_pos'>
                            Javascript, HTML, CSS
                        </p>
                    </div>
                </div>
                <div className='exp'>
                    <img src={binomial_machine_img} alt='Terra logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            Binomial Machine
                        </h1>
                        <p className='exp_pos'>
                            Python, Matplotlib, Tkinter
                        </p>
                    </div>
                </div>
                <div className='exp'>
                    <img src={pandemic_simulator_img} alt='Terra logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            Pandemic Simulator
                        </h1>
                        <p className='exp_pos'>
                            Java, JavaFX
                        </p>
                    </div>
                </div>
                <div className='exp'>
                    <img src={personal_website_img} alt='Terra logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            Blahnik.ai
                        </h1>
                        <p className='exp_pos'>
                            React, Javascript, HTML, CSS
                        </p>
                    </div>
                </div>
            </div>
            <Link id='see_more_button' to='/projects'>See more detail</Link>
        </body>
    )
}

export default ShortProjects;