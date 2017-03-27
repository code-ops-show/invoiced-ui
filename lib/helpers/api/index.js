const endpoint = 'http://localhost:3000/v1';

const headers = () => {
  const h = new Headers();

  h.append('Content-Type', 'application/json');

  const session = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
  };

  if (session.email && session.token) {
    h.append('X-User-Email', session.email);
    h.append('X-User-Token', session.token);
  }

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
  delete(path) {
    return request('DELETE', path);
  },
};

export default Api;
