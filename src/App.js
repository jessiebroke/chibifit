import fitness from './fitness.gif';
import './App.css';
import MyDailyFitness from './components/MyDailyFitness';
import TableComponent from './components/TableComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fitness} alt="logo" />
        <MyDailyFitness />
        <TableComponent />
        <br></br>
        <a
          className="App-link"
          href="https://daddao.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Dads in mind
        </a>
        <p>by <a href="https://www.github.com/jessiebroke">JessieBroke</a></p>
      </header>
    </div>
  );
}

export default App;
