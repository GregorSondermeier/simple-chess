import {DragPreviewImage, useDrag} from 'react-dnd';
import {ItemTypes} from '../constants';

/**
 * @return {JSX.Element}
 * @constructor
 */
export const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <>
      <DragPreviewImage
        connect={preview}
        src={'./horse.png'}
        style={{
          width: '40px',
          height: 'auto',
        }}
      />
      <div
        ref={drag}
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: 40,
            fontWeight: 'bold',
          }}
        >
          ♘
        </span>
      </div>
    </>
  );
}
