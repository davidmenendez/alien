const api = (route, opts = {}) => {
  const token = localStorage.getItem('alienToken');
  const fetchOpts = {
    ...opts,
    headers: {},
  };

  fetchOpts.headers.authorization = `Bearer ${token}`;

  if (fetchOpts.method === 'PUT' || opts.method === 'POST') {
    fetchOpts.headers['Content-Type'] = 'application/json';
  }

  return fetch(`/api/${route}`, fetchOpts);
}

export default api;
