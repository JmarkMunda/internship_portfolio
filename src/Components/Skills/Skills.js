import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiReact } from 'react-icons/si';
import { RiArrowUpSFill } from 'react-icons/ri';

function Skills() {
  return (
    <div className='skills-section' id='skills'>
      <div className='sections-header-container'>
        <div className='header-line' />
        <h1 className='sections-main-header'>My Skills</h1>
        <div className='header-line' />
      </div>
      <div className='skills-container'>
        <div className='html-container'>
          <FaHtml5 className='skills-icon'/>
          <h4 className='skills-header'>HTML</h4>
          <div className='skills-level' >
            <div className='html-fill-level' >
              <p className='html-skill-percentage'>95%</p>
              <RiArrowUpSFill className='html-skill-pointer'/>
            </div>
          </div>
        </div>
        <div className='css-container'>
          <FaCss3 className='skills-icon'/>
          <h4 className='skills-header'>CSS</h4>
          <div className='skills-level' >
            <div className='css-fill-level' >
              <p className='css-skill-percentage'>80%</p>
              <RiArrowUpSFill className='css-skill-pointer'/>
            </div>
          </div>
        </div>
        <div className='js-container'>
          <SiJavascript className='skills-icon'/>
          <h4 className='skills-header'>Javascript</h4>
          <div className='skills-level' >
            <div className='js-fill-level' >
              <p className='js-skill-percentage'>40%</p>
              <RiArrowUpSFill className='js-skill-pointer'/>
            </div>
          </div>
        </div>
        <div className='react-container'>
          <SiReact className='skills-icon'/>
          <h4 className='skills-header'>React Js</h4>
          <div className='skills-level' >
            <div className='react-fill-level' >
              <p className='react-skill-percentage'>40%</p>
              <RiArrowUpSFill className='react-skill-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;