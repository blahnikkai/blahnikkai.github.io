import {Link} from 'react-router-dom';
import './SeeMoreButton.css'

export default function SeeMoreButton({to, txt}) {
    return (
        <Link id='see_more_button' to={to}>{txt}</Link>
    )
}