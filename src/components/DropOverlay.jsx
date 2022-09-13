import PropTypes from 'prop-types';
import { OverlayTypes } from '../constants';

/**
 * @param {Object} props
 * @param {string} props.type
 * @return {JSX.Element}
 * @constructor
 */
export const DropOverlay = ({ type }) => {
  /**
   * @param {string} type
   * @return {string}
   */
  const getOverlayColor = (type) => {
     switch (type) {
       case OverlayTypes.IllegalMoveHover:
         return 'red';
       case OverlayTypes.LegalMoveHover:
         return 'green';
       case OverlayTypes.PossibleMove:
         return 'yellow';
       default:
         return 'transparent';
     }
   };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: getOverlayColor(type),
      }}
    />
  );
};

DropOverlay.propTypes = {
  type: PropTypes.string,
};
