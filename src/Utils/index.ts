export function filterRoutes(routes: any): { path: string; label: string }[] {
  return routes.map((item: any) => ({
    path: item.path,
    label: item.label,
  }))
}
