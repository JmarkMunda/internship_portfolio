import React from 'react';
import MyPic from '../../assets/jm.png';

const Myself = () => {
    return ( 
        <div className='about-me'>
            <div className='my-pic-container'>
                <img className='my-pic' src={MyPic} />
            </div>
            <p className='text-about-me'>"I've been dreaming of becoming a web developer ever since, but I know for sure that it takes a lot of effort, time, and experience to reach that. I only have basic knowledge about HTML, CSS, Javascript, and React. I will be grateful to have mentors that will teach me to become better, help me improve my skills and guide me through the path I've chosen..."</p>
        </div>
     );
}
 
export default Myself;