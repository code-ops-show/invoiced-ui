import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import buttons from 'styles/buttons.sass';

import styles from './Account.sass';

class Account extends React.PureComponent {
  render() {
    const { name, slug } = this.props;

    return (
      <div className={styles.content}>
        <div className='pure-u-1-2'>
          <h3>{name}</h3>
        </div>
        <div className={classNames('pure-u-1-2 right', styles.actions)}>
          <Link to={`/accounts/${slug}/contacts`} className={classNames('pure-button', buttons.base, buttons.small)}>View</Link>
        </div>
      </div>
    );
  }
}

export default Account;
