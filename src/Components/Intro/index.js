import React from 'react';
import kai_img from '../../images/kai_img.jpg'
import './intro.css'

function Intro() {
    return (
        <div className='tile_intro'>
            <div className='intro'>
                <img className='self_img' src={kai_img} alt='Kai Blahnik'/>
                <div className='intro_section'>
                    <h1 className='intro_title'>
                        Hi, my name is&nbsp;<span className='highlight'>Kai</span>
                    </h1>
                    <p className='intro_memo'>
                        I love <span className='highlight'>solving problems</span> with <span className='highlight'>code</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro;