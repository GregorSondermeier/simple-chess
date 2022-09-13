let knightPosition = [1, 7];
let observer = null;

const emitChange = () => {
  observer(knightPosition);
};

export const observe = (o) => {
  if (observer) {
    throw new Error('You cannot add multiple observers, currently only one observer is supported.');
  }

  observer = o;
  emitChange();
};

export const canMoveKnight = (toX, toY) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};
