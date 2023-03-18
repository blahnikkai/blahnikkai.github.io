import React from 'react';

import './contact.css';

function Contact() {
    return (
        <body id='contact'>
            <h1 class='contact_title'>Contact</h1>
            <div class='ornament'></div>
            <ul class='contact_lst'>
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
                    <a href='https://www.linkedin.com/in/kai-blahnik-61138a208/'>LinkedIn</a>
                </li>
            </ul>
        </body>
    )
}

export default Contact;