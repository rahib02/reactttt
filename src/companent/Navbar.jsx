import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='fixed'>
            <div className='navbar'>
                <div className='boost'><a>Start Bootstrap</a></div>
                <div>
                    <ul className='ul'>
                        <li className='li'><a>About</a></li>
                        <li className='li'><a>Services</a></li>
                        <li className='li'><a>Portfolio</a></li>
                        <li className='li'><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
