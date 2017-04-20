import React from 'react';

import styles from './index.sass';
import spinner from './puff.svg';

const Spinner = props =>
  <div className={styles.spinner}>
    <img src={spinner} />
  </div>;

export default Spinner;
