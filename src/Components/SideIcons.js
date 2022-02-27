import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';
import './SideIcons.css';

function SideIcons() {
  return (
    <>
        <div className='bottom-icons-container'>
            <div className='bottom-line-left' />
            <a href='https://www.facebook.com/jaymark.munda.26/' target="_blank" >
                <FiFacebook className='bottom-icons' />
            </a>
            <a href='https://twitter.com/Jmhtdg' target="_blank">
                <FiTwitter className='bottom-icons'/>
            </a>
            <a href='https://www.instagram.com/jmbaturiano/' target="_blank">
                <FiInstagram className='bottom-icons'/>
            </a>
            <a href='https://github.com/JmarkMunda' target="_blank">
                <FiGithub className='bottom-icons'/>
            </a> 
            <div className='bottom-line-right' />
        </div>
    </>
  )
}

export default SideIcons