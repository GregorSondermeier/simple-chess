import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BoardSquare } from './BoardSquare';
import { Piece } from './Piece';

/**
 * @param {Object} props
 * @param {Game} props.game
 * @return {JSX.Element}
 * @constructor
 */
export const Board = ({ game }) => {
  const [[knightX, knightY], setKnightPos] = useState(game.knightPosition);
  useEffect(() => game.observe(setKnightPos), [game]);

  /**
   * @param {number} i
   * @return {JSX.Element}
   */
  const renderSquare = (i) => {
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
        <BoardSquare x={x} y={y} game={game}>
          <Piece isKnight={x === knightX && y === knightY} />
        </BoardSquare>
      </div>
    )
  }

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};

Board.propTypes = {
  game: PropTypes.object,
};
