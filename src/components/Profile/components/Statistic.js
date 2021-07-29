import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../style/Statistic.module.css';

import StatisticList from './StatisticList';

function Statistic({ user }) {
   return (
      <ul className={styles.stats}>
         <li>
            <StatisticList label="Followers" quantity={user.stats.followers} />
         </li>
         <li>
            <StatisticList label="Views" quantity={user.stats.views} />
         </li>
         <li>
            <StatisticList label="Likes" quantity={user.stats.likes} />
         </li>
      </ul>
   );
}

Statistic.propTypes = {
   user: PropTypes.object,
};

export default Statistic;
