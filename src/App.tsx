import './App.css';
import {useSelector} from "react-redux"
import Board from './components/Board/Board';
import Heading from './components/Heading/Heading';
import { rootState } from './components/interface';

function App() {
  const board = useSelector((state:rootState) => state.board.board)

  return (
    <div className="App">
      <Heading text='Wordle' type='h1'/>
      <Heading text='Another Wordle Clone' type='subtitle'/>
      <div className="board-container">
        <Board board={board}/>
      </div>
    </div>
  );
}

export default App;
