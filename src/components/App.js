import React from 'react';

import Profile from './Profile/Profile';

import user from '../user.json';
import users from '../users.json';

import styles from '../style/App.module.css';

function App() {
   return (
      <div className={styles.container}>
         <Profile user={user} />
      </div>
   );
}

export default App;
