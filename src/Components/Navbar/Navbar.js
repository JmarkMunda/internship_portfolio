import React, { useState, useRef } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    window.addEventListener("scroll", function(){
        const navBar = document.querySelector("nav");
        navBar.classList.toggle("nav-scrolled", window.scrollY > 0);
    })

    const navMenu = () =>{ setActiveMenu(!activeMenu) }

    const closeMenu = () =>{ activeMenu && setActiveMenu(false) }

    return ( 
        <div className='nav-container'>
            <nav>
                <h1 className='nav-header'>JM</h1>
                <a href='#' className='menu-btn'><GiHamburgerMenu className='menu-icon' onClick={navMenu} /></a>
                <ul className={!activeMenu ? 'inactive-menu' : ''}>   
                    <li>
                        <a href='#myprofile' className='inactive' onClick={closeMenu}>Profile</a>
                        {/* <NavLink to='profile' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Profile</NavLink> */}
                    </li>
                    <li>
                        <a href='#skills' className='inactive' onClick={closeMenu}>Skills</a>
                        {/* <NavLink to='skills' className={({ isActive }) => isActive ? 'active' : 'inactive'} >Skills</NavLink> */}
                    </li>
                    <li>
                        <a href='#knowledge' className='inactive' onClick={closeMenu}>Knowledge</a>
                        {/* <NavLink to='/' className={(navData) => navData.isActive ? 'active' : 'inactive' }>Home</NavLink> */}
                    </li>
                    <li>
                        <a href='#contact' className='inactive' onClick={closeMenu}>Contact</a>
                        {/* <NavLink to='contact' className={({ isActive }) => isActive ? 'active' : 'inactive'}>Contact</NavLink> */}
                    </li>
                </ul>     
            </nav>
        </div>
     );
}
 
export default Navbar;