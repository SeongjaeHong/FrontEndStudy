import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router';
import NotFound from './pages/NotFound';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import './index.css';
import Edit from './pages/Edit.jsx';
import ItemDetail from './pages/ItemDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: 'edit', Component: Edit },
      { path: 'detail', Component: ItemDetail },
    ],
  },
  { path: '*', Component: NotFound },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

function ErrorPage() {
  const error = useRouteError();
  return <div style={{ color: 'red' }}>에러 발생: {error.message}</div>;
}
