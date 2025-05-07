import './App.css';
import Body from './components/Body';
import Header from './components/header';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div id='todoApp'>
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
