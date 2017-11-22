import React from 'react';
import classNames from 'classnames';
import { extendObservable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { browserHistory } from 'react-router';

import Alert from 'components/Alert';

import stores from 'stores';
import buttons from 'styles/buttons.sass';
import styles from './New.sass';

@inject('endpoint') @observer
class New extends React.PureComponent {
  constructor(props) {
    super(props);

    const { endpoint, params } = props;
    const { accountId } = params;

    extendObservable(this, {
      organizations: new stores.Organization(endpoint, `v1/${accountId}`),
    });
  }

  submitForm = (e) => {
    e.preventDefault();

    const { accountId } = this.props.params;

    this.organizations.create({}, {
      organization: {
        name: this.name.value,
        address: this.address.value,
        tax_payer_number: this.tax_payer_number.value,
      },
    }, {
      201: (response) => {
        browserHistory.push(`/accounts/${accountId}/organizations`);
      },
      422: (response) => {
        this.organizations.setMessage({
          body: response.errors,
          type: 'error',
        });
      },
    });
  }

  render() {
    const { message } = this.organizations;

    return (
      <div>
        <Alert message={message} onDismiss={this.organizations.clearMessage} />
        <form className={classNames(styles.form, 'pure-form', 'pure-form-stacked')}
              onSubmit={this.submitForm}>
          <fieldset>
            <label htmlFor='name'>Organization Name</label>
            <input type='text' name='name' ref={node => this.name = node} className='pure-input-1' required/>

            <label htmlFor='address'>Address</label>
            <textarea name='address' ref={node => this.address = node} className='pure-input-1'></textarea>

            <div className='pure-u-1-2'>
              <label htmlFor='tax_payer_number'>Tax Payer ID</label>
              <input type='text' name='tax_payer_number' ref={node => this.tax_payer_number = node} className='pure-input-1' />
              <span className='pure-form-message'>
                EIN Number or VAT Number
              </span>
            </div>

            <button className={classNames('pure-button', buttons.base, 'pure-input-1')}>
              Create
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default New;
