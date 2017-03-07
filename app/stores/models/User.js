import { observable, action } from 'mobx';
import { browserHistory } from 'react-router';

import Api from 'helpers/api';

class User {
  @observable isLoading = false;

  @action setIsLoading(status) { 
    this.isLoading = status;
  }

  async createSession(email, password) {
    this.setIsLoading(true);

    const response = await Api.post(
      '/sessions',
      { email, password }
    );

    const status = await response.status;

    if (status == 201) {
      const body = await response.json();
      const { user } = body.data;

      localStorage.setItem('token', user.authentication_token);
      localStorage.setItem('email', user.email);

      this.setIsLoading(false);

      browserHistory.push('/');
    } else {
      console.log('error');
    }
  }
}

export default new User();