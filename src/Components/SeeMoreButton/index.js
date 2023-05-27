import {Link} from 'react-router-dom';
import './SeeMoreButton.css'

export default function SeeMoreButton({to}) {
    return (
        <Link id='see_more_button' to={to}>See more detail</Link>
    )
}