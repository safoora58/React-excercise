import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='containet-footer-main'>
            <div className="containet-footer">
                <p className='footer-p'>Theme by <span>Colorlib</span> Powered by <span>WordPress</span> </p>
                <ul id='socialmedia'>
                    <li className='footerli'>
                        <a href="https://facebook.com/colorlib">
                            <img src="/images/facebook.jpg" />
                        </a>
                    </li>
                    <li className='footerli'>
                        <a href="https://twitter.com/colorlib">
                            <img src="/images/twitter.jpg" />
                        </a>
                    </li>
                    <li className='footerli'>
                        <a href="https://www.linkedin.com/colorlib">
                            <img src="/images/linkedin.jpg" />
                        </a>
                    </li>
                    <li className='footerli'>
                        <a href="https://www.youtube.com/c/colorlib">
                            <img src="/images/youtube.jpg" />
                        </a>
                    </li>
                    <li className='footerli'>
                        <a href="https://instagram.com/colorlib">
                            <img src="/images/instagram.jpg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
