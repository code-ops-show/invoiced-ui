import { observable, action } from 'mobx';

import Api from 'helpers/api';

class Contacts {
  path = '/contacts'
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = false;
    const response = await Api.get(this.path);
    const status = await response.status;

    if (status === 200) {
      this.all = await response.json();
    }
  }

  @action async add(data) {
    const response = await Api.post(this.path, data);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(
        c => c.id === parseInt(contactId, 10)
      )[0]
    );
  }

  @action remove(contactId) {
    const existing = this.all;
    this.all = existing.filter(
      c => c.id !== contactId
    );
  }
}

export default new Contacts();
