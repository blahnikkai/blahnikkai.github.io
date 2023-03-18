import React from 'react';
import kai_img from '../../images/kai_img.jpg'
import './intro.css'

function Intro() {
    return (
        <body>
            <div class='tile_intro'>
                <div class='intro'>
                    <img class='self_img' src={kai_img} alt='Kai Blahnik'/>
                    <div class='intro_section'>
                        <h1 class='intro_title'>
                            Hi, my name is Kai
                        </h1>
                        <p class='intro_memo'>
                            I love <span className='highlight'>solving problems</span> with <span className='highlight'>code</span>
                        </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Intro;