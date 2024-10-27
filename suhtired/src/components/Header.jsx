import React from 'react'
import logo from '../assets/images/logo/logo.jpeg'
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div>
        <header>
            <img src={logo} alt="Suhtired" className={styles.logo}/>
            <h1>Suhtired</h1>
            <nav>
                <ul>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#content">Content</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header