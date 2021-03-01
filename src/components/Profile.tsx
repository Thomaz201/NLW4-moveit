import React, { useContext } from 'react';
import { ChallengesContext } from '../hooks/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Thomaz201.png" alt="Lucas Thomaz" />
      <div>
        <strong>Lucas Thomaz</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
           Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile;