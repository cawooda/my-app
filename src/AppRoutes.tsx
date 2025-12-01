import { createBrowserRouter } from 'react-router';

import ContactPage from './pages/ContactPage';
import ContactForm from './forms/ContactForm';
import HomePage from './pages/HomePage';

const appRoutes = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  {
    path: '/contacts',
    element: <ContactPage />,
    children: [
      {
        path: 'new',
        element: <ContactForm />,
      },
    ],
  },
  { path: '*', element: <h1>404 Sorry we couldnt find it</h1> },
]);

export default appRoutes;
