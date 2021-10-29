import { Endpoints, fetcher, Methods } from './fetcher';

export interface User {
  name: string;
}

export const createUser = (name: string) =>
  fetcher<User>(Endpoints.USER, Methods.POST, { name }).catch((data) => {
    if (data.name[0].includes('already exists')) {
      Promise.reject('User with this name already exists.');
    }
    return data;
  });
