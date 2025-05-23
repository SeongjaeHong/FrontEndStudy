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
import EditItemDetail from './pages/EditItemDetail.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ItemDetail from './pages/ItemDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: 'edit', Component: Edit },
      { path: 'edit-detail', Component: EditItemDetail },
      { path: 'product', Component: ItemDetail },
    ],
  },
  { path: '*', Component: NotFound },
]);

const queryClient = new QueryClient();
let container = null;
document.addEventListener('DOMContentLoaded', () => {
  if (!container) {
    container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  }
});

function ErrorPage() {
  const error = useRouteError();
  return <div style={{ color: 'red' }}>에러 발생: {error.message}</div>;
}
