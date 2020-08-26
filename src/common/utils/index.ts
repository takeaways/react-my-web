import { keyframes } from 'styled-components';

export const headerFilter = (routes: { path: string; name: string }[]) => {
  return routes.map((item) => ({
    to: item.path,
    label: item.name,
  }));
};

export const setSelect = (selects: { name: string }[]) => {
  const obj: { [key: string]: string } = {};
  selects.forEach((item) => {
    obj[item.name] = '';
  });
  return obj;
};

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!);
};
