import LineOrnament from '../LineOrnament';
import ExperiencePart from './ExperiencePart'
import SeeMoreButton from '../SeeMoreButton'
import experience_list from '../../lists/experience_list.json'
import './short_experience.css';

function Experience() {
    return (
        <div id='experience' className='short_tile'>
            <h1 className='exp_title'>Experience</h1>
            <LineOrnament/>
            <div className='short_grid'>
                {experience_list.map((exp, ind) => <ExperiencePart key={ind} exp={exp}/>)}
            </div>
            <SeeMoreButton/>
        </div>
    )
}

export default Experience;