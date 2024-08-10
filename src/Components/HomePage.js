import React from 'react';
import Intro from './Intro';
import ShortExperience from './ShortSections/ShortExperience';
import ShortProjects from './ShortSections/ShortProjects';
import Contact from './Contact';

function HomePage() {
    return (
        <div className='homepage'>
            <Intro/>
            <ShortExperience/>
            <ShortProjects/>
            <Contact/>
        </div>
    )
}

export default HomePage;