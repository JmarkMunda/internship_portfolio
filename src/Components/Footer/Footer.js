import React from 'react'
import { FiFacebook, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-border'>
        <p className='footer-text'>Contact me directly</p>
        <p className='footer-text'>Email:  jaymarkmunda26@gmail.com</p>
        <p className='footer-text'>Contact Number: +639560561453</p>
      </div>
      <div>
        <a href='https://www.facebook.com/jaymark.munda.26/' target="_blank" >
            <FiFacebook className='footer-icons' />
        </a>
        <a href='https://twitter.com/Jmhtdg' target="_blank">
            <FiTwitter className='footer-icons'/>
        </a>
        <a href='https://www.instagram.com/jmbaturiano/' target="_blank">
            <FiInstagram className='footer-icons'/>
        </a>
        <a href='https://github.com/JmDumb' target="_blank">
            <FiGithub className='footer-icons'/>
        </a> 
        <p className='footer-text'>Created by: Jay Mark B. Munda</p>
        <p className='footer-text'>Copyright 2022</p>
      </div>
    </footer>
  )
}

export default Footer