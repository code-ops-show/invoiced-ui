import React from 'react';
import classNames from 'classnames';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import styles from './index.sass';

@observer
class Modal extends React.PureComponent {
  @observable isOpen = false;
  @observable closing = false;
  @observable content = null;

  @action open = (e) => {
    if (e) { e.preventDefault(); }

    this.isOpen = true;
    this.closing = false;
  }

  @action close = (e) => {
    if (e) { e.preventDefault(); }

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.closing = true;

    this.timer = setTimeout(() => {
      this.isOpen = false;
      this.content = null;
    }, 600);
  }

  @action setContent = (content) => {
    this.content = content;
  }

  render() {
    const overlayClasses = classNames(
      styles.overlay,
      {
        [styles.open]: this.isOpen,
        'animated fadeIn': this.isOpen,
        'animated fadeOut': this.closing,
      }
    );

    const contentClasses = classNames(
      styles.contentBox,
      {
        'animated zoomIn': this.isOpen,
        'animated zoomOut': this.closing,
      }
    );

    return (
      <div id='modal' className={overlayClasses}>
        <a href='#' onClick={this.close} className={styles.dismiss}>
          &times;
        </a>
        <div className={contentClasses}>
          {this.content || null}
        </div>
      </div>
    );
  }
}

export default Modal;
