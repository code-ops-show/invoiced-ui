import React from 'react';
import { inject, observer } from 'mobx-react';
import Page from 'components/Page';

import stores from 'stores';


@inject('endpoint') @observer
class Show extends React.PureComponent {
  constructor(props) {
    super(props);

    const { endpoint, params } = props;
    const { accountId } = params;

    this.organizations = new stores.Organization(endpoint, `v1/${accountId}`);
  }

  componentDidMount() {
    const { organizationId } = this.props.params;
    this.organizations.findBy({ id: organizationId });
  }

  render() {
    const { selected, isLoading } = this.organizations;
    const { organization } = selected;

    if (isLoading || !organization) return null;

    return (
      <Page.Actionable title={organization.name}>
        Show
      </Page.Actionable>
    );
  }
}

export default Show;
