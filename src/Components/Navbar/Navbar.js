import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.css';

const Navbar = () => {

    window.addEventListener("scroll", function(){
        const navBar = document.querySelector("nav");
        navBar.classList.toggle("nav-scrolled", window.scrollY > 0);
    })

    return ( 
        <div className='nav-container'>
            <nav>
                <h1 className='nav-header'>JM</h1>
                <ul>
                    <li>
                        <a href='#myprofile' className='inactive'>Profile</a>
                        {/* <NavLink to='profile' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Profile</NavLink> */}
                    </li>
                    <li>
                        <a href='#skills' className='inactive'>Skills</a>
                        {/* <NavLink to='skills' className={({ isActive }) => isActive ? 'active' : 'inactive'} >Skills</NavLink> */}
                    </li>
                    <li>
                        <a href='#knowledge' className='inactive'>Knowledge</a>
                        {/* <NavLink to='/' className={(navData) => navData.isActive ? 'active' : 'inactive' }>Home</NavLink> */}
                    </li>
                    <li>
                        <a href='#contact' className='inactive'>Contact</a>
                        {/* <NavLink to='contact' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Contact</NavLink> */}
                    </li>
                </ul>     
            </nav>
        </div>
     );
}
 
export default Navbar;