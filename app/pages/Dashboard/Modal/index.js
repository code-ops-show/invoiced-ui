import React from 'react';
import classNames from 'classnames';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import styles from './index.sass';

@observer
class Modal extends React.PureComponent {
  @observable isOpen = false;

  @action open = (e) => {
    if (e) { e.preventDefault(); }

    this.isOpen = true;
  }

  @action close = (e) => {
    if (e) { e.preventDefault(); }

    this.isOpen = false;
  }

  render() {
    const overlayClasses = classNames(
      styles.overlay,
      { [`${styles.open} animated fadeIn`]: this.isOpen }
    );

    return (
      <div id='modal' className={overlayClasses}>
        <a href='#' onClick={this.close} className={styles.dismiss}>
          &times;
        </a>
      </div>
    );
  }
}

export default Modal;
