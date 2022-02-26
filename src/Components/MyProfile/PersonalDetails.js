import React, { useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import './PersonalDetails.css';

const PersonalDetails = () => {
    const [currentTab, setCurrentTab] = useState(1);

    const tabHandler = (index) =>{
        setCurrentTab(index);
    }
    return ( 
        <div className='personal-details' >
          <div className='mp-left-container'>
            <p className={'tab ' + (currentTab === 1 ? 'tab-active' : 'tab-inactive')} onClick={() => tabHandler(1)} >Personal Information</p>
            <p className={'tab ' + (currentTab === 2 ? 'tab-active' : 'tab-inactive')} onClick={() => tabHandler(2)} >Educational Background</p>
            <p className={'tab ' + (currentTab === 3 ? 'tab-active' : 'tab-inactive')} onClick={() => tabHandler(3)} >Honors and Certificates</p>
            <p className={'tab ' + (currentTab === 4 ? 'tab-active' : 'tab-inactive')} onClick={() => tabHandler(4)} >Class Schedule</p>
          </div>
          <div className='mp-right-container'>
            {/* Personal Information */}
              <div className={'personal-information ' + (currentTab != 1 ? 'tab-content-inactive' : '')}>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Name:</p>
              <p className='text-profile info'>Jay Mark Baturiano Munda</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Contact Number:</p>
              <p className='text-profile info'>+639-56-056-1453</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Email Address:</p>
              <p className='text-profile info'>jaymarkmunda26@gmail.com</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Age:</p>
              <p className='text-profile info'>22 years old</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Gender:</p>
              <p className='text-profile info'>Male</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Birthday:</p>
              <p className='text-profile info'>April 26, 1999</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Address:</p>
              <p className='text-profile info'>Blk 21 Lot 16 Phase 1 B-H Brgy.Santol Balagtas, Bulacan</p>
              <div className='line-bottom'/>
            </div>

            {/* Educational Background */}
            <div className={'educational-background ' + (currentTab != 2 ? 'tab-content-inactive' : '')}>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> College:</p>
              <p className='text-profile info course'>"Bachelor of Science in Information Technology"</p>
              <p className='text-profile info'>STI College Balagtas (2018-present)</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Vocational Course:</p>
              <p className='text-profile info course'>"Computer Technician"</p>
              <p className='text-profile info'>ACCESS Computer College (2015-2017)</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> High School:</p>
              <p className='text-profile info'>Bunsuran National High School (2010-2014)</p>
              <div className='line-bottom'/>
              <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Elementary:</p>
              <p className='text-profile info'>Kapitbahayan Elementary School (2004-2010)</p>
              <div className='line-bottom'/>
            </div>

            {/* Honors and Certificates */}
            <div className={'honors-certs ' + (currentTab != 3 ? 'tab-content-inactive' : '')}>
                <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> 1.36 GWA (Dean's List)</p>
                <p className='text-profile info course'>3rd year 2nd sem</p>
                <p className='text-profile info'>STI College Balagtas</p>
                <div className='line-bottom'/>
                <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> 1.44 GWA (Dean's List)</p>
                <p className='text-profile info course'>3rd year 1st sem</p>
                <p className='text-profile info'>STI College Balagtas</p>
                <div className='line-bottom'/>
                <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> SAP Business One (Certificate)</p>
                <p className='text-profile info'>STI College Balagtas</p>
                <div className='line-bottom'/>
                <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Advance SAP (Certificate)</p>
                <p className='text-profile info'>STI College Balagtas</p>
                <div className='line-bottom'/>
                <p className='text-profile pi-header'><BsFillCircleFill className='dot'/> Data Encoder (OJT Certificate)</p>
                <p className='text-profile info'>RMES Globe Telecom</p>
                <div className='line-bottom'/>
            </div>
            
            {/* Class Schedule */}
            <div className={'schedule ' + (currentTab != 4 ? 'tab-content-inactive' : '')}>
            <p className='text-profile'>Weekly Schedule</p>
            <div className='calendar'>
                <p className='text-profile info days'>Monday</p>
                <p className='text-profile info days'>Wednesday</p>
                <p className='text-profile info days'>Friday</p>
                <p className='text-profile info days'>Saturday</p>
                <p className='text-profile info time'>1am to 3pm</p>
                <p className='text-profile info time'>1am to 3pm</p>
                <p className='text-profile info time'>1am to 3pm</p>
                <p className='text-profile info time'>1am to 3pm</p>
            </div>
            </div>
          </div>
      </div>
    );
}
 
export default PersonalDetails;