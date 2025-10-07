import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../Containers/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
