import React, { useState } from 'react';
import './MyProfile.css';

function MyProfile() {

  const [currentTab, setCurrentTab] = useState(1);

  const tabHandler = (index) =>{
    setCurrentTab(index);
  }

  return (
    <div className='myprofile-section' id='myprofile'>
      <h1 className='header-profile'>My Profile</h1>
      <div className='personal-details' >
        <div className='mp-right-container'>
          <p className={'tab ' + (currentTab === 1 ? 'tab-active' : '')} onClick={() => tabHandler(1)} >Personal Information</p>
          <p className={'tab ' + (currentTab === 2 ? 'tab-active' : '')} onClick={() => tabHandler(2)} >Educational Background</p>
          <p className={'tab ' + (currentTab === 3 ? 'tab-active' : '')} onClick={() => tabHandler(3)} >Honors and Certificates</p>
          <p className={'tab ' + (currentTab === 4 ? 'tab-active' : '')} onClick={() => tabHandler(4)} >Class Schedule</p>
        </div>
        <div className='mp-left-container'>
          {/* Personal Information */}
            <div className={'personal-information ' + (currentTab != 1 ? 'tab-content-inactive' : '')}>
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

          {/* Educational Background */}
          <div className={'educational-background ' + (currentTab != 2 ? 'tab-content-inactive' : '')}>
            <p className='text-profile'>College:</p>
            <p className='text-profile info course'>"Bachelor of Science in Information Technology"</p>
            <p className='text-profile info'>STI College Balagtas (2018-present)</p>
            <div className='line-bottom'/>
            <p className='text-profile'>Vocational Course:</p>
            <p className='text-profile info course'>"Computer Technician"</p>
            <p className='text-profile info'>ACCESS Computer College (2015-2017)</p>
            <div className='line-bottom'/>
            <p className='text-profile'>High School:</p>
            <p className='text-profile info'>Bunsuran National High School (2010-2014)</p>
            <div className='line-bottom'/>
            <p className='text-profile'>Elementary:</p>
            <p className='text-profile info'>Kapitbahayan Elementary School (2004-2010)</p>
            <div className='line-bottom'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;