import LineOrnament from '../LineOrnament';
import ExperiencePart from './ExperiencePart'
import SeeMoreButton from '../SeeMoreButton'
import experience_list from '../../lists/experience_list.json'
import './short_experience.css';

function Experience() {
    return (
        <div id='short_exp_tile' className='short_tile'>
            <h1>Experience</h1>
            <LineOrnament/>
            <div className='short_grid'>
                {experience_list
                    .filter((exp) => exp.on_homepage)
                    .map((exp, ind) => 
                        <ExperiencePart key={ind} exp={exp}/>
                    )
                }
            </div>
            <SeeMoreButton to='experience' txt='See more experience'/>
        </div>
    )
}

export default Experience;