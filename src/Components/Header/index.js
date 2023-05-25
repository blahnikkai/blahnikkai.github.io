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
            <nav class='nav'>
                <u1 class='nav_list'>
                    <li class='nav_item'>
                        <Link class='nav_link' to='/'>Home</Link>
                    </li>
                    <li class='nav_item'>
                        <Link class='nav_link' to='/projects'>Projects</Link>
                    </li>
                    <li class='nav_item'>
                        <Link class='nav_link' to='/experience'>Experience</Link>
                    </li>
                    <li class='nav_item' onClick={() => {navigate('/')}}>
                        <HashLink class='nav_link' to='/#contact'>Contact Me</HashLink>
                    </li>
                </u1>
            </nav>
        </header>
    )
}

export default Header;