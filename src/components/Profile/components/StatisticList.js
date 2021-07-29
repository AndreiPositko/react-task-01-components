import React from 'react';

import styles from '../../../style/Statistic.module.css';

function StatisticList({ label, quantity }) {
   return (
      <>
         <span className={styles.label}>{label}</span>
         <span className={styles.quantity}>{quantity}</span>
      </>
   );
}

export default StatisticList;
