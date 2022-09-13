import {useDrop} from 'react-dnd';
import {Square} from './Square';
import {ItemTypes} from '../constants';
import {canMoveKnight, moveKnight} from '../Game';
import {DropOverlay} from './DropOverlay';

export const BoardSquare = ({ x, y, children }) => {
  const isBlack = (x + y) % 2 === 1;

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => canMoveKnight(x, y),
      drop: () => moveKnight(x, y),
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
      {isOver && !canDrop && <DropOverlay color="red" />}
      {!isOver && canDrop && <DropOverlay color="yellow" />}
      {isOver && canDrop && <DropOverlay color="green" />}
    </div>
  );
}
