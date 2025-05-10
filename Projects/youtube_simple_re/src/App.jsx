import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import SearchHeader from './components/searchHeader';
import { Outlet } from 'react-router';

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryclient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
