import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/header";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div id="todoApp">
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
