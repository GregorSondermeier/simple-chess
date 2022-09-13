export class Game {
  /**
   * @type {[number, number]}
   */
  knightPosition = [1, 7];

  /**
   * @type {function[]}
   */
  observers = [];

  /**
   * @param {function} newObserver
   * @return {() => void}
   */
  observe(newObserver) {
    this.observers.push(newObserver);
    this.emitChange();

    return () => {
      this.observers = this.observers.filter((observer) => observer !== newObserver)
    };
  };

  /**
   * @param {number} toX
   * @param {number} toY
   * @return {boolean}
   */
  canMoveKnight(toX, toY) {
    const [x, y] = this.knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };

  /**
   * @param {number} toX
   * @param {number} toY
   */
  moveKnight(toX, toY) {
    this.knightPosition = [toX, toY];
    this.emitChange();
  };

  /**
   * @return void
   */
  emitChange() {
    this.observers.forEach((observer) => observer && observer(this.knightPosition));
  };
}
