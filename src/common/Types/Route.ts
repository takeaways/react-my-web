export interface Route {
  path: string;
  name?: string;
  component: any;
  private?: boolean;
  routes?: any;
}
