import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='nav'>
            <div className="logo">
                <h3>Shapely Demo</h3>
            </div>
            <ul>
                <li>HOME</li>
                <li>BLOG</li>
                <li>PORTFOLIO</li>
                <li>ABOUT THE TESTS</li>
                <li>LEVEL1</li>
                <li>SHOP</li>
            </ul>
            <div> 
                <img src="images/icon search.png" />
            </div>
        </div>
    )
}
