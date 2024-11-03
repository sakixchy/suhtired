import React from 'react'
import styles from '../styles/ContentGrid.module.css'

function ContentGrid() {
  return (
    <div>
        <div className={styles.contentHeading}>
            <h3 className={styles.about}>About Me</h3>
            <h2>Meet Suhtired</h2>
            <h3 className={styles.gamingJourney}>Gaming Journey</h3>
        </div>
        <div className={styles.contentText}>
            <p>About Section</p>
            <p>Image Slider Goes Here</p>
            <p>Gaming Journey</p>
        </div>
    </div>
  )
}

export default ContentGrid