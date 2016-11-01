import { observable } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'Zack Siri', email: 'zack@codemy.net' },
    { id: 2, name: 'Savika', email: 'savika@example.com' },
    { id: 3, name: 'Chad', email: 'chad@example.com' },
  ];
}

export default new Contacts();
