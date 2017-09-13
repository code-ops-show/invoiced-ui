import React from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';

import Page from 'components/Page';
import buttons from 'styles/buttons.sass';

import New from './New';
import Account from './Account';

import styles from './Collection.sass';

@inject('account', 'settings') @observer
class Collection extends React.PureComponent {
  openModal = (e) => {
    e.preventDefault();

    const { settings } = this.props;

    settings.layout.modal.setContent(
      <New />
    );
    settings.layout.modal.open();
  }

  render() {
    const { account } = this.props;
    const { collection, isLoading } = account;

    if (isLoading) return null;

    const action =
      <a href='#' className={classNames('pure-button', buttons.base, buttons.action)}
         onClick={this.openModal}>
        New Account
      </a>;

    return (
      <Page.Actionable title='Dashboard' action={action}>
        <div className={styles.content}>
          {collection.map((acc) =>
            <Account key={acc.id} {...acc} />
          )}
        </div>
      </Page.Actionable>
    );
  }
}

export default Collection;
