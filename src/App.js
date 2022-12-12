import './App.css';
import profile from './instagram.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jose felipe Escobar Software developer
        </p>
        <img className="img" src={profile} alt="profile"/>
        
        <a
          className="App-link"
          href="https://github.com/JoseFelipeEscobar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
