import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CalculatorPage from '../pages/CalculatorPage';
import QuotePage from '../pages/QuotePage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/Calculator',
    element: (
      <Layout>
        <CalculatorPage />
      </Layout>
    ),
  },
  {
    path: '/quote',
    element: (
      <Layout>
        <QuotePage />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
