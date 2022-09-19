import { $AuthHostInstance, $HostInstance } from './api';
// eslint-disable-next-line camelcase
export const createType = async (type)=>{
  const { data } = await $AuthHostInstance
      .post('type', { type });
  return data;
};

export const getAllTypes = async ()=>{
  const { data } = await $HostInstance.get('type');
  return data;
};


