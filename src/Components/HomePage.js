import React from 'react';
import Intro from './Intro';
import ShortExperience from './ShortSections/ShortExperience';
import ShortActivities from './ShortSections/ShortActivities';
import ShortProjects from './ShortSections/ShortProjects';
import Contact from './Contact';

function HomePage() {
    return (
        <div className='homepage'>
            <Intro/>
            <ShortExperience/>
            <ShortActivities/>
            <ShortProjects/>
            <Contact/>
        </div>
    )
}

export default HomePage;