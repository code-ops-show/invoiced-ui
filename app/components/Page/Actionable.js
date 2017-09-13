import React from 'react';
import classNames from 'classnames';

import styles from './Actionable.sass';

class Actionable extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={classNames('pure-menu pure-menu-horizontal pure-g', styles.actionBar)}>
          <div className='pure-u-1-3'>{this.props.back || null}</div>
          <div className='pure-u-1-3 center'>
            <h1 className={styles.actionTitle}>{this.props.title || null}</h1>
          </div>
          <div className='pure-u-1-3 right'>
            {this.props.action || null}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Actionable;
