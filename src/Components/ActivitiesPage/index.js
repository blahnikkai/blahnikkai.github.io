import LineOrnament from '../LineOrnament'
import ActivityPart from './ActivitiesPage'
import experience_list from '../../lists/experience_list.json'
import './experience_page.css'

export default function ExperiencePage() {
    return (
        <div className='grid_block'>
            <h1>Experience</h1>
            <LineOrnament/>
            <div id='exp_grid' className='grid_page'>
                {experience_list.map((exp, ind) => <ActivityPart key={ind} exp={exp}/>)}
            </div>
        </div>
    )
}
