import React from 'react'
import img from '../../images/favicon.ico'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <h3>Designed & Developed by Jacob Leonhardt</h3>
            <span>
                <a href="https://jacobleonhardt.github.io/" target="_blank"><img src={img}></img></a>
                <a href="https://www.linkedin.com/in/jacob-leonhardt-b19067ba/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/jacobleonhardt" target="_blank"><i class="fab fa-github"></i></a>
            </span>
        </footer>
    )
}

export default Footer
