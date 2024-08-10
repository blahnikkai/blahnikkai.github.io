import LineOrnament from '../LineOrnament'
import ActivityPart from './ActivityPart'
import activity_list from '../../lists/activity_list.json'
import './activity_page.css'

export default function ActivitiesPage() {
    return (
        <div className='grid_block'>
            <h1>Activities</h1>
            <LineOrnament/>
            <div id='activity_grid' className='grid_page'>
                {activity_list.map((activity, ind) => <ActivityPart key={ind} activity={activity}/>)}
            </div>
        </div>
    )
}
