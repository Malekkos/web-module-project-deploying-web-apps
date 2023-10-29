import './App.css';
import Tiles from './components/tiles';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Tile Flipper</h1>
        <h2>Make the tiles orange</h2>
      </div>
      <div className="mainWrapper">
        <Tiles />
      </div>
    </div>
  );
}

export default App;
