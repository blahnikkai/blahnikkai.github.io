import LineOrnament from '../LineOrnament';
import './contact.css';

export default function Contact() {
    return (
        <div id='contact'>
            <h1 className='contact_title'>Contact</h1>
            <LineOrnament/>
            <ul className='contact_lst'>
                <li>(786)-612-2537</li>
                <li className='clickable_item'>
                    <a href='mailto: blahnikkai@gmail.com'>blahnikkai@gmail.com</a>
                </li>
                <li className='clickable_item'>
                    <a href='mailto: blahnikkai@ufl.edu'>blahnikkai@ufl.edu</a>
                </li>
                <li className='clickable_item'>
                    <a href='https://www.github.com/blahnikkai'>Github</a>
                </li>
                <li className='clickable_item'>
                    <a href='https://www.linkedin.com/in/blahnikkai/'>LinkedIn</a>
                </li>
                <li className='clickable_item'>
                    <a href='https://www.youtube.com/@KaiBlahnik'>YouTube</a>
                </li>
            </ul>
        </div>
    )
}