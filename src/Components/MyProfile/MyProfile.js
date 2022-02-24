import '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './MyProfile.css';

import Myself from './Myself';
import PersonalDetails from './PersonalDetails';


function MyProfile() {


  return (
    <div className='myprofile-section' id='myprofile'>
      <Myself />
      <div className='sections-header-container'>
        <div className='header-line' />
        <h1 className='sections-main-header'>Personal Details</h1>
        <div className='header-line' />
      </div>
      <PersonalDetails />
    </div>
  )
}

export default MyProfile;