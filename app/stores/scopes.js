const readable = {
  find() { this.findBy(); },
  findBy(parameters) {
    this.setIsLoading(true);
    this.clearSelected();
    this.call({ parameters, type: 'get' }, {
      200: (body) => { this.setSelected(body.data); },
    });
  },
  findAll(parameters) {
    this.setIsLoading(true);
    this.clearCollection();
    this.call({ parameters, type: 'get' }, {
      200: (body) => { this.setCollection(body.data); },
    });
  },
};

export default { readable };
