import React from 'react';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';

import Spinner from 'components/Spinner';

import buttons from 'styles/buttons.sass';

import styles from './New.sass';

@inject('account', 'settings') @observer
class New extends React.PureComponent {
  submitForm = (e) => {
    e.preventDefault();
    const { account, settings } = this.props;
    const { modal } = settings.layout;

    account.create({}, {
      account: {
        name: this.name.value,
        default_currency: this.default_currency.value,
        address: this.address.value,
        tax_payer_id: this.tax_payer_id.value,
        vat_rate: this.vat_rate.value,
      },
    }, {
      201: (response) => {
        account.appendToCollection(response.data.account);
        modal.close();
      },
    });
  }

  render() {
    const { isLoading } = this.props.account;

    if (isLoading) return <Spinner />;

    return (
      <div className={styles.wrapper}>
        <h1>Let's create an Account</h1>
        <form className={classNames(styles.form, 'pure-form', 'pure-form-stacked')}
              onSubmit={this.submitForm}>
          <fieldset>
            <label htmlFor='name'>Company Name</label>
            <input type='text' name='name' ref={node => this.name = node} className='pure-input-1' required/>

            <label htmlFor='default_currency'>Default Currency</label>
            <select name='default_currency' ref={node => this.default_currency = node} className='pure-input-1'>
              <option value='thb'>THB</option>
              <option value='usd'>USD</option>
              <option value='eur'>EUR</option>
            </select>

            <label htmlFor='address'>Address</label>
            <textarea name='address' ref={node => this.address = node} className='pure-input-1'></textarea>

            <div className='pure-u-1-2'>
              <label htmlFor='tax_payer_id'>Tax Payer ID</label>
              <input type='text' name='tax_payer_id' ref={node => this.tax_payer_id = node} className='pure-input-1' />
              <span className='pure-form-message'>
                EIN Number or VAT Number
              </span>
            </div>

            <div className='pure-u-1-2'>
              <div className='pure-u-1-3'></div>
              <div className='pure-u-2-3'>
                <label htmlFor='vat_rate'>Vat Rate %</label>
                <input type='text' name='vat_rate' ref={node => this.vat_rate = node} className='pure-input-1' placeholder='7.0' required/>
              </div>
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
