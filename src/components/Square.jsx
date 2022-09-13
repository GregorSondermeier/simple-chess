import PropTypes from 'prop-types';

/**
 * @param {boolean} isBlack
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
export const Square = ({ isBlack, children }) => {
  const fill = isBlack ? 'black' : 'white';
  const stroke = isBlack ? 'white' : 'black';

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }}
    >
      { children }
    </div>
  )
}

Square.propTypes = {
  isBlack: PropTypes.bool,
  children: PropTypes.element
};
