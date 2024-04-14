/* eslint-disable no-param-reassign */
import { FC } from 'react';
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import { authRoutes, dashboardRoutes } from './routesIndex';
import { RoutesTypes } from '../@types/routes.types';
import { httpwithtoken } from '../services/https';

interface AppRoutesProps {}

const ModifiedMainLayout: FC = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const ModifiedAuthLayout: FC = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

httpwithtoken.interceptors.request.use(
  async (config) => {
    // Get the token from AsyncStorage
    const token = await localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AppRoutes: FC<AppRoutesProps> = () => {
  const isConnected = true;
  const role = 'admin';
  const router = createBrowserRouter(
    createRoutesFromElements(
      isConnected ? (
        <Route path="/" element={<ModifiedMainLayout />}>
          {Object.values(dashboardRoutes).map((route: RoutesTypes) =>
            route?.allowedRoles?.includes(role ?? 'empty') ? (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ) : null
          )}
        </Route>
      ) : (
        <>
          <Route path="/" element={<ModifiedAuthLayout />}>
            {Object.values(authRoutes).map((route: RoutesTypes) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
          <Route path="/" element={<ModifiedMainLayout />}>
            {Object.values(dashboardRoutes).map((route: RoutesTypes) =>
              route?.allowedRoles?.includes('empty') ? (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ) : null
            )}
          </Route>
        </>
      )
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRoutes;
