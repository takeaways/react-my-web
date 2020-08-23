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
