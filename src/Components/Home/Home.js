import { BsCodeSlash } from 'react-icons/bs'
import React from 'react';
import MyPdf from '../../assets/Internship_Resume.pdf';
import './Home.css';
import SideIcons from '../SideIcons';
import { IoIosArrowUp } from 'react-icons/io';

function Home() {

  window.addEventListener("scroll", function(){
    const scrollBtn = document.querySelector(".btn-scroll");
    scrollBtn.classList.toggle("visible", window.scrollY > 400);
    // console.log(window.scrollY);
  });

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div id='home'>
      <div className='home-section'>
        <div className='left-container'>
          <BsCodeSlash className='code-img'/>
          <p className='home-subtext'>Hello there!</p>
          <h1 className='home-text animate-text'>I am J'mark</h1>
          <p className='home-subtext'>A <span>self taught web developer</span> passionate about creating and designing websites.</p>
          <p className='home-subtext'>I am currently looking for an internship required for my Bachelor's Degree in Information Technology.</p>
          <a href='#contact'>
            <button className='btn-hireme' >Hire me</button>
          </a>       
          <a href={MyPdf} download='myfile.pdf'>
            <button className='btn-resume'>Get Resume</button>
          </a>
        </div> 
        <div className='right-container'>
          <SideIcons />
        </div>
      </div>
        <button className='btn-scroll' onClick={scrollToTop}><IoIosArrowUp /></button>
    </div>
  
  )
}

export default Home;