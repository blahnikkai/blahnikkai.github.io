import LineOrnament from '../LineOrnament';
import ProjectPart from './ProjectPart'
import project_list from '../../lists/project_list.json'
import './projects_page.css'

function ProjectsPage() {
    return (
        <div id='projects_block'>
            <h1 id='projects_title'>Projects</h1>
            <LineOrnament/>
            <div id='projects_grid'>
                {project_list.map((proj, ind) => <ProjectPart key={ind} proj={proj}/>)}
            </div>
        </div>
    )
}

export default ProjectsPage;