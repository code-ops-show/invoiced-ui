import React from 'react';
import css from 'classnames';
import styles from './index.sass';

class Alert extends React.PureComponent {
  dismiss = (e) => {
    e.preventDefault();

    this.props.onDismiss();
  }

  render() {
    const { message } = this.props;

    if (!message) return null;

    return (
      <div className={css('animated slideInDown', styles.alert, styles[message.type])}>
        <a href='#' onClick={this.dismiss}>
        {Object.keys(message.body).map(field =>
          <dl key={field} className={styles.message}>
            <dt>{field}</dt>
            {message.body[field].map(error =>
              <dd key={error}>{error}</dd>
            )}
          </dl>
        )}
        </a>
      </div>
    );
  }
}

export default Alert;
