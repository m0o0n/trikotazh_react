import * as axios from 'axios';

const $HostInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

const $AuthHostInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

const authInterceptor = config =>{
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$AuthHostInstance.interceptors.request.use(authInterceptor);

export {
  $AuthHostInstance,
  $HostInstance,
};
