import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className='nav-container'>
            <nav>
                <h1 className='nav-header'>JM</h1>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile' className='link'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/skills' className='link'>Skills</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                </ul>     
            </nav>
        </div>
     );
}
 
export default Navbar;