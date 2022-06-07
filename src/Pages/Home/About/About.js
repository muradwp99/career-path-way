import React from 'react';
import murad from '../../../images/murad.png'
import './About.css'
const About = () => {
    return (
        <div className='about-container m-auto'>
            <img className='About-pic' src={murad} alt="" />
            <h2 style={{ 'color': '#86C232' }}>Md Muradujjaman</h2>
            <h3>Age: 23</h3>
            <p>Most of the people target to work so hard that no one ever could to get to the goal but there is where I comes in I intend to do work in technical way so that it would finish perfectly without any kinds of rush. I mostly focused on how to finish the work fast and precisely not the how long I will finish or something else. I note down every point so that I can be planned.

                There is another point about me is special I decide to not take any Plan B where I can finish in plan A if I put and options for me my mind will not dedicated or concentrate on the job as it's needed if we make our mindset  in one direction in one way mind will work as a do or die situation to complete the project. Thank you
            </p>


        </div>
    );
};

export default About;