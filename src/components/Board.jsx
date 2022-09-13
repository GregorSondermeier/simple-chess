import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BoardSquare } from './BoardSquare';
import { Knight } from './Knight';

/**
 * @param {number} i
 * @param {[number, number]} knightPosition
 * @return {JSX.Element}
 */
const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div
      key={i}
      style={{
        width: '12.5%',
        height: '12.5%',
      }}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightX, knightY)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, knightX, knightY) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

/**
 * @param {[number, number]} knightPosition
 * @return {JSX.Element}
 * @constructor
 */
export const Board = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '400px',
          height: '400px',
          margin: '20px',
          borderWidth: '5px',
          borderStyle: 'outset',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};

Board.propTypes = {
  knightPosition: PropTypes.array,
};
