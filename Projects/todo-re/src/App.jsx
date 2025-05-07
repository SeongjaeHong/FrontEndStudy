import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/header';
import { ThemeProvider } from './theme/ThemeContext';
import { todoItems } from './components/TodoItems';

function App() {
  const [todos, setTodos] = useState(todoItems);

  return (
    <ThemeProvider>
      <div id='todoApp'>
        <Header />
        <Body todos={todos} setTodos={setTodos} />
        <Footer setTodos={setTodos} />
      </div>
    </ThemeProvider>
  );
}

export default App;
