import React from 'react';
import {Link} from 'react-router-dom';
import fiu_img from '../../images/experience_imgs/fiu.png';
import mycs_img from '../../images/experience_imgs/mycs.png';
import terra_img from '../../images/experience_imgs/terra.png';
import ufpt_img from '../../images/experience_imgs/ufpt.png';
import './short_experience.css';

function Experience() {
    return (
        <body id='experience'>
            <h1 className='exp_title'>Experience</h1>
            <div className='ornament'></div>
            <div className='exp_list'>
                <div className='exp'>
                    <img src={fiu_img} alt='FIU logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            Florida International University Optical Imaging Laboratory
                        </h1>
                        <p className='exp_pos'>
                            App development intern
                        </p>
                    </div>
                </div>
                <div className='exp'>
                    <img src={mycs_img} alt='MYCS logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            Miami Youth Climate Summit
                        </h1>
                        <p className='exp_pos'>
                            Website developer
                        </p>
                    </div>
                </div>
                <div className='exp'>
                    <img src={terra_img} alt='Terra logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            TERRA Environmental Research Institute Engineering Club
                        </h1>
                        <p className='exp_pos'>
                            Head of software
                        </p>
                    </div>
                </div>
                <div className='exp'>
                    <img src={ufpt_img} alt='Terra logo'/>
                    <div className='exp_desc'>
                        <h1 className='exp_org'>
                            University of Florida Programming Team
                        </h1>
                        <p className='exp_pos'>
                            Division 2 competitor
                        </p>
                    </div>
                </div>
            </div>
            <Link id='see_more_button' to='/experience'>See more detail</Link>
        </body>
    )
}

export default Experience;