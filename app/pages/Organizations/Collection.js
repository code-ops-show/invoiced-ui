import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router';

import buttons from 'styles/buttons.sass';

import Spinner from 'components/Spinner';
import Page from 'components/Page';

class Collection extends React.PureComponent {
  render() {
    const action =
      <Link href={`/accounts/${this.props.params.accountId}/organizations/new`}
            className={classNames('pure-button', buttons.base, buttons.action)}
         onClick={this.openModal}>
        New Organization
      </Link>;

    return (
      <Page.Actionable title='Organizations' action={action}>
      </Page.Actionable>
    );
  }
}

export default Collection;
