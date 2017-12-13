import React from 'react';
import c from 'classnames';
import styles from './Contact.sass';

import { Link } from 'react-router';

class Contact extends React.PureComponent {
  render() {
    const { name, params, id } = this.props;

    return (
      <div className={c('pure-u-1-3', styles.contact)}>
        <div className='pure-g'>
          <div className='pure-u-1-3'>
            <Link to={`/accounts/${params.accountId}/organizations/${id}`}>{name}</Link>
          </div>
          <div className='pure-u-1-3'></div>
          <div className='pure-u-1-3'>

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
