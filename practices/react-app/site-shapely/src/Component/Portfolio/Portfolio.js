import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div id='Portfolio'>
            <div className="Portfolio-main">
                <div className="Portfolio-container">
                    <h3 className='h3-Portfolio'>Portfolio Section</h3>
                    <p className='p-Portfolio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente voluptatum deleniti quasi in inventore quisquam, doloribus excepturi a, consectetur deserunt dolorum, veniam blanditiis eum aut maxime unde vero aliquid?</p>
                    <button id='see'>SEE IT IN ACTION</button>
                </div>
                <img className='Portfolio-img' src="/images/3.png" />
            </div>
        </div>
    )
}
