import React from 'react';
import './MyProfile.css';

function MyProfile() {
  return (
    <div className='myprofile-section' id='myprofile'>
      <h1 className='header-profile'>My Profile</h1>
      <div className='personal-details'>
        <div className='mp-right-container'>
          <p className='text-profile'>Personal Information</p>
          <p className='text-profile'>Educational Background</p>
          <p className='text-profile'>Work Experience</p>
          <p className='text-profile'>Honors and Certificates</p>
        </div>
        <div className='mp-left-container'>
          <p className='text-profile'>Name:</p>
          <p className='text-profile info'>Jay Mark Baturiano Munda</p>
          <div className='line-bottom'/>
          <p className='text-profile'>Contact Number:</p>
          <p className='text-profile info'>+639-56-056-1453</p>
          <div className='line-bottom'/>
          <p className='text-profile'>Email Address:</p>
          <p className='text-profile info'>jaymarkmunda26@gmail.com</p>
          <div className='line-bottom'/>
          <p className='text-profile'>Age:</p>
          <p className='text-profile info'>22 years old</p>
          <div className='line-bottom'/>
          <p className='text-profile'>Gender:</p>
          <p className='text-profile info'>Male</p>
          <div className='line-bottom'/>
          <p className='text-profile'>Birthday:</p>
          <p className='text-profile info'>April 26, 1999</p>
          <div className='line-bottom'/>
          <p className='text-profile'>Address:</p>
          <p className='text-profile info'>Blk 21 Lot 16 Phase 1 B-H Brgy.Santol Balagtas, Bulacan</p>
          <div className='line-bottom'/>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;