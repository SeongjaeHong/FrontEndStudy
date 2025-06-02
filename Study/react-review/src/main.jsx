import { createRoot } from 'react-dom/client';
import './index.css';
import AppTheme from './AppTheme';
import AppCounter from './AppCounter';
import ErrorBoundary from './ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <AppCounter />
  </ErrorBoundary>
);
