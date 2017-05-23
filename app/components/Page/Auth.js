import React from 'react';

import styles from './Auth.sass';

class Auth extends React.PureComponent {
  render() { 
    return (
      <div className={styles.authPageWrapper}>
        <div className={styles.title}>
          <h1>{this.props.title}</h1>
        </div>
        <div className={styles.formWrapper}>
          {this.props.children}
        </div>
        <div className={styles.extras}>
          {this.props.extras || null}
        </div>
      </div>
    );
  }
}

export default Auth;
