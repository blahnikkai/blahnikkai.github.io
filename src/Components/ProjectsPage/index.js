import LineOrnament from '../LineOrnament';
import ProjectPart from './ProjectPart'
import project_list from '../../lists/project_list.json'
import './projects_page.css'

export default function ProjectsPage() {
    return (
        <div className='grid_block'>
            <h1>Projects</h1>
            <LineOrnament/>
            <div id='projects_grid' className='grid_page'>
                {project_list.map((proj, ind) => <ProjectPart key={ind} proj={proj}/>)}
            </div>
        </div>
    )
}
