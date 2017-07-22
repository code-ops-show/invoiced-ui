import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Guest from './Guest';
import Member from './Member';
import styles from './index.sass';


@inject('user') @observer
class Application extends React.Component {
  componentDidMount() {
    this.props.user.signIn();
  }

  guestOrMember() {
    const { user } = this.props;

    if (user.signedIn) {
      return (<Member />);
    }

    return (<Guest />);
  }


  render() {
    return (
      <div id='Layout' className={styles.layout}>
        <div className={classNames('pure-menu', 'pure-menu-horizontal', 'pure-g', styles.mainNav)}>
          <div className='pure-u-1-3'>
            <Link to='/' className={classNames('pure-menu-heading', styles.heading)}>Invoiced</Link>
          </div>
          <div className='pure-u-2-3'>
            {this.guestOrMember()}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
 

export default { Application };
