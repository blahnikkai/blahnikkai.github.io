import React from 'react';
import Intro from './Intro';
import ShortExperience from './ShortExperience';
import ShortProjects from './ShortProjects';
import Contact from './Contact';

function HomePage() {
    return (
        <div className='homepage'>
            <Intro/>
            <ShortProjects/>
            <ShortExperience/>
            <Contact/>
        </div>
    )
}

export default HomePage;