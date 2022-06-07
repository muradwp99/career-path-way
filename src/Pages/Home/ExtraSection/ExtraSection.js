import React from 'react';
import community from '../../../images/Community.jpg';
import './ExtraSection.css';

const ExtraSection = () => {
    return (
        <div className='extra-container'>
            <div className='extra-section'>
                <div>
                    <img className='extra-img' src={community} alt="" />
                </div>
                <div>
                    <h2>Team Communication</h2>
                    <p>When We Work as a team we need to think everything in clear that there will so many opinion around us. Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way. This concept is seen within the greater framework of a team, which is a group of interdependent individuals who work together towards a common goal</p>
                    <button className='service-button'>Be With Us</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;