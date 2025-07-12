import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { IndexPage } from 'pages/IndexPage';
import { TaskPage } from 'pages/TaskPage';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/task/:id',
    element: <TaskPage />,
  },
];

export const AppRouter: FC = () => useRoutes(routeConfig);
