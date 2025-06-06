import { useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

export default function AppCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {count} {count > 10 ? '불' : '얼음'}
      </div>
      <div className='counters'>
        <ErrorBoundary>
          <Counter setTotalCount={setCount} />
        </ErrorBoundary>
        {/* <Counter setTotalCount={setCount} /> */}
      </div>
    </div>
  );
}
