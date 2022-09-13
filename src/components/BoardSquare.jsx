import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { Square } from './Square';
import { ItemTypes, OverlayTypes } from '../constants';
import { DropOverlay } from './DropOverlay';

/**
 * @param {Object} props
 * @param {number} props.x
 * @param {number} props.y
 * @param {JSX.Element} props.children
 * @param {Game} props.game
 * @return {JSX.Element}
 * @constructor
 */
export const BoardSquare = ({ x, y, children, game }) => {
  const isBlack = (x + y) % 2 === 1;

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => game.canMoveKnight(x, y),
      drop: () => game.moveKnight(x, y),
      collect: (monitor) => ({
        canDrop: !!monitor.canDrop(),
        isOver: !!monitor.isOver(),
      }),
    }),
    [x, y],
  );

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square isBlack={isBlack}>{children}</Square>
      {isOver && !canDrop && <DropOverlay type={OverlayTypes.IllegalMoveHover} />}
      {!isOver && canDrop && <DropOverlay type={OverlayTypes.PossibleMove} />}
      {isOver && canDrop && <DropOverlay type={OverlayTypes.LegalMoveHover} />}
    </div>
  );
};

BoardSquare.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  children: PropTypes.element,
  game: PropTypes.object,
};
