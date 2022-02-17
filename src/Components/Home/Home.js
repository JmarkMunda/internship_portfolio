import React from 'react';
import CodeIcon  from '../../assets/code.png';
import MyPic from '../../assets/jm.png';
import MyPdf from '../../assets/sample.pdf';
import './Home.css';

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
          <img className='code-img' src={CodeIcon} />
          <p>Hello there!</p>
          <h1 className='home-text animate-text'>I am J'mark</h1>
          <p>A <span>self taught web developer</span> passionate about creating and designing websites.</p>
          <p>I am currently looking for an internship required for my Bachelor's Degree in Information Technology.</p>
          <button className='btn-hireme' >Hire me</button>
          <a href={MyPdf} download='myfile.pdf'>
            <button className='btn-resume'>Get Resume</button>
          </a>
        </div> 
        <div className='right-container'>
          <img className='my-pic' src={MyPic} />
        </div>
      </div>
        <button className='btn-scroll' onClick={scrollToTop}>🡡</button>
    </div>
  
  )
}

export default Home;