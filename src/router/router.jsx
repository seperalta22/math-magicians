import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CalculatorPage from '../pages/CalculatorPage';
import QuotePage from '../pages/QuotePage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Calculator',
    element: <CalculatorPage />,
  },
  {
    path: '/quote',
    element: <QuotePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
