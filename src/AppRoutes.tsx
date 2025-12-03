import { createBrowserRouter } from 'react-router';

import ContactForm from './forms/ContactForm';
import ContactDisplay from './components/ContactDisplay';
import { HomePage, AboutPage, ServicesPage, ContactPage } from './pages/index';
import MainLayout from './layouts/MainLayout';
const basePath = import.meta.env.VITE_BASE_PATH || '/';

const appRoutes = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
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
            {
              path: ':contactId',
              element: <ContactDisplay />,
            },
          ],
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/services',
          element: <ServicesPage />,
        },
        { path: '*', element: <h1>404 Sorry we couldnt find it</h1> },
      ],
    },
  ],
  { basename: basePath }
);

export default appRoutes;
