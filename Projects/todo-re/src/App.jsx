import './App.css';
import Body from './components/Body';
import Header from './components/header';
import { ThemeProvider } from './contexts/ThemeContext';
import FilterProvider from './contexts/Filtercontext';

function App() {
  return (
    <ThemeProvider>
      <div id='todoApp'>
        <FilterProvider>
          <Header />
          <Body />
        </FilterProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
