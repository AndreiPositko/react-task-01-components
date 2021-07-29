import React from 'react';

import Description from './components/Description';
import Statistic from './components/Statistic';

import styles from '../../style/Profile.module.css';

function Profile({ user }) {
   return (
      <div className={styles.profile}>
         <Description
            avatar={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
         />
         <Statistic user={user} />
      </div>
   );
}

export default Profile;