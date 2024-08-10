import LineOrnament from '../../LineOrnament';
import ActivityPart from './ActivityPart'
import SeeMoreButton from '../../SeeMoreButton'
import activity_list from '../../../lists/activity_list.json'
import './short_activities.css';

export default function Experience() {
    return (
        <div id='short_activities_tile' className='short_tile'>
            <h1>Activities</h1>
            <LineOrnament/>
            <div className='short_grid'>
                {activity_list
                    .filter((act) => act.on_homepage)
                    .map((act, ind) => 
                        <ActivityPart key={ind} act={act}/>
                    )
                }
            </div>
            <SeeMoreButton to='activities' txt='See more activities'/>
        </div>
    )
}
