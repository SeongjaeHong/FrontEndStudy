import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from './pages/NotFound';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import './index.css';
import Edit from './pages/Edit.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'edit', Component: Edit },
    ],
  },
  { path: '*', Component: NotFound },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
