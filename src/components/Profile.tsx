import React from 'react';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Thomaz201.png" alt="Lucas Thomaz" />
      <div>
        <strong>Lucas Thomaz</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile;