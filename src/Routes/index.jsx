import { createBrowserRoutes } from 'react-router-dom';
import { Home } from '../Containers/Home';

export const router = createBrowserRoutes([
  {
    path: '/',
    element: <Home />,
  },
]);
