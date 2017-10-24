import React from 'react';
import classNames from 'classnames';
import { withRouter, Link } from 'react-router';

import styles from './index.sass';

@withRouter
class Navigation extends React.PureComponent {
  render() {
    const { params } = this.props;

    if (params.accountId === undefined)
      return null;

    return (
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>
          <Link to={`/accounts/${params.accountId}/organizations`}
                className={classNames('pure-menu-link', styles.links)} 
                activeClassName={styles.active}>Organizations</Link>
        </li>
        <li className='pure-menu-item'>
          <Link to={`/accounts/${params.accountId}/contacts`}
                className={classNames('pure-menu-link', styles.links)} 
                activeClassName={styles.active}>Contacts</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
