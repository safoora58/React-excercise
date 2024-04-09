import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='nav'>
            <div className="logo">
                <h3>Shapely Demo</h3>
            </div>
            <ul className='navul'>
                <li className='navli'>HOME</li>
                <li className='navli'>BLOG</li>
                <li className='navli'>PORTFOLIO</li>
                <li className='navli'>ABOUT THE TESTS</li>
                <li className='navli'>LEVEL1</li>
                <li className='navli'>SHOP</li>
            </ul>
            <div> 
                <img src="images/icon search.png" />
            </div>
        </div>
    )
}
