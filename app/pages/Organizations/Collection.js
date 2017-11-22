import React from 'react';
import classNames from 'classnames';
import { extendObservable } from 'mobx';
import { inject, observer } from 'mobx-react';

import { Link } from 'react-router';

import buttons from 'styles/buttons.sass';

import stores from 'stores';
import Spinner from 'components/Spinner';
import Page from 'components/Page';

@inject('endpoint') @observer
class Collection extends React.PureComponent {
  constructor(props) {
    super(props);

    const { endpoint, params } = props;
    const { accountId } = params;

    extendObservable(this, {
      organizations: new stores.Organization(endpoint, `v1/${accountId}`),
    });
  }

  componentDidMount() {
    this.organizations.findAll();
  }

  render() {
    const { collection, isLoading } = this.organizations;

    const action =
      <Link href={`/accounts/${this.props.params.accountId}/organizations/new`}
            className={classNames('pure-button', buttons.base, buttons.action)}
         onClick={this.openModal}>
        New Organization
      </Link>;

    return (
      <Page.Actionable title='Organizations' action={action}>
        {collection.map(org =>
          <div key={org.id}>{org.name}</div>
        )}
      </Page.Actionable>
    );
  }
}

export default Collection;
