import logo from './logo.svg';
import './App.css';
import AppTitle from './components/AppTitle';
import SearchOrder from './components/SearchOrder';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <AppTitle appName='Payments Application' find='Find a transaction' create='New transaction'/>
      <SearchOrder/>
      <SearchResult/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
