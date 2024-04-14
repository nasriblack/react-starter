export type RoutesTypes = {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: React.ComponentClass;
  allowedRoles?: string[];
};

export type PlateformeRoutes = {
  [key: string]: RoutesTypes;
};
