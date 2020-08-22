export const headerFilter = (routes: { path: string; name: string }[]) => {
  return routes.map((item) => ({
    to: item.path,
    label: item.name,
  }));
};
