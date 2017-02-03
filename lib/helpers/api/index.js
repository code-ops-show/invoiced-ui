const endpoint = 'http://localhost:3000/v1';

const headers = () => {
  const h = new Headers();

  h.append('Content-Type', 'application/json');

  return h;
};

const request = (method, path, body) => {
  const url = `${endpoint}${path}`;
  const options = { method, headers: headers() };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(new Request(url, options));
};


const Api = {
  get(path) {
    return request('GET', path);
  },
  post(path, data = {}) {
    return request('POST', path, data);
  },
};

export default Api;
