import { useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Game } from './Game';
import { Board } from './components/Board';

/**
 * @return {JSX.Element}
 * @constructor
 */
export const App = () => {
  const game = useMemo(() => new Game(), []);

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div
          style={{
            width: '400px',
            height: '400px',
            margin: '20px',
            borderWidth: '5px',
            borderStyle: 'outset',
          }}
        >
          <Board game={game} />
        </div>
      </DndProvider>
    </div>
  );
};
