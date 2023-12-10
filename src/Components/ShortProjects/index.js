import LineOrnament from '../LineOrnament'
import ProjectPart from './ProjectPart'
import SeeMoreButton from '../SeeMoreButton'
import project_list from '../../lists/project_list.json'
import './short_projects.css'

function ShortProjects() {
    return (
        <div id='short_projects_tile' className='short_tile'>
            <h1>Projects</h1>
            <LineOrnament/>
            <div className='short_grid'>
                {project_list
                    .filter((project) => project.on_homepage)
                    .map((proj, ind) => 
                        <ProjectPart key={ind} proj={proj}/>
                    )
                }
            </div>
            <SeeMoreButton to='projects' txt='See more projects'/>
        </div>
    )
}

export default ShortProjects;