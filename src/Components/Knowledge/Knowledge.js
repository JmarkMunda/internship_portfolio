import React from 'react';
import './Knowledge.css';
import { SiAndroidstudio, SiUnity, SiFirebase } from 'react-icons/si';
import { FaGithub, FaGit } from 'react-icons/fa';
import Slider from './Slider';
import { sliderData } from './sliderData';
import AboutMe from './AboutMe';


function Knowledge() {
  return (
    <div className='knowledge-section' id='knowledge'>
      <div className='sections-header-container'>
        <div className='header-line' />
        <h1 className='sections-main-header'>Knowledge</h1>
        <div className='header-line' />
      </div>
      {/* Icons */}
      <div className='knowledge-container'>
        <div className='knowledge-icons-container'>
          <SiAndroidstudio className='knowledge-icons as-icon'/>
          <FaGit className='knowledge-icons git-icon'/>
          <SiUnity className='knowledge-icons unity-icon'/>
          <FaGithub className='knowledge-icons gh-icon'/>
          <SiFirebase className='knowledge-icons vs-icon'/>
        </div>
        {/* About me */}
        <div className='message-container'>
          <div className='knowledge-message'>
            {/* <div className='message-cover' /> */}
            <AboutMe name={"Jay Mark B. Munda"}/>
          </div>
          <Slider slides={sliderData}/>
        </div>
      </div>
    </div>
  )
}

export default Knowledge;