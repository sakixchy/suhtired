import React from 'react'
import logo from '../assets/images/logo/logo.jpeg'
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
        <header>
        <div className={styles.logoContainer}>
            <img src={logo} alt="Suhtired" className={styles.logo}/>
            <h1 className={styles.siteName}>Suhtired</h1>
        </div>
            <nav>
                <ul>
                    <li><a href="#schedule"><FontAwesomeIcon icon={faClock} className={styles.icon} />
                    Schedule</a></li>
                    <li><a href="#content"><FontAwesomeIcon icon={faFolder} className={styles.icon} />
                    Content</a></li>
                    <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                    Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header