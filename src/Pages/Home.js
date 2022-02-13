import React from 'react'
import { useNavigate } from 'react-router-dom'
import CodeIcon  from '../assets/code.png'
import MyPic from '../assets/jm.png'
import './Home.css'

function Home() {
  const navigate = useNavigate();

  return (
    <div className='home-container'>
      <div className='left-container'>
        <img className='code-img' src={CodeIcon} />
        <p>Hello there!</p>
        <h1 className='home-text animate-text'>I am J'mark</h1>
        <p>A <span>self taught web developer</span> passionate about creating and designing websites.</p>
        <p>I am currently looking for an internship required for my Bachelor's Degree in Information Technology.</p>
        <button className='button-hireme' onClick={() => navigate('/contact')} >Hire me</button>
      </div> 
      <div className='right-container'>
        <img className='my-pic' src={MyPic} />
      </div>
    </div>
  )
}

export default Home;