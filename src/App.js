import './App.css';
import Weather from "./Weather.js"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <footer>
          <p>This app was designed and coded by Mariana Almeida </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
