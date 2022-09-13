import { Square } from './Square';
import { Knight } from './Knight';
import PropTypes from 'prop-types';

/**
 * @param {number} i
 * @param {[number, number]} knightPosition
 * @return {JSX.Element}
 */
const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const isBlack = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square isBlack={isBlack}>{piece}</Square>
    </div>
  )
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
  );
};

Board.propTypes = {
  knightPosition: PropTypes.array,
};
