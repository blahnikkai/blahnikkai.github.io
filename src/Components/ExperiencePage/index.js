import React from 'react';
import './experience_page.css';
import fiu_img from '../../images/experience_imgs/fiu.png';
import mycs_img from '../../images/experience_imgs/mycs.png';
import terra_img from '../../images/experience_imgs/terra.png';
import ufpt_img from '../../images/experience_imgs/ufpt.png';

function ExperiencePage() {
    return (
        <div id='exp_block'>
            <h1 id='exp_title'>Experience</h1>
            <div class='ornament'></div>
            <div id='exp_grid'>
                <img className='exp_img' src={fiu_img} alt='The letters F I and U with a blue fill and gold strokes'></img>
                <div className='exp_part'>FIU Optical Imaging Laboratory</div>
                <div className='exp_part'>App development intern</div>
                <div className='exp_part'>Developed prototype version of a mobile app that reminds diabetic patients to administer preventative foot care and adjusted app to feedback from research team</div>
                
                <img className='exp_img' src={mycs_img} alt='A drawing of Earth behind a mountain with the words "2023 Youth Climate Summit wrapping around Earth"'></img>
                <div className='exp_part'>Miami Youth Climate Summit</div>
                <div className='exp_part'>Website developer</div>
                <div className='exp_part'>Worked in a team to collaboratively develop a functional and responsive website with React that educated viewers on climate change and provided information on attending the 2022 Miami Youth Climate Summit.</div>
                
                <img className='exp_img' src={terra_img} alt='The word TERRA in a hand-drawn font with leaves and a globe of lines in the background'></img>
                <div className='exp_part'>TERRA Environnmental Research Institute Engineering Club</div>
                <div className='exp_part'>Head of software</div>
                <div className='exp_part'>Educated and mentored students in the fundamentals of programming.</div>
                
                <img className='exp_img' src={ufpt_img} alt='Two colored circles with dashed circles around them'></img>
                <div className='exp_part'>University of Florida Programming Team</div>
                <div className='exp_part'>Division 2 team member</div>
                <div className='exp_part'>Apply knowledge of data structures and algorithms to solve programming problems under time pressure. Communicate in a team of 3 to divide and solve problems collaboratively.</div>
            </div>
        </div>
    )
}

export default ExperiencePage;