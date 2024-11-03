import React from 'react'
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faDiscord, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div>
      <footer>
        <div className={styles.socials}>
          <a href="https://discord.com/invite/qWHH4bs3Ze" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://instagram.com/suhtired" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://tiktok.com/@suhtired" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://x.com/suhtired" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        <p className={styles.copyright}>Copyright &copy; 2024 Suhtired</p>
      </footer>
      </div>
  )
}

export default Footer