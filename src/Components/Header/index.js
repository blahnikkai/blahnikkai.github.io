import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './header.css'

function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div id='wordmark'>Blahnik.ai</div>
            <nav className='nav'>
                <ul className='nav_list'>
                    <li className='nav_item'>
                        <Link className='nav_link' to='/'>Home</Link>
                    </li>
                    <li className='nav_item'>
                        <Link className='nav_link' to='/experience'>Experience</Link>
                    </li>
                    <li className='nav_item'>
                        <Link className='nav_link' to='/projects'>Projects</Link>
                    </li>
                    <li className='nav_item'>
                        <Link className='nav_link' to='/activities'>Activities</Link>
                    </li>
                    <li className='nav_item' onClick={() => {navigate('/')}}>
                        <HashLink className='nav_link' to='/#contact'>Contact Me</HashLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;