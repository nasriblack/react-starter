import { PlateformeRoutes } from '../@types/routes.types';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SigninScreen from '../pages/Signin';
import ROLE from './roles';

// eslint-disable-next-line import/prefer-default-export
export const dashboardRoutes: PlateformeRoutes = {
  dashboard: {
    key: 'dashboard-route',
    title: 'Dashboard',
    path: '/',
    enabled: true,
    component: Home,
    allowedRoles: [ROLE.admin, ROLE.manager, ROLE.temporary_admin],
  },
};

export const authRoutes: PlateformeRoutes = {
  // -------------Security Authentication-------------

  signIn: {
    key: 'signin-route',
    title: 'Log in',
    path: '/',
    enabled: true,
    component: SigninScreen,
  },
  pageNotFound: {
    key: 'page404-route',
    title: 'Page404',
    path: '*',
    enabled: true,
    component: NotFound,
  },
};
