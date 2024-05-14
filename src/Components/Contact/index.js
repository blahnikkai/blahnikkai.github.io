import LineOrnament from '../LineOrnament';
import './contact.css';

export default function Contact() {
    return (
        <div id='contact'>
            <h1 className='contact_title'>Contact</h1>
            <LineOrnament/>
            <ul className='contact_lst'>
                <li>blahnikkai@gmail.com</li>
                <li>blahnikkai@ufl.edu</li>
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