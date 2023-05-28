import LineOrnament from '../LineOrnament'
import ExperiencePart from './ExperiencePart'
import experience_list from '../../lists/experience_list.json'
import './experience_page.css'

export default function ExperiencePage() {
    return (
        <div id='exp_block'>
            <h1>Experience</h1>
            <LineOrnament/>
            <div id='exp_grid'>
                {experience_list.map((exp, ind) => <ExperiencePart key={ind} exp={exp}/>)}
            </div>
        </div>
    )
}