import { $AuthHostInstance, $HostInstance } from './api';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
export const registration = async (email, password)=>{
  const { data } = await $HostInstance
      .post('user/registration', { email, password, role: 'ADMIN' });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password)=>{
  const { data } = await $HostInstance
      .post('user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async ()=>{
  const { data } = await $AuthHostInstance.get('user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
