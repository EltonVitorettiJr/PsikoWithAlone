import { createBrowserRouter } from 'react-router-dom';
import { Home, Arts } from '../Containers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/arts',
    element: <Arts></Arts>,
  },
]);
