import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../style/Statistic.module.css';

function StatisticList({ label, quantity }) {
   return (
      <>
         <span className={styles.label}>{label}</span>
         <span className={styles.quantity}>{quantity}</span>
      </>
   );
}

StatisticList.propTypes = {
   label: PropTypes.string.isRequired,
   quantity: PropTypes.number.isRequired,
};

export default StatisticList;
