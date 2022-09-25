import { $AuthHostInstance, $HostInstance } from './api';
// eslint-disable-next-line camelcase
export const create = async (type)=>{
  const { data } = await $AuthHostInstance
      .post('type', { type });
  return data;
};

export const getAll = async ()=>{
  const { data } = await $HostInstance.get('subtype');
  return data;
};


