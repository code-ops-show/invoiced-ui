import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Guest from './Guest';
import Member from './Member';
import styles from './index.sass';


@inject('user') @observer
class Application extends React.Component {
  componentWillMount() {
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
        <div className={classNames('pure-menu', 'pure-menu-horizontal', 'pure-menu-fixed', styles.mainNav)}>
          <Link to='/' className={classNames('pure-menu-heading', styles.heading)}>Invoiced</Link>
          {this.guestOrMember()}
        </div>
        {this.props.children}
      </div>
    );
  }
}
 

export default { Application };
