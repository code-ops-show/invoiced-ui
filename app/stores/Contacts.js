import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'Zack Siri', email: 'zack@codemy.net' },
    { id: 2, name: 'Savika', email: 'savika@example.com' },
    { id: 3, name: 'Chad', email: 'chad@example.com' },
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(
        c => c.id === parseInt(contactId, 10)
      )[0]
    );
  }
}

export default new Contacts();
